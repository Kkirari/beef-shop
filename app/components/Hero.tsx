import Link from "next/link"

export default function Hero() {
    return (
        <section className="relative h-[85vh] w-full flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsfH7pPdWGtY-8EPcFtMWjAUEAHQ_XtAHshAosnrWIGCf20A609ncfkhvnMkLNQwcVnqLOmsg7Hh1oH5cBiHaYFDwnzSBSehpKV5G_feKcHZBvD0fCsoXFwOCF21gSI6Irsrg6yRwooCqlJoH-3Zg2ab_AvKJqs6Y0m4zZ4cgyJddOiqodLukuPNu4blK17MJomI3OK_Bq2rWsoJq9lE1ygXnKSFxii04FI-fiDPt_dCfbKRDArL06lyY8MYdXsfZYudsvkmICj6l2"
                    alt="Close up of a perfectly seared thick steak with rosemary and butter"
                />
                <div className="absolute inset-0 hero-overlay" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                <div className="max-w-2xl">
                    <span className="inline-block px-4 py-1 bg-primary text-xs font-bold tracking-widest uppercase rounded-full mb-6">
                        World-Class Quality
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                        Premium Beef <br />
                        <span className="text-primary italic">Delivered Fresh</span> to
                        Your Door
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light">
                        Experience the finest cuts of Wagyu, Grass-fed, and Grain-fed beef
                        sourced directly from award-winning farms.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/products"
                            className="bg-primary hover:bg-red-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2"
                        >
                            Shop Best Sellers
                            <span className="material-icons">arrow_forward</span>
                        </Link>
                        <Link
                            href="#"
                            className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all text-center"
                        >
                            Our Farm Story
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
