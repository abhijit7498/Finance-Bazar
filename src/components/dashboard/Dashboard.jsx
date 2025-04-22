import { Outlet } from 'react-router-dom';
import Navabr from './Navabr';
import Sidebar from './Sidebar';

export default function Dashboard() {
    return (
        <div className='bg-[#f4f4f4] min-h-screen'>
            <Navabr />
            <div className='flex items-start gap-6 mt-12 max-w-6xl mx-auto px-6'>
                <div className='w-[260px] bg-white rounded-xl shadow-lg p-4'>
                    <Sidebar />
                </div>
                <div className='flex-1 py-1'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}