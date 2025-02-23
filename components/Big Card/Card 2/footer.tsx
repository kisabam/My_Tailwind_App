export default function Card_Footer(){
    return(
        <div className="flex justify-between p-5 rounded-b-2xl border border-t-0 but shadow-md">
            <div className="text-center w-1/2">
                <p className="text-2xl font-bold text-gray-800">594</p>
                <p className="text-gray-600 text-sm">New tasks</p>
            </div>
            <div className="text-center w-1/2">
                <p className="text-2xl font-bold text-gray-800">287</p>
                <p className="text-gray-600 text-sm">Completed tasks</p>
            </div>
        </div>
    );
}
