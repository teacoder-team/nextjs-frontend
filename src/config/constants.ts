export const IS_SERVER = typeof window === 'undefined'
export const IS_CLIENT = typeof window !== 'undefined'
export const IS_PRODUCTION = process.env.APPLICATION_ENV === 'production'

export const APP_URL = process.env.APPLICATION_URL as string
export const SERVER_URL = process.env.SERVER_URL as string
