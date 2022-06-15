import type { NextPage } from 'next'
import type { ReactElement } from 'react'
import { Layout } from '../components/layout'
import { Main } from './main'
import { Welcome } from './welcome'

export default function Home() {
  return (
    // <Welcome />
    <Main />
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
