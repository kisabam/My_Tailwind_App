import Image from 'next/image';

export default function Logo() {
return (
    <div className="flex justify-between p-4 mb-5">
        <Image src={'/images/logo.svg'} alt={'Logo Picture'} className="w-[50px] h-[32px] me-3 mt-1" width={500} height={500}/>
        <div className="relative mt-2">
            <button className="relative mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                    className="size-6 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
            </button>
            <span className="bg-teal-600 text-[11px] px-[6px] rounded-full text-white font-semibold absolute ms-[-20px] mt-[-5px] text-center">3</span>
            <button className="ms-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor" className="size-6 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
            </button>
            <span className="bg-green-500 text-[5px] px-[4px] rounded-full ms-[-10px]"></span>
        </div>
    </div>
);
}
