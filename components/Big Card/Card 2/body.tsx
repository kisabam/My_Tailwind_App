import Image from "next/image";

export default function Card_Body(){
    return(
        <div className="flex justify-center items-center mt-6">
            <Image src="/images/chart.png" width={"500"} height={"500"} alt={""} />
        </div>
    );
}