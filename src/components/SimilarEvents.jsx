import EventCard from "./EventCard";
import useSWR from "swr";
import { apiFetcher } from "../api/client";
import { BeatLoader } from "react-spinners";

export default function SimilarEvents() {
    const { data, isLoading, error } = useSWR("/events?limit=6", apiFetcher);

    if (isLoading) {
        return (
            <div>
                <BeatLoader size={100} />
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <p>something went wrong</p>
            </div>
        )
    }

    return (
        <section className="mt-20 w-[90%] mx-auto">
            <h1 className="text-2xl font-bold">Other events you may like</h1>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
                {data.data.map(event => <EventCard
                    className="min-h-[400px] bg-white shadow-2xl"
                    key={event.id} event={event} />)}
            </div>
        </section>
    );
}