import Link from "next/link";

export default function Dropdown1() {
return (
    <nav className="items-center cursor-pointer hover:text-gray-500 font-bold mt-[20px]">
        <details className="group h-auto w-auto overflow-hidden transition-all duration-300 ease-in-out">
            <summary
                className="flex items-center text-gray-300 hover:text-gray-100 hover:bg-gray-700/75 h-[40px] rounded-md cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor" className="size-6 ms-4">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <h1 className="ms-5 font-[500] text-[14px]">Level 0</h1>
                <span className="ml-auto shrink-0 transition-transform duration-300 group-open:rotate-180 me-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd" />
                    </svg>
                </span>
            </summary>

            <div
                className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-open:max-h-[500px] opacity-0 group-open:opacity-100">
                <nav className="flex flex-col">
                    <details className="group h-auto w-auto my-1">
                        <summary
                            className="flex items-center text-gray-300 hover:text-gray-100 hover:bg-gray-700/75 h-[40px] rounded-md cursor-pointer">
                            <h1 className="ms-[60px] font-[500] text-[14px]">Level 1</h1>
                            <span className="ml-auto shrink-0 transition-transform duration-300 group-open:rotate-180 me-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd" />
                                </svg>
                            </span>
                        </summary>

                        <div
                            className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-open:max-h-[500px] opacity-0 group-open:opacity-100">
                            <nav className="flex flex-col">
                                <details className="group h-auto w-auto my-1">
                                    <summary
                                        className="flex items-center text-gray-300 hover:text-gray-100 hover:bg-gray-700/75 h-[40px] rounded-md cursor-pointer">
                                        <h1 className="ms-[70px] font-[500] text-[14px]">Level 2</h1>
                                        <span
                                            className="ml-auto shrink-0 transition-transform duration-300 group-open:rotate-180 me-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>

                                    <div
                                        className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-open:max-h-[500px] opacity-0 group-open:opacity-100">
                                        <nav className="flex flex-col">
                                            <details className="group h-auto w-auto my-1">
                                                <summary
                                                    className="flex items-center text-gray-300 hover:text-gray-100 hover:bg-gray-700/75 h-[40px] rounded-md cursor-pointer">
                                                    <h1 className="ms-[80px] font-[500] text-[14px]">Level 3</h1>
                                                    <span
                                                        className="ml-auto shrink-0 transition-transform duration-300 group-open:rotate-180 me-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                                            viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd"
                                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                clipRule="evenodd" />
                                                        </svg>
                                                    </span>
                                                </summary>

                                                <div
                                                    className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-open:max-h-[500px] opacity-0 group-open:opacity-100">
                                                    <nav className="flex flex-col">
                                                        <Link href=""
                                                            className="flex text-gray-300 hover:text-gray-100 hover:bg-gray-700/75 h-[40px] rounded-md my-1">
                                                        <h1 className="ms-[80px] font-[500] text-[14px] mt-2">
                                                            Level 4
                                                        </h1>
                                                        </Link>
                                                    </nav>
                                                </div>
                                            </details>
                                        </nav>
                                    </div>
                                </details>
                            </nav>
                        </div>
                    </details>
                </nav>
            </div>
        </details>
    </nav>
);
}
