export default function Toggle_Screen(){
    return (
        <div className="button-container">
            <button className="hover:bg-gray-100 p-2 rounded-full text-gray-500" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                </svg>
            </button>
            <div className="tooltip absolute z-10 invisible opacity-0 bg-gray-800 rounded-md text-[10px] w-24 text-white">
                Toggle FullScreen
                <div className="tooltip-arrow"></div>
            </div>
        </div>
    );
}