import {Link} from "react-router";
import "./about.css";

export default function About() {
    return (
        <main id={"container"} className="flex flex-col">
            <header className={"flex flex-col pt-2 pb-4 w-full gap-4 bg-[url(/homepage/banner.jpg)] text-white bg-fixed bg-contain border-b-6 border-gray-800"}>
                <h1 className={"text-center"}>About the project</h1>
                <div className={"flex flex-row items-center justify-center text-2xl gap-4"}>
                    <Link to="/about" className={"btn-action active"}><span>About CPW</span></Link>
                    <Link to="/about/team" className={"btn-action"}><span>Meet the team</span></Link>
                    <Link to="/about/faq" className={"btn-action"}><span>F.A.Q</span></Link>
                </div>
            </header>

            <div className={"flex flex-row gap-4 w-full"}>
                <aside className={"flex flex-col w-1/4 p-4 m-2 text-white bg-[#02ba47] border-r-6 border-t-6 border-t-green-400 border-r-green-600 rounded-xl"}>
                    <div className={"sticky top-2"}>
                        <h3>Table of contents</h3>
                        <ul>
                            <li><a href={"#game"}>About the game</a></li>
                            <li><a href={"#revival"}>About the revival</a></li>
                            <li><a href={"#scratch"}>Scratch edition</a></li>
                        </ul>
                    </div>
                    <p className={"mt-auto text-center font-extrabold"}>○ ○ ○</p>
                </aside>

                <div className={"flex flex-col w-2/3 mb-6 px-6 mt-2 gap-8"}>
                    <section id={"game"} className={"w-4/5"}>
                        <h2>About the game</h2>
                        <hr className={"my-4 w-full border-2 rounded-xl"} />
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed malesuada varius fermentum. Vivamus id placerat orci, consectetur dictum mauris.
                            Maecenas ullamcorper ante sit amet risus molestie sollicitudin.
                            Sed felis metus, egestas ut mollis ut, maximus vitae neque.
                            Sed ultrices, lectus sed placerat interdum, dui massa condimentum mi,
                                id varius nisl quam et sem.
                            Duis vitae sapien elit.
                            Pellentesque cursus nisi sit amet massa efficitur, eu maximus eros iaculis.
                            Maecenas rutrum tortor ornare, posuere magna vitae, iaculis nibh.
                            Donec ut dapibus purus. Praesent mattis imperdiet velit, a pharetra ex vulputate eget.
                            Suspendisse elementum, metus ac accumsan venenatis, risus eros commodo quam,
                                fermentum gravida diam magna a magna.
                            Donec porta odio id vehicula mollis.</p>
                    </section>

                    <section id={"revival"} className={"w-4/5"}>
                        <h2>About the revival</h2>
                        <hr className={"my-4 w-full border-2 rounded-xl"} />
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed malesuada varius fermentum. Vivamus id placerat orci, consectetur dictum mauris.
                            Maecenas ullamcorper ante sit amet risus molestie sollicitudin.
                            Sed felis metus, egestas ut mollis ut, maximus vitae neque.
                            Sed ultrices, lectus sed placerat interdum, dui massa condimentum mi,
                            id varius nisl quam et sem.
                            Duis vitae sapien elit.
                            Pellentesque cursus nisi sit amet massa efficitur, eu maximus eros iaculis.
                            Maecenas rutrum tortor ornare, posuere magna vitae, iaculis nibh.
                            Donec ut dapibus purus. Praesent mattis imperdiet velit, a pharetra ex vulputate eget.
                            Suspendisse elementum, metus ac accumsan venenatis, risus eros commodo quam,
                            fermentum gravida diam magna a magna.
                            Donec porta odio id vehicula mollis.</p>
                    </section>

                    <section id={"scratch"} className={"w-4/5"}>
                        <h2>Scratch edition</h2>
                        <hr className={"my-4 w-full border-2 rounded-xl"} />
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed malesuada varius fermentum. Vivamus id placerat orci, consectetur dictum mauris.
                            Maecenas ullamcorper ante sit amet risus molestie sollicitudin.
                            Sed felis metus, egestas ut mollis ut, maximus vitae neque.
                            Sed ultrices, lectus sed placerat interdum, dui massa condimentum mi,
                            id varius nisl quam et sem.
                            Duis vitae sapien elit.
                            Pellentesque cursus nisi sit amet massa efficitur, eu maximus eros iaculis.
                            Maecenas rutrum tortor ornare, posuere magna vitae, iaculis nibh.
                            Donec ut dapibus purus. Praesent mattis imperdiet velit, a pharetra ex vulputate eget.
                            Suspendisse elementum, metus ac accumsan venenatis, risus eros commodo quam,
                            fermentum gravida diam magna a magna.
                            Donec porta odio id vehicula mollis.</p>
                    </section>
                </div>
            </div>
        </main>
    );
}