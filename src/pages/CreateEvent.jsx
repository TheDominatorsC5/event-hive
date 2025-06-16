import Navbar from "../components/Navbar";

export default function CreateEvent() {
    return (
        <>
            <Navbar />
            <section>
                <div class="max-w-md mx-auto p-6 bg-F8F8FA rounded-lg">
                    <h2 class="background: #F2F2F266;
                        font-bold text-gray-800 mb-6  text-4xl text-center">Create Event</h2>

                    <form>
                        <div class="mb-4">
                            <label htmlFor="eventTitle" class="block text-xs font-medium text-gray-700 mb-1">Event Title</label>
                            <input
                                type="text"
                                id="eventTitle"
                                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="e.g., Annual Tech Conference"
                            />
                        </div>

                        <div class="mb-4">
                            <label htmlFor="eventVenue" class="block text-xs font-medium text-gray-700 mb-1">Event Venue</label>
                            <input
                                type="text"
                                id="eventVenue"
                                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="e.g., Accra International Conference Centre"
                            />
                        </div>

                        <div class="mb-4 flex flex-col sm:flex-row gap-4">
                            <div class="flex-1">
                                <label htmlFor="startTime" class="block text-xs font-medium text-gray-700 mb-1">Start Time</label>
                                <input
                                    type="time"
                                    id="startTime"
                                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            <div class="flex-1">
                                <label htmlFor="endTime" class="block text-xs font-medium text-gray-700 mb-1">End Time</label>
                                <input
                                    type="time"
                                    id="endTime"
                                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div class="mb-4 flex flex-col sm:flex-row gap-4">
                            <div class="flex-1">
                                <label htmlFor="startDate" class="block text-xs font-medium text-gray-700 mb-1">Start Date</label>
                                <input
                                    type="date"
                                    id="startDate"
                                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            <div class="flex-1">
                                <label htmlFor="endDate" class="block text-xs font-medium text-gray-700 mb-1">End Date</label>
                                <input
                                    type="date"
                                    id="endDate"
                                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>
                    </form>

                    <h2 class="text-gray-800 mt-8 mb-6 text-4xl text-center font-semibold">Event Details</h2>

                    <div class="mb-4">
                        <label class="block text-xs font-medium text-gray-700 mb-1">Event Image</label>
                        <input type="file" id="eventImageUpload" class="hidden" /> {/* Corrected to type="file" and hidden */}
                        <label
                            htmlFor="eventImageUpload"
                            class="cursor-pointer flex items-center justify-center w-full h-30 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-[#F2F2F266]"
                        >
                            Choose File
                        </label>
                        {/* Use React state here to display the chosen file name or a preview */}
                    </div>

                    <div class="mb-4">
                        <label htmlFor="eventDescription" class="block text-xs font-medium text-gray-700 mb-1">Event Description</label>
                        <textarea
                            id="eventDescription"
                            rows="5"
                            placeholder="Provide a detailed description of your event..."
                            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm placeholder-gray-400"
                        ></textarea>
                    </div>
                    <button className="bg-[#7848F4] w-full text-center text-white rounded text-base py-2">Create event</button>
                </div>
            </section>
        </>
    );
}