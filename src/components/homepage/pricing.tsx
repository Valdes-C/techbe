import Header from "@/components/ui/header.tsx";
import { pricingPlans } from "@/data/home-data.ts";
import Section from "@/components/ui/section.tsx";
import { Button } from "../ui/button";
import { ArrowDownIcon } from "lucide-react";

export default function Pricing() {
    return (
        <Section className="relative bg-[url(/bg/pricing.jpg)] bg-cover bg-center bg-no-repeat">
            <div className="absolute -top-24 left-0">
                <img
                    src="/shapes/pricing-shape.png"
                    alt=""
                    width={293}
                    height={553}
                />
            </div>

            <div className="container max-w-[1300px]">
                <Header title="Nasze plany" subTitle="Cennik" />

                <div className="relative mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
                    {pricingPlans.map((plan) => (
                        <div
                            key={plan.id}
                            data-wow-delay={plan.delay}
                            className="border-muted wow fadeInUp relative w-full max-w-[340px] rounded-2xl border bg-white"
                        >
                            <div className="rounded-t-2xl rounded-b-[50px] bg-[url(/bg/pricing-header-bg.png)] bg-cover bg-center bg-no-repeat px-14 py-7">
                                <div className="mb-6 rounded-xl bg-white px-12 py-4 text-center font-semibold">
                                    {plan.badge}
                                </div>

                                <div className="mb-2 text-center text-4xl font-semibold text-white">
                                    {plan.price}
                                </div>

                                <div className="text-center text-lg text-white">
                                    {plan.period}
                                </div>
                            </div>

                            <ul className="my-10 pl-10">
                                {plan.features.map((feature, featureIndex) => (
                                    <li
                                        key={featureIndex}
                                        className="mb-4 ml-1.5 flex items-center gap-2"
                                    >
                                        <img
                                            src="/icons/sign-icon2.png"
                                            alt=""
                                            width={16}
                                            height={16}
                                        />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mb-9 ml-10">
                                <Button>
                                    {plan.buyText} <ArrowDownIcon />
                                </Button>
                            </div>

                            <div className="absolute bottom-0 right-0">
                                <img
                                    src="/shapes/pricing-shape.png"
                                    alt=""
                                    width={100}
                                    height={110}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}