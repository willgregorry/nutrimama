import ServicesComponent, { ServicesIcon, ServicesDesc } from "../features/home/ServicesComponent";

import { Baby, Carrot, BicepsFlexed } from "lucide-react";

export default function Services() {
    return (
        <section id="services" className="flex overflow-hidden relative flex-col gap-12 justify-center items-center px-4 w-full min-h-screen scroll-mt-24 bgc-gradient">
            <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-8 justify-center items-center">
                    <h1 className="text-5xl font-bold text-primary">
                        Services
                    </h1>
                </div>
                <div className="flex flex-col gap-32 justify-between items-center w-full h-full lg:flex-row text-primary">
                    <ServicesComponent>
                        <ServicesIcon icon={Baby} />
                        <ServicesDesc>
                            Menyediakan media edukasi terkait pemenuhan gizi pada ibu hamil
                            melalui informasi yang kredibel dan akurat serta sesuai dengan
                            arahan para ahli
                        </ServicesDesc>
                    </ServicesComponent>
                    <ServicesComponent>
                        <ServicesIcon icon={Carrot} />
                        <ServicesDesc>
                            Membuat perencanaan makan yang terstruktur bagi ibu hamil untuk
                            memenuhi gizi selama masa kehamilan
                        </ServicesDesc>
                    </ServicesComponent>
                    <ServicesComponent>
                        <ServicesIcon icon={BicepsFlexed} />
                        <ServicesDesc>
                            Membuat tracking pemenuhan gizi pada ibu hamil demi menjaga
                            keseimbangan gizi selama masa kehamilan
                        </ServicesDesc>
                    </ServicesComponent>
                </div>
            </div>
        </section>
    )
}