import { Inter } from "next/font/google";
import "./globals.css";
import CustomNavbar from "@/components/CustomNavbar";
import { NextUIProvider } from "@nextui-org/react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Makers Tech",
  description: "Makers Tech website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider >
          <CustomNavbar />
          {children}
        </NextUIProvider>
        <Script
            id="voiceflow-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(d, t) {
                  var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
                  v.onload = function() {
                    window.voiceflow.chat.load({
                      verify: { projectID: '66a5baf3256cb7780dd4ef6b' },
                      url: 'https://general-runtime.voiceflow.com',
                      versionID: 'production'
                    });
                  }
                  v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
              })(document, 'script');
              `,
            }}
          />
      </body>
    </html>
  );
}
