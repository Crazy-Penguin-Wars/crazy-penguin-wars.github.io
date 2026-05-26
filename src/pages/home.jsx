import {Link} from "react-router";

export default function Home() {
    return (
        <div id={"container"} className="flex flex-col">

            <div className={"flex flex-row pt-2 pb-4 bg-[url(/src/assets/homepage/banner.jpg)] bg-no-repeat bg-cover text-white border-b-6 border-gray-800"}>
                <div className={"flex flex-col items-center w-full gap-4"}>
                    <h2><span className={"text-green-400"}>Crazy</span><span className={"text-white"}>Penguin</span><span className={"text-orange-400"}>Wars</span> - <span className={"text-blue-400"}>Revived</span></h2>
                    <h6>The original Facebook game brought back to life!</h6>
                    <div className={"flex flex-row justify-center items-center w-fit gap-4 text-2xl"}>
                        <Link to={"/"} className="btn">
                            <span>PLAY NOW</span>
                        </Link>
                        <Link to={"/"} className="btn-action">
                            <span>JOIN DISCORD</span>
                        </Link>
                    </div>
                </div>
            </div>

            <hr className={"my-4 w-1/4 self-center border-2 rounded-xl"} />

            <div className={"flex flex-row w-full justify-center gap-8 text-white mb-6 px-6"}>
                <div className={"flex flex-col items-center text-center bg-red-600 border-red-400 border-t-6 border-r-6 w-1/3 rounded-xl p-4 gap-4"}>
                    <h4 className={"uppercase"}>Fight your friends!</h4>
                    <p className={"-mt-6"}>(matchmaking included)</p>
                    <img src={"/src/assets/homepage/battle.png"} alt="Battle" className={"rounded-lg border-2 mt-auto"} />
                    <hr className={"w-1/2 self-center border-2 rounded-xl border-black"} />
                    <p>Got a beef that needs to be settled? Take out your friend for a 1v1 and see who's right!</p>
                </div>

                <div className={"flex flex-col items-center text-center bg-green-800 border-green-600 border-t-6 border-r-6 w-1/3 rounded-xl p-4 gap-4"}>
                    <h4 className={"uppercase"}>Crazy weapons!</h4>
                    <img src={"/src/assets/homepage/weapon.png"} alt="Battle" className={"rounded-lg border-2 mt-auto"} />
                    <hr className={"w-1/2 self-center border-2 rounded-xl border-black"} />
                    <p>Tired of running with just an AK? Choose a bazooka, frag grenade, SMG or something else!</p>
                </div>

                <div className={"flex flex-col items-center text-center bg-purple-600 border-purple-400 border-t-6 border-r-6 w-1/3 rounded-xl p-4 gap-4"}>
                    <h4 className={"uppercase"}>Customize your looks!</h4>
                    <img src={"/src/assets/homepage/customize.png"} alt="Battle" className={"rounded-lg border-2 mt-auto"} />
                    <hr className={"w-1/2 self-center border-2 rounded-xl border-black"} />
                    <p>Feeling like a soldier? Or maybe a wizard? Choose from tons of clothing options to match your vibe!</p>
                </div>
            </div>

            {/*TODO: TURN THIS INTO A COMPONENT */}
            <div className={"flex flex-col bg-cyan-600 border-t-6 border-cyan-400 p-4 justify-center items-center w-full gap-4 text-white"}>
                <h4>Latest news:</h4>
                <div className={"flex flex-row gap-4 w-full justify-center items-center"}>
                    <div className={"flex flex-col w-full gap-4 bg-blue-600 border-6 border-blue-300 p-4 rounded-xl basis-1/3"}>
                        <h5>Headline 1</h5>
                        <img src={"/src/assets/homepage/battle.png"} alt={"article preview image"} className={"w-full border-2 rounded-xl"} />
                        <p>Beginning of the news papaer lmfao among us sus article long text just testingBeginning of the news papaer lmfao among us sus article long text just testingBeginning...</p>
                        <Link to={"/blog/1"} className={"btn w-fit!"}><span>Read more</span></Link>
                    </div>

                    <div className={"flex flex-col w-full gap-4 bg-blue-600 border-6 border-blue-300 p-4 rounded-xl basis-1/3"}>
                        <h5>Headline 1</h5>
                        <img src={"/src/assets/homepage/battle.png"} alt={"article preview image"} className={"w-full border-2 rounded-xl"} />
                        <p>Beginning of the news papaer lmfao among us sus article long text just testingBeginning of the news papaer lmfao among us sus article long text just testingBeginning...</p>
                        <Link to={"/blog/1"} className={"btn w-fit!"}><span>Read more</span></Link>
                    </div>

                    <div className={"flex flex-col w-full gap-4 bg-blue-600 border-6 border-blue-300 p-4 rounded-xl basis-1/3"}>
                        <h5>Headline 1</h5>
                        <img src={"/src/assets/homepage/battle.png"} alt={"article preview image"} className={"w-full border-2 rounded-xl"} />
                        <p>Beginning of the news papaer lmfao among us sus article long text just testingBeginning of the news papaer lmfao among us sus article long text just testingBeginning...</p>
                        <Link to={"/blog/1"} className={"btn w-fit!"}><span>Read more</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}