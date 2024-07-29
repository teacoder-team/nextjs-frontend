'use client'

import * as LabelPrimitive from '@radix-ui/react-label'
import { Slot } from '@radix-ui/react-slot'
import {
	ComponentPropsWithoutRef,
	ElementRef,
	HTMLAttributes,
	createContext,
	forwardRef,
	useContext,
	useId
} from 'react'
import {
	Controller,
	ControllerProps,
	FieldPath,
	FieldValues,
	FormProvider,
	useFormContext
} from 'react-hook-form'

import { cn } from '@/utils/clsx'

import { Label } from '../label/Label'

import styles from './Form.module.scss'

/**
 * Компонент Form предоставляет контекст для управления формами
 * с использованием библиотеки react-hook-form. Он позволяет
 * легко интегрировать валидацию и управление состоянием формы.
 */
const Form = FormProvider

// Контекст для поля формы
type FormFieldContextValue<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
	name: TName
}

const FormFieldContext = createContext<FormFieldContextValue>(
	{} as FormFieldContextValue
)

/**
 * Компонент FormField оборачивает контроллер поля формы
 * и предоставляет контекст для его состояния.
 *
 * @param {ControllerProps<TFieldValues, TName>} props - Свойства контроллера.
 * @returns {JSX.Element} Элемент контроллера.
 */
const FormField = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
	...props
}: ControllerProps<TFieldValues, TName>) => {
	return (
		<FormFieldContext.Provider value={{ name: props.name }}>
			<Controller {...props} />
		</FormFieldContext.Provider>
	)
}

/**
 * Хук useFormField предоставляет доступ к состоянию поля формы
 * и его контексту. Он используется для получения информации
 * о состоянии поля и его идентификаторах.
 *
 * @returns {Object} Объект с информацией о поле формы.
 */
const useFormField = () => {
	const fieldContext = useContext(FormFieldContext)
	const itemContext = useContext(FormItemContext)
	const { getFieldState, formState } = useFormContext()

	const fieldState = getFieldState(fieldContext.name, formState)

	if (!fieldContext) {
		throw new Error('useFormField should be used within <FormField>')
	}

	const { id } = itemContext

	return {
		id,
		name: fieldContext.name,
		formItemId: `${id}-form-item`,
		formDescriptionId: `${id}-form-item-description`,
		formMessageId: `${id}-form-item-message`,
		...fieldState
	}
}

// Контекст для элемента формы
type FormItemContextValue = {
	id: string
}

const FormItemContext = createContext<FormItemContextValue>(
	{} as FormItemContextValue
)

/**
 * Компонент FormItem представляет собой контейнер для элемента формы.
 * Он генерирует уникальный идентификатор для каждого элемента формы.
 *
 * @param {HTMLAttributes<HTMLDivElement>} props - Свойства контейнера.
 * @returns {JSX.Element} Элемент div для элемента формы.
 */
const FormItem = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => {
		const id = useId()

		return (
			<FormItemContext.Provider value={{ id }}>
				<div ref={ref} className={cn(styles.item, className)} {...props} />
			</FormItemContext.Provider>
		)
	}
)
FormItem.displayName = 'FormItem'

/**
 * Компонент FormLabel отображает метку для элемента формы.
 * Он использует контекст для получения информации об ошибках.
 *
 * @param {ComponentPropsWithoutRef<typeof LabelPrimitive.Root>} props - Свойства метки.
 * @returns {JSX.Element} Элемент метки.
 */
const FormLabel = forwardRef<
	ElementRef<typeof LabelPrimitive.Root>,
	ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
	const { error, formItemId } = useFormField()

	return (
		<Label
			ref={ref}
			className={cn(error && styles.error, className)}
			htmlFor={formItemId}
			{...props}
		/>
	)
})
FormLabel.displayName = 'FormLabel'

/**
 * Компонент FormControl представляет элемент управления формы.
 * Он связывает элемент управления с его состоянием и идентификаторами.
 *
 * @param {ComponentPropsWithoutRef<typeof Slot>} props - Свойства элемента управления.
 * @returns {JSX.Element} Элемент управления формы.
 */
const FormControl = forwardRef<
	ElementRef<typeof Slot>,
	ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
	const { error, formItemId, formDescriptionId, formMessageId } =
		useFormField()

	return (
		<Slot
			ref={ref}
			id={formItemId}
			aria-describedby={
				!error
					? `${formDescriptionId}`
					: `${formDescriptionId} ${formMessageId}`
			}
			aria-invalid={!!error}
			{...props}
		/>
	)
})
FormControl.displayName = 'FormControl'

/**
 * Компонент FormDescription отображает описание элемента формы.
 *
 * @param {HTMLAttributes<HTMLParagraphElement>} props - Свойства описания.
 * @returns {JSX.Element} Элемент описания.
 */
const FormDescription = forwardRef<
	HTMLParagraphElement,
	HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
	const { formDescriptionId } = useFormField()

	return (
		<p
			ref={ref}
			id={formDescriptionId}
			className={cn(styles.description, className)}
			{...props}
		/>
	)
})
FormDescription.displayName = 'FormDescription'

/**
 * Компонент FormMessage отображает сообщение об ошибке или
 * информацию о состоянии поля формы.
 *
 * @param {HTMLAttributes<HTMLParagraphElement>} props - Свойства сообщения.
 * @returns {JSX.Element | null} Элемент сообщения или null, если нет содержимого.
 */
const FormMessage = forwardRef<
	HTMLParagraphElement,
	HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
	const { error, formMessageId } = useFormField()
	const body = error ? String(error?.message) : children

	if (!body) {
		return null
	}

	return (
		<p
			ref={ref}
			id={formMessageId}
			className={cn(styles.message, className)}
			{...props}
		>
			{body}
		</p>
	)
})
FormMessage.displayName = 'FormMessage'

export {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	useFormField
}
