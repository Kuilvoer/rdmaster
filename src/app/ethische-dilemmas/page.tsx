import SectionDivider from "@/components/SectionDivider";
import PageNavigation from "@/components/PageNavigation";
import { AlertTriangle, Scale, ShieldQuestion, PenTool, UserCog, Lightbulb } from "lucide-react";

export default function EthischeDilemmasPage() {
    return (
        <div className="flex flex-col gap-16 pb-24">
            {/* Hero */}
            <section className="relative pt-12 text-center md:text-left overflow-hidden">
                <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-purple-500/20 blur-[100px] opacity-50" />
                <span className="mb-4 inline-block rounded-full bg-purple-500/10 px-4 py-1.5 text-sm font-bold text-purple-500">
                    Product 5: Ethische Dilemma's
                </span>
                <h1 className="mb-6 font-heading text-5xl font-extrabold leading-tight md:text-7xl">
                    Tussen Ambacht en <span className="text-purple-500">Algoritme</span>
                </h1>
                <p className="max-w-2xl text-xl text-muted-foreground leading-relaxed">
                    AI in het onderwijs dwingt ons tot fundamentele keuzes. Het is niet simpelweg 'voor' of 'tegen'; het gaat om de botsing tussen diepgewortelde waarden. Authenticiteit versus Doelmatigheid. Twee ethische dilemma's uit de onderwijspraktijk uitgelicht.
                </p>
            </section>

            <SectionDivider color="fill-purple-500/5" />

            {/* Dilemma A: Taalonderwijs */}
            <section className="grid gap-12 md:grid-cols-2 items-center">
                <div className="bg-card p-8 rounded-3xl border-l-4 border-l-purple-500 border-y border-r border-border shadow-lg">
                    <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6">
                        <PenTool className="w-8 h-8 text-purple-500" />
                    </div>
                    <h2 className="text-2xl font-bold font-heading mb-4 text-foreground">Dilemma A: Het Taalonderwijs</h2>
                    <p className="text-muted-foreground leading-relaxed italic mb-6">
                        "Is het goed om binnen het taalonderwijs de schrijfvaardigheid uitsluitend zónder generatieve AI te examineren om de authentieke taalontwikkeling te borgen, terwijl onze onderwijsvisie vereist dat we studenten voorbereiden op een AI-rijke beroepspraktijk?"
                    </p>
                    <div className="space-y-4">
                        <div className="bg-background p-4 rounded-xl border border-border">
                            <h4 className="font-bold text-sm text-foreground mb-1">Perspectief 1 (Behoudend)</h4>
                            <p className="text-sm text-muted-foreground"><strong>Waarden: Authenticiteit & Eerlijkheid.</strong> We moeten vaststellen wat de student zélf kan zonder technologische ruis, anders worden ze afhankelijk van systemen voor basiscommunicatie.</p>
                        </div>
                        <div className="bg-background p-4 rounded-xl border border-border">
                            <h4 className="font-bold text-sm text-foreground mb-1">Perspectief 2 (Werkveld)</h4>
                            <p className="text-sm text-muted-foreground"><strong>Waarden: Doelmatigheid & Maatschappij.</strong> AI is een standaardtool. Studenten de toegang ontzeggen creëert een schijnwerkelijkheid en een kloof met de arbeidsmarkt.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold font-heading mb-6 text-foreground">De <span className="text-purple-500">Gelaagde</span> Aanpak</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                        Uit moreel beraad met vakdocenten bleek dat we niet moeten kiezen vóór of tégen AI, maar voor een <strong>gelaagde aanpak</strong>. De basisvaardigheden (zoals zinsbouw) toetsen we authentiek zónder AI. Bij complexe, beroepsgerichte opdrachten laten we AI toe als co-auteur.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                        Theoretisch voorkomt dit nadelige <em>cognitive offloading</em> (Risko & Gilbert, 2016). Door basale denkprocessen niet te vroeg uit te besteden, bouwen studenten de benodigde 'mental models' op. Zodra die basis staat, stelt AI hen in staat zich te richten op hogere-orde vaardigheden zoals structuur en strategie.
                    </p>
                    <div className="flex gap-4 items-center p-4 bg-purple-500/10 rounded-2xl border border-purple-500/20 text-purple-700 dark:text-purple-300">
                        <Lightbulb className="w-6 h-6 shrink-0" />
                        <p className="text-sm font-medium">Concreet advies: Splits summatieve toetsing in een 'fundament-toets' (zonder AI) en een 'beroepsproduct' (met AI en logboek).</p>
                    </div>
                </div>
            </section>

            {/* Dilemma B: Marketing / Social Media */}
            <section className="bg-purple-500/5 -mx-4 px-4 md:-mx-8 md:px-8 py-16 rounded-[3rem] border border-purple-500/10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl font-bold font-heading mb-6 text-foreground">Dilemma B: <span className="text-purple-500">Marketing</span></h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            "Is het goed om GenAI volledig toe te staan tijdens de summatieve toets van de module Social Media omdat het werkveld dit als sparringpartner gebruikt, wetende dat dit de betrouwbaarheid voor de examencommissie onder druk zet?"
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Hier botst <strong>Authenticiteit</strong> (het simuleren van echte beroepstaken met AI) hard met de <strong>Betrouwbaarheid en Validiteit</strong> van de Examencommissie (weerspiegelt het diploma de kennis van de student, of de kracht van de AI?).
                        </p>
                        <div className="bg-card p-6 rounded-2xl border border-purple-500/30 shadow-md">
                            <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                                <Scale className="w-5 h-5 text-purple-500" />
                                Toetsen van De Delta
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                Het compromis: niet het eindproduct wordt beoordeeld, maar <strong>de Delta (Δ)</strong>: het verschil tussen ruwe AI-output en de menselijke, strategische correctie. Dit vereist <em>Evaluative Judgement</em> (Tai et al., 2018); het vermogen om AI-werk te beoordelen op theorie.
                            </p>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="bg-card p-8 rounded-3xl border border-border shadow-xl relative overflow-hidden group h-full">
                            <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/10 to-transparent z-0" />
                            <div className="relative z-10 flex flex-col h-full justify-center">
                                <div className="w-16 h-16 rounded-2xl bg-purple-500 text-white flex items-center justify-center mb-6 shadow-lg">
                                    <ShieldQuestion className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-foreground">Resultaat in de Praktijk</h3>
                                <p className="text-muted-foreground mb-4">
                                    Om dit beraad om te zetten in actie is een iteratielogboek ontworpen (Prompt → Ruwe Output → Vakinhoudelijke Correctie).
                                </p>
                                <p className="text-muted-foreground font-medium">
                                    De examencommissie was gerustgesteld: het logboek maakt inzichtelijk welke mental models de student bezit. AI is niet langer een bedreiging voor de validiteit, maar een instrument om het oordeelsvermogen zichtbaar te maken.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Identiteit & Reflectie */}
            <section className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/10 text-purple-500 mb-6">
                    <UserCog className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold font-heading mb-6 text-foreground">Transformatie van de Docent</h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                    Reflecterend op het Uienmodel van Korthagen (2005), is er een duidelijke verschuiving in mijn overtuigingen en identiteit opgetreden. Voorheen zag ik technologie als onvoorwaardelijke versneller. Door deze dilemma's erken ik het kritische belang van validiteit bij het 'offloaden' van cognitie. Mijn rol is getransformeerd tot bruggenbouwer: de belangen van innovatie (werkveld) en examinering (commissie) samenbrengen in AI-inclusieve processen.
                </p>
            </section>

            {/* Navigation */}
            <PageNavigation
                prev={{ name: "Gepersonaliseerd Leren", href: "/gepersonaliseerd-leren" }}
                next={{ name: "Creëren met Technologie", href: "/creeren-met-technologie" }}
            />
        </div>
    );
}

