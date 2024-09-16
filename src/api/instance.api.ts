import { SERVER_URL } from '@/config/constants'

import { FetchClient } from '@/utils/fetch/fetch-client'

export const api = new FetchClient({
	baseUrl: SERVER_URL,
	options: {
		credentials: 'include'
	}
})
