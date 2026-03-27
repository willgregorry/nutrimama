import { useQuery } from "@tanstack/react-query"

export interface MenuItem {
    nama: string
    gambar: string
    kalori: number
}

export interface HariMenu {
    hari: string
    menu: MenuItem[]
}

async function fetchRancanganMakan(): Promise<HariMenu[]> {
    const res = await fetch("/data/rancangan-makan.json")
    if (!res.ok) throw new Error("Gagal mengambil data rancangan makan")
    return res.json()
}

export function useRancanganMakan() {
    return useQuery<HariMenu[]>({
        queryKey: ["rancangan-makan"],
        queryFn: fetchRancanganMakan,
        staleTime: 1000 * 60 * 5,
    })
}
