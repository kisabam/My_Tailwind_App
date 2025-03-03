import Dashboard_Menu from "./dashboard-menu";

export default function Dashboard(){
    return(
        <div>
            <div className="mt-[55px] ms-3">
                <h1 className="uppercase text-indigo-400 text-[13px] font-medium">Dashboards</h1>
                <p className="text-gray-400 text-[11.5px] font-semibold">Unique dashboards design</p>
            </div>
            <Dashboard_Menu />
        </div>
    );
}