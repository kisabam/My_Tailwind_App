import Image from 'next/image';

export default function Profile(){
return(
    <div className="flex flex-col items-center justify-center mt-[20px] mb-5">
        <Image src={'/images/dp.png'} alt={'Profile Picture'} className="rounded-full size-16" width={500} height={500}/>
    </div>
);
}
