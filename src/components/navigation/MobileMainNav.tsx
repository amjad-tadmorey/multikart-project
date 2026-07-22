import { MAIN_NAV } from '@/app/lib/navData';
import { OpenTabsState } from '@/app/types/types';
import { RiAddLine, RiCloseLine, RiSubtractLine } from '@remixicon/react';
import React, { useState } from 'react';


interface MobileMainNaveProps {
    isRightOpen: boolean;
    setIsRightOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMainNav: React.FC<MobileMainNaveProps> = ({ isRightOpen, setIsRightOpen }) => {
    // Track open/closed states for the main links (home, feature, shop, blog)
    const [openMainTabs, setOpenMainTabs] = useState<OpenTabsState>({});
    // Track open/closed states for the deep nested links inside the feature grid
    const [openSubTabs, setOpenSubTabs] = useState<OpenTabsState>({});

    const toggleMainTab = (key: any) => {
        setOpenMainTabs(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const toggleSubTab = (idx: any) => {
        setOpenSubTabs(prev => ({ ...prev, [idx]: !prev[idx] }));
    };

    const handleClose = () => {
        setIsRightOpen(false);
    };

    return (
        <aside className={`fixed top-0 right-0 h-screen w-80 bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out p-6 overflow-y-auto ${isRightOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            {/* Header Title Area */}
            <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                <h2 className="font-bold text-lg text-dark">Menu</h2>
                <button onClick={handleClose} className="text-gray-500 hover:text-dark transition-colors duration-500 cursor-pointer">
                    <RiCloseLine size={24} />
                </button>
            </div>

            {/* Dynamic Link Menu List */}
            <div className="mt-6 flex flex-col gap-2">

                {/* 1. MANUAL FIXED HOME LINK */}
                <div className="border-b border-gray-50 pb-2">
                    <div className="flex items-center justify-between py-2">
                        <a href="/" onClick={handleClose} className="font-medium text-dark hover:text-brand relative transition-colors duration-500">Home</a>
                    </div>
                </div>

                {/* 2. DYNAMIC COMPLEX FEATURE ACCORDION */}
                {MAIN_NAV.feature && (
                    <div className="border-b border-gray-50 pb-2">
                        <div className="flex items-center justify-between py-2">
                            <span className="font-medium text-dark capitalize cursor-pointer" onClick={() => toggleMainTab('feature')}>Feature</span>
                            <button onClick={() => toggleMainTab('feature')} className="text-gray-400 hover:text-dark p-1 cursor-pointer">
                                {openMainTabs['feature'] ? <RiSubtractLine size={18} /> : <RiAddLine size={18} />}
                            </button>
                        </div>

                        <div className={`overflow-hidden transition-all duration-500 ease-in-out pl-4 flex flex-col gap-2 ${openMainTabs['feature'] ? 'max-h-375 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                            {MAIN_NAV.feature.map((subGroup, idx) => {
                                // Skip the image object if present in the data array
                                if (subGroup.img || !subGroup.title) return null;

                                return (
                                    <div key={idx} className="pb-1">
                                        <div className="flex items-center justify-between py-1">
                                            <span className="text-sm font-semibold text-gray-700 cursor-pointer" onClick={() => toggleSubTab(idx)}>{subGroup.title}</span>
                                            <button onClick={() => toggleSubTab(idx)} className="text-gray-400 hover:text-dark p-1 cursor-pointer">
                                                {openSubTabs[idx] ? <RiSubtractLine size={14} /> : <RiAddLine size={14} />}
                                            </button>
                                        </div>
                                        <div className={`overflow-hidden transition-all duration-300 ease-in-out pl-3 flex flex-col gap-1 ${openSubTabs[idx] ? 'max-h-60 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                                            {subGroup.links && subGroup.links.map((link, lIdx) => (
                                                <a key={lIdx} href={link.path || '#'} onClick={handleClose} className="text-xs text-gray-500 hover:text-brand transition-colors duration-300 py-1 flex items-center gap-2">
                                                    {link.title}
                                                    {link.isHot && <span className="text-[8px] bg-red-500 text-white font-bold px-1 rounded">HOT</span>}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* 3. DYNAMIC STANDARD SHOP ACCORDION */}
                {MAIN_NAV.shop && MAIN_NAV.shop.links && (
                    <div className="border-b border-gray-50 pb-2">
                        <div className="flex items-center justify-between py-2">
                            <span className="font-medium text-dark capitalize cursor-pointer" onClick={() => toggleMainTab('shop')}>Shop</span>
                            <button onClick={() => toggleMainTab('shop')} className="text-gray-400 hover:text-dark p-1 cursor-pointer">
                                {openMainTabs['shop'] ? <RiSubtractLine size={18} /> : <RiAddLine size={18} />}
                            </button>
                        </div>
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out pl-4 flex flex-col gap-2 ${openMainTabs['shop'] ? 'max-h-125 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                            {MAIN_NAV.shop.links.map((link, idx) => (
                                <a key={idx} href={link.path || '#'} onClick={handleClose} className="text-sm text-gray-600 hover:text-brand transition-colors duration-500 py-1 flex items-center gap-2">
                                    {link.title}
                                    {link.isHot && <span className="text-[8px] bg-red-500 text-white font-bold px-1 rounded">HOT</span>}
                                </a>
                            ))}
                        </div>
                    </div>
                )}

                {/* 4. DYNAMIC STANDARD BLOG ACCORDION */}
                {MAIN_NAV.blog && MAIN_NAV.blog.links && (
                    <div className="border-b border-gray-50 pb-2">
                        <div className="flex items-center justify-between py-2">
                            <span className="font-medium text-dark capitalize cursor-pointer" onClick={() => toggleMainTab('blog')}>Blog</span>
                            <button onClick={() => toggleMainTab('blog')} className="text-gray-400 hover:text-dark p-1 cursor-pointer">
                                {openMainTabs['blog'] ? <RiSubtractLine size={18} /> : <RiAddLine size={18} />}
                            </button>
                        </div>
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out pl-4 flex flex-col gap-2 ${openMainTabs['blog'] ? 'max-h-60 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                            {MAIN_NAV.blog.links.map((link, idx) => (
                                <a key={idx} href={link.path || '#'} onClick={handleClose} className="text-sm text-gray-600 hover:text-brand transition-colors duration-500 py-1 flex items-center gap-2">
                                    {link.title}
                                    {link.isHot && <span className="text-[8px] bg-red-500 text-white font-bold px-1 rounded">HOT</span>}
                                </a>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </aside>
    );
};

export default MobileMainNav;
