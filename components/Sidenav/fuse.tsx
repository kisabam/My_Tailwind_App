import Image from 'next/image';

export default function Fuse(){
    return(
        <div className='flex items-center justify-center opacity-10 my-5'>
            <Image src={'/images/fuse.svg'} alt={'Fuse Picture'} className=" w-40" width={500} height={500}/>
        </div>
    );
}