import Features from "@/components/homepage/features.tsx";
import Intro from "@/components/homepage/intro.tsx";


import 'wow.js/css/libs/animate.css'
import Hero from "@/components/homepage/hero.tsx";
import Testimonials from "@/components/homepage/testsimonials.tsx";

export default function HomePage () {
    return (
        <main className="bg-white">
            <title>Techbe</title>
            <Hero />
            <Features />
            <Intro />
            <Testimonials />
        </main>
    )
}