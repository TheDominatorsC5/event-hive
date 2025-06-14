import EventCard from "./EventCard";

export default function CollegeEvents() {
    return (
        <section className="mt-20 w-[90%] mx-auto">
            <div>
                <h1 className="text-2xl font-bold py-6">
                    <span>College</span>
                    <span className="text-[#7848F4]"> Events</span>
                </h1>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {[1, 2, 3, 4, 5, 6].map(n => <EventCard key={n} />)}
            </div>
        </section>
    );
}