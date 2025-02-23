import Image from "next/image";

export default function LSide_Body_Card(){
    return(
        <div className="mt-[30px] w-1/2">
            <h1 className="text-gray-600 ms-5">New vs. Closed</h1>
            <Image src="/images/graph.png" className=" h-auto me-auto" width={500} height={500} alt={"Graph Picture"} />
        </div>
    );
}