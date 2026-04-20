import { Show } from "@clerk/react";
import { Gem, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { dummyCreationData } from "../assets/assets";
import CreationItem from "../components/CreationItem";

const DashBoard = () => {
    const [creations, setCreations] = useState([]);

    const getDashBoardData = async () => {
        setCreations(dummyCreationData);
    };

    useEffect(() => {
        getDashBoardData();
    }, []);

    return (
        <div className="h-full overflow-y-scroll p-6">
            <div className="flex justify-start gap-4 flex-wrap">
                {/* Total creations card */}
                <div className="flex justify-between items-center w-72 p-4 px-6 bg-white  rounded-xl border bnorder-gray-200">
                    <div className="text-slate-600">
                        <p className="text-sm">Total Creations</p>
                        <h2 className="text-sl font-semibold">
                            {creations.length}
                        </h2>
                    </div>
                    <div
                        className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#3588f2] to-[#0bb0d7] text-white flex 
                        items-center justify-center"
                    >
                        <Sparkles className="w-5 text-white" />
                    </div>
                </div>
                {/* Active Plan card */}
                <div className="flex justify-between items-center w-72 p-4 px-6 bg-white  rounded-xl border bnorder-gray-200">
                    <div className="text-slate-600">
                        <p className="text-sm">Active Plan</p>
                        <h2 className="text-sl font-semibold">
                            <Show
                                when={{ plan: "premium" }}
                                fallback={<span>Free</span>}
                            >
                                Premium
                            </Show>
                        </h2>
                    </div>
                    <div
                        className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#ff61c5] to-[#9e53ee] text-white flex 
                        items-center justify-center"
                    >
                        <Gem className="w-5 text-white" />
                    </div>
                </div>
            </div>
            <div className="space-y-3 ">
                <p className="mt-6 mb-4">Recent Creations</p>
                {creations.map((item)=> <CreationItem key={item.id} item={item}/>)}
            </div>
        </div>
    );
};

export default DashBoard;
