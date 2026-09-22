import SectionDivider from "@/components/SectionDivider";
import PageNavigation from "@/components/PageNavigation";
import { Terminal, Code2, Cpu, Braces, Sparkles, AlertTriangle, Workflow, BrainCircuit } from "lucide-react";

export default function CreerenMetTechnologiePage() {
    return (
        <div className="flex flex-col gap-16 pb-24">
            {/* Hero - Light Matrix Theme */}
            <section className="relative pt-12 text-center md:text-left overflow-hidden">
                <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-emerald-500/20 blur-[100px] opacity-50" />
                {/* Matrix Background Effect */}
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                <span className="mb-4 inline-block rounded-full bg-emerald-500/10 px-4 py-1.5 text-sm font-bold text-emerald-500">
                    Product 6: Creëren met Technologie
                </span>
                <h1 className="mb-6 font-heading text-5xl font-extrabold leading-tight md:text-7xl">
                    De Matrix <span className="text-emerald-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">Doorbroken</span>
                </h1>
                <p className="max-w-2xl text-xl text-muted-foreground leading-relaxed">
                    Ken je die scène uit <em>The Matrix</em> waarin Neo de wereld niet meer ziet als gebouwen en mensen, maar als stromende groene regels code? In de module Vibecoding ervaren we precies dat: we breken de illusie dat programmeren een exclusieve 'ver-van-mijn-bed-show' is.
                </p>
                <div className="mt-8 p-6 bg-card border-l-4 border-emerald-500 rounded-r-2xl max-w-2xl shadow-lg relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                        <Braces className="w-24 h-24 text-emerald-500" />
                    </div>
                    <blockquote className="text-lg italic text-foreground relative z-10">
                        "Wat als je die code helemaal niet zelf hoeft te typen om te kunnen creëren, zolang je de achterliggende logica maar snapt?"
                    </blockquote>
                </div>
            </section>

            <SectionDivider color="fill-emerald-500/5" />

            {/* Van Regels Code naar Instrument Bespelen */}
            <section className="grid gap-12 md:grid-cols-2 items-center">
                <div>
                    <h2 className="text-3xl font-bold font-heading mb-6 text-foreground">
                        Van Regels Typen naar een <span className="text-emerald-500">Instrument Bespelen</span>
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                        Uit observaties tijdens de workshop <em>Ontdek de kracht van Vibecoding</em> bleek dat de drempel voor technologieonderwijs hoog is. Bij klassieke lessen ligt de focus op syntax: het uit je hoofd leren van commando's en het precies goed plaatsen van puntkomma's (de lagere niveaus van Bloom).
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                        Door AI als 'bouwvakker' in te zetten (bijv. via ChatGPT Canvas of Visual Studio Code met Antigravity), word jij de <strong>architect</strong>. Vibecoding verschuift de focus direct naar hogere denkvaardigheden: analyseren, evalueren en creëren. De overgang van blind intypen naar doelgericht instrueren.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex gap-3 text-muted-foreground">
                            <Sparkles className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                            <span><strong>Het idee als motor:</strong> Zonder doel de tool induiken is een valkuil. Via <em>Context Engineering</em> start je met een echt probleem. Wat wil je oplossen? Welke saaie taak wil je automatiseren?</span>
                        </li>
                        <li className="flex gap-3 text-muted-foreground">
                            <Workflow className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                            <span><strong>Constructionisme (Papert, 1980):</strong> We leren het beste wanneer we actief bezig zijn met het maken van een tastbaar product dat persoonlijke betekenis voor ons heeft.</span>
                        </li>
                    </ul>
                </div>
                <div className="bg-card p-8 rounded-3xl border border-border shadow-xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent z-0" />
                    <div className="relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
                            <AlertTriangle className="w-6 h-6 text-emerald-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-foreground">De Docent als Regulator van Frustratie</h3>
                        <p className="text-muted-foreground mb-4">
                            Omdat de student de regie overneemt, verandert de rol van de docent naar <em>orchestrating</em> (Kajamaa et al., 2020). Je bent niet langer de expert met alle antwoorden, maar een coach die frustratie reguleert.
                        </p>
                        <blockquote className="border-l-2 border-emerald-500/50 pl-4 py-1 italic text-foreground">
                            "De 'error' is geen ramp, het is testdata voor je analytische vermogen. Als het scherm wit blijft, is de vraag: wat deed de app net nog wél?"
                        </blockquote>
                    </div>
                </div>
            </section>

            {/* Computational Thinking */}
            <section className="bg-emerald-500/5 -mx-4 px-4 md:-mx-8 md:px-8 py-16 rounded-[3rem] border border-emerald-500/10">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold font-heading mb-4 text-foreground">De Kracht van <span className="text-emerald-500">Computational Thinking</span></h2>
                    <p className="text-muted-foreground">
                        Critici stellen dat AI leidt tot cognitieve luiheid (Risko & Gilbert, 2016). Maar binnen Vibecoding is Computational Thinking (CT) directer aanwezig dan bij traditionele beginnerslessen. Als de AI iets bouwt wat niet werkt, kun je niet klagen "hij doet het niet". Je móét systeemdenken toepassen.
                    </p>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            icon: <BrainCircuit />,
                            title: "Decompositie",
                            desc: "Een complex probleem (zoals 'ik wil een darten-score app') opdelen in kleine, logische functionaliteiten die de AI kan behappen."
                        },
                        {
                            icon: <Workflow />,
                            title: "Algoritmisch Denken",
                            desc: "De AI stap-voor-stap en in de juiste, chronologische volgorde instrueren om de functionaliteit werkend te krijgen."
                        },
                        {
                            icon: <Code2 />,
                            title: "Abstractie",
                            desc: "Bepalen welke functies essentieel zijn voor de webtool en welke ruis (onnodige complexiteit) weggelaten kan worden."
                        },
                        {
                            icon: <Terminal />,
                            title: "Patroonherkenning",
                            desc: "Ontdekken hoe specifieke formuleringen in prompts leiden tot (fout)meldingen en de communicatie daarop aanpassen."
                        }
                    ].map((item, i) => (
                        <div key={i} className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-emerald-500/30 transition-all group">
                            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <div className="text-emerald-500 w-5 h-5">{item.icon}</div>
                            </div>
                            <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Differentiëren & Conclusie */}
            <section className="grid gap-8 md:grid-cols-2">
                <div className="bg-card p-8 rounded-3xl border border-border">
                    <h3 className="text-2xl font-bold font-heading mb-4 text-foreground">De Nerd en de Automater</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                        Een groot voordeel van Vibecoding is dat differentiëren vanzelf gaat. In exact dezelfde workshop bouwt de ene student een simpel rekenmachientje, terwijl de ander een API-koppeling live zet.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        De AI fungeert als adaptief systeem dat meebeweegt. Dit haalt de drempel weg voor digitaal minder vaardige studenten, en voorkomt dat koplopers zich vervelen. Technologieonderwijs wordt zo toegankelijk voor iedereen.
                    </p>
                </div>
                <div className="bg-card p-8 rounded-3xl border border-border bg-emerald-500 text-primary-foreground relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <Code2 className="w-32 h-32" />
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold font-heading mb-4">Durf te Prutsen!</h3>
                        <p className="text-emerald-50 leading-relaxed mb-6">
                            "Ik dacht dat programmeren een soort magie was voor wiskundigen," zei een deelnemer. Niet de code, maar het nauwkeurig formuleren van je gedachten bleek de échte uitdaging.
                        </p>
                        <p className="text-emerald-50 leading-relaxed font-bold">
                            Mijn advies: begin klein, begin vandaag. Laat studenten weer prutsen zoals we vroeger met LEGO deden. Je leert dit niet uit een boekje, maar door meters te maken en te durven falen.
                        </p>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <PageNavigation
                prev={{ name: "Ethische Dilemma's", href: "/ethische-dilemmas" }}
                next={{ name: "Kritisch Denken", href: "/kritisch-denken" }}
            />
        </div>
    );
}

