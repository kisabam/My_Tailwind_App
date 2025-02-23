export default function Card_Header(){
    return(
        <div className="flex justify-between items-center">
            <h3 className="text-gray-700 font-semibold text-lg">Task Distribution</h3>
            <div className="flex gap-2 p-1">
                <button className="px-4 py-2 text-gray-600">Last Week</button>
                <button className="px-4 py-2 bg-gray-300 text-gray-600 font-medium rounded-full shadow-inner flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                        stroke="currentColor" className="size-6 me-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    This Week
                </button>
            </div>
        </div>
    );
}
