export default function TrustBadges() {
    const badges = [
        {
            icon: "ac_unit",
            title: "Cold Chain Logistics",
            desc: "Guaranteed 24h chilled delivery in climate-controlled packaging.",
        },
        {
            icon: "agriculture",
            title: "Ethical Farm Sourcing",
            desc: "100% traceable cuts from farms with high animal welfare standards.",
        },
        {
            icon: "verified",
            title: "Butcher Certified",
            desc: "Hand-cut to order by our master butchers for perfect thickness.",
        },
    ]

    return (
        <section className="py-12 bg-white border-b border-primary/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {badges.map((badge) => (
                        <div key={badge.title} className="flex items-center gap-5">
                            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <span className="material-icons text-primary text-3xl">
                                    {badge.icon}
                                </span>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">{badge.title}</h3>
                                <p className="text-sm text-gray-500">{badge.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
