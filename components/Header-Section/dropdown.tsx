export default function Dropdown() {
return (
    <div className="mt-5 ms-5 mb-[-17px]">
        <input type="checkbox" id="dropdown-toggle" className="hidden peer" />
        <div className="w-[270px] flex rounded-t-2xl py-2 px-4 border border-b-0 but z-1 text-center text-gray-700 transition-all cursor-pointer font-semibold">
            <label htmlFor="dropdown-toggle">
                ACME Corp. Backend App
            </label>
            <span className="ms-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-gray-400 my-auto" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </span>
        </div>
        <ul className="absolute z-40 min-w-[180px] overflow-auto rounded-lg border border-slate-200 bg-white p-1.5 shadow-lg invisible opacity-0 transition-opacity duration-200 peer-checked:visible peer-checked:opacity-100">
            <li role="menuitem"
                className="cursor-pointer text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 text-md">
                ACME Corp. Backend App
            </li>
            <li role="menuitem"
                className="cursor-pointer text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 text-md">
                ACME Corp. Frontend App
            </li>
            <li role="menuitem"
                className="cursor-pointer text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 text-md">
                Creapond
            </li>
            <li role="menuitem"
                className="cursor-pointer text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 text-md">
                Withinpixels
            </li>
        </ul>
    </div>
);
}
