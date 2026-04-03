"use client"

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardUsersTrackerSection() {
    return (
        <section className="flex flex-col w-full min-w-0 mt-8 mb-20">
            <div className="flex justify-between items-center w-full mb-8 gap-3">
                <h2
                    className="font-bold text-primary shrink-0"
                    style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.875rem)" }}
                >
                    Users Tracker
                </h2>
                <div className="flex-1 border-t border-primary/30 mx-2 sm:mx-4 hidden sm:block" />
            </div>

            <div className="flex flex-col items-center gap-10 bg-white rounded-[32px] p-8 sm:p-16">
                <div className="relative w-full max-w-[600px] aspect-[4/3] sm:aspect-video rounded-2xl overflow-hidden">
                    <Image
                        src="/users-tracker/dashboard-users.png"
                        alt="Users Tracker"
                        fill
                        className="object-contain"
                    />
                </div>

                <h3 className="text-black font-normal text-lg lg:text-2xl text-center leading-tight">
                    Pantau seluruh aktivitas selama masa kehamilan
                </h3>

                <div className="flex justify-center mt-2">
                    <Link href="/dashboard/users-tracker">
                        <Button
                            variant="default"
                            className="bg-primary hover:bg-primary/95 text-white rounded-[20px] px-12 py-7 font-semibold flex items-center gap-2 text-xl shadow-md transition-all hover:scale-105 active:scale-95 group"
                        >
                            Lainnya <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
