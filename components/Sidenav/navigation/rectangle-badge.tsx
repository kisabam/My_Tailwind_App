import Link from "next/link";

export default function Rectangle_Badge() {
    return (
        <nav className="items-center duration-300 cursor-pointer hover:text-gray-500 font-bold">
            <Link href="" className="flex text-gray-400 hover:text-gray-100 hover:bg-gray-700/75 rounded-md my-1 h-[40px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 ms-4 mt-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                </svg>
                <h1 className="ms-5 font-[500] text-[14px] mt-2">Rectangle Badge</h1>
                <span className="ml-auto mt-2.5 bg-teal-400 text-black text-[10px] font-medium me-2 flex items-center justify-center w-[50px] h-5 rounded-sm">Updated!</span>
            </Link>
        </nav>
    );
}