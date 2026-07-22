import { MAIN_NAV } from '@/app/lib/navData';
import { RiArrowDownSLine, RiTriangleFill } from '@remixicon/react';


const DesktopMainNav = () => {
    return (
        <nav className=" hidden special:flex items-center gap-8 text-sm font-semibold text-dark">

            {/* HOME */}
            <div className="group py-3">
                <a href="/" className="hover:text-brand transition-colors duration-500">Home</a>
            </div>

            {/* FEATURE */}
            <div className="group py-3">
                <a href="/" className="hover:text-brand transition-colors duration-500 flex items-center">Feature <RiArrowDownSLine size={16} /></a>
                <div className="absolute top-24 left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500 ease-in-out z-50 pointer-events-none group-hover:pointer-events-auto">
                    <div className="grid grid-cols-6 grid-rows-[180px_40px_auto] w-275 max-w-6xl bg-white border border-gray-100 shadow-2xl rounded-md p-8 gap-6 text-left">
                        {
                            MAIN_NAV.feature.map((main) => <div key={main.title} className={`${main.gridSpace} `}>
                                {
                                    !main.img && <>
                                        <h4 className="text-sm font-bold text-dark mb-3 relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-8 after:h-0.5 after:bg-brand">
                                            {main.title}
                                        </h4>
                                        <div className="flex flex-col gap-2 mt-4 text-xs font-normal text-gray-500">
                                            {
                                                main?.links?.map(link => <a href={link.path} className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    {link.title}
                                                </a>)
                                            }
                                        </div>
                                    </>
                                }
                                {
                                    main.img && <img src={main.img} alt="" />
                                }
                            </div>
                            )
                        }
                    </div>
                </div>
            </div>

            {/* SHOP */}
            <div className="group py-3 relative">
                <a href="/" className="hover:text-brand transition-colors duration-500 flex items-center">Shop <RiArrowDownSLine size={16} /></a>
                <div className="absolute top-10 left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500 ease-in-out z-50 pointer-events-none group-hover:pointer-events-auto">
                    <div className="w-60 max-w-6xl max-h-96 overflow-y-auto bg-white border border-gray-100 shadow-2xl rounded-md py-6 px-8 flex flex-col gap-5 parent-link relative">
                        <div className="flex flex-col gap-4 text-xs font-normal text-gray-500">
                            {
                                MAIN_NAV.shop.links.map(link =>
                                    <a key={link.title} href={link.path} className="hover:text-brand text-sm group/text relative transition-colors duration-500">
                                        <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                        {link.title}
                                    </a>
                                )
                            }
                        </div>
                        <RiTriangleFill className="rotate-180 opacity-0 sub-link fixed bottom-0 bg-white self-center text-brand" size={12} />
                    </div>
                </div>
            </div>

            {/* PRODUCTS */}
            <div className="group py-3">
                <a href="/" className="hover:text-brand transition-colors duration-500 flex items-center">Product <RiArrowDownSLine size={16} /></a>
                <div className="absolute top-24 left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500 ease-in-out z-50 pointer-events-none group-hover:pointer-events-auto">
                    <div className="grid grid-cols-5 grid-rows-2 w-275 max-w-6xl bg-white border border-gray-100 shadow-2xl rounded-md p-8 gap-6 text-left">
                        {
                            MAIN_NAV.product.map(main => <div key={main.title} className={`${main.gridSpace} `}>
                                {
                                    !main.img && <>
                                        <h4 className="text-sm font-bold text-dark mb-3 relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-8 after:h-0.5 after:bg-brand">
                                            {main.title}
                                        </h4>
                                        <div className="flex flex-col gap-2 mt-4 text-xs font-normal text-gray-500">
                                            {
                                                main?.links?.map(link => <a href={link.path} className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    {link.title}
                                                </a>)
                                            }
                                        </div>
                                    </>
                                }
                                {
                                    main.img && <img src={main.img} alt="" />
                                }
                            </div>
                            )
                        }
                    </div>
                </div>
            </div>

            {/* PAGES */}
            <div className="group py-3 relative">
                <a href="/" className="hover:text-brand transition-colors duration-500 flex items-center gap-1">
                    Pages <RiArrowDownSLine size={16} />
                </a>

                {/* Absolute bridge positioning container sitting safely below the header item */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500 ease-in-out z-50 pointer-events-none group-hover:pointer-events-auto">

                    {/* Main Base Card. Using 'overflow-x-visible' ensures nested hover states can float sideways safely */}
                    <div className="w-64 py-4 px-4 overflow-x-visible relative">
                        <div className="flex flex-col text-xs font-normal text-gray-500">
                            <div className="flex flex-col text-xs font-normal text-gray-500 w-64 bg-white p-2 rounded-md shadow-md">
                                {MAIN_NAV.pages.map((l1) => (
                                    /* LEVEL 1 WRAPPER */
                                    <div key={l1.title} className="relative group/level2 w-full">

                                        {/* Level 1 Trigger Text */}
                                        <div className="flex items-center justify-between px-3 py-2 text-dark hover:bg-gray-50 hover:text-brand rounded-md transition-colors duration-300 cursor-pointer">
                                            <span className="text-sm font-medium">{l1.title}</span>
                                            <span className="text-gray-400 text-[10px] transform group-hover/level2:translate-x-1 transition-transform duration-300">→</span>
                                        </div>

                                        {/* LEVEL 2 CARD CONTAINER */}
                                        {l1.links && (
                                            <div className="absolute top-0 left-full pl-3 opacity-0 invisible translate-x-2 group-hover/level2:opacity-100 group-hover/level2:visible group-hover/level2:translate-x-0 transition-all duration-500 ease-in-out z-50 pointer-events-none group-hover/level2:pointer-events-auto">
                                                <div className="w-52 bg-white border border-gray-100 shadow-xl rounded-md p-3 flex flex-col gap-1">

                                                    {l1.links.map((l2) => {
                                                        // If this Level 2 item has a Level 3 menu (subLinks)
                                                        if (l2.subLinks) {
                                                            return (
                                                                <div key={l2.title} className="relative group/level3 w-full">

                                                                    {/* Level 2 Trigger for Level 3 */}
                                                                    <div className="flex items-center justify-between px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-50 hover:text-brand rounded transition-colors duration-300 cursor-pointer">
                                                                        <span className="font-medium">{l2.title}</span>
                                                                        <span className="text-gray-400 text-[10px] transform group-hover/level3:translate-x-1 transition-transform duration-300">→</span>
                                                                    </div>

                                                                    {/* LEVEL 3 CARD CONTAINER */}
                                                                    <div className="absolute top-0 right-full pl-3 opacity-0 invisible translate-x-2 group-hover/level3:opacity-100 group-hover/level3:visible group-hover/level3:translate-x-0 transition-all duration-500 ease-in-out z-50 pointer-events-none group-hover/level3:pointer-events-auto">
                                                                        <div className="w-52 bg-white border border-gray-100 shadow-xl rounded-md p-3 flex flex-col gap-1">
                                                                            {l2.subLinks.map((l3) => (
                                                                                <a
                                                                                    key={l3.title}
                                                                                    href={l3.path}
                                                                                    className="px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-50 hover:text-brand rounded transition-colors duration-300"
                                                                                >
                                                                                    {l3.title}
                                                                                </a>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }

                                                        // Standard Level 2 Link (e.g. Vendor items)
                                                        return (
                                                            <a
                                                                key={l2.title}
                                                                href={l2.path}
                                                                className="px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-50 hover:text-brand rounded transition-colors duration-300"
                                                            >
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
                </div>
            </div>

            {/* 5. BLOG */}
            <div className="group py-3 relative">
                <a href="/" className="hover:text-brand transition-colors duration-500 flex items-center">Blog <RiArrowDownSLine size={16} /></a>
                <div className="absolute top-10 left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500 ease-in-out z-50 pointer-events-none group-hover:pointer-events-auto">
                    <div className="w-60 max-w-6xl max-h-96 overflow-y-auto bg-white border border-gray-100 shadow-2xl rounded-md py-6 px-8 flex flex-col gap-5 parent-link relative">
                        <div className="flex flex-col gap-4 text-xs font-normal text-gray-500">
                            {
                                MAIN_NAV.blog.links.map(link =>
                                    <a key={link.title} href={link.path} className="hover:text-brand text-sm group/text relative transition-colors duration-500">
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

        </nav>
    )
}

export default DesktopMainNav