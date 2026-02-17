import SectionDivider from "@/components/SectionDivider";
import Accordion from "@/components/Accordion";
import { BookOpen, Quote, Layers, Brain, UserCog, PersonStanding, MonitorPlay, ShieldAlert, Target, Microscope, CheckCircle, Scale, Anchor, Users } from "lucide-react";

export default function LiteratureStudyPage() {
    // Content synthesized from Damman_2504731_MOT-1-LS.docx
    const literatureItems = [
        {
            title: "DV1: Didactische Principes voor Metacognitie",
            content: (
                <div className="space-y-6 text-muted-foreground">
                    <p>
                        Uit de literatuur (Sol & Stokking, 2023; Anthonysamy et al., 2020) blijkt dat metacognitie niet spontaan ontstaat. Drie principes zijn cruciaal in digitale omgevingen:
                    </p>
                    <ul className="space-y-4 list-disc pl-4">
                        <li><strong>Expliciteren van het denkproces</strong>: Studenten moeten vooraf hun doel formuleren en achteraf evalueren. Dit maakt het &quot;onzichtbare&quot; denken zichtbaar.</li>
                        <li><strong>Scaffolding</strong>: Tijdelijke ondersteuning is nodig. <em>Hard scaffolding</em> (ingebouwd in de taak) biedt basisstructuur, <em>Soft scaffolding</em> (docentinteractie) biedt situatie-specifieke steun.</li>
                        <li><strong>Procesgerichte Feedback</strong>: Feedback moet gaan over de gekozen strategie, niet alleen over het eindproduct. &quot;Waarom koos je deze prompt?&quot;</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "DV2: AI - Kansen & Risico's",
            content: (
                <div className="space-y-6 text-muted-foreground">
                    <p>
                        AI is een &quot;tweesnijdend zwaard&quot;. Het kan zelfregulatie versterken of juist ondermijnen.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-primary/10 rounded-xl border border-primary/20">
                            <h4 className="font-bold text-primary mb-2 flex items-center gap-2"><ShieldAlert className="w-4 h-4" /> Risico's</h4>
                            <p className="text-sm"><strong>Automation Bias & Outsourcing:</strong> Studenten nemen klakkeloos aan wat AI zegt en besteden het denkwerk uit. Dit leidt tot passiviteit en verlies van eigenaarschap.</p>
                        </div>
                        <div className="p-4 bg-secondary/10 rounded-xl border border-secondary/20">
                            <h4 className="font-bold text-secondary mb-2 flex items-center gap-2"><Brain className="w-4 h-4" /> Kansen</h4>
                            <p className="text-sm"><strong>AI als Leerpartner:</strong> Als &quot;sparringpartner&quot; kan AI helpen om redeneringen te vergelijken, blinde vlekken te ontdekken en feedback te geven op concepten (Xu, 2025).</p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "DV3: Docentrollen & Strategieën",
            content: (
                <div className="space-y-6 text-muted-foreground">
                    <p>
                        De docent verschuift van &quot;kennisoverdrager&quot; naar &quot;ontwerper en coach&quot;. Drie strategieën zijn essentieel:
                    </p>
                    <ul className="space-y-4">
                        <li className="flex gap-3"><MonitorPlay className="w-5 h-5 text-tertiary flex-shrink-0" /> <span><strong>Modelleren (Voordoen):</strong> De docent demonstreert live hoe hij/zij AI gebruikt, inclusief het twijfelen en checken. &quot;Kijk hoe ik deze hallucinatie herken.&quot;</span></li>
                        <li className="flex gap-3"><PersonStanding className="w-5 h-5 text-tertiary flex-shrink-0" /> <span><strong>Hardop Denken:</strong> Expliciteer de interne dialoog. &quot;Ik vraag dit aan AI, maar ik vertrouw het antwoord niet omdat...&quot;</span></li>
                        <li className="flex gap-3"><UserCog className="w-5 h-5 text-tertiary flex-shrink-0" /> <span><strong>Coachen op Routines:</strong> Leer studenten een vaste cyclus aan: Doel → Concept → AI → Check → Verantwoording.</span></li>
                    </ul>
                </div>
            ),
        },
        {
            title: "DV4: Implicaties voor de Praktijk",
            content: (
                <div className="space-y-6 text-muted-foreground">
                    <p>
                        Wat betekent dit voor het onderwijs aan eerstejaars E-Commerce studenten?
                    </p>
                    <ul className="space-y-4 list-disc pl-4">
                        <li><strong>Van Vrijheid naar Structuur:</strong> Eerstejaars hebben <em>Hard Scaffolding</em> nodig. Geen open opdrachten, maar strakke stappenplannen.</li>
                        <li><strong>Procesbeoordeling:</strong> Het eindproduct is niet meer leidend (want AI kan dat maken). Beoordeel de verantwoording: &quot;Welke keuzes heb je gemaakt?&quot;</li>
                        <li><strong>Teamtaal:</strong> Docenten moeten één lijn trekken. Dezelfde terminologie en dezelfde regels rondom AI-gebruik.</li>
                    </ul>
                </div>
            ),
        },
    ];

    return (
        <div className="flex flex-col gap-16">
            {/* Hero */}
            <section className="relative pt-12 text-center md:text-left">
                <div className="absolute top-0 right-0 -z-10 h-64 w-64 rounded-full bg-tertiary/20 blur-[100px] opacity-60" />
                <span className="mb-4 inline-block rounded-full bg-tertiary/10 px-4 py-1.5 text-sm font-bold text-tertiary">
                    Onderzoek (MOT-1)
                </span>
                <h1 className="mb-6 font-heading text-5xl font-extrabold leading-tight md:text-7xl">
                    Theoretische <span className="text-tertiary">Grondslag</span>
                </h1>
                <p className="max-w-2xl text-xl text-muted-foreground leading-relaxed">
                    &quot;Welke didactische principes stimuleren metacognitief denken bij AI-gebruik?&quot; Een literatuurstudie naar zelfregulerend leren in het AI-tijdperk.
                </p>
            </section>

            {/* Problem Statement Section */}
            <section className="bg-gradient-to-br from-tertiary/5 to-transparent p-8 md:p-12 rounded-3xl border border-tertiary/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5">
                    <Microscope className="w-64 h-64 text-tertiary" />
                </div>
                <div className="relative z-10 max-w-3xl">
                    <h2 className="font-heading text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                        <Target className="w-8 h-8 text-tertiary" /> Probleemstelling
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        We willen studenten stimuleren om zelf na te denken over hun leerproces (metacognitief denken).
                        Echter, in de praktijk zien we dat studenten AI vaak gebruiken om <strong>sneller een antwoord te krijgen</strong>,
                        zonder de tussenstappen van plannen, monitoren en evalueren te doorlopen.
                    </p>
                    <blockquote className="border-l-4 border-tertiary pl-6 italic text-foreground text-xl">
                        &quot;Technologie moet studenten niet dommer maken, maar helpen om beter na te denken.&quot;
                    </blockquote>
                </div>
            </section>

            <SectionDivider color="fill-tertiary/5" />

            {/* Research Framework (Accordion) */}
            <section className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-4 space-y-8">
                    <div>
                        <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">Het Onderzoekskader</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Aan de hand van vier deelvragen is onderzocht hoe we de &quot;Google Effect&quot; valkuil kunnen omzetten in een metacognitieve leerwinst.
                        </p>
                    </div>

                    <div className="p-8 bg-tertiary/5 rounded-3xl border border-tertiary/20 shadow-sm">
                        <BookOpen className="w-10 h-10 text-tertiary mb-4" />
                        <h3 className="font-heading font-bold text-xl mb-3 text-foreground">Hoofdvraag</h3>
                        <p className="text-sm text-foreground italic">
                            &quot;Welke didactische principes en strategieën kunnen mbo-docenten inzetten om het metacognitieve denken van eerstejaars studenten te stimuleren bij het gebruik van AI-tools?&quot;
                        </p>
                    </div>
                </div>

                <div className="md:col-span-8">
                    <Accordion items={literatureItems} />
                </div>
            </section>

            <SectionDivider color="fill-tertiary/5" />

            {/* Begrippenkader (Key Concepts) */}
            <section className="space-y-12">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="font-heading text-3xl font-bold mb-6 text-foreground">Kernbegrippen</h2>
                    <p className="text-xl text-muted-foreground">De taal van dit onderzoek. Vier concepten die essentieel zijn om de uitdaging te begrijpen.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-tertiary/5 p-6 rounded-2xl border border-tertiary/10 hover:border-tertiary/30 transition-colors">
                        <Brain className="w-10 h-10 text-tertiary mb-4" />
                        <h3 className="font-bold text-lg mb-2 text-foreground">Metacognitie</h3>
                        <p className="text-sm text-muted-foreground">&quot;Denken over denken&quot;. Het vermogen om je eigen leerproces te plannen, te monitoren en te evalueren. (Sol & Stokking, 2023)</p>
                    </div>
                    <div className="bg-tertiary/5 p-6 rounded-2xl border border-tertiary/10 hover:border-tertiary/30 transition-colors">
                        <Target className="w-10 h-10 text-tertiary mb-4" />
                        <h3 className="font-bold text-lg mb-2 text-foreground">Self-Efficacy</h3>
                        <p className="text-sm text-muted-foreground">Het geloof in eigen kunnen. Cruciaal voor het volhouden bij tegenslag. Scaffolding verhoogt dit vertrouwen. (Valencia-Vallejo et al., 2019)</p>
                    </div>
                    <div className="bg-tertiary/5 p-6 rounded-2xl border border-tertiary/10 hover:border-tertiary/30 transition-colors">
                        <ShieldAlert className="w-10 h-10 text-tertiary mb-4" />
                        <h3 className="font-bold text-lg mb-2 text-foreground">Automation Bias</h3>
                        <p className="text-sm text-muted-foreground">De neiging om output van geautomatiseerde systemen (AI) blind te vertrouwen en kritische controle over te slaan.</p>
                    </div>
                    <div className="bg-tertiary/5 p-6 rounded-2xl border border-tertiary/10 hover:border-tertiary/30 transition-colors">
                        <Layers className="w-10 h-10 text-tertiary mb-4" />
                        <h3 className="font-bold text-lg mb-2 text-foreground">Scaffolding</h3>
                        <p className="text-sm text-muted-foreground">&quot;In de steigers zetten&quot;. Tijdelijke ondersteuning die wordt afgebouwd naarmate de student competenter wordt.</p>
                    </div>
                </div>
            </section>

            {/* Conclusie & Aanbevelingen */}
            <section className="bg-gradient-to-br from-tertiary/10 to-transparent p-8 md:p-12 rounded-3xl border border-tertiary/20">
                <div className="grid md:grid-cols-12 gap-12 items-start">
                    <div className="md:col-span-5">
                        <h2 className="font-heading text-3xl font-bold mb-6 text-foreground">Conclusie & Advies</h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Uit het onderzoek blijkt dat we niet moeten focussen op het verbieden van AI, maar op het <strong>reguleren</strong> ervan.
                            Docenten van het team Internationale Handel & Commercie wordt geadviseerd om in jaar 1 te werken met een vaste, herkenbare routine.
                        </p>
                        <div className="p-6 bg-background/50 rounded-xl border border-tertiary/10 italic text-foreground">
                            &quot;AI mag ondersteuning bieden, maar het stuur blijft in handen van de student.&quot;
                        </div>
                    </div>
                    <div className="md:col-span-1"></div>
                    <div className="md:col-span-6 space-y-6">
                        <h3 className="text-xl font-bold text-tertiary mb-4">4 Concrete Aanbevelingen</h3>
                        <ul className="space-y-4">
                            <li className="flex gap-4 items-start">
                                <CheckCircle className="w-6 h-6 text-tertiary flex-shrink-0 mt-1" />
                                <div>
                                    <strong className="block text-foreground text-lg">De AI-Routine</strong>
                                    <span className="text-muted-foreground">Implementeer de cyclus: Doel → Concept → AI → Check → Verantwoording. Maak dit standaard in opdrachten.</span>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <Scale className="w-6 h-6 text-tertiary flex-shrink-0 mt-1" />
                                <div>
                                    <strong className="block text-foreground text-lg">Toetsing op Proces</strong>
                                    <span className="text-muted-foreground">Waardeer de verantwoording. Een goed product zonder uitleg over de totstandkoming is onvoldoende.</span>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <Users className="w-6 h-6 text-tertiary flex-shrink-0 mt-1" />
                                <div>
                                    <strong className="block text-foreground text-lg">Teamtaal</strong>
                                    <span className="text-muted-foreground">Trek één lijn. Gebruik dezelfde begrippen (Hard/Soft Scaffolding) en dezelfde regels.</span>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <Anchor className="w-6 h-6 text-tertiary flex-shrink-0 mt-1" />
                                <div>
                                    <strong className="block text-foreground text-lg">Kaders & Veiligheid</strong>
                                    <span className="text-muted-foreground">Stel duidelijke regels voor privacy en integriteit. Kaders geven geen beperking, maar professionele ruimte.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
