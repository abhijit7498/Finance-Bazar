import { Button } from "@/components/ui/button";
import { RiUserLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useContextFile } from "@/context/contextFile";

export default function Navabr() {
    const { handleLogout } = useContextFile();

    return (
        <div className='w-full bg-white h-16'>
            <div className='max-w-6xl mx-auto h-full px-4 flex justify-between items-center'>
                <div onClick={handleLogout} className="cursor-pointer">
                    <img src="/logo.png" alt="logo" className='w-42' />
                </div>
                <Link to="/myaccount/profile">
                    <Button size="sm" variant="secondary" className="text-blue-950 font-semibold flex gap-1">
                        <RiUserLine />
                        Amol
                    </Button>
                </Link>
            </div>
        </div>
    );
}