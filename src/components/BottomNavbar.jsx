import React from "react";
import { FaHome, FaHistory, FaHeadset, FaUser } from "react-icons/fa";
import {MdQrCode2} from "react-icons/md";
import {useLocation, useNavigate} from "react-router-dom";


const BottomNavigation = () => {

    const navigate = useNavigate();
    const location = useLocation().pathname;


    return (
        <div className="absolute bottom-0 z-50 h-20 w-full bg-transparent  flex justify-between items-center px-4 shadow-md">
            {/* Item */}
            <NavItem
                onClick={()=>navigate('/home')}
                icon={<FaHome size={24} />}
                label="Asosiy"
                active={location === "/home"}
            />
            <NavItem
                onClick={()=>navigate('/history')}
                icon={<FaHistory size={24} />}
                label="Tarix"
                active={location === "/history"}
            />
            {/* Center Item */}
            <div className="relative -top-5">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                    <MdQrCode2 size={39} color="white" />
                </div>
            </div>
            <NavItem
                onClick={()=>navigate('/support')}
                icon={<FaHeadset size={24} />}
                label="Yordam"
                active={location === "/support"}
            />
            <NavItem
                onClick={()=>navigate('/account')}
                icon={<FaUser size={24} />}
                label="Akkaunt"
                active={location === "/account"}
            />
        </div>
    );
};

const NavItem = ({ icon, label, active, onClick }) => (
    <div onClick={onClick} className="flex flex-col items-center font-semibold text-[14px]">
        <div className={active ? "text-blue-600" : "text-gray-400"}>{icon}</div>
        <span className={active ? "text-blue-600 " : "text-gray-400"}>
      {label}
    </span>
    </div>
);

export default BottomNavigation;
