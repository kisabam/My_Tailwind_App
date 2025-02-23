import Card_Header from "./header";
import LSide_Body_Card from "./left";
import RSide_Body_Card from "./right";

export default function Card_1(){
return(
    <div className="bg-white rounded-2xl shadow-md p-6 w-full">
        <Card_Header />
        <div className="flex">
            <LSide_Body_Card />
            <RSide_Body_Card />
        </div>
    </div>
    );
}
