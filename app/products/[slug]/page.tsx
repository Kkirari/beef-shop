"use client"

import { useState } from "react"
import Link from "next/link"
import Navbar from "../../components/Navbar"

const galleryImages = [
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5HFDh-0NoMlTUkSKGodmpr7w_vMZIIoyfapgYthFx8WsRapLTAWvitxCIr4-ggTlohg7pIOvEZLpmBxBWtbnBINXitZGrGuR-F1BNOOlEwAMgcJu_RdHrC1PfpGbuFthU37UDH3Fkh1rEVZPQw3TGCP-0iumpTTnPtjEB6lQIjSqJ1wCUtSlHwrfX9SlfjSqx-lVrfnHrm5cI9lbDv3kJmV_zPSrPRGa17nClzimM0yVo_VjEA8QI0nkfFVhqnQjsBCLaPdU49a2G",
        alt: "Close up of raw A5 Wagyu Ribeye marbling",
    },
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4vA9I6g6oVw6mhI1nmxjcLX16JlIrK1_btsB-m8RsyyvT9fQ8oKJHifbFSf7Na_BuI0GnZdYCjaioH6EsoujNEtYYyRCsSVSg2f9HBGLEdf0caKpd0LdrtaQ1X2ocANsORRw-_zo1Dm9cc2QckH5JZIUefZg6TPNPpfTako64HYBIU5q49TFdtPyTxWGPRocFG47HOJM44WaHUGmKPnPHlBPZO222HWrONvaeDKPMv72gALsEFGzGMmS4RUNd7EuiEA6v-zkP22g1",
        alt: "Raw wagyu ribeye on wooden board",
    },
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZkedSdkKBGgipzp9J0-_HR6oG3nd_6FJA_sP3yzIX7kWnFTVVBYSpeHO9ywrHjcdICJviCBaA3CqkKoCyhlo6OkqEvmw6VvckzVifovaIlY_OYPZX0fDpw4lgFupoLEOTpjcGvwXpFFZj4DYNgPSY6tmzSk1OfZNDRenuwR8rxjaiOvcJcKab85pNXW4WdXh_INnLQupd-qB56Sk_5R_ir2WJNueqT3bgSD-Iml8iPn7maTe8p-ZekVdGOlNuLtxEaSE-0bkBj4p7",
        alt: "Sizzling steak on cast iron skillet",
    },
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA04lGwmimN81TXhHgWrM1r9Vup6AifHwIm5JFrGDSjlzOFyZ8Dm8jvbAH_H5mYcbNOba6oFFP95oJKSvKlDy4dW-SzxK_RsTk851djSOhdSKC4LQDlLD7Hwtao-ebnaDRWmAdI-YZUOWqOHPyvDggMH1CLWT5u4Xi1SPzu4wkXMyRor8zOSHMgI_WQkpZOwl4AAGDEoWHVt4RuZwK1fMFYBpYeOK7qOyQSlN3lrok5us4hFBvdrLuo4-Sd5m2CVmmPTyCxDC0qtgo5",
        alt: "A5 Wagyu steak being sliced",
    },
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdVWQpOAu13PkBH9-0gM5n0j3wqnLJHSQgugoVYyJytcTy1M5aH-voRg4-OW3HSxcufh-jTdm7VFp7l5aagd_7S5B27mrZrXQDTLa6ITV-5OWOj8IF-GT8sw0AGoqmmoqi1GtdRsbtSe3iotAOC_PPujDhzUQIlpOE7vvcAhwVp_53pPvv0dKgfMs4dkG1wBomKOCcL2QToN6FUy1zUJyeoEpcB_e92BQ8d3yCzZPFZ3hTMLgQRsCRpiYBnc6mvWFLWYpjO6X5GVe8",
        alt: "Butcher preparing premium meat cuts",
    },
]

