"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { supabase } from "../../lib/supabaseClient"
import Navbar from "../components/Navbar"

export default function ResetPasswordPage() {
    const router = useRouter()
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)
    const [sessionReady, setSessionReady] = useState(false)
    const [checking, setChecking] = useState(true)

    useEffect(() => {
        // Supabase automatically handles the token from the URL hash
        // and establishes a session when the user clicks the reset link
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (event) => {
                if (event === "PASSWORD_RECOVERY") {
                    setSessionReady(true)
                    setChecking(false)
                } else if (event === "SIGNED_IN") {
                    setSessionReady(true)
                    setChecking(false)
                }
            }
        )

        // Also check if already in a session
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession()
            if (session) {
                setSessionReady(true)
            }
            setChecking(false)
        }

        // Give a short delay for the auth state change to fire first
        setTimeout(checkSession, 1000)

        return () => {
            subscription.unsubscribe()
        }
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
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

        const { error } = await supabase.auth.updateUser({
            password: password,
        })

        if (error) {
            setError(error.message)
            setLoading(false)
        } else {
            setSuccess(true)
            setLoading(false)
        }
    }

    if (checking) {
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
            <main className="min-h-[80vh] flex items-center justify-center px-4 py-16">
                <div className="w-full max-w-md">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <span className="material-icons text-white text-3xl">
                                {success ? "check_circle" : "lock_reset"}
                            </span>
                        </div>
                        <h1 className="text-3xl font-extrabold tracking-tight">
                            {success ? "Password Updated!" : "Set New Password"}
                        </h1>
                        <p className="text-sm text-gray-500 mt-2">
                            {success
                                ? "Your password has been successfully changed"
                                : "Enter your new password below"
                            }
                        </p>
                    </div>

                    {/* Success State */}
                    {success ? (
                        <div className="text-center">
                            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                                <span className="material-icons text-white text-4xl">
                                    check
                                </span>
                            </div>
                            <p className="text-gray-500 mb-8">
                                You can now sign in with your new password.
                            </p>
                            <Link
                                href="/login"
                                className="w-full inline-block bg-primary hover:bg-red-700 text-white py-4 rounded-xl font-bold uppercase tracking-[0.15em] transition-all shadow-lg shadow-primary/20 text-center"
                            >
                                Go to Login
                            </Link>
                        </div>
                    ) : !sessionReady ? (
                        /* No valid session / expired link */
                        <div className="text-center">
                            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="material-icons text-red-500 text-4xl">
                                    link_off
                                </span>
                            </div>
                            <h2 className="text-xl font-bold mb-3">Invalid or Expired Link</h2>
                            <p className="text-gray-500 mb-8">
                                This password reset link is invalid or has expired.
                                Please request a new one.
                            </p>
                            <Link
                                href="/forgot-password"
                                className="w-full inline-block bg-primary hover:bg-red-700 text-white py-4 rounded-xl font-bold uppercase tracking-[0.15em] transition-all shadow-lg shadow-primary/20 text-center"
                            >
                                Request New Link
                            </Link>
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
                                        New Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Min. 6 characters"
                                            required
                                            className="w-full bg-white border border-primary/10 rounded-xl px-4 py-3.5 pr-12 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-sm"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                        >
                                            <span className="material-icons text-xl">
                                                {showPassword ? "visibility_off" : "visibility"}
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                                        Confirm New Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showConfirmPassword ? "text" : "password"}
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            placeholder="••••••••"
                                            required
                                            className="w-full bg-white border border-primary/10 rounded-xl px-4 py-3.5 pr-12 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-sm"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                        >
                                            <span className="material-icons text-xl">
                                                {showConfirmPassword ? "visibility_off" : "visibility"}
                                            </span>
                                        </button>
                                    </div>
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
                                            Updating...
                                        </>
                                    ) : (
                                        "Update Password"
                                    )}
                                </button>
                            </form>

                            {/* Password Requirements */}
                            <div className="mt-6 bg-gray-50 rounded-xl p-4">
                                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                                    Password Requirements
                                </p>
                                <ul className="text-xs text-gray-500 space-y-1">
                                    <li className="flex items-center gap-2">
                                        <span className={`material-icons text-sm ${password.length >= 6 ? "text-green-500" : "text-gray-300"}`}>
                                            {password.length >= 6 ? "check_circle" : "radio_button_unchecked"}
                                        </span>
                                        At least 6 characters
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className={`material-icons text-sm ${password && password === confirmPassword ? "text-green-500" : "text-gray-300"}`}>
                                            {password && password === confirmPassword ? "check_circle" : "radio_button_unchecked"}
                                        </span>
                                        Passwords match
                                    </li>
                                </ul>
                            </div>
                        </>
                    )}
                </div>
            </main>
        </>
    )
}
