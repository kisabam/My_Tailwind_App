import Buttons from "./buttons";
import Dropdown from "./dropdown";
import Profile from "./profile";
import Text_Header from "./text_header";

export default function Header_Section(){
return(
    <div className="bg-white p-4 border-b">
        <header className="flex justify-between items-center">
            <div className="flex justify-between">
                <Profile />
                <Text_Header />
            </div>
            <Buttons />
        </header>
        <Dropdown />
    </div>
);
}
