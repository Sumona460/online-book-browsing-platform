

const Rating = () => {
    return (
        <div className="w-full bg-gradient-to-r from-yellow-600 via-red-600 to-pink-900 py-10">
      <div className="max-w-5xl mx-auto flex items-center justify-between text-white text-center">
        
        {/* Item 1 */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold">50K+</h2>
          <p className="mt-2 text-sm opacity-80">Active Users</p>
        </div>

        {/* Divider */}
        <div className="h-12 w-px bg-white opacity-30"></div>

        {/* Item 2 */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold">200+</h2>
          <p className="mt-2 text-sm opacity-80">Premium Tools</p>
        </div>

        {/* Divider */}
        <div className="h-12 w-px bg-white opacity-30"></div>

        {/* Item 3 */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold">4.9</h2>
          <p className="mt-2 text-sm opacity-80">Rating</p>
        </div>

      </div>
    </div>
  );
}

export default Rating;