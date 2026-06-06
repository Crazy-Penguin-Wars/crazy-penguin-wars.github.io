import {Link} from "react-router";
import './footer.css';

// TODO: MOVE CSS TO A SEPERATE FILE
export default function Footer() {
    return (
        <footer>
            <div className="flex flex-col gap-8">
                <div className="flex flex-row gap-12 w-full">
                    <div className={"flex flex-col bg-[#02ba47] px-4 py-2 rounded-xl border-t-4 border-green-400 w-1/5"}>
                        <h5>Community:</h5>
                        <ul>
                            <li><Link to={"https://discord.gg/gnqZfsJa5j"}>Discord</Link></li>
                            <li><Link to={"/"}>YouTube</Link></li>
                            <li><Link to={"/"}>Facebook</Link></li>
                        </ul>
                    </div>

                    <div className={"flex flex-col bg-[#02ba47] px-4 py-2 rounded-xl border-t-4 border-green-400 w-1/5"}>
                        <h5>About:</h5>
                        <ul>
                            <li><Link to={"/about"}>About the project</Link></li>
                            <li><Link to={"/about/team"}>Meet the team</Link></li>
                            <li><Link to={"/about/faq"}>F.A.Q</Link></li>
                        </ul>
                    </div>

                    <div className={"flex flex-col bg-[#02ba47] px-4 py-2 rounded-xl border-t-4 border-green-400 w-1/5"}>
                        <h5>External links:</h5>
                        <ul>
                            <li><Link to={"https://github.com/Crazy-Penguin-Wars"}>GitHub</Link></li>
                        </ul>
                    </div>

                    <div className={"flex flex-col bg-[#02ba47] px-4 py-2 rounded-xl border-t-4 border-green-400"}>
                        <h5>Contact:</h5>
                        <ul>
                            <li><Link to={"mailto:mail@crazypenguinwars.app"}>Email - mail@crazypenguinwars.app</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-row gap-4">
                    <img src={"cpwlogo.png"} alt={"cpw logo"} width={140} className="h-min" />
                    <div className="flex flex-col justify-between">
                        <p className={"text-base!"}>© 2026 CrazyPenguinWars</p>
                        <p className={"text-base!"}>This is a fan-made revival project, we are not affiliated to Rockyou or Digital Chocolate in any way. All rights belong to their respective owners.</p>
                        <p className={"text-base!"}>Website created and designed by: <Link to={"https://cnnn666.mandarynki.eu"} className={"text-yellow-400 hover:text-yellow-300"}>Dozy Pleng</Link> · <Link to={"https://github.com/cnnn666v2"} className={"text-green-400 hover:text-green-300"}>GitHub</Link> · <Link to={"https://bsky.app/profile/cnnn666.mandarynki.eu"} className={"text-blue-300 hover:text-cyan-300"}>BlueSky</Link> · <Link to={"https://www.youtube.com/@dozypleng"} className={"text-red-300 hover:text-red-200"}>YouTube</Link></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}