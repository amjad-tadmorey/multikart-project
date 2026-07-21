import Link from "next/link";

export const metadata = {
    title: "404 - Page Not Found",
};

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
            {/* Large 404 Display */}
            <h1 className="text-8xl md:text-9xl font-extrabold tracking-tight bg-gradient-to-b from-slate-300 to-slate-100 bg-clip-text text-transparent">
                404
            </h1>

            {/* Error Description */}
            <h2 className="mt-4 text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
                Page not found
            </h2>
            <p className="mt-4 text-slate-500 max-w-sm">
                Sorry, we couldn’t find the page you are looking for. Perhaps you mistyped the URL or the page has been moved.
            </p>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                    Go back home
                </Link>
                <Link
                    href="/products"
                    className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                    Browse products
                </Link>
            </div>
        </div>
    );
}
