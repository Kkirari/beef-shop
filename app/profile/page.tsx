"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { supabase, isSupabaseConfigured } from "../../lib/supabaseClient"

interface OrderItem {
    id: string
    product_name: string
    quantity: number
    unit_price: number
    product_id: string | null
    products?: {
        image_url: string
        portion: string
        slug: string
    } | null
}

interface Order {
    id: string
    status: string
    subtotal: number
    shipping: number
    tax: number
    total: number
    first_name: string
    last_name: string
    address: string
    city: string
    postcode: string
    delivery_method: string
    payment_method: string
    tracking_number: string | null
    created_at: string
    order_items: OrderItem[]
}

const STATUS_CONFIG: Record<string, { color: string; bg: string; icon: string; label: string }> = {
    pending: { color: "text-amber-600", bg: "bg-amber-50", icon: "schedule", label: "Pending" },
    confirmed: { color: "text-blue-600", bg: "bg-blue-50", icon: "check_circle", label: "Confirmed" },
    shipped: { color: "text-purple-600", bg: "bg-purple-50", icon: "local_shipping", label: "Shipped" },
    delivered: { color: "text-green-600", bg: "bg-green-50", icon: "inventory", label: "Delivered" },
    cancelled: { color: "text-red-600", bg: "bg-red-50", icon: "cancel", label: "Cancelled" },
}

