"use client"

import { useState, useEffect } from "react"
import { Bell, CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { apiClient } from "@/lib/axios"

function urlBase64ToUint8Array(base64String: string) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4)
    const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/')

    const rawData = window.atob(base64)
    const outputArray = new Uint8Array(rawData.length)

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
}

export default function NotificationBanner() {
    const [permission, setPermission] = useState<NotificationPermission>("default")
    const [loading, setLoading] = useState(false)
    const [subscribed, setSubscribed] = useState(false)

    useEffect(() => {
        if ("Notification" in window) {
            setPermission(Notification.permission)
        }
    }, [])

    const handleSubscribe = async () => {
        if (!("Notification" in window) || !("serviceWorker" in navigator) || !("PushManager" in window)) {
            alert("Browser Anda tidak mendukung web push notifikasi.")
            return
        }

        try {
            setLoading(true)
            const result = await Notification.requestPermission()
            setPermission(result)

            if (result === "granted") {


                const registration = await navigator.serviceWorker.register("/sw.js")
                const vapidResponse = await apiClient.get("/notifications/vapid-public-key")
                const vapidPublicKey = vapidResponse.data?.public_key

                if (!vapidPublicKey) {
                    alert("Sistem notifikasi sedang tidak tersedia.")
                    return
                }

                const subscription = await registration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: urlBase64ToUint8Array(vapidPublicKey)
                })

                const subscriptionJson = subscription.toJSON()

                await apiClient.post("/notifications/subscribe", {
                    endpoint: subscriptionJson.endpoint,
                    p256h: subscriptionJson.keys?.p256dh,
                    p256dh: subscriptionJson.keys?.p256dh,
                    auth: subscriptionJson.keys?.auth,
                    platform: "web"
                })

                setSubscribed(true)
            }
        } catch (error) {
            console.error("Gagal berlangganan notifikasi:", error)
            alert("Gagal berlangganan notifikasi." + error)
        } finally {
            setLoading(false)
        }
    }

    if (permission === "granted" && !subscribed) {
        console.log(permission)
        console.log(Notification.permission)
        return null

    }

    if (permission === "denied") {
        return null
    }

    if (subscribed) {
        return (
            <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 w-full p-4 rounded-2xl mb-6 shadow-sm">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <p className="font-semibold text-sm">Notifikasi berhasil diaktifkan!</p>
            </div>
        )
    }

    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-primary/10 border border-primary/20 w-full p-5 rounded-2xl mb-6 shadow-sm">
            <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                    <Bell className="w-6 h-6 text-primary" />
                </div>
                <div>
                    <h3 className="font-bold text-black text-base">Aktifkan Notifikasi</h3>
                    <p className="text-sm text-neutral-600 font-medium mt-1">Dapatkan pengingat jadwal langsung di layar perangkat Anda.</p>
                </div>
            </div>
            <Button
                onClick={handleSubscribe}
                disabled={loading}
                className="w-full sm:w-auto bg-primary hover:bg-primary-p6 text-white rounded-xl shadow-md h-11 px-6 flex items-center justify-center min-w-[100px]"
            >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Izinkan"}
            </Button>
        </div>
    )
}
