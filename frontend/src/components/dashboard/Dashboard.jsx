import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useState } from 'react';

export default function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className='bg-[#f4f4f4] min-h-screen'>
            <Navbar setSidebarOpen={setSidebarOpen} />
            <div className='flex items-start gap-6 mt-8 pt-16 max-w-6xl mx-auto'>
                {/* Sidebar */}
                <div className={`fixed sm:static z-50 sm:z-0 top-0 left-0 h-full bg-white shadow-lg transition-transform transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 w-[260px] sm:rounded-xl p-4`}>
                    <Sidebar setSidebarOpen={setSidebarOpen} />
                </div>

                {/* Content Area */}
                <div className='flex-1 py-1'>
                    <Outlet />
                </div>
            </div>

            {/* Overlay on mobile when sidebar is open */}
            {sidebarOpen && (
                <div
                    onClick={() => setSidebarOpen(false)}
                    className="fixed inset-0 bg-black opacity-40 sm:hidden z-40"
                />
            )}
        </div>
    );
}
