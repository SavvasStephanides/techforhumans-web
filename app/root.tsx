import { LinksFunction } from "@remix-run/node";
import { Links, LiveReload, Outlet } from "@remix-run/react";

import Header from "./components/header";
import Footer from "./components/footer";

import globalStylesUrl from "~/styles/global.css"
import headerStylesUrl from "~/styles/header.css"
import articleStylesUrl from "~/styles/article.css"
import footerStylesUrl from "~/styles/footer.css"

export const links: LinksFunction = () => [
  {rel: "stylesheet", href: globalStylesUrl},
  {rel: "stylesheet", href: headerStylesUrl},
  {rel: "stylesheet", href: articleStylesUrl},
  {rel: "stylesheet", href: footerStylesUrl},
]

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        />
        <title>Tech for Humans</title>
        <Links/>
      </head>
      <body>
        <div id="app">
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
