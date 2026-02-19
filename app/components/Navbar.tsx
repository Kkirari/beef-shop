"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { supabase, isSupabaseConfigured } from "../../lib/supabaseClient"

export default function Navbar() {
    const router = useRouter()
    const [mobileOpen, setMobileOpen] = useState(false)
    const [user, setUser] = useState<{ email?: string; full_name?: string; role?: string } | null>(null)
    const [cartCount, setCartCount] = useState(0)
    const [showUserMenu, setShowUserMenu] = useState(false)

    useEffect(() => {
        if (isSupabaseConfigured()) {
            checkUser()
            const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
                checkUser()
            })

            // Listen for cart updates from any component
            const handleCartUpdate = () => { refreshCartCount() }
            window.addEventListener("cart-updated", handleCartUpdate)

            return () => {
                subscription.unsubscribe()
                window.removeEventListener("cart-updated", handleCartUpdate)
            }
        }
    }, [])

    const refreshCartCount = async () => {
        const { data: { user: authUser } } = await supabase.auth.getUser()
        if (authUser) {
            const { count } = await supabase
                .from("cart_items")
                .select("id", { count: "exact" })
                .eq("user_id", authUser.id)
            setCartCount(count || 0)
        }
    }

    const checkUser = async () => {
        const { data: { user: authUser } } = await supabase.auth.getUser()
        if (authUser) {
            const { data: profile } = await supabase
                .from("profiles")
                .select("full_name, role")
                .eq("id", authUser.id)
                .single()
            setUser({
                email: authUser.email,
                full_name: profile?.full_name || authUser.email,
                role: profile?.role,
            })
            // Get cart count
            const { count } = await supabase
                .from("cart_items")
                .select("id", { count: "exact" })
                .eq("user_id", authUser.id)
            setCartCount(count || 0)
        } else {
            setUser(null)
            setCartCount(0)
        }
    }

    const handleLogout = async () => {
        await supabase.auth.signOut()
        setUser(null)
        setShowUserMenu(false)
        router.push("/")
        router.refresh()
    }

    return (
        <nav className="sticky top-0 z-50 w-full bg-background-light/95 backdrop-blur-md border-b border-primary/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center gap-8">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg">
                                <span className="material-icons text-white">restaurant</span>
                            </div>
                            <span className="text-2xl font-extrabold tracking-tighter uppercase">
                                Prime<span className="text-primary">Cut</span>
                            </span>
                        </Link>
                        <div className="hidden md:flex space-x-8">
                            {[
                                { label: "Home", href: "/" },
                                { label: "Shop", href: "/products" },
                                { label: "About", href: "/about" },
                                { label: "Contact", href: "/contact" },
                            ].map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="text-sm font-semibold hover:text-primary transition-colors"
                                >
                                    {item.label}
                                </Link>
                            )
                            )}
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <button className="text-charcoal hover:text-primary transition-colors">
                            <span className="material-icons">search</span>
                        </button>
                        <Link href="/checkout" className="relative text-charcoal hover:text-primary transition-colors">
                            <span className="material-icons">shopping_bag</span>
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                                    {cartCount}
                                </span>
                            )}
                        </Link>

                        {user ? (
                            <div className="relative">
                                <button
                                    onClick={() => setShowUserMenu(!showUserMenu)}
                                    className="hidden lg:flex items-center gap-2 bg-charcoal text-white px-4 py-2.5 rounded-lg text-sm font-bold hover:bg-zinc-700 transition-colors"
                                >
                                    <span className="material-icons text-base">person</span>
                                    <span className="max-w-[100px] truncate">{user.full_name}</span>
                                    <span className="material-icons text-sm">expand_more</span>
                                </button>
                                {showUserMenu && (
                                    <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-primary/10 overflow-hidden z-50">
                                        <div className="px-4 py-3 border-b border-primary/5">
                                            <p className="text-xs text-gray-400 truncate">{user.email}</p>
                                        </div>
                                        <Link
                                            href="/profile"
                                            className="flex items-center gap-2 px-4 py-3 text-sm font-medium hover:bg-primary/5 transition-colors"
                                            onClick={() => setShowUserMenu(false)}
                                        >
                                            <span className="material-icons text-base text-primary">receipt_long</span>
                                            My Orders
                                        </Link>
                                        <Link
                                            href="/order-tracking"
                                            className="flex items-center gap-2 px-4 py-3 text-sm font-medium hover:bg-primary/5 transition-colors"
                                            onClick={() => setShowUserMenu(false)}
                                        >
                                            <span className="material-icons text-base text-primary">local_shipping</span>
                                            Track Order
                                        </Link>
                                        {user.role === "admin" && (
                                            <Link
                                                href="/admin"
                                                className="flex items-center gap-2 px-4 py-3 text-sm font-medium hover:bg-primary/5 transition-colors"
                                                onClick={() => setShowUserMenu(false)}
                                            >
                                                <span className="material-icons text-base text-primary">admin_panel_settings</span>
                                                Admin Panel
                                            </Link>
                                        )}
                                        <button
                                            onClick={handleLogout}
                                            className="flex items-center gap-2 w-full px-4 py-3 text-sm font-medium hover:bg-red-50 text-red-600 transition-colors"
                                        >
                                            <span className="material-icons text-base">logout</span>
                                            Sign Out
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                href="/login"
                                className="hidden lg:block bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-red-700 transition-colors"
                            >
                                Login
                            </Link>
                        )}

                        {/* Mobile toggle */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden text-charcoal hover:text-primary transition-colors"
                        >
                            <span className="material-icons">
                                {mobileOpen ? "close" : "menu"}
                            </span>
                        </button>
                    </div>
                </div>

                {/* Mobile Nav */}
                {mobileOpen && (
                    <div className="md:hidden border-t border-primary/10 py-4 space-y-2">
                        {[
                            { label: "Home", href: "/" },
                            { label: "Shop", href: "/products" },
                            { label: "About", href: "/about" },
                            { label: "Contact", href: "/contact" },
                        ].map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="block px-3 py-2 rounded-lg text-sm font-semibold hover:bg-primary/5 hover:text-primary transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                        {user ? (
                            <>
                                <Link
                                    href="/profile"
                                    className="block px-3 py-2 rounded-lg text-sm font-semibold hover:bg-primary/5 hover:text-primary transition-colors"
                                >
                                    My Orders
                                </Link>
                                {user.role === "admin" && (
                                    <Link
                                        href="/admin"
                                        className="block px-3 py-2 rounded-lg text-sm font-semibold text-primary"
                                    >
                                        Admin Panel
                                    </Link>
                                )}
                                <button
                                    onClick={handleLogout}
                                    className="w-full mt-3 bg-charcoal text-white py-2.5 rounded-lg text-sm font-bold"
                                >
                                    Sign Out
                                </button>
                            </>
                        ) : (
                            <Link
                                href="/login"
                                className="block w-full mt-3 bg-primary text-white py-2.5 rounded-lg text-sm font-bold text-center hover:bg-red-700 transition-colors"
                            >
                                Login
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </nav>
    )
}
