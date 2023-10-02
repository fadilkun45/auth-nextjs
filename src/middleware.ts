import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import Cookies from 'js-cookie'
export async function middleware(request: NextRequest) {
    if (request.url.includes('/dashboard')) {
        const cookie =  Cookies.get('refreshtoken')
            if (cookie) {
                console.log("p2")
                return NextResponse.next()
            }

            const loginUrl = new URL('/login', request.url)
            loginUrl.searchParams.set('from', request.nextUrl.pathname)

            return NextResponse.redirect(loginUrl)
    }
}
