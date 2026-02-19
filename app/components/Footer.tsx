import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-charcoal text-white pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-8">
                            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg">
                                <span className="material-icons text-white">restaurant</span>
                            </div>
                            <span className="text-2xl font-extrabold tracking-tighter uppercase">
                                Prime<span className="text-primary">Cut</span>
                            </span>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-sm mb-6">
                            Providing the world&apos;s most discerning palates with the
                            highest quality beef, handled with precision and delivered with
                            care.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: "facebook", label: "Facebook" },
                                { icon: "camera_alt", label: "Instagram" },
                                { icon: "alternate_email", label: "Threads" },
                            ].map((s) => (
                                <Link
                                    key={s.label}
                                    href="#"
                                    aria-label={s.label}
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
                                >
                                    <span className="material-icons text-xl">{s.icon}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Shop */}
                    <div>
                        <h4 className="font-bold text-lg mb-8">Shop</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            {[
                                "Beef Steaks",
                                "Japanese Wagyu",
                                "Australian Wagyu",
                                "Special Bundles",
                                "Sauces & Rubs",
                            ].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="hover:text-primary transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Service */}
                    <div>
                        <h4 className="font-bold text-lg mb-8">Service</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            {[
                                "Delivery Info",
                                "Cold Chain Tech",
                                "Wholesale",
                                "Track Order",
                                "Returns Policy",
                            ].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="hover:text-primary transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-bold text-lg mb-8">Newsletter</h4>
                        <p className="text-sm text-gray-400 mb-6">
                            Join our club for exclusive access to rare cuts and grilling tips.
                        </p>
                        <div className="relative">
                            <input
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary text-sm text-white placeholder:text-gray-500"
                                placeholder="Your email address"
                                type="email"
                            />
                            <button className="absolute right-2 top-2 bg-primary px-4 py-1.5 rounded-lg text-xs font-bold uppercase hover:bg-red-700 transition-colors">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-xs uppercase tracking-widest">
                        © 2024 PrimeCut Luxury Butchery. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-8 text-xs text-gray-500 font-bold tracking-widest uppercase">
                        {["Privacy", "Terms", "Cookies"].map((item) => (
                            <Link
                                key={item}
                                href="#"
                                className="hover:text-white transition-colors"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
