'use client'
import Link from "next/link"

const StoreNavbar = () => {


    return (
        <div className="sticky top-0 z-30 flex items-center justify-between px-12 py-3 border-b border-slate-700/70 bg-slate-900/90 backdrop-blur-lg shadow-lg shadow-indigo-500/20 transition-all">
            <Link href="/" className="relative text-4xl font-semibold text-slate-100 transition-transform duration-300 hover:scale-[1.04]">
                <span className="text-green-600">go</span>cart<span className="text-green-600 text-5xl leading-0">.</span>
                <p className="absolute text-xs font-semibold -top-1 -right-11 px-3 p-0.5 rounded-full flex items-center gap-2 text-white bg-green-500 animate-pulse">
                    Store
                </p>
            </Link>
            <div className="flex items-center gap-3 text-slate-100">
                <p className="font-medium tracking-wide animate-pulse">Hi, Seller</p>
            </div>
        </div>
    )
}

export default StoreNavbar