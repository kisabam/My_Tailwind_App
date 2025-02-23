import Card_1 from "./Card 1";
import Card_2 from "./Card 2";
import Card_3 from "./Card 3";
import Card_4 from "./Card 4";

export default function SM_Card(){
    return(
        <div className="flex justify-center mt-5 w-full">
            <Card_1 />
            <Card_2 />
            <Card_3 />
            <Card_4 />
        </div>
    );
}