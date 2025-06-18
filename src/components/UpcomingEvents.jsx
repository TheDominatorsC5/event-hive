import EventCard from "./EventCard";

export default function UpcomingEvents() {
    return (
        <section className="mt-20 w-[90%] mx-auto">
            <div className="flex row justify-between">
            <h1 className="font-bold text-2xl mb-4 space-x-2">
                <span>Upcoming</span>
                <span className="text-primary">Events</span>
            </h1>
            
                <div className="flex flex-row gap-6">
                    <div className="flex flex-col w-[100%]">
                        <select name="type" id="type" className="bg-gray-200 p-2 rounded-md text-[12px]">
                            <option selected disabled>Weekdays</option>
                            <option value="drama">Monday</option>
                            <option value="tech">Tuesday</option>
                            <option value="tech">Wednesday</option>
                            <option value="tech">Thursday</option>
                            <option value="tech">Friday</option>
                        </select>
                    </div>
                    <div className="flex flex-col w-[100%]">
                        <select name="location" id="location" className="bg-gray-200 p-2 rounded-md text-[12px]">
                            <option selected disabled>Event type</option>
                            <option value="accra">Conferences</option>
                            <option value="kumasi">Seminars</option>
                            <option value="kumasi">Webinars</option>
                            <option value="kumasi">Networking events</option>
                        </select>
                    </div>
                    <div className="flex flex-col w-[100%]">
                        <select name="location" id="location" className="bg-gray-200 p-2 rounded-md
                         text-[12px]">
                            <option selected disabled>Any Category</option>
                            <option value="accra">Product Demonstartion</option>
                            <option value="kumasi">Business Dinners</option>
                        </select>
                    </div>
                </div>
                 </div>

                <div className="grid grid-cols-3 gap-5">
                    {[1, 2, 3, 4, 5, 6].map(n => <EventCard key={n} />)}
                </div>
                <div className="text-center mt-4" >
                    <button className="bg-primary rounded-sm text-white text-[10px] border-0 px-8 
                py-1.5 mt-3">Load more...</button>
                </div>
        </section>
    );
}