export default function ProfilePage() {
    const router = useRouter()
    const [user, setUser] = useState<{ email?: string; full_name?: string } | null>(null)
    const [orders, setOrders] = useState<Order[]>([])
    const [loading, setLoading] = useState(true)
    const [expandedOrder, setExpandedOrder] = useState<string | null>(null)
    const [copiedTracking, setCopiedTracking] = useState<string | null>(null)

    const copyTrackingNumber = (e: React.MouseEvent, trackingNumber: string) => {
        e.stopPropagation()
        navigator.clipboard.writeText(trackingNumber)
        setCopiedTracking(trackingNumber)
        setTimeout(() => setCopiedTracking(null), 2000)
    }

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        if (!isSupabaseConfigured()) {
            setLoading(false)
            return
        }

        const { data: { user: authUser } } = await supabase.auth.getUser()
        if (!authUser) {
            router.push("/login")
            return
        }

        // Get profile
        const { data: profile } = await supabase
            .from("profiles")
            .select("full_name")
            .eq("id", authUser.id)
            .single()

        setUser({
            email: authUser.email,
            full_name: profile?.full_name || authUser.email,
        })

        // Get orders with items
        const { data: ordersData, error } = await supabase
            .from("orders")
            .select(`
                *,
                order_items (
                    id,
                    product_name,
                    quantity,
                    unit_price,
                    product_id,
                    products ( image_url, portion, slug )
                )
            `)
            .eq("user_id", authUser.id)
            .order("created_at", { ascending: false })

        if (error) {
            console.error("Fetch orders error:", error)
        }

        if (ordersData) {
            setOrders(ordersData as Order[])
        }

        setLoading(false)
    }

    const formatDate = (dateStr: string) => {
        const d = new Date(dateStr)
        return d.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        })
    }

    const toggleOrder = (id: string) => {
        setExpandedOrder(expandedOrder === id ? null : id)
    }

    if (loading) {
        return (
            <>
                <Navbar />
                <div className="min-h-[60vh] flex items-center justify-center">
                    <span className="material-icons animate-spin text-4xl text-primary">
                        autorenew
                    </span>
                </div>
            </>
        )
    }

    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-background-light">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
                    {/* ─── Header ─── */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
                        <div>
                            <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-1">
                                My Account
                            </p>
                            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                                Order History
                            </h1>
                            {user && (
                                <p className="text-sm text-gray-400 mt-1">
                                    Welcome back, {user.full_name}
                                </p>
                            )}
                        </div>

                        <Link
                            href="/order-tracking"
                            className="flex items-center gap-2 bg-charcoal text-white px-5 py-3 rounded-xl text-sm font-bold hover:bg-zinc-700 transition-colors self-start"
                        >
                            <span className="material-icons text-base">local_shipping</span>
                            Track Current Order
                        </Link>
                    </div>

                    {/* ─── Stats ─── */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                        <div className="bg-white rounded-2xl border border-gray-100 p-5">
                            <p className="text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase mb-1">
                                Total Orders
                            </p>
                            <p className="text-2xl font-extrabold">{orders.length}</p>
                        </div>
                        <div className="bg-white rounded-2xl border border-gray-100 p-5">
                            <p className="text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase mb-1">
                                Total Spent
                            </p>
                            <p className="text-2xl font-extrabold">
                                ${orders.reduce((s, o) => s + Number(o.total), 0).toFixed(2)}
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl border border-gray-100 p-5">
                            <p className="text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase mb-1">
                                Delivered
                            </p>
                            <p className="text-2xl font-extrabold text-green-600">
                                {orders.filter((o) => o.status === "delivered").length}
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl border border-gray-100 p-5">
                            <p className="text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase mb-1">
                                In Progress
                            </p>
                            <p className="text-2xl font-extrabold text-primary">
                                {orders.filter((o) => ["pending", "confirmed", "shipped"].includes(o.status)).length}
                            </p>
                        </div>
                    </div>

                    {/* ─── Orders List ─── */}
                    {orders.length === 0 ? (
                        <div className="bg-white rounded-2xl border border-gray-100 p-16 text-center">
                            <span className="material-icons text-6xl text-gray-200 mb-4">
                                receipt_long
                            </span>
                            <h3 className="text-xl font-bold mb-2">No orders yet</h3>
                            <p className="text-gray-400 mb-6">
                                Start exploring our premium selection of beef cuts.
                            </p>
                            <Link
                                href="/products"
                                className="inline-block bg-primary text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-red-700 transition-colors"
                            >
                                Browse Products
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {orders.map((order) => {
                                const status = STATUS_CONFIG[order.status] || STATUS_CONFIG.pending
                                const isExpanded = expandedOrder === order.id

                                return (
                                    <div
                                        key={order.id}
                                        className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-shadow hover:shadow-md"
                                    >
                                        {/* Order header — clickable */}
                                        <button
                                            onClick={() => toggleOrder(order.id)}
                                            className="w-full px-6 py-5 flex items-center justify-between text-left"
                                        >
                                            <div className="flex items-center gap-5">
                                                {/* Status badge */}
                                                <div className={`w-10 h-10 rounded-xl ${status.bg} flex items-center justify-center`}>
                                                    <span className={`material-icons text-xl ${status.color}`}>
                                                        {status.icon}
                                                    </span>
                                                </div>

                                                <div>
                                                    <div className="flex items-center gap-3 mb-0.5">
                                                        <p className="font-bold text-sm">
                                                            Order #{order.id.slice(0, 8).toUpperCase()}
                                                        </p>
                                                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${status.bg} ${status.color}`}>
                                                            {status.label}
                                                        </span>
                                                    </div>
                                                    <p className="text-xs text-gray-400">
                                                        {formatDate(order.created_at)} • {order.order_items.length} item{order.order_items.length !== 1 ? "s" : ""}
                                                        {order.tracking_number && (
                                                            <>
                                                                {" "}
                                                                <span
                                                                    onClick={(e) => copyTrackingNumber(e, order.tracking_number!)}
                                                                    className="inline-flex items-center gap-1 ml-2 px-2 py-0.5 bg-charcoal/5 hover:bg-primary/10 rounded text-[10px] font-bold tracking-wider text-charcoal cursor-pointer transition-colors"
                                                                    title="Click to copy"
                                                                >
                                                                    <span className="material-icons text-[10px]">local_shipping</span>
                                                                    {order.tracking_number}
                                                                    <span className="material-icons text-[10px] ml-0.5">
                                                                        {copiedTracking === order.tracking_number ? "check" : "content_copy"}
                                                                    </span>
                                                                </span>
                                                            </>
                                                        )}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4">
                                                <p className="text-lg font-extrabold">${Number(order.total).toFixed(2)}</p>
                                                <span className={`material-icons text-gray-400 transition-transform ${isExpanded ? "rotate-180" : ""}`}>
                                                    expand_more
                                                </span>
                                            </div>
                                        </button>

                                        {/* Expanded details */}
                                        {isExpanded && (
                                            <div className="border-t border-gray-100 px-6 py-5">
                                                {/* Items */}
                                                <div className="space-y-3 mb-6">
                                                    {order.order_items.map((item) => (
                                                        <div
                                                            key={item.id}
                                                            className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl"
                                                        >
                                                            {/* Product image */}
                                                            <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-200">
                                                                {item.products?.image_url ? (
                                                                    // eslint-disable-next-line @next/next/no-img-element
                                                                    <img
                                                                        className="w-full h-full object-cover"
                                                                        src={item.products.image_url}
                                                                        alt={item.product_name}
                                                                    />
                                                                ) : (
                                                                    <div className="w-full h-full flex items-center justify-center">
                                                                        <span className="material-icons text-gray-400">image</span>
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <p className="font-bold text-sm truncate">
                                                                    {item.product_name}
                                                                </p>
                                                                <p className="text-xs text-gray-400">
                                                                    {item.products?.portion || "—"} × {item.quantity}
                                                                </p>
                                                            </div>
                                                            <p className="font-bold text-sm text-primary">
                                                                ${(Number(item.unit_price) * item.quantity).toFixed(2)}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Order summary grid */}
                                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-xl mb-4">
                                                    <div>
                                                        <p className="text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-0.5">
                                                            Subtotal
                                                        </p>
                                                        <p className="font-semibold text-sm">${Number(order.subtotal).toFixed(2)}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-0.5">
                                                            Shipping
                                                        </p>
                                                        <p className="font-semibold text-sm">${Number(order.shipping).toFixed(2)}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-0.5">
                                                            Tax
                                                        </p>
                                                        <p className="font-semibold text-sm">${Number(order.tax).toFixed(2)}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-0.5">
                                                            Total
                                                        </p>
                                                        <p className="font-bold text-primary">${Number(order.total).toFixed(2)}</p>
                                                    </div>
                                                </div>

                                                {/* Shipping info */}
                                                <div className="flex flex-col md:flex-row gap-4 text-sm">
                                                    <div className="flex-1 p-4 bg-gray-50 rounded-xl">
                                                        <p className="text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-1">
                                                            Shipping To
                                                        </p>
                                                        <p className="font-semibold">
                                                            {order.first_name} {order.last_name}
                                                        </p>
                                                        <p className="text-gray-500 text-xs">
                                                            {order.address}, {order.city} {order.postcode}
                                                        </p>
                                                    </div>
                                                    <div className="flex-1 p-4 bg-gray-50 rounded-xl">
                                                        <p className="text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-1">
                                                            Delivery Method
                                                        </p>
                                                        <p className="font-semibold capitalize">{order.delivery_method}</p>
                                                    </div>
                                                    <div className="flex-1 p-4 bg-gray-50 rounded-xl">
                                                        <p className="text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-1">
                                                            Payment
                                                        </p>
                                                        <p className="font-semibold capitalize">{order.payment_method}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </>
    )
}
