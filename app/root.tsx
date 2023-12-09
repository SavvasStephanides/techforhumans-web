import { LinksFunction } from "@remix-run/node";
import { Links, LiveReload, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

import Header from "./components/header";
import Footer from "./components/footer";

import globalStylesUrl from "~/styles/global.css"
import headerStylesUrl from "~/styles/header.css"
import articleStylesUrl from "~/styles/article.css"
import footerStylesUrl from "~/styles/footer.css"
import hljsStylesUrl from "~/styles/highlight.css"
import postListStyleUrl from "~/styles/post-list.css"

export const links: LinksFunction = () => [
  {rel: "stylesheet", href: globalStylesUrl},
  {rel: "stylesheet", href: headerStylesUrl},
  {rel: "stylesheet", href: articleStylesUrl},
  {rel: "stylesheet", href: footerStylesUrl},
  {rel: "stylesheet", href: hljsStylesUrl},
  {rel: "stylesheet", href: postListStyleUrl}
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=JetBrains+Mono&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <div id="app" className="app-layout">
          <Header />
          <main>
            <Outlet />
          </main>
          <aside>Aside goes here</aside>
          <Footer />
        </div>
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
