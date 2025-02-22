import Application from "./application";
import Dashboard from "./dashboard";
import Logo from "./logo-icons";
import Dashboard_Menu from "./dashboard-menu";
import Profile from "./profile";

export default function Sidebar() {
    return (
        <aside className="fixed top-0 w-[280px] glass h-screen overflow-y-auto scrollbar-thin">
            <Logo />
            <Profile />
            <div className="mx-4">
                <Dashboard />
                <Dashboard_Menu />
            </div>
            <div className="mx-4">
                <Application />
                <Dashboard_Menu />
            </div>
            {/* <div className="m-3 bg-gray-400 h-[1px]"></div> */}
        </aside>
    );
}

