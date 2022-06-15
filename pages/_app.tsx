import { RecoilRoot } from "recoil";
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout ) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
