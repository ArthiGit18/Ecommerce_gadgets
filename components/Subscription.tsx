export default function SubscribeSection() {
    return (
        <div className="bg-[#162144] py-10 px-4">
            <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-6 md:flex-row md:items-center md:justify-between">
                {}
                <div className="text-white text-center md:text-left md:flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Subscribe Today</h2>
                    <p className="text-sm md:text-base max-w-xl mx-auto md:mx-0">
                        Be the first to know about exclusive deals, new product lines, company announcements, and industry news.
                    </p>
                </div>
                {}
                <form className="flex flex-col sm:flex-row w-full md:w-auto max-w-md mx-auto md:mx-0">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="px-4 py-2 text-black bg-amber-50 rounded-t-md sm:rounded-t-none sm:rounded-l-md sm:w-64 w-full focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold px-6 py-2 rounded-b-md sm:rounded-b-none sm:rounded-r-md w-full sm:w-auto"
                    >
                        SUBSCRIBE
                    </button>
                </form>
            </div>
        </div>
    );
}
