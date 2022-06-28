import { RecoilRoot } from "recoil";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import type { ReactElement } from "react";

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
