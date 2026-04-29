import Link from 'next/link';

const NotFound = () => {
    return (
       <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-6">
      
      <div className="text-center max-w-md w-full">
        
        {/* 404 Title */}
        <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-yellow-500 to-red-500 text-transparent bg-clip-text">
          404
        </h1>

        {/* Message */}
        <h2 className="mt-4 text-xl font-semibold text-gray-200">
          Page not found
        </h2>

        <p className="mt-2 text-gray-400 text-sm">
          Sorry, we couldn't find the page you're looking for.
        </p>

        {/* Button */}
        <Link href="/">
          <button className="mt-6 w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition-colors">
            Go back home
          </button>
        </Link>

        {/* Divider */}
        <div className="my-6 border-t border-gray-800"></div>

        {/* Extra links */}
        <div className="flex justify-center gap-4 text-sm text-gray-400">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        </div>

      </div>
    </div>
    );
};

export default NotFound;