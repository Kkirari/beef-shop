"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { supabase } from "../../lib/supabaseClient"
import Navbar from "../components/Navbar"

export default function RegisterPage() {
    const router = useRouter()
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        if (password !== confirmPassword) {
            setError("Passwords do not match")
            return
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters")
            return
        }

        setLoading(true)

        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: { full_name: fullName },
            },
        })

        if (error) {
            setError(error.message)
            setLoading(false)
        } else {
            router.push("/")
            router.refresh()
        }
    }

    return (
        <>
            <Navbar />
            <main className="min-h-[80vh] flex items-center justify-center px-4 py-16">
                <div className="w-full max-w-md">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <span className="material-icons text-white text-3xl">
                                person_add
                            </span>
                        </div>
                        <h1 className="text-3xl font-extrabold tracking-tight">
                            Create Account
                        </h1>
                        <p className="text-sm text-gray-500 mt-2">
                            Join PrimeCut for exclusive access to premium cuts
                        </p>
                    </div>

                    {/* Error */}
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl p-4 mb-6 flex items-center gap-3">
                            <span className="material-icons text-lg">error_outline</span>
                            {error}
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleRegister} className="space-y-5">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder="John Doe"
                                required
                                className="w-full bg-white border border-primary/10 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                required
                                className="w-full bg-white border border-primary/10 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Min. 6 characters"
                                required
                                className="w-full bg-white border border-primary/10 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="••••••••"
                                required
                                className="w-full bg-white border border-primary/10 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-sm"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-primary hover:bg-red-700 text-white py-4 rounded-xl font-bold uppercase tracking-[0.15em] transition-all shadow-lg shadow-primary/20 disabled:opacity-60 flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <span className="material-icons animate-spin text-lg">
                                        autorenew
                                    </span>
                                    Creating account...
                                </>
                            ) : (
                                "Create Account"
                            )}
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-500 mt-8">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="text-primary font-bold hover:underline"
                        >
                            Sign In
                        </Link>
                    </p>
                </div>
            </main>
        </>
    )
}
