import Active_Item from "./active-item";
import Disabled_Basic from "./disabled-basic";
import Disabled_Collapse from "./disabled-collapse";
import Dropdown1 from "./dropdown1";
import Dropdown2 from "./dropdown2";
import Oval_Badge from "./oval-badge";
import Rectangle_Badge from "./rectangle-badge";
import Rounded_Badge from "./rounded-badge";
import Simple_Bagde from "./simple-badge";

export default function Navigation(){
    return(
        <div>
            <div className="mt-[55px] ms-3">
                <h1 className="uppercase text-indigo-400 text-[13px] font-medium">Navigation Features</h1>
                <p className="text-gray-400 text-[11.5px] font-semibold">Collapse levels & badge styles</p>
            </div>
            <Dropdown1 />
            <Dropdown2 />
            <Active_Item />
            <Disabled_Collapse />
            <Disabled_Basic />
            <Oval_Badge />
            <Rectangle_Badge />
            <Rounded_Badge />
            <Simple_Bagde />
        </div>
    );
}