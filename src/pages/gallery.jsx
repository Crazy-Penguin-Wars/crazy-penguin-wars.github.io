import "./css/gallery.css";

export default function Gallery() {
    return (
        <main id={"container"} className="items-stretch! mt-0!">
            <header className={"text-center my-4"}>
                <h1>CPW Gallery</h1>
                <h4>Browse various images of the game</h4>
            </header>

            <section className={"gallery-showcase"}>
                <div>
                    <img src={"/homepage/banner.jpg"} width={512} alt={"gallery image"} className={"border-4 border-green-700  my-2 rounded-xl"} />
                    <h6>Banner 1</h6>
                </div>

                <div>
                    <img src={"/about/banner.jpg"} width={512} alt={"gallery image"} className={"border-4 border-green-700  my-2 rounded-xl"} />
                    <h6>Banner 2</h6>
                </div>

                <div className={"opacity-0"}>
                    <img src={"/homepage/battle.png"} width={1} alt={"gallery image"} className={"border-4 border-green-700  my-2 rounded-xl"} />
                    <h6>hidden image</h6>
                </div>

                <div>
                    <img src={"/homepage/battle.png"} width={512} alt={"gallery image"} className={"border-4 border-green-700  my-2 rounded-xl"} />
                    <h6>Image 1</h6>
                </div>

                <div>
                    <img src={"/homepage/customize.png"} width={512} alt={"gallery image"} className={"border-4 border-green-700  my-2 rounded-xl"} />
                    <h6>Image 2</h6>
                </div>

                <div>
                    <img src={"/homepage/weapon.png"} width={512} alt={"gallery image"} className={"border-4 border-green-700  my-2 rounded-xl"} />
                    <h6>Image 3</h6>
                </div>

                <div>
                    <img src={"/homepage/community.jpg"} width={512} alt={"gallery image"} className={"border-4 border-green-700  my-2 rounded-xl"} />
                    <h6>Image 4</h6>
                </div>

                <div>
                    <img src={"/other/money.png"} width={512} alt={"gallery image"} className={"border-4 border-green-700  my-2 rounded-xl"} />
                    <h6>Image 5</h6>
                </div>

                <div>
                    <img src={"/homepage/revival.png"} width={512} alt={"gallery image"} className={"border-4 border-green-700  my-2 rounded-xl"} />
                    <h6>Image 6</h6>
                </div>

                <div>
                    <img src={"/other/cosmetic.png"} width={512} alt={"gallery image"} className={"border-4 border-green-700  my-2 rounded-xl"} />
                    <h6>Image 7</h6>
                </div>

                <div>
                    <img src={"/other/match.png"} width={512} alt={"gallery image"} className={"border-4 border-green-700  my-2 rounded-xl"} />
                    <h6>Image 8</h6>
                </div>

                <div>
                    <img src={"/other/slotmachine.png"} width={512} alt={"gallery image"} className={"border-4 border-green-700  my-2 rounded-xl"} />
                    <h6>Image 9</h6>
                </div>

                <div>
                    <img src={"/other/digitalchocolate.jpg"} width={512} alt={"gallery image"} className={"border-4 border-green-700  my-2 rounded-xl"} />
                    <h6>Image 10</h6>
                </div>

                <div>
                    <img src={"/homepage/experience.jpg"} width={512} alt={"gallery image"} className={"border-4 border-green-700  my-2 rounded-xl"} />
                    <h6>Image 11</h6>
                </div>

                <div>
                    <img src={"/other/imageA.png"} width={512} alt={"gallery image"} className={"border-4 border-green-700  my-2 rounded-xl"} />
                    <h6>Image 12</h6>
                </div>

                <div>
                    <img src={"/other/imageB.png"} width={512} alt={"gallery image"} className={"border-4 border-green-700  my-2 rounded-xl"} />
                    <h6>Image 13</h6>
                </div>

                <div>
                    <img src={"/other/imageC.png"} width={512} alt={"gallery image"} className={"border-4 border-green-700  my-2 rounded-xl"} />
                    <h6>Image 14</h6>
                </div>

                <div>
                    <img src={"/other/imageD.png"} width={512} alt={"gallery image"} className={"border-4 border-green-700  my-2 rounded-xl"} />
                    <h6>Image 15</h6>
                </div>

                <div>
                    <img src={"/other/imageE.png"} width={512} alt={"gallery image"} className={"border-4 border-green-700  my-2 rounded-xl"} />
                    <h6>Image 16</h6>
                </div>

                <div>
                    <img src={"/play/gameplay.png"} width={512} alt={"gallery image"} className={"border-4 border-green-700  my-2 rounded-xl"} />
                    <h6>Image 17</h6>
                </div>

                <div>
                    <img src={"/play/menu.png"} width={512} alt={"gallery image"} className={"border-4 border-green-700  my-2 rounded-xl"} />
                    <h6>Image 18</h6>
                </div>
            </section>
        </main>
    );
}