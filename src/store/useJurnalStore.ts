import { create } from 'zustand'

export type JurnalHarianMasaKehamilanData = {
  proteinHewani: "Terpenuhi" | "Tidak Terpenuhi";
  airPutih: "Terpenuhi" | "Tidak Terpenuhi";
  tabletTambahDarah: "Terpenuhi" | "Tidak Terpenuhi";
  asamFolat: "Terpenuhi" | "Tidak Terpenuhi";
  mualLemas: "Iya" | "Tidak";
}

interface JurnalStore {
  harianMasaKehamilan: JurnalHarianMasaKehamilanData | null;
  setHarianMasaKehamilan: (data: JurnalHarianMasaKehamilanData) => void;
}

export const useJurnalStore = create<JurnalStore>((set) => ({
  harianMasaKehamilan: null,
  setHarianMasaKehamilan: (data) => set({ harianMasaKehamilan: data }),
}))
