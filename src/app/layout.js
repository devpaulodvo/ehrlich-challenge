'use client'
import './globals.css'
import { Roboto } from 'next/font/google'
import { SessionProvider} from "next-auth/react";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({ children, session }) {
  return (
    <html className={roboto.className} lang="en">
      <body>
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
