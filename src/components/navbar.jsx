import {Link} from "react-router";
import "./navbar.css";

export default function Navbar() {
    return (
        <nav>
            <Link to="/"><img src={"cpwlogo.png"} alt={"cpw logo"} width={180} /></Link>
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

            <Link to={"https://discord.gg/gnqZfsJa5j"} className="btn-action ml-auto">
                <span>Discord</span>
            </Link>
        </nav>
    );
}