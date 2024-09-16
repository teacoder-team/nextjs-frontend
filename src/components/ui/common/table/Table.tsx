import {
	HTMLAttributes,
	TdHTMLAttributes,
	ThHTMLAttributes,
	forwardRef
} from 'react'

import { cn } from '@/utils/clsx'

import styles from './Table.module.scss'

/**
 * Компонент Table представляет собой обертку для HTML-таблицы,
 * обеспечивая стилизацию и удобство использования. Включает в себя
 * подкомпоненты для заголовка, тела, подвала и ячеек таблицы.
 *
 * @returns {JSX.Element} Элемент таблицы.
 */
const Table = forwardRef<HTMLTableElement, HTMLAttributes<HTMLTableElement>>(
	({ className, ...props }, ref) => (
		<div className={styles.table_wrapper}>
			<table ref={ref} className={cn(className)} {...props} />
		</div>
	)
)
Table.displayName = 'Table'

/**
 * Компонент TableHeader представляет собой заголовок таблицы.
 *
 * @returns {JSX.Element} Элемент заголовка таблицы.
 */
const TableHeader = forwardRef<
	HTMLTableSectionElement,
	HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<thead ref={ref} className={cn('[&_tr]:border-b', className)} {...props} />
))
TableHeader.displayName = 'TableHeader'

/**
 * Компонент TableBody представляет собой тело таблицы.
 *
 * @returns {JSX.Element} Элемент тела таблицы.
 */
const TableBody = forwardRef<
	HTMLTableSectionElement,
	HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<tbody
		ref={ref}
		className={cn('[&_tr:last-child]:border-0', className)}
		{...props}
	/>
))
TableBody.displayName = 'TableBody'

/**
 * Компонент TableFooter представляет собой подвал таблицы.
 *
 * @returns {JSX.Element} Элемент подвала таблицы.
 */
const TableFooter = forwardRef<
	HTMLTableSectionElement,
	HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<tfoot
		ref={ref}
		className={cn(
			'border-t bg-muted/50 font-medium [&>tr]:last:border-b-0',
			className
		)}
		{...props}
	/>
))
TableFooter.displayName = 'TableFooter'

/**
 * Компонент TableRow представляет собой строку таблицы.
 *
 * @returns {JSX.Element} Элемент строки таблицы.
 */
const TableRow = forwardRef<
	HTMLTableRowElement,
	HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
	<tr
		ref={ref}
		className={cn(
			'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
			className
		)}
		{...props}
	/>
))
TableRow.displayName = 'TableRow'

/**
 * Компонент TableHead представляет собой заголовок ячейки таблицы.
 *
 * @returns {JSX.Element} Элемент заголовка ячейки.
 */
const TableHead = forwardRef<
	HTMLTableCellElement,
	ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
	<th
		ref={ref}
		className={cn(
			'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
			className
		)}
		{...props}
	/>
))
TableHead.displayName = 'TableHead'

/**
 * Компонент TableCell представляет собой ячейку таблицы.
 *
 * @returns {JSX.Element} Элемент ячейки таблицы.
 */
const TableCell = forwardRef<
	HTMLTableCellElement,
	TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
	<td
		ref={ref}
		className={cn(
			'p-4 align-middle [&:has([role=checkbox])]:pr-0',
			className
		)}
		{...props}
	/>
))
TableCell.displayName = 'TableCell'

/**
 * Компонент TableCaption представляет собой подпись таблицы.
 *
 * @returns {JSX.Element} Элемент подписи таблицы.
 */
const TableCaption = forwardRef<
	HTMLTableCaptionElement,
	HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
	<caption
		ref={ref}
		className={cn('mt-4 text-sm text-muted-foreground', className)}
		{...props}
	/>
))
TableCaption.displayName = 'TableCaption'

export {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow
}
