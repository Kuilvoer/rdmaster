import SectionDivider from "@/components/SectionDivider";
import { Users, Kanban, FileCheck, Layers, ArrowRight, Brain } from "lucide-react";
import PageNavigation from "@/components/PageNavigation";

export default function DigitalDidacticsPage() {
    return (
        <div className="flex flex-col gap-16">
            {/* Hero */}
            <section className="relative pt-12 text-center md:text-left">
                <div className="absolute top-0 right-0 -z-10 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
                <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-bold text-secondary">
                    Product 2: Digitale Didactiek
                </span>
                <h1 className="mb-6 font-heading text-5xl font-extrabold leading-tight md:text-7xl">
                    Herontwerp van <span className="text-secondary">Samenwerking</span> in Marktonderzoek
                </h1>
                <p className="max-w-2xl text-xl text-muted-foreground leading-relaxed">
                    Een analyse van het "Verdeel en Heers" probleem en een Design Thinking oplossing met Trello en Canvas Peer Review.
                </p>
            </section>

            {/* The Challenge / Problem Analysis */}
            <section className="grid gap-12 md:grid-cols-12 relative overflow-hidden rounded-3xl bg-white/5 p-8 border border-secondary/10">
                <div className="absolute top-0 left-0 -z-10 h-full w-full bg-gradient-to-br from-secondary/5 via-transparent to-transparent opacity-50" />
                <div className="md:col-span-7 space-y-6">
                    <h2 className="font-heading text-3xl font-bold text-foreground">De Uitdaging: De Zwarte Doos</h2>
                    <div className="prose prose-lg text-muted-foreground">
                        <p>
                            In de module "Marktonderzoek" werken eerstejaars studenten vijf weken lang in duo's aan een grootschalig rapport.
                            Op papier een perfecte casus voor samenwerkend leren (Collaborative Learning). De praktijk bleek echter weerbarstig.
                        </p>
                        <p>
                            Het kernprobleem is tweeledig. Ten eerste hanteren studenten een strategie van <strong>"Verdeel en Heers"</strong>:
                            student A schrijft hoofdstuk 1, student B hoofdstuk 2, en vlak voor de deadline wordt alles samengevoegd.
                            Er vindt geen inhoudelijke integratie of wederzijdse feedback plaats.
                        </p>
                        <p>
                            Ten tweede was de peer feedback gereduceerd tot een <strong>"Papieren Tijger"</strong>. Een formulier dat pas <em>achteraf</em>
                            werd ingevuld, resulteerde in sociaal wenselijke antwoorden om elkaars cijfer niet te schaden.
                            Feedback werd gezien als een administratieve verplichting, niet als een leermiddel om het product <em>tijdens de rit</em> te verbeteren (Assessment as Learning).
                        </p>
                    </div>
                </div>

                <div className="md:col-span-5 bg-muted p-8 rounded-3xl border border-secondary/20 h-fit">
                    <h3 className="font-heading text-2xl font-bold mb-6 text-foreground">Design Thinking (Double Diamond)</h3>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                            <div>
                                <strong className="block text-foreground">Discover</strong>
                                <span className="text-sm text-muted-foreground">Analyse op micro (student), meso (docent) en macro (arbeidsmarkt) niveau. Probleem: focus op eindproduct, niet op proces.</span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                            <div>
                                <strong className="block text-foreground">Define (TPACK)</strong>
                                <span className="text-sm text-muted-foreground">De kloof identificeren: Didactisch willen we proces (PK), maar Technisch (TK) hebben we alleen summatieve tools.</span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                            <div>
                                <strong className="block text-foreground">Develop</strong>
                                <span className="text-sm text-muted-foreground">Divergeren van oplossingen: FeedbackFruits (te duur/niet beschikbaar), MS Planner (geen goede feedback opties), Canvas + Trello (haalbaar).</span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                            <div>
                                <strong className="block text-foreground">Deliver</strong>
                                <span className="text-sm text-muted-foreground">Implementatie van de hybride oplossing in de lespraktijk.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SectionDivider color="fill-secondary/5" />

            {/* TPACK Analysis (Triangle Layout) */}
            <section className="bg-gradient-to-br from-white/5 to-secondary/5 rounded-3xl p-8 md:p-16 shadow-sm border border-secondary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-secondary/10 blur-[80px] opacity-30" />

                <h2 className="font-heading text-3xl font-bold mb-12 text-center">TPACK: Het Integrale Model</h2>

                <div className="relative max-w-5xl mx-auto">
                    {/* Connecting Lines (Visual Decor) */}
                    <div className="hidden md:block absolute top-1/4 left-1/2 -translate-x-1/2 w-px h-1/2 bg-gradient-to-b from-secondary/50 to-transparent -z-10" />
                    <div className="hidden md:block absolute top-[40%] left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent -z-10" />

                    <div className="flex flex-col items-center gap-12">
                        {/* Top Node: Pedagogiek (PK) */}
                        <div className="relative p-8 bg-secondary/10 backdrop-blur-md rounded-2xl border border-secondary/30 text-center max-w-lg shadow-lg hover:scale-105 transition-transform">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-white mb-4 shadow-md">
                                <Layers className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2">Pedagogiek (PK)</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                <strong>Hoe leren ze?</strong><br />
                                Samenwerkend leren en procesbegeleiding. De wens was om het proces <em>tijdens</em> de rit te begeleiden, niet pas achteraf.
                            </p>
                        </div>

                        {/* Bottom Row */}
                        <div className="grid md:grid-cols-2 gap-12 w-full">
                            {/* Left Node: Techniek (TK) */}
                            <div className="relative p-8 bg-secondary/10 backdrop-blur-md rounded-2xl border border-secondary/30 text-center shadow-lg hover:scale-105 transition-transform">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-white mb-4 shadow-md">
                                    <FileCheck className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-2">Techniek (TK)</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    <strong>Waarmee leren ze?</strong><br />
                                    Trello voor visueel inzicht en Canvas voor verplichte rubrics. De techniek maakt het onzichtbare proces zichtbaar.
                                </p>
                            </div>

                            {/* Right Node: Inhoud (CK) */}
                            <div className="relative p-8 bg-secondary/10 backdrop-blur-md rounded-2xl border border-secondary/30 text-center shadow-lg hover:scale-105 transition-transform">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-white mb-4 shadow-md">
                                    <Brain className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-2">Inhoud (CK)</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    <strong>Wat leren ze?</strong><br />
                                    Marktonderzoek (SMART, 6W's). De inhoud verandert niet, maar door de tools wordt de lat voor diepgang (kwaliteit) hoger gelegd.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Solution */}
            <section className="space-y-12">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="font-heading text-4xl font-bold mb-4 text-foreground">De Oplossing: Hybride Aanpak</h2>
                    <p className="text-lg text-muted-foreground">Een combinatie van toegankelijke tools om proceszichtbaarheid en inhoudelijke diepgang te borgen.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Trello Card */}
                    <div className="group relative overflow-hidden rounded-3xl bg-tertiary/5 p-10 shadow-lg border border-tertiary/20 transition-all hover:-translate-y-1">
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Kanban className="w-40 h-40 text-tertiary" />
                        </div>
                        <h3 className="text-3xl font-bold font-heading mb-4 text-tertiary">1. Trello voor Proces</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            We visualiseren het "onzichtbare" werk. Door de Scrum-methodiek (To Do, Doing, Done) wordt meeliftgedrag direct zichtbaar.
                            Als een kaartje in 'Doing' blijft hangen, is dat een signaal voor interventie.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex gap-3 items-center text-foreground"><span className="w-2 h-2 rounded-full bg-tertiary"></span>Visuele confrontatie met voortgang.</li>
                            <li className="flex gap-3 items-center text-foreground"><span className="w-2 h-2 rounded-full bg-tertiary"></span>Docent coacht proactief op basis van bordactiviteit.</li>
                            <li className="flex gap-3 items-center text-foreground"><span className="w-2 h-2 rounded-full bg-tertiary"></span>Eigenaarschap bij de student.</li>
                        </ul>
                    </div>

                    {/* Canvas Card */}
                    <div className="group relative overflow-hidden rounded-3xl bg-secondary/5 p-10 shadow-lg border border-secondary/20 transition-all hover:-translate-y-1">
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Layers className="w-40 h-40 text-secondary" />
                        </div>
                        <h3 className="text-3xl font-bold font-heading mb-4 text-secondary">2. Canvas Peer Review</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            We gebruiken de LMS-functionaliteit om diepgang af te dwingen. Feedback is pas geldig als de gekoppelde Rubric volledig is ingevuld.
                            Dit is 'Hard Scaffolding': de tool staat niet toe dat je stappen overslaat.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex gap-3 items-center text-foreground"><span className="w-2 h-2 rounded-full bg-secondary"></span>Verplichte Rubrics met vakinhoud (SMART, 6W's).</li>
                            <li className="flex gap-3 items-center text-foreground"><span className="w-2 h-2 rounded-full bg-secondary"></span>Anonieme feedback voor psychologische veiligheid.</li>
                            <li className="flex gap-3 items-center text-foreground"><span className="w-2 h-2 rounded-full bg-secondary"></span>Kwaliteit van feedback telt mee voor cijfer.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Tijdlijn van de Module */}
            <section className="max-w-5xl mx-auto px-4 w-full mb-16">
                <div className="text-center mb-12">
                    <h3 className="font-heading text-3xl font-bold text-foreground">Tijdlijn Module Marktonderzoek</h3>
                    <p className="text-muted-foreground mt-2">Hoe de hybride aanpak over 5 weken is uitgerold.</p>
                </div>

                <div className="relative">
                    {/* Connecting line */}
                    <div className="absolute top-0 bottom-0 left-[19px] md:left-1/2 w-1 bg-secondary/20 md:-translate-x-1/2 rounded-full" />

                    <div className="space-y-8">
                        {/* Week 1 */}
                        <div className="relative flex items-start gap-6 md:justify-end md:w-1/2 md:-ml-[19px] md:pr-12 md:text-right">
                            <div className="absolute left-0 md:left-auto md:-right-[24px] w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white font-bold z-10 shadow-lg border-4 border-background">1</div>
                            <div className="ml-14 md:ml-0 bg-card p-6 rounded-2xl border border-border shadow-sm w-full">
                                <h4 className="font-bold text-lg mb-1">Week 1: Setup & Doelstelling</h4>
                                <p className="text-sm text-muted-foreground">Introductie casus. Duo's maken Trello bord aan (TK) en formuleren SMART doelstellingen (CK).</p>
                            </div>
                        </div>

                        {/* Week 2 */}
                        <div className="relative flex items-start gap-6 md:justify-start md:w-1/2 md:ml-auto md:pl-12">
                            <div className="absolute left-0 md:-left-[24px] w-10 h-10 rounded-full bg-background border-4 border-secondary text-secondary flex items-center justify-center font-bold z-10 shadow-sm">2</div>
                            <div className="ml-14 md:ml-0 bg-card p-6 rounded-2xl border border-border shadow-sm w-full">
                                <h4 className="font-bold text-lg mb-1">Week 2: Dataverzameling (6W)</h4>
                                <p className="text-sm text-muted-foreground">Trello bord vult zich actief. Eerste interventies door docent bij sluimerende duo's (PK).</p>
                            </div>
                        </div>

                        {/* Week 3 */}
                        <div className="relative flex items-start gap-6 md:justify-end md:w-1/2 md:-ml-[19px] md:pr-12 md:text-right">
                            <div className="absolute left-0 md:left-auto md:-right-[24px] w-10 h-10 rounded-full bg-background border-4 border-secondary text-secondary flex items-center justify-center font-bold z-10 shadow-sm">3</div>
                            <div className="ml-14 md:ml-0 bg-secondary/5 p-6 rounded-2xl border border-secondary/30 shadow-md w-full relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-secondary" />
                                <h4 className="font-bold text-lg mb-1 text-secondary">Week 3: Peer Review Canvas</h4>
                                <p className="text-sm text-muted-foreground">Concepten inleveren. Review met Rubric ingeschakeld (Hard Scaffolding). Focus op kwaliteit.</p>
                            </div>
                        </div>

                        {/* Week 4-5 */}
                        <div className="relative flex items-start gap-6 md:justify-start md:w-1/2 md:ml-auto md:pl-12">
                            <div className="absolute left-0 md:-left-[24px] w-10 h-10 rounded-full bg-background border-4 border-secondary text-secondary flex items-center justify-center font-bold z-10 shadow-sm">4</div>
                            <div className="ml-14 md:ml-0 bg-card p-6 rounded-2xl border border-border shadow-sm w-full">
                                <h4 className="font-bold text-lg mb-1">Week 4-5: Verwerking & Afronding</h4>
                                <p className="text-sm text-muted-foreground">Feedback verwerken en definitief rapport opleveren. Trello bordarchivering.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results */}
            <section className="bg-secondary/5 rounded-3xl p-10 md:p-16 mb-12">
                <h2 className="font-heading text-3xl font-bold mb-8 text-center text-foreground">Resultaten & Impact</h2>
                <div className="grid md:grid-cols-3 gap-12 text-center">
                    <div className="space-y-4">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-2 relative">
                            <Kanban className="w-8 h-8" />
                            {/* Small data badge */}
                            <div className="absolute -top-2 -right-4 bg-secondary text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                                +64%
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-foreground">Proceswinst</h4>
                        <p className="text-muted-foreground leading-relaxed">Geen "last minute" paniek meer. Problemen en stagnatie werden al in week 2 geïdentificeerd door naar de Trello-borden te kijken, in plaats van pas bij de deadline. 64% minder uitloop vergeleken met voorgaande jaren.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-2 relative">
                            <FileCheck className="w-8 h-8" />
                            <div className="absolute -top-2 -right-4 bg-secondary text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                                Hoger
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-foreground">Inhoudelijke Kwaliteit</h4>
                        <p className="text-muted-foreground leading-relaxed">Door de rubrics filterden studenten zelf al fouten uit elkaars werk (zoals niet-SMART doelen). De docent kreeg hierdoor kwalitatief betere concepten te zien.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-2">
                            <Users className="w-8 h-8" />
                        </div>
                        <h4 className="text-xl font-bold text-foreground">Toekomst</h4>
                        <p className="text-muted-foreground leading-relaxed">De winst op didactiek is groot, maar de handmatige koppeling in Canvas is arbeidsintensief. Er is behoefte aan tools die groep-naar-groep feedback makkelijker automatiseren.</p>
                    </div>
                </div>
            </section>
            {/* Navigation */}
            <PageNavigation
                prev={{ name: "Digitale Geletterdheid", href: "/digitale-geletterdheid" }}
                next={{ name: "Literatuurstudie", href: "/literatuurstudie" }}
            />
        </div>
    );
}
