import {Link} from "react-router";

export default function Navbar() {
    return (
        <nav className={" bg-linear-to-b from-blue-600 to-blue-500 text-2xl flex flex-row p-5"}>
            <Link to={"/"} className="bg-gradient-to-b from-yellow-200 to-yellow-500 text-white font-semibold rounded-xl p-1 shadow-[0_5px_0_rgba(0,0,0,0.25)] shadow-yellow-700">
              <span className="flex w-full bg-yellow-400 text-white rounded-xl py-2 px-5">
              Home
              </span>
            </Link>
        </nav>
    );
}