import * as React from "react";

import { NextUIProvider } from "@nextui-org/react";
import { I18nProvider } from "context/i18n";

export default function App({ Component, pageProps }) {
  return (
    <I18nProvider>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </I18nProvider>
  );
}
