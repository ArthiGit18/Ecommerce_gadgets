export default function SubscribeSection() {
    return (
        <div className="bg-[#162144] py-10 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-white text-center md:text-left flex gap-10">
                    <h2 className="text-2xl font-bold mb-1">Subscribe Today</h2>
                    <p className="text-sm md:text-base w-150">
                        Be the first to know about exclusive deals, new product lines, company announcements, and industry news.
                    </p>
                </div>
                <form className="flex w-full md:w-auto max-w-md bg-amber-50">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="px-4 py-2 w-full md:w-64 text-black  rounded-l-md focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold px-6 py-2"
                    >
                        SUBSCRIBE
                    </button>
                </form>
            </div>
        </div>
    );
}
