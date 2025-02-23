"use client";

import LG_Card_1 from "@/components/Big Card/card1";
import LG_Card_2 from "@/components/Big Card/card2";
import LG_Card_3 from "@/components/Big Card/card3";
import Header from "@/components/Header";
import Header_Section from "@/components/Header-Section";
import Navigation from "@/components/Navigation";
import Sidebar from "@/components/Sidenav";
import SM_Card from "@/components/Small Card";

export default function Page() {
    return (
        <div className="grid grid-cols-[280px_1fr] grid-rows-[65px_1fr] h-screen">
            <Sidebar />
            <Header />
            <div className="bg-gray-100 col-start-2 row-start-2 overflow-auto">
                <Header_Section />
                <Navigation />
                <SM_Card />
                <LG_Card_1 />
                <div className="flex justify-center mb-5">
                    <LG_Card_2 />
                    <LG_Card_3 />
                </div>
            </div>
        </div>
    );
}
