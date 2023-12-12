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
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2194018182042050"
     crossorigin="anonymous"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=JetBrains+Mono&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <div id="app" className="app-layout">
          <Header />
          <section id="feedback" style={{backgroundColor: "#f3f3f3", padding: "30px", borderRadius: "15px"}}>
            <h2>🔥 Feedback</h2>
            <div style={{marginTop: "15px", lineHeight: "1.5", fontSize: "18px"}}>This site is currently under construction. If you'd like to leave feedback, you can use our <a href="https://forms.gle/sCAFjb3vTodkthiSA">feedback form</a> to do so! Thank you!</div>
          </section>
          <main>
            <Outlet />
          </main>
          <aside>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2194018182042050"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-2194018182042050"
     data-ad-slot="4009889000"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
          </aside>
          <Footer />
        </div>
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
