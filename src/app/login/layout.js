import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function LoginLayout({ children }) {
  return (
    <html className={roboto.className} lang="en">
      <body>{children}</body>
    </html>
  )
}
