import { useState } from "react";
import Products from "./Product";
import Posts from "./Post";

const MainPage = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isGrid, setGrid] = useState(true);

    const children = {
        0: <Products isGrid={isGrid} />,
        1: <Posts isGrid={isGrid} />
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-800 via-gray-900 to-black text-white px-4 py-10">
            <div className="max-w-6xl mx-auto bg-white text-slate-900 rounded-3xl shadow-2xl p-8">
                <h1 className="text-4xl font-bold mb-8 text-center tracking-wide">🌟 Media Dashboard</h1>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                    <div className="flex gap-2">
                        <button
                            onClick={() => setGrid(true)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow ${isGrid ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}>
                            Grid View
                        </button>
                        <button
                            onClick={() => setGrid(false)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow ${!isGrid ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}>
                            List View
                        </button>
                    </div>

                    <div className="flex gap-2">
                        <button
                            onClick={() => setActiveTab(0)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow ${activeTab === 0 ? "bg-yellow-400 text-black" : "bg-gray-300 text-gray-800 hover:bg-gray-400"}`}>
                            🛍️ Products
                        </button>
                        <button
                            onClick={() => setActiveTab(1)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow ${activeTab === 1 ? "bg-yellow-400 text-black" : "bg-gray-300 text-gray-800 hover:bg-gray-400"}`}>
                            📝 Posts
                        </button>
                    </div>
                </div>

                <div>{children[activeTab]}</div>
            </div>
        </div>
    );
};

export default MainPage;
