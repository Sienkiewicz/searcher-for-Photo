import Head from 'next/head'
import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  title?: string
}

export function MainLayout({ children, title = 'foto finder' }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name='keywords'
          content='photo finder, landing page, free photo'
        />
        <meta
          name='description'
          content='web page for everyone, who search for free photo in good resolution'
        />
        <meta charSet='utf-8' />
      </Head>
      <main>{children}</main>
    </>
  )
}
