import {Link} from "react-router";
import "./about.css";

export default function MeetTheTeam() {
    return (
        <main id={"container"} className="items-stretch! mt-0!">
            <header className={"banner w-full bg-[url(/about/banner.jpg)]"}>
                <h1>Meet the team</h1>
                <div className={"flex flex-row items-center justify-center text-2xl gap-4"}>
                    <Link to="/about" className={"btn-action"}><span>About CPW</span></Link>
                    <Link to="/about/team" className={"btn-action active"}><span>Meet the team</span></Link>
                    <Link to="/about/faq" className={"btn-action"}><span>F.A.Q</span></Link>
                </div>
            </header>

            <div className={"flex flex-row gap-4 w-full"}>
                <aside className={"flex flex-col w-1/4 p-4 m-2 text-white bg-[#02ba47] border-r-6 border-t-6 border-t-green-400 border-r-green-600 rounded-xl"}>
                    <div className={"sticky top-4"}>
                        <h3>Table of contents</h3>
                        <ul>
                            <li><a href={"#founder"}>Founder</a></li>
                            <li><a href={"#cofounder"}>Co-Founder</a></li>
                            <li><a href={"#admins"}>Admins</a></li>
                            <li><a href={"#devs"}>Developers</a></li>
                            <ul>
                                <li><a href={"#devs-game"}>Game</a></li>
                                <li><a href={"#devs-website"}>Website</a></li>
                            </ul>
                            <li><a href={"#contributor"}>Contributors</a></li>
                        </ul>
                    </div>
                    <p className={"mt-auto text-center font-extrabold"}>○ ○ ○</p>
                </aside>

                <div className={"flex flex-col w-2/3 mb-6 px-6 mt-2 gap-8"}>
                    <section id={"founder"} className={"w-4/5"}>
                        <h2>Founder</h2>
                        <hr className={"my-4 w-full border-2 rounded-xl"} />
                        <div className={"flex flex-row gap-4 mb-4 items-start"}>
                            <img alt={"avatar"} src={"/about/avatar/foxahri.png"} className={"rounded-full border-4 border-black"} width={"100px"} />
                            <div className={"flex flex-col"}>
                                <h3 className={"text-red-600"}>FoxAhri</h3>
                                <p>I was obsessed with this game as a kid, so I launched this project with the goal of bringing Crazy Penguin Wars back to life. I’m mainly in charge of managing the project and the community that’s growing around this adventure.</p>
                            </div>
                        </div>
                    </section>

                    <section id={"cofounder"} className={"w-4/5"}>
                        <h2>Co-Founder</h2>
                        <hr className={"my-4 w-full border-2 rounded-xl"} />
                        <div className={"flex flex-row gap-4 mb-4 items-start"}>
                            <img alt={"avatar"} src={"/about/avatar/michel.png"} className={"rounded-full border-4 border-black"} width={"100px"} />
                            <div className={"flex flex-col"}>
                                <h3 className={"text-red-600"}>Michielvde</h3>
                                <p>I love dropping meganukes on the other guys on this page</p>
                            </div>
                        </div>
                    </section>

                    <section id={"admins"} className={"w-4/5"}>
                        <h2>Admins</h2>
                        <hr className={"my-4 w-full border-2 rounded-xl"} />
                        <div className={"flex flex-row gap-4 mb-4 items-start"}>
                            <img alt={"avatar"} src={"/about/avatar/goodguy.png"} className={"rounded-full border-4 border-black"} width={"100px"} />
                            <div className={"flex flex-col"}>
                                <h3 className={"text-red-600"}>Aureostahl</h3>
                                <p>When I was very young, I played this game on an old PC my parents owned. When the game shut down, I spent months searching for it to see if it had returned. Now I'm a server administrator and I'd like to take on the task of localizing the game into Spanish.</p>
                            </div>
                        </div>

                        <div className={"flex flex-row gap-4 mb-4 items-start"}>
                            <img alt={"avatar"} src={"/about/avatar/kebabo.png"} className={"rounded-full border-4 border-black"} width={"100px"} />
                            <div className={"flex flex-col"}>
                                <h3 className={"text-red-600"}>Kebabo (ex-admin)</h3>
                                <p>He used to help moderate our discord server</p>
                            </div>
                        </div>
                    </section>

                    <section id={"devs"} className={"w-4/5"}>
                        <h2>Developers</h2>
                        <hr className={"my-4 w-full border-2 rounded-xl"} />

                        <section id={"devs-game"} className={"pl-16"}>
                            <h3>Game</h3>
                            <hr className={"my-4 w-full border-2 rounded-xl"} />

                            <div className={"flex flex-row gap-4 mb-4 items-start"}>
                                <img alt={"avatar"} src={"/about/avatar/borisbeast.png"} className={"rounded-full border-4 border-black"} width={"100px"} />
                                <div className={"flex flex-col"}>
                                    <h3 className={"text-blue-500"}>BorisBeast</h3>
                                    <p>Most of my contributions were mostly on the flash side rather than the game itself</p>
                                </div>
                            </div>

                            <div className={"flex flex-row gap-4 mb-4 items-start"}>
                                <img alt={"avatar"} src={"/about/avatar/changedruby.png"} className={"rounded-full border-4 border-black"} width={"100px"} />
                                <div className={"flex flex-col"}>
                                    <h3 className={"text-blue-500"}>ChangedRuby</h3>
                                    <p>I really like coding and Flash for some reason, so this project is a nice middle ground that I enjoy contributing :)</p>
                                </div>
                            </div>
                        </section>

                        <section id={"devs-website"} className={"pl-16"}>
                            <h3>Website</h3>
                            <hr className={"my-4 w-full border-2 rounded-xl"} />
                            <div className={"flex flex-row gap-4 mb-4 items-start"}>
                                <img alt={"avatar"} src={"/about/avatar/dozy.png"} className={"rounded-full border-4 border-black"} width={"100px"} />
                                <div className={"flex flex-col"}>
                                    <h3 className={"text-blue-500"}>Dozy</h3>
                                    <p>Someone who enjoys coding and gaming :steamhappy:</p>
                                </div>
                            </div>
                        </section>
                    </section>

                    <section id={"contributor"} className={"w-4/5"}>
                        <h2>Contributors</h2>
                        <hr className={"my-4 w-full border-2 rounded-xl"} />
                        <div className={"flex flex-row gap-4 mb-4 items-start"}>
                            <img alt={"avatar"} src={"/about/avatar/salvador.png"} className={"rounded-full border-4 border-black"} width={"100px"} />
                            <div className={"flex flex-col"}>
                                <h3 className={"text-blue-500"}>Salvador Hermitaño</h3>
                                <p>Contributor</p>
                            </div>
                        </div>

                        <div className={"flex flex-row gap-4 mb-4 items-start"}>
                            <img alt={"avatar"} src={"/about/avatar/maruser.png"} className={"rounded-full border-4 border-black"} width={"100px"} />
                            <div className={"flex flex-col"}>
                                <h3 className={"text-blue-500"}>Maruser</h3>
                                <p>Missing description</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}