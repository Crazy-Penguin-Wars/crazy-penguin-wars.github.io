import {Link} from "react-router";

export default function Footer() {
    return (
        <footer className={"flex flex-row items-center justify-between p-4  bg-linear-to-t from-blue-500 to-blue-700 border-t-6 border-blue-900 text-white gap-8"}>
            <div className="flex flex-col rounded-xl bg-cyan-500 p-2 border-b-6 border-cyan-800 basis-1/3">
                <h1>rozumiem</h1>
            </div>

            <div className="flex flex-col rounded-xl bg-cyan-500 p-2 border-b-6 border-cyan-800 basis-1/3">
                <h1>rozumiem</h1>
            </div>

            <div className="flex flex-col rounded-xl bg-cyan-500 p-2 border-b-6 border-cyan-800 basis-1/3">
                <h1>rozumiem</h1>
            </div>
        </footer>
    );
}