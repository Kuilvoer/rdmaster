import SectionDivider from "@/components/SectionDivider";
import { MoveRight, Brain, Lightbulb, ShieldAlert, Quote, CheckCircle, GraduationCap } from "lucide-react";

export default function DigitalLiteracyPage() {
    return (
        <div className="flex flex-col gap-16">
            {/* Hero */}
            <section className="relative pt-12 text-center md:text-left overflow-hidden">
                <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-primary/20 blur-[100px] opacity-50" />
                <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
                    Product 1: Digitale Geletterdheid
                </span>
                <h1 className="mb-6 font-heading text-5xl font-extrabold leading-tight md:text-7xl">
                    <span className="text-primary">AI-Geletterdheid</span> vergroten bij de student
                </h1>
                <p className="max-w-2xl text-xl text-muted-foreground leading-relaxed">
                    In een tijd waarin het leven steeds digitaler wordt, is alleen &apos;knoppenkennis&apos; niet meer genoeg.
                    Dit project markeert de verschuiving van een verbodscultuur naar een cultuur van verantwoord gebruik:
                    van &quot;verboden tenzij&quot; naar &quot;toegestaan, mits...&quot;.
                </p>
            </section>

            {/* The Context / Problem */}
            <section className="grid gap-12 md:grid-cols-2 items-start">
                <div className="order-2 md:order-1 space-y-6">
                    <h2 className="font-heading text-3xl font-bold text-foreground">De Context & Nulmeting</h2>
                    <div className="prose prose-lg text-muted-foreground">
                        <p>
                            Uit een nulmeting onder 48 studenten van de opleidingen E-Commerce Specialist en International Business Studies bleek een interessante paradox.
                            Studenten gebruiken AI-tools zoals ChatGPT en Gemini dagelijks, maar hun begrip van de technologie blijft oppervlakkig.
                            Er is sprake van wat men &quot;knopvaardigheid&quot; noemt, maar het diepere <em>metacognitieve begrip</em> ontbreekt.
                        </p>
                        <p>
                            De wrijving ontstaat in de klas wanneer studenten AI gebruiken om het leerproces te omzeilen. Ze zetten de tool in voor &apos;snelle output&apos;,
                            in plaats van als een &apos;leerpartner&apos;. Dit leidt tot conflicten over originaliteit en een gemiste kans om kritische denkvaardigheden te trainen.
                            Zoals een student treffend verwoordde in de enquête:
                        </p>
                    </div>
                    <blockquote className="border-l-4 border-primary pl-6 italic text-foreground bg-primary/5 p-4 rounded-r-lg">
                        &quot;Ik denk dat we naar een tijd gaan waarin er les zou moeten worden gegeven in AI en wat de mogelijkheden heden zijn.
                        Niet alleen hoe het werkt, maar wanneer je het kan gebruiken.&quot;
                        <span className="block mt-2 text-sm font-bold not-italic text-primary">- Student E-Commerce, Leerjaar 1</span>
                    </blockquote>
                </div>
                <div className="order-1 md:order-2 rounded-2xl bg-gradient-to-br from-primary to-pink-700 p-8 text-white shadow-2xl rotate-1">
                    <h3 className="text-2xl font-bold mb-6 font-heading border-b border-white/20 pb-4">Belangrijkste Inzichten</h3>
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                            <ShieldAlert className="w-8 h-8 mt-1 flex-shrink-0 opacity-90" />
                            <div>
                                <strong className="block text-lg mb-1">Gebrek aan procesbesef</strong>
                                <span className="opacity-90 leading-relaxed">Studenten zien AI vaak als een &apos;antwoordmachine&apos;. Ze leveren output in zonder de tussenstappen van controle of aanpassing te doorlopen.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <Brain className="w-8 h-8 mt-1 flex-shrink-0 opacity-90" />
                            <div>
                                <strong className="block text-lg mb-1">Rolverschuiving Docent</strong>
                                <span className="opacity-90 leading-relaxed">De docent moet verschuiven van &apos;controleur van feiten&apos; naar &apos;begeleider van het denkproces&apos;. Modelleren (&quot;kijk hoe ik dit doe&quot;) is cruciaal.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <Lightbulb className="w-8 h-8 mt-1 flex-shrink-0 opacity-90" />
                            <div>
                                <strong className="block text-lg mb-1">Human-in-the-loop</strong>
                                <span className="opacity-90 leading-relaxed">Technologie mag nooit de eindverantwoordelijkheid overnemen. De mens moet altijd de laatste check, aanpassing en interpretatie doen.</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <SectionDivider color="fill-primary/5" />

            {/* The Intervention: AI Lesson Series */}
            <section className="bg-primary/5 -mx-4 px-4 py-16 rounded-3xl">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="mb-4 font-heading text-4xl font-bold text-foreground">De Interventie: AI als Leerpartner</h2>
                    <p className="text-xl text-muted-foreground">
                        Er is een lessenserie ontwikkeld rondom de casus: <em>&quot;Hoe zet je AI in voor het creëren van een Marketing & Communicatie strategie?&quot;</em>.
                        Het doel is om studenten te dwingen <strong>metacognitieve stappen</strong> te zetten vóórdat ze AI gebruiken.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    <div className="bg-background p-8 rounded-2xl border border-primary/10 shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Stap 1: Concept & Prompting</div>
                        <h3 className="text-2xl font-bold mb-4 font-heading">AI Basics & Bedrijfsprofiel</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Studenten duiken niet direct in het maken van een plan. Ze beginnen met de vraag: <em>&quot;Waar bestaat een goed bedrijfsprofiel eigenlijk uit?&quot;</em>.
                            Pas nadat ze zelf criteria hebben opgesteld, mogen ze AI gebruiken om een profiel te genereren. Hierbij wordt &apos;Soft Scaffolding&apos; toegepast:
                            de docent vraagt continu &quot;Waarom koos je deze prompt?&quot; en &quot;Klopt deze output met jouw eigen criteria?&quot;.
                        </p>
                    </div>
                    <div className="bg-background p-8 rounded-2xl border border-primary/10 shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Stap 2: Menselijke Interpretatie</div>
                        <h3 className="text-2xl font-bold mb-4 font-heading">Interpretatie Zonder AI</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Een cruciale stap om afhankelijkheid te doorbreken. Studenten moeten het gegenereerde bedrijfsprofiel zelfstandig, zonder AI, toepassen op een specifieke casus.
                            Dit dwingt hen om de output echt te lezen en te begrijpen, in plaats van blindelings te kopiëren. Ze ervaren hier dat AI wel data kan leveren,
                            maar geen context of menselijk inzicht.
                        </p>
                    </div>
                    <div className="bg-background p-8 rounded-2xl border border-primary/10 shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Stap 3: Creatie</div>
                        <h3 className="text-2xl font-bold mb-4 font-heading">Strategie Ontwikkeling</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Met het zelf aangescherpte profiel en de eigen interpretatie, gaan studenten aan de slag met het eigenlijke product: het Marketing & Communicatieplan.
                            AI mag hier weer ondersteunen als &apos;junior assistent&apos; voor het genereren van ideeën, maar de student blijft de &apos;senior editor&apos; die de keuzes maakt.
                        </p>
                    </div>
                    <div className="bg-background p-8 rounded-2xl border border-primary/10 shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Stap 4: Reflectie</div>
                        <h3 className="text-2xl font-bold mb-4 font-heading">De AI Feedback Loop</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            In de laatste fase draaien we de rollen om. Studenten voeden hun eigen conceptplan aan de AI en vragen om kritische feedback op basis van specifieke criteria.
                            Ze moeten vervolgens verantwoorden welke feedback ze overnemen en waarom. Dit traint het vermogen om AI-output op waarde te schatten.
                        </p>
                    </div>
                </div>
            </section>

            {/* Conclusion Redesigned */}
            <section className="bg-gradient-to-b from-primary/5 to-transparent rounded-3xl p-8 md:p-12 border border-primary/10">
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <h2 className="font-heading text-4xl font-bold text-foreground mb-4">Conclusie & Advies</h2>
                    <p className="text-xl text-muted-foreground">
                        Toolkennis is niet genoeg. De paradox is dat we digitale middelen nodig hebben voor efficiëntie, maar <em>menselijke</em> vaardigheden voor kwaliteit.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Short Term */}
                    <div className="bg-background rounded-2xl p-8 border border-border flex flex-col items-center text-center shadow-lg shadow-primary/5">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                            <CheckCircle className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-heading font-bold mb-2">In de Les</h3>
                        <strong className="text-primary text-sm uppercase tracking-wider mb-4 block">Korte Termijn</strong>
                        <p className="text-muted-foreground leading-relaxed">
                            Stel expliciete kaders: <strong>&quot;Toegestaan, mits...&quot;</strong>.
                            Als docent moet je hardop modelleren: &quot;Kijk hoe ik deze bron check&quot; en &quot;Kijk waarom ik dit antwoord wantrouw&quot;.
                        </p>
                    </div>

                    {/* Long Term */}
                    <div className="bg-background rounded-2xl p-8 border border-border flex flex-col items-center text-center shadow-lg shadow-primary/5">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                            <GraduationCap className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-heading font-bold mb-2">Het Curriculum</h3>
                        <strong className="text-primary text-sm uppercase tracking-wider mb-4 block">Lange Termijn</strong>
                        <p className="text-muted-foreground leading-relaxed">
                            Beoordeel het <em>proces</em>, niet alleen het product.
                            Een vaste <strong>AI-routine</strong> (Doel → Concept → AI → Check) moet de standaard worden. Geen verantwoording = geen voldoende.
                        </p>
                    </div>
                </div>
            </section>
            {/* Navigation */}
            <PageNavigation
                prev={{ name: "Home", href: "/" }}
                next={{ name: "Digitale Didactiek", href: "/digitale-didactiek" }}
            />
        </div>
    );
}
