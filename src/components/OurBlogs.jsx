import BlogCard from "./BlogCard";

export default function OurBlogs() {
    return (
        <section className="mt-20 w-[90%] mx-auto">
            <h1 className="font-bold text-2xl mb-4 space-x-1.5">
                <span>Our</span>
                <span className="text-primary">Blogs</span>
            </h1>
            <div className="grid grid-cols-3 gap-5">
                {[1, 2, 3].map(n => <BlogCard key={n} />)}
            </div>
        </section>
    );
}

