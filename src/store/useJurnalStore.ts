import { create } from 'zustand'

export type JurnalHarianMasaKehamilanData = {
  proteinHewani: "Terpenuhi" | "Tidak Terpenuhi";
  airPutih: "Terpenuhi" | "Tidak Terpenuhi";
  tabletTambahDarah: "Terpenuhi" | "Tidak Terpenuhi";
  asamFolat: "Terpenuhi" | "Tidak Terpenuhi";
  mualLemas: "Iya" | "Tidak";
}

export type JurnalMingguanMasaKehamilanData = {
  omega3: "Terpenuhi" | "Tidak Terpenuhi";
  beratBadan: string;
  aktivitasFisik: string;
}

export type JurnalBulananMasaKehamilanData = {
  suplemenKalsium: "Terpenuhi" | "Tidak Terpenuhi";
  pengukuranLila: "Terpenuhi" | "Tidak Terpenuhi";
  cekHemoglobin: "Terpenuhi" | "Tidak Terpenuhi";
  pemeriksaanAnc: "Terpenuhi" | "Tidak Terpenuhi";
  pemeriksaanTensi: "Terpenuhi" | "Tidak Terpenuhi";
}

export type JurnalHarianPascaKelahiranData = {
  asiEksklusif: "Terpenuhi" | "Tidak Terpenuhi";
  mpasi: "Terpenuhi" | "Tidak Terpenuhi";
  lemakTambahan: "Terpenuhi" | "Tidak Terpenuhi";
  karbohidratProteinNabati: "Terpenuhi" | "Tidak Terpenuhi";
  sayuranBuah: "Terpenuhi" | "Tidak Terpenuhi";
  garamBeryodium: "Terpenuhi" | "Tidak Terpenuhi";
  zatBesiVitaminD3: "Terpenuhi" | "Tidak Terpenuhi";
  polaBabBak: string;
}

export type JurnalMingguanPascaKelahiranData = {
  omega3: "Terpenuhi" | "Tidak Terpenuhi";
}

export type JurnalBulananPascaKelahiranData = {
  vitaminA: "Terpenuhi" | "Tidak Terpenuhi";
  beratBadanAnak: string;
  tinggiAnak: string;
  lingkarKepala: string;
  imunisasiDasar: "Terpenuhi" | "Tidak Terpenuhi";
  cekHemoglobin: "Terpenuhi" | "Tidak Terpenuhi";
}

interface JurnalStore {
  harianMasaKehamilan: JurnalHarianMasaKehamilanData | null;
  mingguanMasaKehamilan: JurnalMingguanMasaKehamilanData | null;
  bulananMasaKehamilan: JurnalBulananMasaKehamilanData | null;
  harianPascaKelahiran: JurnalHarianPascaKelahiranData | null;
  mingguanPascaKelahiran: JurnalMingguanPascaKelahiranData | null;
  bulananPascaKelahiran: JurnalBulananPascaKelahiranData | null;
  setHarianMasaKehamilan: (data: JurnalHarianMasaKehamilanData) => void;
  setMingguanMasaKehamilan: (data: JurnalMingguanMasaKehamilanData) => void;
  setBulananMasaKehamilan: (data: JurnalBulananMasaKehamilanData) => void;
  setHarianPascaKelahiran: (data: JurnalHarianPascaKelahiranData) => void;
  setMingguanPascaKelahiran: (data: JurnalMingguanPascaKelahiranData) => void;
  setBulananPascaKelahiran: (data: JurnalBulananPascaKelahiranData) => void;
}

export const useJurnalStore = create<JurnalStore>((set) => ({
  harianMasaKehamilan: null,
  mingguanMasaKehamilan: null,
  bulananMasaKehamilan: null,
  harianPascaKelahiran: null,
  mingguanPascaKelahiran: null,
  bulananPascaKelahiran: null,
  setHarianMasaKehamilan: (data) => set({ harianMasaKehamilan: data }),
  setMingguanMasaKehamilan: (data) => set({ mingguanMasaKehamilan: data }),
  setBulananMasaKehamilan: (data) => set({ bulananMasaKehamilan: data }),
  setHarianPascaKelahiran: (data) => set({ harianPascaKelahiran: data }),
  setMingguanPascaKelahiran: (data) => set({ mingguanPascaKelahiran: data }),
  setBulananPascaKelahiran: (data) => set({ bulananPascaKelahiran: data }),
}))
