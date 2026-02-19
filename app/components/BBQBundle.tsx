"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

function useCountdown(targetDate: Date) {
    const [timeLeft, setTimeLeft] = useState({ hours: 0, mins: 0, secs: 0 })

    useEffect(() => {
        const tick = () => {
            const now = new Date().getTime()
            const diff = targetDate.getTime() - now
            if (diff <= 0) {
                setTimeLeft({ hours: 0, mins: 0, secs: 0 })
                return
            }
            setTimeLeft({
                hours: Math.floor(diff / (1000 * 60 * 60)),
                mins: Math.floor((diff / (1000 * 60)) % 60),
                secs: Math.floor((diff / 1000) % 60),
            })
        }
        tick()
        const id = setInterval(tick, 1000)
        return () => clearInterval(id)
    }, [targetDate])

    return timeLeft
}

export default function BBQBundle() {
    const [deadline] = useState(() => {
        const d = new Date()
        d.setHours(d.getHours() + 12)
        d.setMinutes(d.getMinutes() + 48)
        d.setSeconds(d.getSeconds() + 15)
        return d
    })
    const { hours, mins, secs } = useCountdown(deadline)

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
            <div className="relative bg-charcoal rounded-3xl overflow-hidden flex flex-col lg:flex-row items-center">
                {/* Left Content */}
                <div className="p-12 lg:p-20 lg:w-1/2">
                    <div className="flex items-center gap-2 text-primary font-bold mb-6">
                        <span className="material-icons">local_fire_department</span>
                        <span className="tracking-[0.3em] uppercase text-xs">
                            Summer Exclusive
                        </span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                        The Ultimate <br />
                        BBQ Bundle
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        A curated box featuring our top-tier Tomahawk, 4 pieces of Wagyu
                        patties, and charcoal-ready Short Ribs. Save 20% compared to
                        individual cuts.
                    </p>

                    {/* Countdown */}
                    <div className="flex items-center gap-4 mb-10">
                        {[
                            { val: hours, label: "Hours" },
                            { val: mins, label: "Mins" },
                            { val: secs, label: "Secs" },
                        ].map((t) => (
                            <div
                                key={t.label}
                                className="text-center bg-white/5 rounded-xl px-4 py-3 border border-white/10"
                            >
                                <span className="block text-2xl font-bold text-white">
                                    {String(t.val).padStart(2, "0")}
                                </span>
                                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
                                    {t.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    <Link
                        href="#"
                        className="inline-block bg-primary hover:bg-red-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all"
                    >
                        Claim Bundle Now — $199
                    </Link>
                </div>

                {/* Right Image */}
                <div className="lg:w-1/2 h-full min-h-[400px] w-full relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        className="absolute inset-0 w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZNQqQFrISRQlrF1JppJrvvSII7Sa6IhFEHnaiRjiCVf-r7f-mkheFneAwijLskcP7FDDVA_XmvfZroCCLVnw3Sq640z5SJoPf23gmG2ntKfaiGC1zeatIE316TlOITDHhJ8P-mQMnuYjp5SfduoDkHvaQrLp7me3mkpogtdcbZclQJr1rrPtvZnVA2eVmwNRJEQjJUwXSxeqcSJ6L_uVzZtU2ZBMrvqxUMBdkp6Kumh1rsNcIxcRjhj4IF9Gsxty62wES93V_zWrK"
                        alt="Platter of various raw and grilled meats for BBQ"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-transparent to-transparent hidden lg:block" />
                </div>
            </div>
        </section>
    )
}
