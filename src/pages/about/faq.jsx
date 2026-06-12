import {Link} from "react-router";
import "./about.css";

export default function Faq() {
    return (
        <main id={"container"} className="items-stretch! mt-0!">
            <header className={"banner w-full bg-[url(/about/banner.jpg)]"}>
                <h1>Frequently asked questions</h1>
                <div className={"flex flex-row items-center justify-center text-2xl gap-4"}>
                    <Link to="/about" className={"btn-action"}><span>About CPW</span></Link>
                    <Link to="/about/team" className={"btn-action"}><span>Meet the team</span></Link>
                    <Link to="/about/faq" className={"btn-action active"}><span>F.A.Q</span></Link>
                </div>
                <h5>Question not listed? Ask us on our discord!</h5>
            </header>

            <div className={"flex flex-row gap-4 w-full"}>
                <aside className={"flex flex-col w-1/4 p-4 m-2 text-white bg-[#02ba47] border-r-6 border-t-6 border-t-green-400 border-r-green-600 rounded-xl"}>
                    <div className={"sticky top-2"}>
                        <h3>Table of contents</h3>
                        <ol>
                            <li><a href={"#q1"}>What is this project?</a></li>
                            <li><a href={"#q2"}>Is CPW fully revived?</a></li>
                            <li><a href={"#q3"}>Can I still play it in the browser?</a></li>
                            <li><a href={"#q4"}>Can I contribute to the project?</a></li>
                        </ol>
                    </div>
                    <p className={"mt-auto text-center font-extrabold"}>○ ○ ○</p>
                </aside>

                <div className={"flex flex-col w-2/3 mb-6 px-6 mt-2 gap-8"}>
                    <section id={"q1"} className={"w-4/5"}>
                        <h2>What is this project?</h2>
                        <hr className={"my-4 w-full border-2 rounded-xl"} />
                        <p>Crazy Penguin Wars was a Facebook game. It shut down in 2015. Now, 10 years later, the goal of our project is to revive this awesome game!</p>
                    </section>

                    <section id={"q2"} className={"w-4/5"}>
                        <h2>Is CPW fully revived?</h2>
                        <hr className={"my-4 w-full border-2 rounded-xl"} />
                        <p>Not yet. We're still working hard on it! At this moment you can only play a small demo, with only the offline practice mode being available. We hope to bring back multiplayer soon!</p>
                    </section>

                    <section id={"q3"} className={"w-4/5"}>
                        <h2>Can I still play it in the browser?</h2>
                        <hr className={"my-4 w-full border-2 rounded-xl"} />
                        <p>No, because of the discontinuation of Adobe Flash Player, you have to download the game in order to play it. Check out the download link above!</p>
                    </section>

                    <section id={"q4"} className={"w-4/5"}>
                        <h2>Can I contribute to the project?</h2>
                        <hr className={"my-4 w-full border-2 rounded-xl"} />
                        <p>Yes, definitely! In the first place we're looking for new developers that want to help rebuild the game server. However if coding is not your thing: we're also looking for, for example, Map Editors. Feel free to contact us in the Discord server!</p>
                    </section>
                </div>
            </div>
        </main>
    );
}