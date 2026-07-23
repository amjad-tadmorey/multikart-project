import { RiHeartFill, RiPhoneFill, RiUser3Fill } from '@remixicon/react'
import React from 'react'

const TopHeader = () => {
    return (
        <div className="hidden above-mobile:flex items-center justify-between bg-dark text-light px-4 md:px-30 text-sm">
            <div className="flex items-center">
                <p className="py-2.5 pr-6 hidden sm:block">Welcome to Our store Multikart</p>
                <p className="flex items-center py-2.5">
                    <RiPhoneFill size={16} className="text-brand shrink-0 mr-2" />
                    Call Us: 123 - 456 - 7890
                </p>
            </div>
            <div className="flex items-center">
                <RiHeartFill size={16} className="text-light hover:scale-110 transition-transform duration-500 cursor-pointer" />
                <p className="flex items-center gap-2 pl-8 py-2.5">
                    <RiUser3Fill className="text-light" size={16} />
                    My Account
                </p>
            </div>
        </div>
    )
}

export default TopHeader