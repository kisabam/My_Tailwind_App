import Image from 'next/image';

export default function Profile(){
return(
    <div className="flex flex-col items-center justify-center mt-[20px] mb-5">
        <Image src={'/images/brian-hughes.jpg'} alt={'Profile Picture'} className="rounded-full size-24" width={500} height={500}/>
        <h1 className="text-white mt-4 font-medium text-[15px]">Brian Hughes</h1>
        <p className="text-slate-400 text-[14px] mt-1 font-medium">hughes.brian@company.com</p>
    </div>
);
}
