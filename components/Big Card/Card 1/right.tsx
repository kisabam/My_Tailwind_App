export default function RSide_Body_Card() {
return (
    <div className="mt-6 w-1/2 grid grid-flow-row gap-4">
        <h1 className="text-gray-600">Overview</h1>
        <div className="flex justify-between my-auto">
            <div className="bg-indigo-100 rounded-xl p-6 w-1/2 me-3 text-center">
                <p className="text-indigo-800 text-5xl font-bold trackin-[-5px]">214</p>
                <p className="text-indigo-700 font-medium">New Issues</p>
            </div>
            <div className="bg-green-100 rounded-xl p-6 text-center w-1/2">
                <p className="text-green-800 text-5xl font-bold">75</p>
                <p className="text-green-700 font-medium">Closed</p>
            </div>
        </div>
        <div className="flex">
            <div className="bg-gray-100 text-gray-500/80 rounded-xl p-6 w-1/2 me-3 text-center h-full">
                <p className="text-5xl font-bold trackin-[-5px]">3</p>
                <p className="font-medium text-sm">Fixed</p>
            </div>
            <div className="bg-gray-100 text-gray-500/80 rounded-xl p-6 w-1/2 me-3 text-center h-full">
                <p className="text-5xl font-bold trackin-[-5px]">4</p>
                <p className="font-medium text-sm">Won't Fix</p>
            </div>
            <div className="bg-gray-100 text-gray-500/80 rounded-xl p-6 w-1/2 me-3 text-center h-full">
                <p className="text-5xl font-bold trackin-[-5px]">8</p>
                <p className="font-medium text-sm">Re-opened</p>
            </div>
            <div className="bg-gray-100 text-gray-500/80 rounded-xl p-6 w-1/2 text-center h-full">
                <p className="text-5xl font-bold trackin-[-5px]">6</p>
                <p className="font-medium text-sm">Needs Triage</p>
            </div>
        </div>
    </div>
    );
}
