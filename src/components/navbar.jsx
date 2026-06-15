import {Link} from "react-router";
import "./navbar.css";

function toggleMenu() {
    let navbar = document.getElementById("top");

    for (let i = 0; i < navbar.children.length; i++) {
        let child = navbar.children[i];

        if (
            child.classList.contains("btn") ||
            child.classList.contains("btn-action") ||
            child.classList.contains("btn-special")
        ) {
            child.classList.toggle("hidden!");
        }
    }
}

export default function Navbar() {
    return (
        <nav id={"top"}>
            <div>
                <Link to="/"><img src={"/cpwlogo.png"} alt={"cpw logo"} width={180} /></Link>
                <Link onClick={toggleMenu} className={"text-right"}>menu</Link>
            </div>

            <Link to="/"><img src={"/cpwlogo.png"} alt={"cpw logo"} width={180} /></Link>
            <Link to={"/"} className="btn">
                <span>Home</span>
            </Link>

            <Link to={"/news"} className="btn">
                <span>News</span>
            </Link>

            <Link to={"/gallery"} className="btn">
                <span>Gallery</span>
            </Link>

            <Link to={"/about"} className="btn">
                <span>About</span>
            </Link>

            <Link to={"/play"} className="btn-special md:ml-auto">
                <span>Play</span>
            </Link>

            <Link to={"https://discord.gg/gnqZfsJa5j"} className="btn-action ">
                <span>Discord</span>
            </Link>
        </nav>
    );
}