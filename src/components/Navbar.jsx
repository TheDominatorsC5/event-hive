import { Link } from "react-router";
import useSWR from "swr";
import { apiClient, apiFetcher } from "../api/client";
import { useNavigate } from "react-router";


export default function Navbar() {


    const { data } = useSWR("/user/profile", apiFetcher);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("ACCESS_TOKEN");
        navigate("/login")
    }

    return (
        <nav className="flex justify-between px-8 py-4">
            <h1 className="font-bold text-heading">
                <span>Event</span>
                <span className="text-primary"> Hive</span>
            </h1>
            <div>
                <h1>{data?.data?.name || "Unknown User"}</h1>
                <button onClick={logout}
                    className="">Logout
                </button>
            </div>

            <div className="flex justify-center gap-4">
                <Link to="/login"><button className="text-primary text-[10px]"><a href="#">Login</a></button></Link>
                <Link to="/register"><button className="bg-primary text-[10px] rounded-md py-2 px-4 text-white"><a href="#">Signup</a></button></Link>
            </div>
        </nav>
    );
}