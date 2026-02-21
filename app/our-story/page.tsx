import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Our Farm Story | PrimeCut",
    description:
        "Discover the story behind PrimeCut — from award-winning farms to your table. Learn about our commitment to quality, sustainability, and premium beef.",
}

const milestones = [
    {
        year: "2015",
        title: "The Beginning",
        description:
            "PrimeCut was founded with a simple mission — to bring the world's finest beef directly to discerning food lovers. Our founders, lifelong cattle ranchers, believed everyone deserves restaurant-quality cuts at home.",
        icon: "emoji_events",
    },
    {
        year: "2017",
        title: "Partnering with Japanese Farms",
        description:
            "We established exclusive partnerships with legendary Wagyu farms in Miyazaki, Kobe, and Matsusaka — securing access to authentic A5-grade beef raised with traditional Japanese methods.",
        icon: "handshake",
    },
    {
        year: "2019",
        title: "Sustainable Ranching Initiative",
        description:
            "We launched our green ranching program, committing to grass-fed, pasture-raised cattle with zero-hormone practices. Every farm in our network follows regenerative agriculture principles.",
        icon: "eco",
    },
    {
        year: "2021",
        title: "Cold-Chain Perfection",
        description:
            "We invested in state-of-the-art cold-chain logistics to guarantee that every cut arrives at your doorstep at the perfect temperature — as fresh as the day it was butchered.",
        icon: "ac_unit",
    },
    {
        year: "2024",
        title: "50,000+ Happy Customers",
        description:
            "Today, PrimeCut serves over 50,000 customers worldwide, and we've been recognized as a top-rated premium beef supplier by leading culinary magazines.",
        icon: "groups",
    },
]

const values = [
    {
        icon: "verified",
        title: "Certified Quality",
        description:
            "Every cut is graded by certified inspectors and backed by our freshness guarantee.",
    },
    {
        icon: "local_florist",
        title: "Ethical & Sustainable",
        description:
            "We partner only with farms that prioritize animal welfare and sustainable practices.",
    },
    {
        icon: "local_shipping",
        title: "Farm to Door",
        description:
            "Our cold-chain delivery ensures your beef arrives perfectly chilled within 48 hours.",
    },
    {
        icon: "restaurant",
        title: "Chef-Approved",
        description:
            "Trusted by Michelin-starred chefs and top restaurants around the world.",
    },
]

export default function OurStoryPage() {
    return (
        <main className="bg-background-light">
            {/* Navigation Back */}
            <nav className="sticky top-0 z-50 w-full bg-background-light/95 backdrop-blur-md border-b border-primary/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center h-20">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg">
                                <span className="material-icons text-white">restaurant</span>
                            </div>
                            <span className="text-2xl font-extrabold tracking-tighter uppercase">
                                Prime<span className="text-primary">Cut</span>
                            </span>
                        </Link>
                        <div className="ml-auto">
                            <Link
                                href="/"
                                className="text-sm font-semibold hover:text-primary transition-colors flex items-center gap-1"
                            >
                                <span className="material-icons text-base">arrow_back</span>
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative h-[60vh] w-full flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxaATTMLVvVmY16Y3ExdS2wif3DcfIfbEG_OooLbwAVvVBt28zuRqQcSEMjNhEDA98xAM9fYFCEZjUA-zBmsH_pN7pvBBHgFGIcEF_qYXJWL9O1DmdNg9pPd-BCAPvJUqBhLfyOcPVDAQ9H6SOIg71tfJzDyOK4FkXy6dc2VDl80-38pXqBDQu0AFbA3q8yGsoBxL005Wyi-68vpkLWu4w22gIJBUiXe7LEnJpO9A0q9JhAb48HKDY671b1CZpJm_i4k8nf_7fuDcN"
                        alt="Beautiful green pastures with cattle grazing"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center w-full">
                    <span className="inline-block px-4 py-1 bg-primary text-xs font-bold tracking-widest uppercase rounded-full mb-6">
                        Est. 2015
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                        Our Farm <span className="text-primary italic">Story</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light">
                        From award-winning pastures to your table — discover the passion,
                        craft, and care behind every cut of PrimeCut beef.
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-4">
                        Who We Are
                    </h2>
                    <p className="text-3xl md:text-4xl font-extrabold mb-8">
                        Where Passion Meets Premium
                    </p>
                    <p className="text-lg text-gray-500 leading-relaxed mb-6">
                        At PrimeCut, we believe that truly exceptional beef starts long before
                        it reaches the butcher&apos;s block. It begins in the rolling pastures where
                        our cattle roam freely, fed on nutrient-rich grass and natural grain
                        blends, raised by families who have perfected their craft over
                        generations.
                    </p>
                    <p className="text-lg text-gray-500 leading-relaxed">
                        We work directly with a hand-selected network of ranches across
                        Australia, Japan, and the United States — cutting out the middlemen to
                        bring you the freshest, most flavourful cuts at fair prices. Every steak
                        we sell carries the story of the land, the farmer, and the tradition
                        behind it.
                    </p>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-24 bg-background-light">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-4">
                            Our Journey
                        </h2>
                        <p className="text-3xl md:text-4xl font-extrabold">
                            Milestones That Define Us
                        </p>
                    </div>

                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary/20" />

                        <div className="space-y-12">
                            {milestones.map((m, i) => (
                                <div
                                    key={m.year}
                                    className={`relative flex flex-col md:flex-row items-start gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                        }`}
                                >
                                    {/* Content Card */}
                                    <div className="md:w-[calc(50%-2rem)] ml-16 md:ml-0">
                                        <div className="bg-white rounded-2xl p-8 card-shadow">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                                    <span className="material-icons text-primary text-xl">
                                                        {m.icon}
                                                    </span>
                                                </div>
                                                <span className="text-primary font-extrabold text-lg">
                                                    {m.year}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold mb-3">{m.title}</h3>
                                            <p className="text-gray-500 leading-relaxed">
                                                {m.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Center Dot */}
                                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-8">
                                        <div className="w-4 h-4 bg-primary rounded-full border-4 border-background-light" />
                                    </div>

                                    {/* Spacer for opposite side */}
                                    <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-charcoal text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-4">
                            Our Values
                        </h2>
                        <p className="text-3xl md:text-4xl font-extrabold">
                            What We Stand For
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((v) => (
                            <div
                                key={v.title}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors"
                            >
                                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                                    <span className="material-icons text-primary text-2xl">
                                        {v.icon}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold mb-3">{v.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {v.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                        Taste the <span className="text-primary italic">Difference</span>
                    </h2>
                    <p className="text-lg text-gray-500 mb-10 leading-relaxed">
                        Ready to experience beef the way it was meant to be? Browse our
                        collection of hand-selected, premium cuts and have them delivered
                        fresh to your doorstep.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/products"
                            className="bg-primary hover:bg-red-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2"
                        >
                            Shop Now
                            <span className="material-icons">arrow_forward</span>
                        </Link>
                        <Link
                            href="/"
                            className="bg-charcoal hover:bg-zinc-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all text-center"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-charcoal text-gray-400 py-8 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
                    © {new Date().getFullYear()} PrimeCut. All rights reserved.
                </div>
            </footer>
        </main>
    )
}
