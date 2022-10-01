import { NextUIProvider } from "@nextui-org/react";

import Defiswap from "./defiswap";
function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
      <Defiswap />
    </NextUIProvider>
  );
}

export default MyApp;
