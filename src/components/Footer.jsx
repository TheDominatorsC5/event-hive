import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-navy-blue text-white mt-20">
            <h1 className="flex justify-center text-heading py-3 space-x-2"><span className="font-bold">Event</span>
                <span className="text-primary font-bold"> Hive</span></h1>
            <form className="flex justify-center gap-3">
                <input className="bg-white rounded-md text-black px-12 text-[9px]" type="email" placeholder="Enter your mail" name="email" />
                <button className="bg-primary rounded-md py-2.5 px-5 text-[9px]" type="submit">Subscribe</button>
            </form>
            <div className="flex justify-center gap-8 py-4 items-center m-5 text-[12px]">
                <span>Home</span>
                <span>About</span>
                <span>Service</span>
                <span>Get in Touch</span>
                <span>FAQs</span>
            </div>
            <hr className="w-[94%] mx-auto" />
            <div className="flex justify-around gap-64 py-4">
                <div className="flex gap-6 text-[8px]">
                    <button className="bg-primary px-2 py-1 rounded-[3px]">English</button>
                    <button>French</button>
                    <button>Hindi</button>
                </div>
                <div className="flex gap-4">
                    <Linkedin className="size-4" />
                    <Instagram className="size-4" />
                    <Facebook className="size-4"/>
                </div>
                <p className="text-[10px] items-center">Noncopyrighted &copy;2025 Upload by EventHive</p>
            </div>
        </footer>
    );
}