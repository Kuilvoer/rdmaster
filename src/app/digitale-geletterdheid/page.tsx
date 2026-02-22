import SectionDivider from "@/components/SectionDivider";
import { MoveRight, Brain, Lightbulb, ShieldAlert, Quote, CheckCircle, GraduationCap, Terminal } from "lucide-react";
import PageNavigation from "@/components/PageNavigation";

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

                {/* Flowchart Steps */}
                <div className="relative max-w-4xl mx-auto mt-16 mb-24">
                    {/* Connecting Line (Desktop only) */}
                    <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 -z-10" />

                    <div className="grid md:grid-cols-4 gap-8">
                        {/* Stap 1 */}
                        <div className="relative flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-full bg-background border-4 border-primary/20 flex items-center justify-center mb-6 shadow-xl group-hover:border-primary group-hover:scale-110 transition-all z-10">
                                <span className="text-3xl font-black text-primary font-heading">1</span>
                            </div>
                            <h3 className="font-heading font-bold text-xl mb-3 text-foreground">Concept</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Wat is een goed profiel? Studenten bepalen <em>eerst zelf</em> decriteria voordat AI betrokken wordt.
                            </p>
                        </div>
                        {/* Stap 2 */}
                        <div className="relative flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-full bg-background border-4 border-primary/20 flex items-center justify-center mb-6 shadow-xl group-hover:border-primary group-hover:scale-110 transition-all z-10">
                                <span className="text-3xl font-black text-primary font-heading">2</span>
                            </div>
                            <h3 className="font-heading font-bold text-xl mb-3 text-foreground">Interpretatie</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Output analyseren zonder kopieer-plak werk. Kloppende de gegenereerde suggesties met het doel?
                            </p>
                        </div>
                        {/* Stap 3 */}
                        <div className="relative flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-full bg-background border-4 border-primary/20 flex items-center justify-center mb-6 shadow-xl group-hover:border-primary group-hover:scale-110 transition-all z-10">
                                <span className="text-3xl font-black text-primary font-heading">3</span>
                            </div>
                            <h3 className="font-heading font-bold text-xl mb-3 text-foreground">Creatie</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Het communicatieplan schrijven. AI als junior-assistent, de student blijft de senior editor.
                            </p>
                        </div>
                        {/* Stap 4 */}
                        <div className="relative flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-full bg-background border-4 border-tertiary/20 flex items-center justify-center mb-6 shadow-xl group-hover:border-tertiary group-hover:scale-110 transition-all z-10">
                                <span className="text-3xl font-black text-tertiary font-heading">4</span>
                            </div>
                            <h3 className="font-heading font-bold text-xl mb-3 text-foreground">Reflectie</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Output omkeren: AI om feedback vragen op het eigen werk en dit verantwoorden.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Try it yourself box */}
                <div className="max-w-3xl mx-auto bg-card rounded-3xl overflow-hidden border border-primary/20 shadow-2xl relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
                    <div className="flex items-center gap-3 bg-muted/50 px-6 py-4 border-b border-border">
                        <Terminal className="w-5 h-5 text-primary" />
                        <h3 className="font-bold text-foreground">Probeer het zelf: De AI Feedback Loop</h3>
                    </div>
                    <div className="p-6 md:p-8 space-y-6">
                        <p className="text-muted-foreground">Kopieer deze prompt-template om zelf de rollen om te draaien (Stap 4) bij je volgende review moment:</p>
                        <div className="relative group">
                            <pre className="bg-[#0c0a09] text-primary-foreground p-6 rounded-xl overflow-x-auto text-sm font-mono border border-primary/10 whitespace-pre-wrap leading-relaxed">
                                <span className="text-muted-foreground"># Context</span>
                                Je bent een strenge maar constructieve docent E-Commerce.

                                <span className="text-muted-foreground"># Taak</span>
                                Analyseer de onderstaande tekst op [VUL CRITERIA IN, bijv: zakelijke toon, haalbaarheid, structuur].
                                Geef me geen herschrijving, maar geef me 3 gerichte vragen of kritiekpunten waarmee ik het zelf kan verbeteren.

                                <span className="text-muted-foreground"># Mijn inbreng:</span>
                                [PLAK JE TEKST HIER]
                            </pre>
                        </div>
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
