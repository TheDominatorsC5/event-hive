import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventDetail from "../components/EventDetail";
import SimilarEvents from "../components/SimilarEvents";

export default function ViewEvent() {
    return (
        <>
            <Navbar />
            <div
            className="relative min-h-[595px] min-w-[1320] flex items-center justify-center bg-cover bg-center bg-no-repeat inset-0 bg-black opacity-40"
            style={{backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661306437817-8ab34be91e0c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXZlbnRzfGVufDB8fDB8fHww')"}}>

                <div>
                    <h2>Dream world wide in jakatra</h2>
                    <h3>IIIT Sonepat</h3>
                    <h4>DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.</h4>
                </div>
                <EventDetail />
            </div>
            <SimilarEvents />
            <Footer />
        </>
    );
}