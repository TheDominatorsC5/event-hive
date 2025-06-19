import { Link } from "react-router";

export default function Navbar() {
    return (
        <nav className="flex justify-between px-8 py-4">
            <h1 className="font-bold text-heading">
                <span>Event</span>
                <span className="text-primary"> Hive</span>
            </h1>
            <div className="flex justify-center gap-4">
               <Link to="/login"><button className="text-primary text-[10px]"><a href="#">Login</a></button></Link>
                <Link to="/register"><button className="bg-primary text-[10px] rounded-md py-2 px-4 text-white"><a href="#">Signup</a></button></Link>
            </div>
        </nav>
    );
}