import { SECONDARY_NAV } from '@/lib/navData';
import { RiArrowDownSLine, RiTriangleFill } from '@remixicon/react';


const DesktopSecondaryNav = () => {
    return (
        <nav className="hidden special:block">

            {/* HOME */}
            <div className="group py-3">
                <a href="/" className="hover:text-brand transition-colors duration-500">Home</a>
            </div>

            {/* FEATURE */}
            <div className="group py-3">
                <a href="/" className="hover:text-brand transition-colors duration-500 flex justify-between items-center">Feature <RiArrowDownSLine className='rotate-270' size={22} /></a>
                <div className="absolute left-60 top-0 pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500 ease-in-out z-50 pointer-events-none group-hover:pointer-events-auto">
                    <div className="grid grid-cols-3 grid-rows-3 h-120 w-275 max-w-6xl bg-white border border-gray-100 shadow-2xl rounded-md p-8 gap-6 text-left">
                        {
                            SECONDARY_NAV.feature.map((main) => <div key={main.id} className={`${main.gridSpace} `}>
                                {
                                    !main.img && <>
                                        <h4 className="text-lg font-bold text-dark mb-3 relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-8 after:h-0.5 after:bg-brand">
                                            {main.title}
                                        </h4>
                                        <div className="flex flex-col gap-2 mt-4 text-md font-normal text-gray-500">
                                            {
                                                main?.links?.map(link => <a key={link.id} href={link.path} className="hover:text-brand text-md group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    {link.title}
                                                </a>)
                                            }
                                        </div>
                                    </>
                                }
                                {
                                    main.img &&
                                    <img src={main.img} alt="" className='w-full h-full' />

                                }
                            </div>
                            )
                        }
                    </div>
                </div>
            </div>

            {/* 5. BLOG */}
            <div className="group py-3 relative">
                <a href="/" className="hover:text-brand transition-colors duration-500 flex justify-between items-center">Blog <RiArrowDownSLine className='rotate-270' size={22} /></a>
                <div className="absolute top-0 left-70 pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500 ease-in-out z-50 pointer-events-none group-hover:pointer-events-auto">
                    <div className="w-60 max-w-6xl max-h-96 overflow-y-auto bg-white border border-gray-100 shadow-2xl rounded-md py-6 px-8 flex flex-col gap-5 parent-link relative">
                        <div className="flex flex-col gap-4 text-xs font-normal text-gray-500">
                            {
                                SECONDARY_NAV.blog.links.map(link =>
                                    <a key={link.id} href={link.path} className="hover:text-brand text-sm group/text relative transition-colors duration-500">
                                        <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                        {link.title}
                                    </a>
                                )
                            }
                        </div>
                        {/* <RiTriangleFill className="rotate-180 opacity-0 sub-link fixed bottom-0 bg-white self-center text-brand" size={12} /> */}
                    </div>
                </div>
            </div>

            {/* PAGES */}
            {/* 5. PAGES */}
            <div className="group py-3 relative">
                <a href="/" className="hover:text-brand transition-colors duration-500 flex items-center gap-0.5">
                    Pages <RiArrowDownSLine size={16} />
                </a>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500 ease-in-out z-50 pointer-events-none group-hover:pointer-events-auto">
                    <div className="w-64 bg-white border border-gray-100 shadow-2xl rounded-md p-2 flex flex-col text-xs font-normal text-gray-500 text-left">
                        {SECONDARY_NAV.pages && SECONDARY_NAV.pages.map((l1: any, index: number) => (
                            /* LEVEL 1 ITEM WRAPPER */
                            <div key={l1.id || index} className="relative group/level2 w-full">

                                {/* Level 1 Item Content Row */}
                                <div className="flex items-center justify-between px-3 py-2 text-dark hover:bg-gray-50 hover:text-brand rounded-md transition-colors duration-300 cursor-pointer">
                                    <span className="text-sm font-medium">{l1.title}</span>
                                    {l1.links && <span className="text-gray-400 text-[10px] transform group-hover/level2:translate-x-1 transition-transform duration-300">→</span>}
                                </div>

                                {/* LEVEL 2 DROP CARD PANEL */}
                                {l1.links && (
                                    <div className="absolute top-0 left-full pl-3 opacity-0 invisible translate-x-2 group-hover/level2:opacity-100 group-hover/level2:visible group-hover/level2:translate-x-0 transition-all duration-500 ease-in-out z-50 pointer-events-none group-hover/level2:pointer-events-auto">
                                        <div className="w-52 bg-white border border-gray-100 shadow-xl rounded-md p-3 flex flex-col gap-1 text-left">
                                            {l1.links.map((l2: any, l2Idx: number) => {
                                                // Check if it's a menu with deeper subLinks
                                                if (l2 && typeof l2 === 'object' && 'subLinks' in l2) {
                                                    return (
                                                        <div key={l2.id || l2Idx} className="relative group/level3 w-full">

                                                            {/* Level 2 Sub-trigger element */}
                                                            <div className="flex items-center justify-between px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-50 hover:text-brand rounded transition-colors duration-300 cursor-pointer">
                                                                <span className="font-medium">{l2.title}</span>
                                                                <span className="text-gray-400 text-[10px] transform group-hover/level3:translate-x-1 transition-transform duration-300">→</span>
                                                            </div>

                                                            {/* LEVEL 3 EXPANSION PANEL CARD */}
                                                            <div className="absolute top-0 left-full pl-3 opacity-0 invisible translate-x-2 group-hover/level3:opacity-100 group-hover/level3:visible group-hover/level3:translate-x-0 transition-all duration-500 ease-in-out z-50 pointer-events-none group-hover/level3:pointer-events-auto">
                                                                <div className="w-52 bg-white border border-gray-100 shadow-xl rounded-md p-3 flex flex-col gap-1">
                                                                    {l2.subLinks && l2.subLinks.map((l3: any, l3Idx: number) => (
                                                                        <a key={l3Idx} href={l3.path} className="px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-50 hover:text-brand rounded transition-colors duration-300">
                                                                            {l3.title}
                                                                        </a>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                }

                                                // Clean Plain Standard Anchor Link for Level 2
                                                return (
                                                    <a key={l2Idx} href={l2.path} className="px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-50 hover:text-brand rounded transition-colors duration-300">
                                                        {l2.title}
                                                    </a>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </nav>
    )
}

export default DesktopSecondaryNav