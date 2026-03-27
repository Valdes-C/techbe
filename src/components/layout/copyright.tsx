export default function Copyright() {
    return (
        <div className="bg-primary py-4">
            <div className="container">
                <div className="flex flex-col items-start gap-3 lg:flex-row lg:items-center lg:justify-between">
                    <p className="text-white">
                        <a href="/">Techbe</a>{" "}
                        {new Date().getFullYear()}© Wszelkie prawa zastrzeżone
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="/" className="text-white">
                            Regulamin
                        </a>
                        <a href="/" className="text-white">
                            Polityka prywatności
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}