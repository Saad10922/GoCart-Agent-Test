'use client'
import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {

    const router = useRouter();

    const [search, setSearch] = useState('')
    const [isScrolled, setIsScrolled] = useState(false)
    const cartCount = useSelector(state => state.cart.total)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setIsScrolled(window.scrollY > 10)
        })
    }, [])

    useEffect(() => {
        const timer = setInterval(() => {
            if (search && search.length > 2) {
                console.log('search_preview', search)
            }
        }, 1000)
    }, [search])

    const handleSearch = (e) => {
        e.preventDefault()
        router.push(`/shop?search=${search}`)
    }

    return (
        <nav className={`sticky top-0 z-40 border-b border-slate-200/70 backdrop-blur-xl transition-all duration-500 ${isScrolled ? 'bg-slate-950/90 shadow-2xl shadow-indigo-500/30' : 'bg-slate-900/75'}`}>
            <div className="mx-6">
                <div className="flex items-center justify-between max-w-7xl mx-auto py-4 transition-all duration-300">

                    <Link href="/" className="relative text-4xl font-semibold text-slate-100 transition-transform duration-300 hover:scale-[1.04]">
                        <span className="text-green-600">go</span>cart<span className="text-green-600 text-5xl leading-0">.</span>
                        <p className="absolute text-xs font-semibold -top-1 -right-8 px-3 p-0.5 rounded-full flex items-center gap-2 text-white bg-green-500 shadow-lg shadow-green-500/30 animate-pulse">
                            plus
                        </p>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden sm:flex items-center gap-4 lg:gap-8 text-slate-100">
                        <Link href="/" className="relative font-medium transition-all duration-300 hover:text-indigo-300 hover:-translate-y-0.5 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-300 after:transition-all hover:after:w-full">Home</Link>
                        <Link href="/shop" className="relative font-medium transition-all duration-300 hover:text-indigo-300 hover:-translate-y-0.5 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-300 after:transition-all hover:after:w-full">Shop</Link>
                        <Link href="/" className="relative font-medium transition-all duration-300 hover:text-indigo-300 hover:-translate-y-0.5 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-300 after:transition-all hover:after:w-full">About</Link>
                        <Link href="/" className="relative font-medium transition-all duration-300 hover:text-indigo-300 hover:-translate-y-0.5 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-300 after:transition-all hover:after:w-full">Contact</Link>
                        <Link href="/shop?sort=discount" className="rounded-full bg-amber-300 text-amber-950 px-3 py-1 text-xs font-semibold tracking-wide animate-bounce">Deals</Link>

                        <form onSubmit={handleSearch} className="hidden xl:flex items-center w-xs text-sm gap-2 bg-slate-800/80 px-4 py-3 rounded-full border border-slate-600 focus-within:border-indigo-300 focus-within:bg-slate-800 focus-within:shadow-lg focus-within:shadow-indigo-500/20 transition-all duration-500">
                            <Search size={18} className="text-slate-300" />
                            <input className="w-full bg-transparent text-slate-100 outline-none placeholder-slate-400" type="text" placeholder="Search products" value={search} onChange={(e) => setSearch(e.target.value)} required />
                        </form>

                        <Link href="/cart" className="relative flex items-center gap-2 text-slate-100 font-medium hover:text-indigo-300 transition-colors">
                            <ShoppingCart size={18} />
                            Cart
                            <button className="absolute -top-1 left-3 text-[8px] text-white bg-indigo-500 size-3.5 rounded-full animate-ping">{cartCount}</button>
                        </Link>

                        <button className="px-8 py-2 bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-400 hover:to-fuchsia-400 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/40 transition-all duration-300 text-white rounded-full">
                            Login
                        </button>

                    </div>

                    {/* Mobile User Button  */}
                    <div className="sm:hidden">
                        <button className="px-7 py-1.5 bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:shadow-lg transition-all text-white rounded-full animate-pulse">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar