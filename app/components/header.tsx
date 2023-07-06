import { Link } from "@remix-run/react";

export default function Header(){
    return (
        <header>
            <div className="site-name">
                <Link to={"/"}>Tech for Humans</Link>
            </div>
        </header>
    )
}