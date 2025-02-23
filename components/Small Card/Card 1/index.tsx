import Card_Body from "./body";
import Card_Footer from "./footer";
import Card_Header from "./header";

export default function Card_1(){
    return(
        <div className="bg-white rounded-2xl shadow-md p-6 w-64 mx-auto">
            <Card_Header />
            <Card_Body />
            <Card_Footer />
        </div>
    );
}