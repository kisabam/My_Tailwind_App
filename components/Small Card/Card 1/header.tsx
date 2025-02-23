export default function Card_Header(){
return(
    <div className="flex justify-between">
        <h2 className="text-gray-700 font-semibold my-auto">Summary</h2>
        <button className="text-gray-500/80 rounded-full hover:bg-gray-200 p-2 my-auto me-[-10px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd"
                    d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                    clipRule="evenodd" />
            </svg>
        </button>
    </div>
    );
}
