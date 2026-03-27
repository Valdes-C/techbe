import AppSection from "@/components/ui/app-section.tsx";

export default function NotFoundPage(){
    return (
        <AppSection title="404">
            <div className="mt-28 text-center text-7xl font-bold uppercase leading-24">
                <div>Nie znaleziono strony</div>
                <div className="pt-5">Błąd 404</div>
            </div>
        </AppSection>
    )
}