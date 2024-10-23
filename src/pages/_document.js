import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script defer type="text/javascript" src="https://prod-au-druid-cdn.azureedge.net/v2/druid_webchat_v2_load.js?botId=132ef8ac-0b1d-4663-3182-08dcf19876d0&amp;baseUrl=https%3A%2F%2Fdruidapi.au.druidplatform.com">
        </script>
      </body>
    </Html>
  );
}
