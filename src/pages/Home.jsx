import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroWithFilter from "../components/HeroWithFilter";
import UpcomingEvents from "../components/UpcomingEvents";
import banner from "../assets/images/banner.png";
import spotify from "../assets/images/spotify.png";
import google from "../assets/images/google.png";
import stripe from "../assets/images/stripe.png";
import youtube from "../assets/images/youtube.png";
import microsoft from "../assets/images/microsoft.png";
import medium from "../assets/images/medium.png";
import zoom from "../assets/images/zoom.png";
import uber from "../assets/images/uber.png";
import grab from "../assets/images/grab.png";
import TrendingColleges from "../components/TrendingColleges";
import OurBlogs from "../components/OurBlogs";

export default function Home() {
    return (
        <>
            <Navbar />
            <HeroWithFilter />
            <UpcomingEvents />
            <div>
                <button className="border">Loading more</button>
            </div>
            {/* Make your own event section goes here */}
            <div className="bg-navy-blue flex items-center w-full px-10 ">
                <div>
                    <img className="-mt-[30px] ml-40 h-[27vh] px-8 " src={banner} alt="Banner" />
                </div>
                <div className="text-white">
                    <h1 className="font-semibold text-2xl">Make your own Event</h1>
                    <h5 className="text-xs mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h5>
                    <button className="rounded-xm py-1 px-8 text-xs bg-primary mt-2 ">Create Event</button>
                </div>


            </div>
            {/* Join these brands section goes here */}
            <div className="">
                <div className="text-center p-5 ">
                    <h1 className="font-semibold text-2xl p-2">Join these <span className="text-primary">brands</span></h1>
                    <h5 className="text-xs p-2">We've had the pleasure of working with industry-defined brands. These are <br /> just some of them.</h5> 
                </div>
                <div className="flex justify-center gap-8 w-[15%] items-center mx-auto">
                    <img className="hover-scale-105" src={spotify} alt="Spotify" />
                    <img className="" src={google} alt="Google" />
                    <img className="" src={stripe} alt="Stripe" /> 
                    <img className="" src={youtube} alt="Youtube" />
                    <img className="" src={microsoft} alt="Microsoft" />
                    </div>
                    <div className="flex flex-row gap-8 justify-center w-[15%] items-center mx-auto">
                    <img className="" src={medium} alt="Medium" />
                    <img className="" src={zoom} alt="Zoom" />
                    <img className="" src={uber} alt="Uber" />
                    <img className="" src={grab} alt="Grab" />
                </div>
            </div>
            <TrendingColleges />
            <OurBlogs />
            <Footer />
        </>
    );
}