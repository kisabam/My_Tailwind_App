import Bars from "./bars";
import Country from "./country";
import Message_Icon from "./message-icon";
import Search from "./search";
import Shortcut from "./shortcut";
import Toggle_Screen from "./toggle-screen";

export default function Header(){
return (
    <header className="bg-white shadow-md h-[65px] mt-1 p-4 flex justify-between items-center col-start-2 z-40">
      <div className="">
        <Bars />
      </div>
      <div className="flex space-x-4">
        <Country />
        <Toggle_Screen />
        <Search />
        <Shortcut />
        <Message_Icon />
      </div>
    </header>
);
}
