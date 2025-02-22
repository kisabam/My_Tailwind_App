import Dashboard from "./dashboard/";
import Logo from "./logo-icons";
import Profile from "./profile";
import Navigation from "./navigation";

export default function Sidebar() {
    return (
        <aside className="fixed top-0 w-[280px] glass h-screen overflow-y-auto scrollbar-thin">
            <Logo />
            <Profile />
            <div className="mx-4">
                <Dashboard />
            </div>
            <div className="mx-4">
                <Navigation />
            </div>
        </aside>
    );
}

