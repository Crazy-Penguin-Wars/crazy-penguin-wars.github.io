import {Link} from "react-router";
import "./css/play.css";

export default function Play() {
    return (
        <main id={"container"}>
            <header className={"text-center"}>
                <h1>PLAY<br /> <span className={"text-green-400"}>Crazy</span> <span className={"text-white text-stroke-black text-stroke-4"}>Penguin</span> <span className={"text-orange-400"}>Wars</span> - <span className={"text-blue-400"}>Revived</span></h1>
            </header>

            <div className={"download-element"}>
                <h2>Download our launcher</h2>
                <div>
                    <img src={"/play/menu.png"} width={512} alt={"game screenshot"} className={"border-2 border-blue-600 my-2 rounded-xl"} />
                    <img src={"/play/gameplay.png"} width={512} alt={"game screenshot"} className={"border-2 border-blue-600 my-2 rounded-xl"} />
                </div>
                <Link to="https://github.com/Crazy-Penguin-Wars/cpw-launcher/releases/download/1.0.0/Crazy.Penguin.Wars.1_0_0.zip" className={"btn-action text-xl mt-auto"}><span>DOWNLOAD <span className={"mt-auto ml-1 text-sm"}>(windows only)</span></span></Link>
                <p>Latest release: 1.0.0 · <Link to={"https://github.com/Crazy-Penguin-Wars/cpw-launcher/releases/"} className={"text-blue-400! hover:text-blue-600! transition-colors ease-in-out"}>version history</Link></p>
            </div>

            <div className={"border-4 rounded-full self-stretch hidden"}></div>
        </main>
    );
}