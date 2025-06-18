import CollegeCard from "./CollegeCard";

export default function TrendingColleges() {
    return (
        <section className="mt-20 w-[90%] mx-auto">
            <h1 className="font-bold text-2xl mb-4 space-x-2">
                <span>Trending</span>
                <span className="text-primary">colleges</span>
            </h1>
            <div className="grid grid-cols-3 gap-5">
                {[1, 2, 3].map(n => <CollegeCard key={n} />)}
            </div>
            <div className="text-center mt-4">
                <button className="bg-primary rounded-sm text-white text-[10px] border-0 px-8 py-1.5 mt-3">Load more...</button>
            </div>
        </section>
    );
}