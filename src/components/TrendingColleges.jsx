import CollegeCard from "./CollegeCard";
import useSWR from "swr";
import { apiFetcher } from "../api/client";
import { ClipLoader } from "react-spinners";

export default function TrendingColleges() {
    // where "/college" is url
    // limit = 3 should limit your cards to 3 && skip=4 means it should skip the first 4
    const { data, error, isLoading } = useSWR("/colleges?limit=3&skip=4", apiFetcher);
    

    if (isLoading) {
        return (
            <div className="flex justify-center items-center">
                <ClipLoader size={100} />
            </div>
        )
    }

    if (error){
        return(
            <div className=" flex justify-center items-center">
                <p className="text-primary text-9xl">Something went wrong!</p>
            </div>
        );
    }

    return (
        <section className="mt-20 w-[90%] mx-auto">
            <h1 className="font-bold text-2xl mb-4 space-x-2">
                <span>Trending</span>
                <span className="text-primary">colleges</span>
            </h1>
            <div className="grid grid-cols-3 gap-5">
                {data.data.map((college) => (
                    <CollegeCard
                        key={college.id}
                        college={college} />
                ))}
            </div>
            <div className="text-center mt-4">
                <button className="bg-primary rounded-sm text-white text-[10px] border-0 px-8 py-1.5 mt-3">Load more...</button>
            </div>
        </section>
    );
}