import {Link} from "react-router";
import "./about.css";

export default function MeetTheTeam() {
    return (
        <main id={"container"} className="flex flex-col w-full">
            <header className={"flex flex-col pt-2 pb-4 w-full gap-4 bg-[url(/homepage/banner.jpg)] text-white bg-fixed bg-contain border-b-6 border-gray-800"}>
                <h1 className={"text-center"}>Meet the team</h1>
                <div className={"flex flex-row items-center justify-center text-2xl gap-4"}>
                    <Link to="/about" className={"btn-action"}><span>About CPW</span></Link>
                    <Link to="/about/team" className={"btn-action active"}><span>Meet the team</span></Link>
                    <Link to="/about/faq" className={"btn-action"}><span>F.A.Q</span></Link>
                </div>
            </header>

            <div className={"flex flex-row gap-4 w-full"}>
                <aside className={"flex flex-col w-1/4 p-4 m-2 text-white bg-[#02ba47] border-r-6 border-t-6 border-t-green-400 border-r-green-600 rounded-xl"}>
                    <div className={"sticky top-2"}>
                        <h3>Table of contents</h3>
                        <ul>
                            <li><a href={"#founder"}>Founder</a></li>
                            <li><a href={"#devs"}>Developers</a></li>
                            <ul>
                                <li><a href={"#devs-game"}>Game</a></li>
                                <li><a href={"#devs-website"}>Website</a></li>
                            </ul>
                        </ul>
                    </div>
                    <p className={"mt-auto text-center font-extrabold"}>○ ○ ○</p>
                </aside>

                <div className={"flex flex-col w-2/3 mb-6 px-6 mt-2 gap-8"}>
                    <section id={"founder"} className={"w-4/5"}>
                        <h2>Founder</h2>
                        <hr className={"my-4 w-full border-2 rounded-xl"} />
                        <div className={"flex flex-row gap-4 mb-4"}>
                            <img alt={"avatar"} src={"/about/avatar.jpg"} className={"rounded-full"} width={"100px"} />
                            <div className={"flex flex-col"}>
                                <h3>Name of your desire</h3>
                                <p>Small description of your very own desire</p>
                            </div>
                        </div>

                        <div className={"flex flex-row gap-4 mb-4"}>
                            <img alt={"avatar"} src={"/about/avatar.jpg"} className={"rounded-full"} width={"100px"} />
                            <div className={"flex flex-col"}>
                                <h3>Name of your desire</h3>
                                <p>Small description of your very own desire</p>
                            </div>
                        </div>
                    </section>

                    <section id={"devs"} className={"w-4/5"}>
                        <h2>Developers</h2>
                        <hr className={"my-4 w-full border-2 rounded-xl"} />

                        <section id={"devs-game"} className={"pl-16"}>
                            <h3>Game</h3>
                            <hr className={"my-4 w-full border-2 rounded-xl"} />
                            <div className={"flex flex-row gap-4 mb-4"}>
                                <img alt={"avatar"} src={"/about/avatar.jpg"} className={"rounded-full"} width={"100px"} />
                                <div className={"flex flex-col"}>
                                    <h3>Name of your desire</h3>
                                    <p>Small description of your very own desire</p>
                                </div>
                            </div>
                        </section>

                        <section id={"devs-website"} className={"pl-16"}>
                            <h3>Website</h3>
                            <hr className={"my-4 w-full border-2 rounded-xl"} />
                            <div className={"flex flex-row gap-4 mb-4"}>
                                <img alt={"avatar"} src={"/about/avatar.jpg"} className={"rounded-full"} width={"100px"} />
                                <div className={"flex flex-col"}>
                                    <h3>Name of your desire</h3>
                                    <p>Small description of your very own desire</p>
                                </div>
                            </div>
                        </section>



                    </section>
                </div>
            </div>
        </main>
    );
}