import React from 'react';
import DesktopSecondaryNav from './DesktopSecondaryNav'
import MobileSecondaryNav from './MobileSecondaryNav'

interface SideNavProps {
    isLeftOpen: boolean;
    setIsLeftOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LeftSide: React.FC<SideNavProps> = ({ isLeftOpen, setIsLeftOpen }) => {
    return (
        <aside className={`fixed top-0 left-0 h-screen w-50 above-mobile:w-80 bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out pl-6 pt-6 
    overflow-y-auto md:overflow-y-visible 
    ${isLeftOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
            <DesktopSecondaryNav />
            {
                isLeftOpen && <MobileSecondaryNav setIsLeftOpen={setIsLeftOpen} isLeftOpen={isLeftOpen} />
            }
        </aside>
    )
}

export default LeftSide