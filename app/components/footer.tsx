import { Link } from "@remix-run/react";

export default function Footer(){
    return (
       <footer>
        2023 &copy; Tech for Humans. A project created by <Link to={"https://savvas.me/links"}>Savvas Stephanides</Link>
       </footer>
    )
}