import Navbar from "../components/Navbar";
import useSWR from "swr";
import { apiFetcher, apiClient } from "../api/client";
import SubmitButton from "../components/SubmitButton";
import { useNavigate } from "react-router";

export default function CreateEvent() {
    const navigate = useNavigate();
    const { data, isLoading, error } = useSWR("/colleges", apiFetcher);

    const postEvent = async (data) => {
        try {
            const response = await apiClient.post("/events", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
                }
            });
            console.log(response.data)
            navigate(`/view-event?id=${response.data.data.id}`);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Navbar />
            <section>
                <div class="md:w-[813px] mx-auto p-6 bg-F8F8FA rounded-lg">

                    <form action={postEvent}>

                        <h2 class="background: #F2F2F266;
                        font-bold text-gray-800 mb-6  text-3xl md:text-4xl text-center">Create Event</h2>
                        <div class="mb-4">
                            <label htmlFor="Event Title" class="block text-xs font-medium text-gray-700 mb-1">College</label>
                            <select class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7848F4] focus:border-[#7848F4] sm:text-sm"
                                name="college"
                                id="">
                                {isLoading ? <option value="">loading...</option> :
                                    error ? <option value="">Something went wrong</option> :
                                        data.data.map((college) => {
                                            return <option key={college.id} value={college.id}>{college.name}</option>
                                        })}
                            </select>


                        </div>

                        <div class="mb-4">
                            <label htmlFor="eventTitle" class="block text-xs font-medium text-gray-700 mb-1">Event Title</label>
                            <input
                                type="text"
                                name="title"
                                id="eventTitle"
                                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7848F4] focus:border-[#7848F4] sm:text-sm"
                                placeholder="e.g., Annual Tech Conference"
                            />
                        </div>

                        <div class="mb-4">
                            <label htmlFor="eventVenue" class="block text-xs font-medium text-gray-700 mb-1">Event Venue</label>
                            <input
                                type="text"
                                name="venue"
                                id="eventVenue"
                                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7848F4] focus:border-[#7848F4] sm:text-sm"
                                placeholder="e.g., Accra International Conference Centre"
                            />
                        </div>



                        <div class="mb-4 flex flex-col sm:flex-row gap-4">
                            <div class="flex-1">
                                <label htmlFor="Start date" class="block text-xs font-medium text-gray-700 mb-1">Start Date</label>
                                <input
                                    type="datetime-local"
                                    name="start"
                                    id="startDate"
                                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7848F4] focus:border-[#7848F4] sm:text-sm"
                                />
                            </div>
                            <div class="flex-1">
                                <label htmlFor="End Date" class="block text-xs font-medium text-gray-700 mb-1">End Date</label>
                                <input
                                    type="datetime-local"
                                    name="end"
                                    id="End date"
                                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7848F4] focus:border-[#7848F4] sm:text-sm"
                                />
                            </div>
                        </div>

                        <h2 class="text-gray-800 mt-8 mb-6 text-3xl md:text-4xl text-center font-semibold">Event Details</h2>

                        <div class="mb-4">
                            <label class="block text-xs font-medium text-gray-700 mb-1">Event Image</label>
                            <input name="image" type="file" id="eventImageUpload" class="hidden" /> {/* Corrected to type="file" and hidden */}
                            <label
                                htmlFor="eventImageUpload"
                                class="cursor-pointer flex items-center justify-center w-full h-30 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7848F4] bg-[#F2F2F266]"
                            >
                                Choose File
                            </label>
                            {/* Use React state here to display the chosen file name or a preview */}
                        </div>

                        <div class="mb-4">
                            <label htmlFor="eventDescription" class="block text-xs font-medium text-gray-700 mb-1">Event Description</label>
                            <textarea
                                id="eventDescription"
                                name="description"
                                rows="5"
                                placeholder="Provide a detailed description of your event..."
                                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7848F4] focus:border-[#7848F4] sm:text-sm placeholder-gray-400"
                            ></textarea>
                        </div>

                        <div class="mb-4">
                            <label htmlFor="eventDescription" class="block text-xs font-medium text-gray-700 mb-1">Event Tags</label>
                            <select multiple class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7848F4] focus:border-[#7848F4] sm:text-sm placeholder-gray-400" name="tags" id="">
                                <option value="social">Social</option>
                                <option value="education">Education</option>
                                <option value="fun-fair">Fun-Fair</option>
                                <option value="business">Business</option>
                                <option value="comedy">Comedy</option>
                            </select>
                        </div>
                        <SubmitButton className="bg-[#7848F4] w-full text-center text-white rounded text-base py-2" title={"Create Event"} />

                    </form>
                </div>
            </section>
        </>
    );
}