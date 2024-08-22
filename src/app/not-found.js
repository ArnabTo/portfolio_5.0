


export default async function NotFound() {
    return (
        <div>
            <div className="text-white flex flex-col animate-pulse justify-center items-center h-screen gap-3">
                <span className="text-7xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">404!</span>
                <p className="text-gray-400 text-7xl font-extrabold">Sorry, Page Not Found</p>
                <a href="/" className="text-4xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mt-5">Go Back  </a>
            </div>
        </div>
    )
}

