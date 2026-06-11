import {Link} from "react-router";

export default function Play() {
    return (
        <main id={"container"}>
            <header className={"text-center"}>
                <h1>Play <span className={"text-green-400"}>Crazy</span> <span className={"text-white text-stroke-black text-stroke-4"}>Penguin</span> <span className={"text-orange-400"}>Wars</span> - <span className={"text-blue-400"}>Revived</span></h1>
                <h3>You have 2 different ways to play it:</h3>
            </header>

            <div className={"flex flex-row w-full justify-between mt-12 px-32 h-full"}>
                <section className={"flex flex-col items-center w-1/2 gap-2 bg-purple-500 border-6 border-purple-700 border-t-purple-400 border-r-purple-400 mx-8 my-6 rounded-xl py-4 text-white"}>
                    <h2>Download our launcher</h2>
                    <Link to="https://github.com/Crazy-Penguin-Wars/cpw-launcher/releases/download/1.0.0/Crazy.Penguin.Wars.1_0_0.zip" className={"btn-action text-xl mt-auto"}><span>DOWNLOAD</span></Link>
                    <p>Latest release: 1.0.0 · <Link to={"https://github.com/Crazy-Penguin-Wars/cpw-launcher/releases/"} className={"text-cyan-400! hover:text-cyan-200!"}>version history</Link></p>
                </section>

                <div className={"border-4 rounded-full self-stretch"}></div>

                <section className={"flex flex-col items-center w-1/2 bg-yellow-500 border-6 border-yellow-600 border-t-yellow-300 border-r-yellow-300 mx-8 my-6 rounded-xl py-4 text-white"}>
                    <h2>Play in browser</h2>
                    <h4>Crazy Penguin Wars: Scratch Edition</h4>
                    <Link to="https://kebabo.itch.io/cpws" className={"btn-action text-xl mt-4"}><span>PLAY <span className={"text-base mt-auto ml-1"}>(itch.io)</span></span></Link>
                </section>
            </div>
        </main>
    );
}