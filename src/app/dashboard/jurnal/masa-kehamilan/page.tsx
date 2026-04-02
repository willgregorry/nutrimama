import JurnalPeriodPage from "@/components/features/jurnal/JurnalPeriodPage";

export const metadata = {
    title: "Masa Kehamilan - Jurnal Keluarga Bahagia",
    description: "Tracking gizi masa kehamilan pada Jurnal Keluarga Bahagia NutriMama",
}

export default function MasaKehamilan() {
    return <JurnalPeriodPage title="Jurnal Keluarga Bahagia (Masa Kehamilan)" type="masa-kehamilan" />
}
