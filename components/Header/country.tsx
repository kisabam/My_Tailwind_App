import Image from 'next/image';

export default function Country(){
    return (
        <div>
            <button className="text-white hover:bg-gray-100 p-2 rounded-full">
                <Image src={'/images/flag.png'} alt={'Flag Picture'} className=" size-6" width={500} height={500}/>
            </button>
        </div>
    );
}