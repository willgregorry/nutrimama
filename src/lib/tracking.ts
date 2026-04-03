import { apiClient } from "@/lib/axios"

export async function submitTracking(
    frequency: "daily" | "weekly" | "monthly",
    answersData: Record<string, boolean | string>
) {
    const trackingDate = new Date().toISOString()
    const answers: Record<string, boolean | string> = {}
    for (const [key, val] of Object.entries(answersData)) {
        if (val === "Terpenuhi") answers[key] = true
        else if (val === "Tidak Terpenuhi") answers[key] = false
        else answers[key] = val
    }
    await apiClient.post("/tracking", {
        frequency,
        tracking_date: trackingDate,
        answers_data: JSON.stringify(answers),
    })
}
