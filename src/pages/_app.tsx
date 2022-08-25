import type { ReactElement } from "react";
import { RecoilRoot } from "recoil";
import type { AppProps } from "next/app";
import GlobalStyle from "src/styles/global-style";

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
