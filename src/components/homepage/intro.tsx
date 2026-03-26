
import {useEffect} from "react";

// @ts-expect-error - missing type declaration
import WOW from 'wow.js';
import 'wow.js/css/libs/animate.css'
import Section from "@/components/ui/section.tsx";
import Header from "@/components/ui/header.tsx";

export default function Intro (){

    useEffect(() => {
        const wow = new  WOW({
            live: false

        });
        wow.init();

        // @ts-expect-error -missing type declaration
        import('../../../public/js/tilt.min.js')
    }, []);

    return (
        <Section className="bg-[url(/public/bg/gray-waves-bg.png)]">
            <div className="container max-w-[1300px]">
                <div className="grid gap-14 lg:grid-cols-2">
                    <div className="relative wow fadeInUp" data-wow-dalay=".3s">
                        <div className="absolute bottom-12">
                            <img
                                data-tilt=""
                                data-tilt-max={10}
                                alt=""
                                src="/bg/about-bg.png"
                                width={465}
                                height={230}
                            />
                        </div>
                        <div className="relative -right-5 -bottom-1 lg:-right-28">
                            <img
                                data-tilt=""
                                data-tilt-max={20}
                                alt="screen z aplikacji z wykresem kołowym"
                                src="/images/screen1.jpg"
                                width={242}
                                height={474}
                                className="shadow-xl"
                            />
                        </div>
                        <div className="absolute -top-5 right-44 animate-spin animate-duration-150 lg:top-24">
                            <img src="/icons/star.png" alt="" width={34} height={34} />
                        </div>
                        <div className="absolute -top-7 right-40 animate-spin animate-duration-150 lg:top-32">
                            <img src="/icons/star-small.png" alt="" width={24} height={24} />
                        </div>
                        <div className="absolute -top-12 -left-1 animate-spin animate-duration-150 lg:top-10">
                            <img src="/icons/about.png" alt="" width={73} height={68} />
                        </div>
                    </div>
                    <div className="wow fadeInUp" data-wow-dalay=".6s">
                        <Header
                            title="Zwiększamy Twoją efektywność i świadomość budowania budżetu"
                            subTitle="O aplikacji"
                            subTitleClass="text-left"
                            titleClass="text-left"
                        />
                        <p className="text-gray mb-4 text-base leading-tight">
                            Dzięki temu narzędziu nauczysz się jak skalować biznes.
                        </p>
                        <div className="my-10 space-y-4">
                            <div className="flex ml-1.5 items-center gap-2">
                                <img
                                    src="/public/icons/sign-icon.png"
                                    alt=""
                                    width={20}
                                    height={20}
                                />
                                <p className="text-gray">
                                    Mnogość kategorii finansowych.
                                </p>
                            </div>
                            <div className="flex ml-1.5 items-center gap-2">
                                <img
                                    src="/public/icons/sign-icon.png"
                                    alt=""
                                    width={20}
                                    height={20}
                                />
                                <p className="text-gray">
                                    Wiele źródeł rachunków.
                                </p>
                            </div>
                            <div className="flex ml-1.5 items-center gap-2">
                                <img
                                    src="/public/icons/sign-icon.png"
                                    alt=""
                                    width={20}
                                    height={20}
                                />
                                <p className="text-gray">
                                    Czytelene wykresy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )

}