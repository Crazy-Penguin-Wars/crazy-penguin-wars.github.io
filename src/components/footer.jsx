import {Link} from "react-router";

// TODO: MOVE CSS TO A SEPERATE FILE
export default function Footer() {
    return (
        <footer className={"flex flex-col items-start p-4  bg-linear-to-t from-blue-500 to-blue-700 border-t-6 border-blue-900 text-white gap-8"}>
            <div className="flex flex-col gap-8">
                <div className="flex flex-row gap-12 w-full">
                    <div className={"flex flex-col bg-[#02ba47] px-4 py-2 rounded-xl border-t-4 border-green-300 w-1/5"}>
                        <h5>Community:</h5>
                        <ul>
                            <li><Link to={"/"}>Discord</Link></li>
                            <li><Link to={"/"}>YouTube</Link></li>
                            <li><Link to={"/"}>Facebook</Link></li>
                        </ul>
                    </div>

                    <div className={"flex flex-col bg-[#02ba47] px-4 py-2 rounded-xl border-t-4 border-green-300 w-1/5"}>
                        <h5>About:</h5>
                        <ul>
                            <li><Link to={"/"}>About the project</Link></li>
                            <li><Link to={"/"}>Meet the team</Link></li>
                            <li><Link to={"/"}>F.A.Q</Link></li>
                        </ul>
                    </div>

                    <div className={"flex flex-col bg-[#02ba47] px-4 py-2 rounded-xl border-t-4 border-green-300 w-1/5"}>
                        <h5>External links:</h5>
                        <ul>
                            <li><Link to={"/"}>GitHub</Link></li>
                        </ul>
                    </div>

                    <div className={"flex flex-col bg-[#02ba47] px-4 py-2 rounded-xl border-t-4 border-green-300"}>
                        <h5>Contact:</h5>
                        <ul>
                            <li>Email - support@example.com</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-row gap-4">
                    <img src={"cpwlogo.png"} alt={"cpw logo"} width={140} className="h-min" />
                    <div className="flex flex-col justify-between">
                        <p className={"text-base!"}>© 2026 CrazyPenguinWars</p>
                        <p className={"text-base!"}>This is a fan-made revival project, we are not affiliated to Rockyou or Digital Chocolate in any way. All rights belong to their respective owners.</p>
                        <p className={"text-base!"}>Website created and designed by: <span className={"text-yellow-400"}>Dozy Pleng</span> · <Link to={"github.com"} className={"text-green-400"}>GitHub</Link> · <Link to={"github.com"} className={"text-cyan-300"}>BlueSky</Link> · <Link to={"github.com"} className={"text-red-300"}>YouTube</Link></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}