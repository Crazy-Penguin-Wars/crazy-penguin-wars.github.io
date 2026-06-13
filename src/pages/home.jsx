import {Link} from "react-router";
import "./css/home.css";

export default function Home() {
    return (
        <main id={"container"} className="items-stretch! mt-0!">
            <header className={"banner bg-[url(/homepage/banner.jpg)]"}>
                <h2><span className={"text-green-400"}>Crazy</span> <span className={"text-white text-stroke-black text-stroke-4"}>Penguin</span> <span className={"text-orange-400"}>Wars</span> - <span className={"text-blue-400"}>Revived</span></h2>
                <h6>The original Facebook game brought back to life!</h6>
                <div className={"button-row"}>
                    <Link to={"/play"} className="btn-special">
                        <span>PLAY NOW</span>
                    </Link>
                    <Link to={"https://discord.gg/gnqZfsJa5j"} className="btn-action">
                        <span>JOIN DISCORD</span>
                    </Link>
                </div>
            </header>

            <hr className={"my-4 w-1/4 self-center border-2 rounded-xl"} />

            <section className={"primary-sec text-stroke-1 text-stroke-black"}>
                <div className={"main-content"}>
                    <div>
                        <div>
                            <h2>Original Digital Chocolate game!</h2>
                            <p>CrazyPenguinWars is another game from Digital Chocolate from the "Crazy Penguin" series! The game was a browser-based, free-to-play worms-like game enjoyed by thousands online. The servers unfortunately got shut down with no option for players to play the game offline, so after almost a decade since the game's shut down we're reviving it!</p>
                        </div>
                        <img src={"/homepage/experience.jpg"} width={512} alt={"article preview image"} className={"border-2 border-blue-600 my-2 rounded-xl"} />
                    </div>

                    <hr className={"w-1/4 self-center border-2 rounded-xl"} />

                    <div>
                        <img src={"/homepage/revival.png"} width={512}  alt={"article preview image"} className={"border-2 border-blue-600 my-2 rounded-xl"} />
                        <div>
                            <h2>Revival progress</h2>
                            <p>While we are constantly working on making the game playable, we are still lacking tons of features. Right now it's possible to play versus bots, but in the future we will want to have things like proper matchmaking, customization, private lobbies, etc.<br /><br />
                                That's the reason as to why we're looking for people like YOU to help us revive the game!</p>
                        </div>
                    </div>

                    <hr className={"w-1/4 self-center border-2 rounded-xl"} />

                    <div>
                        <div>
                            <h2>Dedicated community of fans</h2>
                            <p>We're people from all around the world wanting to experience the game one more time. We will not let this, or any other forgotten game just die! We support many other similiar projects, focused on bringing back different games from different eras and making sure they will be playable in the future as well!</p>
                        </div>
                        <img src={"/homepage/community.jpg"} width={512} alt={"article preview image"} className={"border-2 border-blue-600 my-2 rounded-xl"} />
                    </div>
                </div>

                <aside>
                    <h2>Our discord server:</h2>
                    <iframe src="https://discord.com/widget?id=837664482670411816&theme=dark" width="350" height="500"
                            allowTransparency="true" frameBorder="0"
                            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                </aside>
            </section>

            <hr className={"my-4 w-1/4 self-center border-2 rounded-xl"}/>

            <section className={"secondary-sec"}>
                <div className={"bg-red-600 border-red-500 border-l-red-800 border-b-red-800"}>
                    <h4>Fight your friends!</h4>
                    <p className={"-mt-6"}>(matchmaking included)</p>
                    <img src={"/homepage/battle.png"} alt="Battle" />
                    <hr className={"w-3/4 self-center border-4 rounded-xl border-t-red-400 border-b-red-800 border-l-red-800 border-r-red-400"} />
                    <p>Got a beef that needs to be settled? Take out your friend for a 1v1 and see who's right!</p>
                </div>

                <div className={"bg-green-700 border-green-600 border-l-green-800 border-b-green-800"}>
                    <h4>Crazy weapons!</h4>
                    <img src={"/homepage/weapon.png"} alt="Battle" />
                    <hr className={"w-3/4 self-center border-4 rounded-xl border-t-green-600 border-b-green-900 border-l-green-900 border-r-green-600"} />
                    <p>Tired of running with just an AK? Choose a bazooka, frag grenade, SMG or something else!</p>
                </div>

                <div className={"bg-purple-600 border-purple-400 border-l-purple-800 border-b-purple-800"}>
                    <h4>Customize your looks!</h4>
                    <img src={"/homepage/customize.png"} alt="Battle" />
                    <hr className={"w-3/4 self-center border-4 rounded-xl border-t-purple-400 border-b-purple-800 border-l-purple-800 border-r-purple-400"} />
                    <p>Feeling like a soldier? Or maybe a wizard? Choose from tons of clothing options to match your vibe!</p>
                </div>
            </section>

            <hr className={"mt-4 mb-8 w-1/4 self-center border-2 rounded-xl"}/>

            {/*TODO: TURN THIS INTO A COMPONENT */}
            <section className={"flex flex-col bg-cyan-600 border-t-6 border-cyan-400 p-4 justify-center items-center w-full gap-4 text-white"}>
                <h4>Latest news:</h4>
                <div className={"flex flex-row gap-4 w-full justify-center items-center"}>
                    <h1 className={"mb-6"}>🐧⚒️️ Work in progress... stay tuned! 🚧</h1>
                    <article className={"flex hidden! flex-col w-full gap-4 bg-blue-600 border-6 border-blue-300 p-4 rounded-xl basis-1/3"}>
                        <h5>Headline 1</h5>
                        <img src={"/homepage/battle.png"} alt={"article preview image"} className={"w-full border-2 rounded-xl"} />
                        <p>Beginning of the news papaer lmfao among us sus article long text just testingBeginning of the news papaer lmfao among us sus article long text just testingBeginning...</p>
                        <Link to={"/blog/1"} className={"btn w-fit!"}><span>Read more</span></Link>
                    </article>
                </div>
            </section>
        </main>
    );
}