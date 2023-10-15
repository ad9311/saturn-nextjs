import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import SessionProvider from '@/app/session/SessionProvider';
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Saturn',
  description: 'Personal app',
}

async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  )
}

export default RootLayout;
