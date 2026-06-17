import {Link} from "react-router";
import "./about.css";

export default function About() {
    return (
        <main id={"container"} className="items-stretch! mt-0!">
            <header className={"banner w-full bg-[url(/about/banner.jpg)]"}>
                <h1>About the project</h1>
                <div className={"about"}>
                    <Link to="/about" className={"btn-action active"}><span>About CPW</span></Link>
                    <Link to="/about/team" className={"btn-action"}><span>Meet the team</span></Link>
                    <Link to="/about/faq" className={"btn-action"}><span>F.A.Q</span></Link>
                </div>
            </header>

            <article className={"blog-page"}>
                <aside>
                    <div className={"sticky top-4"}>
                        <h3>Table of contents</h3>
                        <ul>
                            <li><a href={"#game"}>About the game</a></li>
                            <li><a href={"#revival"}>About the revival</a></li>
                            <li><a href={"#scratch"}>Scratch edition</a></li>
                        </ul>
                    </div>
                    <p className={"mt-auto text-center font-extrabold"}>○ ○ ○</p>
                </aside>

                <div className={"blog-content"}>
                    <section id={"game"}>
                        <h2>About the game</h2>
                        <hr className={"my-4 w-full border-2 rounded-xl"} />
                        <p>Crazy Penguin Wars was a worms-like game built with Adobe Flash (like tons of other games from that era!). It was developed by Digital Chocolate, and got shut down few years after release.<br /><br />
                        The game offered tons of various cosmetic features for the players, as well as many different weapons. You can either fight your friends or queue in matchmaking for random opponents to play against</p>
                    </section>

                    <section id={"revival"}>
                        <h2>About the revival</h2>
                        <hr className={"my-4 w-full border-2 rounded-xl"} />
                        <p>Since the original game got shut down, we're trying to recreate the game, with the server being our top priority right now. </p>
                    </section>

                    <section id={"scratch"}>
                        <h2>Scratch edition</h2>
                        <hr className={"my-4 w-full border-2 rounded-xl"} />
                        <p>This version of the game is a recreation of it made in Scratch. The game offers little selection of cosmetics and weapons, as well as maps, created by Kebabo and Michielvde. Game offers custom matches and battles with bots.<br /><br />
                            It has its own <Link to={"https://discord.gg/Nqnfm5qKRp"}>discord server</Link> and it's playable at <Link to={"https://kebabo.itch.io/cpws"}>kebabo.itch.io</Link> </p>
                    </section>
                </div>
            </article>
        </main>
    );
}