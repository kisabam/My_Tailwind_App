import Link from "next/link";

export default function Navigation(){
    return(
        <nav className="but flex bg-gray-100 border border-b-2 border-t-0 border-r-0 border-l-0 mx-[30px] mt-5 border-gray-300 ">
            <Link href="" className="border border-b-2 border-t-0 border-r-0 border-l-0 border-indigo-700 px-6 py-3 my-auto text-indigo-700 font-semibold hover:bg-indigo-100/50">
                Home
            </Link>
            <Link href="" className="px-6 py-3 my-auto text-gray-500/80 hover:texr-gray-600 font-semibold hover:bg-indigo-100/50">
                Budget
            </Link>
            <Link href="" className="px-6 py-3 my-auto text-gray-500/80 hover:texr-gray-600 font-semibold hover:bg-indigo-100/50 flex">
                Team
                <span className="my-auto bg-indigo-100 text-gray-600 text-xs ms-3 flex items-center justify-center w-6 h-6 rounded-full">9</span>
            </Link>
        </nav>
    );
}