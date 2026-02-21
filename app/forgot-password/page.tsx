"use client"

import { useState } from "react"
import Link from "next/link"
import { supabase } from "../../lib/supabaseClient"
import Navbar from "../components/Navbar"

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const [sent, setSent] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        setLoading(true)

        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${window.location.origin}/reset-password`,
        })

        if (error) {
            setError(error.message)
            setLoading(false)
        } else {
            setSent(true)
            setLoading(false)
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
                                lock_reset
                            </span>
                        </div>
                        <h1 className="text-3xl font-extrabold tracking-tight">
                            Forgot Password
                        </h1>
                        <p className="text-sm text-gray-500 mt-2">
                            Enter your email and we&apos;ll send you a reset link
                        </p>
                    </div>

                    {/* Success State */}
                    {sent ? (
                        <div className="text-center">
                            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="material-icons text-white text-4xl">
                                    mark_email_read
                                </span>
                            </div>
                            <h2 className="text-2xl font-bold mb-3">Check Your Email</h2>
                            <p className="text-gray-500 mb-2">
                                We&apos;ve sent a password reset link to:
                            </p>
                            <p className="text-charcoal font-bold mb-8">{email}</p>
                            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-left">
                                <div className="flex items-start gap-3">
                                    <span className="material-icons text-amber-500 text-lg mt-0.5">
                                        info
                                    </span>
                                    <div>
                                        <p className="text-sm font-bold text-amber-800 mb-1">
                                            Didn&apos;t receive the email?
                                        </p>
                                        <ul className="text-xs text-amber-700 space-y-1">
                                            <li>• Check your spam/junk folder</li>
                                            <li>• Make sure the email address is correct</li>
                                            <li>• The link will expire in 24 hours</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <button
                                    onClick={() => { setSent(false); setEmail("") }}
                                    className="w-full py-3 border-2 border-primary text-primary rounded-xl font-bold text-sm hover:bg-primary hover:text-white transition-all"
                                >
                                    Try Another Email
                                </button>
                                <Link
                                    href="/login"
                                    className="w-full py-3 bg-charcoal text-white rounded-xl font-bold text-sm text-center hover:bg-zinc-700 transition-colors"
                                >
                                    Back to Login
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <>
                            {/* Error */}
                            {error && (
                                <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl p-4 mb-6 flex items-center gap-3">
                                    <span className="material-icons text-lg">
                                        error_outline
                                    </span>
                                    {error}
                                </div>
                            )}

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-5">
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
                                            Sending...
                                        </>
                                    ) : (
                                        "Send Reset Link"
                                    )}
                                </button>
                            </form>

                            <p className="text-center text-sm text-gray-500 mt-8">
                                Remember your password?{" "}
                                <Link
                                    href="/login"
                                    className="text-primary font-bold hover:underline"
                                >
                                    Sign In
                                </Link>
                            </p>
                        </>
                    )}
                </div>
            </main>
        </>
    )
}
