import EventCard from "./EventCard";

export default function SimilarEvents() {
    return (
        <section className="mt-20 w-[90%] mx-auto">
            <h1 className="text-2xl font-bold">Other events you may like</h1>

            <div className="grid grid-cols-3 gap-10">
                {[1, 2, 3, 4, 5, 6].map(n => <EventCard 
                className="min-h-[400px] bg-white shadow-2xl"
                key={n} />)}
            </div>
        </section>
    );
}