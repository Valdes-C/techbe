

// @ts-expect-error - missing type declarations
import 'swiper/css';
// @ts-expect-error - missing type declarations
import 'swiper/css/effect-fade';


import {Swiper,SwiperSlide} from "swiper/react";
import {EffectFade, Navigation} from "swiper/modules";
import {slides} from "@/components/data/home-data.ts";
import {Button} from "@/components/ui/button.tsx";
import {ArrowRightIcon, MoveLeftIcon, MoveRightIcon} from "lucide-react";


export default function Hero(){

    return (
        <section className="clip-path1 overflow-hidden">
            <Swiper
                className="swiper swiper-initialized swiper-horizotal swiper-autoheight"
                modules={[Navigation,EffectFade]}
                effect="fade"
                loop={true}
                navigation={{
                    prevEl: '#silder-prev',
                    nextEl: '#silder-next',
                }}
                autoHeight={true}
            >
                {
                    slides.map(slide =>
                        <SwiperSlide key={slide.id} className="swiper-slide z-10 min-h-[400px] h-[calc(100vh-100px)]!">
                            <div className="absolute inset-0 -z-1 after:absolute bg-center bg-cover
                            after:top-0 after: left-0 after:-z-1 after:h-full after:w-full after:bg-linear-(--gradient3)
                            after:opacity-90 animate-scale-in"
                            style={{backgroundImage: `url(${slide.bgSrc})`}}
                            />
                            <div className="container h-full">
                                <div className="flex h-full flex-col items start justify-center lg:max-w-2/3">
                                    <div className="mb-2 text-sm lg:text-lg font-semibold text-white uppercase">
                                        {slide.subtitle}
                                    </div>
                                    <div className="text-xl lg:text-7xl font-extrabold  text-white">
                                        <div className="mb-2">{slide.title1}</div>
                                        <div>{slide.title2}</div>
                                    </div>
                                    <p className="mt-5 mb-10 max-w-[675px] text-sm lg:text-lg font-medium text-white">
                                        {slide.text}
                                    </p>
                                    <Button>
                                        Sprawdź <ArrowRightIcon />
                                    </Button>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
            <button id="slider-prev" className="absolute top-[75%] lg:top[53%] left-[2%] size-14 flex justify-center items-center border
            border-primary z-10 cursor-pointer bg-transparent rounded-full hover:bg-linear-(--gradient)">
                <MoveLeftIcon className="stroke-border" />
            </button>
            <button id="slider-next" className="absolute top-[75%] lg:top[53%] right-[2%] size-14 flex justify-center items-center border
            border-primary z-10 cursor-pointer bg-transparent rounded-full hover:bg-linear-(--gradient)">
                <MoveRightIcon className="stroke-border" />
            </button>
        </section>
    )
}