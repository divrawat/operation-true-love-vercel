import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="monetag" content="6c604fa49cc658a0a65281a4faa3d32b" />
        <meta name="google-site-verification" content="6-XtSzr71_G64E3c4EdsVm7VnQEg2oKk7U9CASyxZKA" />
        {/* <Script
          id="monetag-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(s,u,z,p){s.src=u,s.setAttribute('data-zone',z),p.appendChild(s);})(document.createElement('script'),'https://zovidree.com/tag.min.js',7726018,document.body||document.documentElement)`,
          }}
        /> */}


      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
