import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, Star } from 'lucide-react';
import Image from 'next/image';

const MOCK_BIDAN = [
    {
        id: 1,
        name: "Acha",
        description: "Acha adalah bidan profesional yang berdedikasi dalam pelayanan kesehatan ibu dan bayi.",
        imageUrl: "https://i.pravatar.cc/150?img=5",
        rate: 5
    },
    {
        id: 2,
        name: "Naya",
        description: "Naya adalah Bidan ramah berpengalaman mendampingi kehamilan hingga proses persalinan aman dan nyaman.",
        imageUrl: "https://i.pravatar.cc/150?img=1",
        rate: 5
    }
];

export default function BimbinganBidanPage() {
    return (
        <div className="flex flex-col gap-6 w-full animate-in fade-in duration-300">

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
                <h1 className="text-3xl font-bold text-primary">Bimbingan Bidan</h1>
                <Button className="bg-primary hover:bg-primary-p6 text-white rounded-xl px-8 py-2 font-semibold text-base shadow-md h-auto">
                    Riwayat Chat
                    <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
            </div>

            <div className="relative w-full mt-2">
                <input
                    type="text"
                    placeholder="Pencarian"
                    className="w-full bg-neutral-p10/40 text-black placeholder:text-gray-500 rounded-full py-2 px-6 outline-none focus:ring-2 focus:ring-primary/50 transition-all text-lg font-medium"
                />
                <Search className="w-6 h-6 text-white absolute right-6 top-1/2 -translate-y-1/2" />
            </div>

            <div className="flex flex-col gap-5 w-full mt-4">
                {MOCK_BIDAN.map((bidan) => (
                    <div
                        key={bidan.id}
                        className="flex flex-col sm:flex-row items-start sm:items-center p-5 bg-neutral-p1 border border-white rounded-[24px] shadow-sm gap-5"
                    >
                        {/* Image Profile */}
                        <div className="w-24 h-24 sm:w-[100px] sm:h-[100px] shrink-0 rounded-2xl overflow-hidden bg-gray-200 shadow-sm relative">
                            <Image
                                src={bidan.imageUrl}
                                alt={bidan.name}
                                fill
                                sizes="(max-width: 768px) 100px, 100px"
                                className="object-cover"
                            />
                        </div>

                        {/* Text Information */}
                        <div className="flex flex-col flex-1 gap-1.5">
                            <h3 className="text-xl font-medium text-[#4B4B4B]">{bidan.name}</h3>
                            <p className="text-sm font-medium text-[#6B6B6B] leading-relaxed max-w-xl">
                                {bidan.description}
                            </p>
                        </div>

                        {/* Rating block */}
                        <div className="flex flex-col items-center sm:items-end gap-1 mt-4 sm:mt-0 shrink-0 min-w-[120px]">
                            <span className="text-sm font-medium text-[#4B4B4B] mr-1">Rate</span>
                            <div className="flex items-center gap-1">
                                {[...Array(bidan.rate)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-[#F2C94C] text-[#F2C94C]" />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full h-8 bg-neutral-p1/50 rounded-full mt-2" />
        </div>
    );
}
