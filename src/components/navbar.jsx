import {Link} from "react-router";
import "./navbar.css";

export default function Navbar() {
    return (
        <nav>
            <Link to="/"><img src={"favicon.svg"} alt={"cpw logo"} /></Link>
            <Link to={"/"} className="btn">
                <span>Home</span>
            </Link>

            <Link to={"/features"} className="btn">
                <span>Features</span>
            </Link>

            <Link to={"/news"} className="btn">
                <span>News</span>
            </Link>

            <Link to={"/gallery"} className="btn">
                <span>Gallery</span>
            </Link>

            <Link to={"https://discord.gg/gnqZfsJa5j"} className="btn-action ml-auto">
                <span>Discord</span>
            </Link>
        </nav>
    );
}