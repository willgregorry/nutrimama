import FeaturesComponent, { FeaturesIcon, FeaturesTitle, FeaturesImg, FeaturesDesc } from "../features/home/FeaturesComponent";

import { BookOpenText, CalendarFold, BookHeart, Stethoscope } from "lucide-react";

export default function Features() {
    return (
        <section id="features" className="flex overflow-hidden relative flex-col gap-12 justify-center items-center px-4 w-full min-h-screen scroll-mt-24 bgc-gradient-invert">
            <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-8 justify-center items-center">
                    <h1 className="text-5xl font-bold text-primary">
                        Features
                    </h1>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-12 w-full max-w-[1200px] mx-auto text-primary">
                    <FeaturesComponent>
                        <FeaturesImg src="/landing_page/kitab-ibu.png" />
                        <FeaturesIcon icon={BookOpenText} />
                        <FeaturesTitle>
                            Kitab Ibu
                        </FeaturesTitle>
                        <FeaturesDesc>
                            Modul edukasi berbasis artikel bergambar yang disesuaikan dengan tahapan kehamilan
                        </FeaturesDesc>
                    </FeaturesComponent>
                    <FeaturesComponent>
                        <FeaturesImg src="/landing_page/rancangan-makan.png" />
                        <FeaturesIcon icon={CalendarFold} />
                        <FeaturesTitle>
                            Rancangan Makan
                        </FeaturesTitle>
                        <FeaturesDesc>
                            Perancangan rencana makan bagi ibu hamil untuk menjaga gizi selama masa kehamilan
                        </FeaturesDesc>
                    </FeaturesComponent>
                    <FeaturesComponent>
                        <FeaturesImg src="/landing_page/jurnal-keluarga-bahagia.png" />
                        <FeaturesIcon icon={BookHeart} />
                        <FeaturesTitle>
                            Jurnal Keluarga Bahagia
                        </FeaturesTitle>
                        <FeaturesDesc>
                            Tracking gizi selama masa kehamilan untuk menjaga keseimbangan gizi pada masa kehamilan
                        </FeaturesDesc>
                    </FeaturesComponent>
                    <FeaturesComponent>
                        <FeaturesImg src="/landing_page/bimbingan-bidan.png" />
                        <FeaturesIcon icon={Stethoscope} />
                        <FeaturesTitle>
                            Bimbingan Bidan
                        </FeaturesTitle>
                        <FeaturesDesc>
                            Bimbingan bidan untuk menjaga kesehatan perkembangan janin selama masa kehamilan
                        </FeaturesDesc>
                    </FeaturesComponent>
                </div>
            </div>
        </section>
    )
}