const doneness = [
    {
        name: "Rare",
        temp: "120-125°F",
        desc: "Deep Red Center",
        gradient: "from-red-900 to-red-800",
        recommended: false,
    },
    {
        name: "Med-Rare",
        temp: "130-135°F",
        desc: "Warm Red Center",
        gradient: "from-red-800 to-red-600",
        recommended: true,
    },
    {
        name: "Medium",
        temp: "140-145°F",
        desc: "Warm Pink Center",
        gradient: "from-red-600 to-orange-800",
        recommended: false,
    },
    {
        name: "Med-Well",
        temp: "150-155°F",
        desc: "Slightly Pink",
        gradient: "from-orange-800 to-amber-900",
        recommended: false,
    },
    {
        name: "Well Done",
        temp: "160°F+",
        desc: "Fully Cooked",
        gradient: "bg-zinc-950",
        recommended: false,
    },
]

export default function ProductDetailPage() {
    const [selectedImage, setSelectedImage] = useState(0)
    const [selectedWeight, setSelectedWeight] = useState(0)
    const [selectedThickness, setSelectedThickness] = useState(1)
    const [quantity, setQuantity] = useState(1)

    const weights = [
        { label: "200g", sub: "Single Serving" },
        { label: "400g", sub: "Duo Portion" },
        { label: "600g", sub: "Large Cut" },
    ]

    const thicknesses = [
        { label: 'Standard (0.75")', checked: false },
        { label: 'Thick Cut (1.25")', checked: true },
    ]

    return (
        <>
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                {/* Breadcrumb */}
                <nav className="flex mb-8 text-xs font-medium uppercase tracking-widest text-zinc-500">
                    <Link href="/" className="hover:text-primary transition-colors">
                        Home
                    </Link>
                    <span className="mx-2">/</span>
                    <Link
                        href="/products"
                        className="hover:text-primary transition-colors"
                    >
                        Wagyu
                    </Link>
                    <span className="mx-2">/</span>
                    <span className="text-zinc-900">A5 Miyazaki Ribeye</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Column: Gallery */}
                    <div className="lg:col-span-7 space-y-4">
                        {/* Main Image */}
                        <div className="aspect-square relative overflow-hidden rounded-xl bg-zinc-100 group cursor-zoom-in">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                src={galleryImages[selectedImage].src}
                                alt={galleryImages[selectedImage].alt}
                            />
                            <div className="absolute top-4 left-4">
                                <span className="bg-primary text-white px-3 py-1 text-xs font-bold tracking-widest rounded uppercase">
                                    Certified A5
                                </span>
                            </div>
                        </div>

                        {/* Thumbnails */}
                        <div className="grid grid-cols-4 gap-4">
                            {galleryImages.slice(1).map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedImage(idx + 1)}
                                    className={`aspect-square rounded-lg overflow-hidden transition-opacity ${selectedImage === idx + 1
                                            ? "border-2 border-primary opacity-100"
                                            : "border border-zinc-200 opacity-60 hover:opacity-100"
                                        }`}
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        className="w-full h-full object-cover"
                                        src={img.src}
                                        alt={img.alt}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Product Details */}
                    <div className="lg:col-span-5 flex flex-col">
                        <div className="mb-2">
                            <span className="text-sm font-semibold text-primary tracking-widest uppercase">
                                Miyazaki Prefecture, Japan
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold mt-2 leading-tight tracking-tight">
                                A5 Japanese Wagyu Ribeye
                            </h1>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex text-primary">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="material-icons text-sm">
                                        star
                                    </span>
                                ))}
                            </div>
                            <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                                (142 Reviews)
                            </span>
                        </div>

                        {/* Price */}
                        <div className="mb-8">
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-bold">$124.00</span>
                                <span className="text-zinc-500 line-through text-lg">
                                    $158.00
                                </span>
                            </div>
                            <p className="text-sm text-zinc-500 mt-1">
                                Free overnight shipping on orders over $250
                            </p>
                        </div>

                        {/* Selectors */}
                        <div className="space-y-8">
                            {/* Weight Selector */}
                            <div>
                                <div className="flex justify-between items-end mb-4">
                                    <label className="text-xs font-bold uppercase tracking-widest">
                                        Select Weight
                                    </label>
                                    <span className="text-xs text-primary font-medium cursor-pointer">
                                        Size Guide
                                    </span>
                                </div>
                                <div className="grid grid-cols-3 gap-3">
                                    {weights.map((w, idx) => (
                                        <button
                                            key={w.label}
                                            onClick={() => setSelectedWeight(idx)}
                                            className={`py-4 rounded-lg transition-all ${selectedWeight === idx
                                                    ? "border-2 border-primary bg-primary/5"
                                                    : "border-2 border-zinc-200 hover:border-zinc-400"
                                                }`}
                                        >
                                            <span className="block text-sm font-bold">
                                                {w.label}
                                            </span>
                                            <span className="block text-[10px] text-zinc-500 uppercase">
                                                {w.sub}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Thickness Selector */}
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest mb-4">
                                    Custom Thickness
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    {thicknesses.map((t, idx) => (
                                        <button
                                            key={t.label}
                                            onClick={() => setSelectedThickness(idx)}
                                            className={`py-3 rounded-lg flex items-center justify-center gap-2 ${selectedThickness === idx
                                                    ? "border-2 border-primary bg-primary/5"
                                                    : "border-2 border-zinc-200 hover:border-zinc-400"
                                                }`}
                                        >
                                            <span className="text-sm font-medium">{t.label}</span>
                                            {selectedThickness === idx && (
                                                <span className="material-icons text-primary text-sm">
                                                    check_circle
                                                </span>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Specs Grid */}
                        <div className="mt-10 pt-10 border-t border-zinc-200 grid grid-cols-3 gap-4">
                            <div className="text-center">
                                <span className="block text-[10px] text-zinc-500 font-bold uppercase tracking-tighter mb-1">
                                    Breed
                                </span>
                                <span className="block text-xs font-semibold">
                                    Kuroge Washu
                                </span>
                            </div>
                            <div className="text-center border-x border-zinc-200">
                                <span className="block text-[10px] text-zinc-500 font-bold uppercase tracking-tighter mb-1">
                                    Feeding
                                </span>
                                <span className="block text-xs font-semibold">600+ Days</span>
                            </div>
                            <div className="text-center">
                                <span className="block text-[10px] text-zinc-500 font-bold uppercase tracking-tighter mb-1">
                                    Aging
                                </span>
                                <span className="block text-xs font-semibold">
                                    21-Day Wet
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Doneness Guide */}
                <section className="mt-20 py-16 border-t border-zinc-200">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 tracking-tight uppercase italic">
                            The Perfect Sear
                        </h2>
                        <p className="text-zinc-500 leading-relaxed">
                            Wagyu fat melts at room temperature. We recommend a quick sear on
                            high heat in a cast-iron skillet to preserve the exquisite
                            marbling and flavor.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {doneness.map((d) => (
                            <div
                                key={d.name}
                                className={`p-4 rounded-xl ${d.recommended
                                        ? "bg-white border-2 border-primary shadow-lg scale-105"
                                        : "bg-white border border-zinc-100"
                                    }`}
                            >
                                <div
                                    className={`h-1 w-full rounded-full mb-4 ${d.name === "Well Done"
                                            ? "bg-zinc-950"
                                            : `bg-gradient-to-r ${d.gradient}`
                                        }`}
                                />
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-sm uppercase">{d.name}</h3>
                                    {d.recommended && (
                                        <span className="text-[10px] bg-primary text-white px-2 py-0.5 rounded-full font-bold">
                                            RECOMMENDED
                                        </span>
                                    )}
                                </div>
                                <p className="text-lg font-bold text-primary">{d.temp}</p>
                                <p className="text-[10px] text-zinc-500 uppercase mt-2">
                                    {d.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Product Description */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-16 py-16 border-t border-zinc-200">
                    <div>
                        <h2 className="text-2xl font-bold mb-6 tracking-tight">
                            THE PINNACLE OF BEEF
                        </h2>
                        <div className="space-y-4 text-zinc-600 leading-relaxed">
                            <p>
                                Our Miyazaki Prefecture A5 Ribeye represents the absolute peak
                                of the Kuroge Washu breed. Each cut is hand-selected for its
                                intense intramuscular fat marbling, which gives Wagyu its
                                legendary &quot;melt-in-your-mouth&quot; texture.
                            </p>
                            <p>
                                The A5 rating is the highest possible grade awarded by the
                                Japanese Meat Grading Association, evaluating marbling (BMS),
                                color, firmness, and fat quality.
                            </p>
                        </div>
                        <ul className="mt-8 space-y-3">
                            <li className="flex items-center gap-3">
                                <span className="material-icons text-primary text-lg">
                                    verified
                                </span>
                                <span className="text-sm font-medium">
                                    Authentic Japanese Certificate Included
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-icons text-primary text-lg">
                                    ac_unit
                                </span>
                                <span className="text-sm font-medium">
                                    Shipped in specialized cold-chain packaging
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-icons text-primary text-lg">
                                    restaurant_menu
                                </span>
                                <span className="text-sm font-medium">
                                    Portioned by master butchers in our local facility
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden min-h-[400px]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            className="absolute inset-0 w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGsn6H72osTQ2nh8uRKAEuqWQV1HkG0M6nDHZRA1_ExPCur3Sb4GhROgRGFLFCh3FbzwRbOy0qb_HrdEI6L0APvidekyaYW1MJ50OfFeri-tpf_cISr0_Ffv30BDl7M2d_MyBuP4rtzst7K7gBUUb--htQmX6n58AeXt3YFhTcW4zRlN5uXs1mIchLXbE8P27CSVk-8IaZne_oEdSJYtcu4hyLohTOVCpOVzoziLFgt3ayutCCaDL_Haw7NkXd7-BtaemEc6Yco2qm"
                            alt="Cooked wagyu steak with salt flakes"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                            <div className="text-white">
                                <p className="text-3xl font-bold italic">
                                    &quot;An unparalleled sensory experience.&quot;
                                </p>
                                <p className="text-sm mt-2 opacity-80">
                                    — Chef Marcus V., Michelin Star Consultant
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Sticky Add to Cart Bar */}
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-zinc-200 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="hidden sm:flex flex-col">
                            <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                                Total Price
                            </span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-2xl font-bold">$124.00</span>
                                <span className="text-[10px] text-zinc-400 font-medium">
                                    EXCLUDING TAXES
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 w-full sm:w-auto">
                            {/* Quantity Selector */}
                            <div className="flex items-center border border-zinc-200 rounded-lg bg-zinc-50 overflow-hidden h-12">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="px-3 hover:bg-zinc-100 transition-colors h-full"
                                >
                                    <span className="material-icons text-sm">remove</span>
                                </button>
                                <span className="px-4 font-bold text-sm min-w-[40px] text-center">
                                    {quantity}
                                </span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="px-3 hover:bg-zinc-100 transition-colors h-full"
                                >
                                    <span className="material-icons text-sm">add</span>
                                </button>
                            </div>

                            {/* CTA Button */}
                            <button className="flex-1 sm:flex-none px-12 h-12 bg-primary hover:bg-primary/90 text-white font-bold text-sm uppercase tracking-widest transition-all rounded-lg flex items-center justify-center gap-2">
                                <span>Add to Cart</span>
                                <span className="material-icons text-lg">arrow_forward</span>
                            </button>

                            {/* Wishlist */}
                            <button className="hidden md:flex h-12 w-12 items-center justify-center border border-zinc-200 rounded-lg hover:bg-zinc-50 transition-colors">
                                <span className="material-icons text-xl">
                                    favorite_border
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Padding for sticky footer */}
            <div className="h-24" />
        </>
    )
}
