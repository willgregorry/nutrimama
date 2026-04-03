import { useMutation } from "@tanstack/react-query"
import { apiClient } from "@/lib/axios"

export interface MealPlanItem {
    FoodLogID: number
    MealPlanID: number
    FoodID: number
    food_name: string
    food_image: string
    LogDate: string
    day_name: string
    Eaten: boolean
    MealTime: string
}

async function generateMealPlan(): Promise<MealPlanItem[]> {
    const res = await apiClient.post("/meal-plans/generate-ai")
    return res.data?.data || []
}

export function useMealPlanGenerate() {
    return useMutation<MealPlanItem[]>({
        mutationFn: generateMealPlan,
    })
}
