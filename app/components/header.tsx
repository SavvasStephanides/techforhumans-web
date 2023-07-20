import { Link } from "@remix-run/react";

export default function Header(){
    return (
        <header>
            <Link to={"/"}>
                <img src="/hand.png" alt="" className="logo"/>
                <div className="site-name">
                    Tech for Humans
                </div>
            </Link>
        </header>
    )
}