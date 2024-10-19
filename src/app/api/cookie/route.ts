import { type NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
	try {
		const cookie = request.cookies.get('teacoder_session')?.value

		return NextResponse.json({
			session: cookie
		})
	} catch (error: any) {
		console.log(error.message)
		return new NextResponse('Internal Server Error', { status: 500 })
	}
}
