import Card_Body from "./body";
import Card_Footer from "./footer";
import Card_Header from "./header";

export default function Card_2(){
    return(
        <div className="bg-white rounded-t-2xl p-6">
            <Card_Header />
            <Card_Body />
            <div className="hidden">
                <Card_Footer />
            </div>
        </div>
    );
}
