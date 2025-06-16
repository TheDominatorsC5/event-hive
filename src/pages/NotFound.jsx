import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import notfound from "../assets/images/not-found.png"
import { Instagram, Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router";

export default function NotFound() {
    return (
        <>
            <Navbar />
            <section>
                <div className="flex flex-col justify-center items-center">
                    <img src={notfound} alt="Not found image" className="h-full" />

                    <h1 className="text-3xl font-bold pt-20">Oops!</h1>

                    <p className="text-xl text-zinc-500 pt-8">We can’t seem to find the page you are looking for</p>

                    <Link to="/">
                    <button className="rounded-3xl bg-[#7848F4] py-2 px-4 my-16 text-sm text-white cursor-pointer">Back to Homepage</button>
                    </Link>

                    <p className="pb-4">Follow us on</p>

                    <div className="flex flex-row gap-4">
                        <span className="rounded-xl p-2 bg-zinc-200"><Instagram className="text-[#7848F4]" /></span>
                        <span className="rounded-xl p-2 bg-zinc-200"><Facebook className="text-[#7848F4]" /></span>
                        <span className="rounded-xl p-2 bg-zinc-200"><Linkedin className="text-[#7848F4]" /></span>
                        <span className="rounded-xl p-2 bg-zinc-200"><Twitter className="text-[#7848F4]" /></span>
                        <span className="rounded-xl p-2 bg-zinc-200"><Youtube className="text-[#7848F4]" /></span>

                    </div>

                </div>

            </section>
            <Footer />
        </>
    );
}