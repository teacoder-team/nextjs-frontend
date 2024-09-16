export type TypeSearchParams = {
	[key: string]:
		| string
		| number
		| boolean
		| undefined
		| Array<string | number | boolean | undefined>
}

export interface RequestOptions extends RequestInit {
	headers?: Record<string, string>
	params?: TypeSearchParams
}

export type TypeFetchRequestConfig<Params = undefined> =
	Params extends undefined
		? { config?: RequestOptions }
		: { params: Params; config?: RequestOptions }
