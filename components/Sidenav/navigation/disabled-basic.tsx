import Link from "next/link";

export default function Disabled_Basic() {
    return (
        <nav className="items-center duration-300">
            <Link href="" className="flex rounded-md my-1 h-[50px] pointer-events-none text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor" className="size-6 ms-4 my-auto">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <div>
                    <h1 className="ms-5 font-[500] text-[14px] mt-2">Disabled Basic</h1>
                    <p className="ms-5 font-[500] text-[11px]">Some Subtitle</p>
                </div>
            </Link>
        </nav>
    );
}