import Dashboard from "./dashboard/";
import Logo from "./logo-icons";
import Profile from "./profile";
import Navigation from "./navigation";
import Fuse from "./fuse";

export default function Sidebar() {
    return (
        <aside className="fixed top-0 w-[280px] glass h-screen overflow-y-auto scrollbar-thin row-span-2">
            <Logo />
            <Profile />
            <div className="mx-4">
                <Dashboard />
            </div>
            <div className="mx-4">
                <Navigation />
            </div>
            <Fuse />
        </aside>
    );
}

