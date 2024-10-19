import { type NextRequest, NextResponse } from 'next/server'

export default async function middleware(request: NextRequest) {
	const session = request.cookies.get('teacoder_session')?.value

	const isAuthPage = request.url.includes('/auth')
	const isAdminPage = request.url.includes('/manage')

	if (isAuthPage) {
		if (session) {
			return NextResponse.redirect(new URL('/account', request.url))
		}
		return NextResponse.next()
	}

	if (!session) {
		if (isAdminPage) {
			return NextResponse.rewrite(new URL('/404', request.url))
		}
		return NextResponse.redirect(new URL('/auth/sign-in', request.url))
	}

	// try {
	// 	const { payload }: { payload: ITokenInside } = await jwtVerify(
	// 		accessToken as string,
	// 		new TextEncoder().encode(`${process.env.JWT_SECRET}`)
	// 	)

	// 	if (payload?.role === EnumRole.Admin) return NextResponse.next()

	// 	if (isAdminPage) {
	// 		console.log(
	// 			'Попытка несанкционированного доступа в админ-панель: ',
	// 			JSON.stringify(payload)
	// 		)
	// 		return NextResponse.rewrite(new URL('/404', request.url))
	// 	}

	// 	return NextResponse.next()
	// } catch (error) {
	// 	if (
	// 		error instanceof Error &&
	// 		error.message.includes('exp claim timestamp check failed')
	// 	) {
	// 		console.log('Токен истек')
	// 		return NextResponse.redirect(new URL(PUBLIC_URL.auth(), request.url))
	// 	}
	// 	// console.log('Ошибка при верификации токена: ', error)
	// 	// return NextResponse.redirect(new URL(PUBLIC_URL.auth(), request.url))
	// }
}

export const config = {
	matcher: [
		'/manage/:path*',
		'/account/:path*',
		'/courses/:path*/chapters/:path*',
		'/auth/:path*'
	]
}
