import SectionDivider from "@/components/SectionDivider";
import PageNavigation from "@/components/PageNavigation";
import { GraduationCap, ShieldAlert, Cpu, Network, CheckCircle2, Lock, Target, MessageSquare, BookOpen, Layers, AlertTriangle } from "lucide-react";

export default function GepersonaliseerdLerenPage() {
    return (
        <div className="flex flex-col gap-16 pb-24">
            {/* Hero */}
            <section className="relative pt-12 text-center md:text-left overflow-hidden">
                <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-indigo-500/20 blur-[100px] opacity-50" />
                <span className="mb-4 inline-block rounded-full bg-indigo-500/10 px-4 py-1.5 text-sm font-bold text-indigo-500">
                    Product 4: Gepersonaliseerd Leren
                </span>
                <h1 className="mb-6 font-heading text-5xl font-extrabold leading-tight md:text-7xl">
                    Toetsing in een <span className="text-indigo-500">AI-Tijdperk</span>
                </h1>
                <p className="max-w-2xl text-xl text-muted-foreground leading-relaxed">
                    Hoe garandeer je dat een diploma daadwerkelijk de kennis van de student bewijst, wanneer AI het denkwerk kan overnemen? Dit project verkent de verschuiving van productbeoordeling naar procesbeoordeling om de validiteit en <em>assessment security</em> van examinering te borgen.
                </p>
            </section>

            <SectionDivider color="fill-indigo-500/5" />

            {/* The Tension (Spanningsveld) */}
            <section className="grid gap-12 md:grid-cols-3 items-start">
                <div className="md:col-span-1">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6">
                        <ShieldAlert className="w-6 h-6 text-indigo-500" />
                    </div>
                    <h2 className="text-3xl font-bold font-heading mb-4 text-foreground">Het <span className="text-indigo-500">Misalignment</span> Probleem</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                        Het huidige toetsontwerp wringt op drie fundamentele niveaus. Als we geen gecontroleerde kaders bieden, verliezen onze diploma's hun maatschappelijke waarde.
                    </p>
                </div>
                
                <div className="md:col-span-2 grid sm:grid-cols-3 gap-6">
                    <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
                        <h4 className="font-bold text-indigo-500 mb-2">Microniveau (Student)</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">Het risico op <em>cognitive offloading</em>: fundamentele basiskennis gaat verloren als studenten AI inzetten zonder eerst eigen 'mental models' op te bouwen.</p>
                    </div>
                    <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
                        <h4 className="font-bold text-indigo-500 mb-2">Mesoniveau (Onderwijs)</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">De <em>constructive alignment</em> gaat stuk wanneer studenten in de lessen volop AI gebruiken voor opdrachten, maar dit op de summatieve toets streng verboden is.</p>
                    </div>
                    <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
                        <h4 className="font-bold text-indigo-500 mb-2">Macroniveau (Werkveld)</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">Een mismatch met de innovatieve realiteit. Als we AI volledig verbieden, leiden we op voor een schijnwerkelijkheid die niet aansluit op de moderne arbeidsmarkt.</p>
                    </div>
                </div>
            </section>

            {/* Het Toetspalet */}
            <section className="bg-indigo-500/5 -mx-4 px-4 md:-mx-8 md:px-8 py-16 rounded-[3rem] border border-indigo-500/10">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold font-heading mb-4 text-foreground">Het AI-Inclusieve <span className="text-indigo-500">Toetspalet</span></h2>
                    <p className="text-muted-foreground text-lg">
                        Tijdens een professionele dialoog met de examencommissie, senior docenten en het werkveld zijn vier strategische ontwerprichtingen afgewogen om <em>assessment security</em> (Dawson, 2021) te borgen zonder innovatie te smoren.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Option 1 */}
                    <div className="bg-card p-8 rounded-3xl border border-border relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-6 opacity-10">
                            <BookOpen className="w-24 h-24 text-indigo-500" />
                        </div>
                        <h3 className="text-xl font-bold font-heading mb-2 text-foreground">1. Verslag + Prompt Logboek</h3>
                        <p className="text-sm text-muted-foreground mb-4">De student levert een AI-campagne in inclusief screenshots en een logboek van alle prompts.</p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /><span className="text-muted-foreground">Weinig aanpassing in huidig onderwijsontwerp nodig.</span></li>
                            <li className="flex gap-2 items-start"><AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" /><span className="text-muted-foreground">Enorme administratieve last voor docenten; logboeken zijn makkelijk te faken door AI achteraf.</span></li>
                        </ul>
                    </div>

                    {/* Option 2 */}
                    <div className="bg-card p-8 rounded-3xl border border-border relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-6 opacity-10">
                            <MessageSquare className="w-24 h-24 text-indigo-500" />
                        </div>
                        <h3 className="text-xl font-bold font-heading mb-2 text-foreground">2. CGI / Verdediging</h3>
                        <p className="text-sm text-muted-foreground mb-4">Toetsing vindt uitsluitend plaats via een live criteriumgericht interview waarin keuzes beargumenteerd worden.</p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /><span className="text-muted-foreground">Toetst 100% menselijke afweging. Student valt direct door de mand als kennis ontbreekt.</span></li>
                            <li className="flex gap-2 items-start"><AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" /><span className="text-muted-foreground">Enorme planningsdruk bij grote studentenaantallen en vraagt hoge interviewvaardigheid.</span></li>
                        </ul>
                    </div>

                    {/* Option 3 */}
                    <div className="bg-card p-8 rounded-3xl border border-indigo-500/30 relative overflow-hidden group shadow-lg">
                        <div className="absolute top-0 right-0 p-6 opacity-10">
                            <Target className="w-24 h-24 text-indigo-500" />
                        </div>
                        <h3 className="text-xl font-bold font-heading mb-2 text-indigo-500">3. De AI-Audit Methode (Geadviseerd)</h3>
                        <p className="text-sm text-muted-foreground mb-4">Studenten krijgen op een gesloten toets een bewust foutieve door AI gegenereerde casus. Zij moeten de hallucinaties opsporen en theorie toepassen.</p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /><span className="text-muted-foreground">Zeer efficiënt na te kijken, schaalbaar, en traint exact de <em>human-in-the-loop</em> vaardigheid.</span></li>
                            <li className="flex gap-2 items-start"><AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" /><span className="text-muted-foreground">Vereist specifieke voorbereidingstijd om goede 'foutieve' datasets te ontwerpen.</span></li>
                        </ul>
                    </div>

                    {/* Option 4 */}
                    <div className="bg-card p-8 rounded-3xl border border-border relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-6 opacity-10">
                            <Layers className="w-24 h-24 text-indigo-500" />
                        </div>
                        <h3 className="text-xl font-bold font-heading mb-2 text-foreground">4. Gelaagde Toetsing (AI-Rijbewijs)</h3>
                        <p className="text-sm text-muted-foreground mb-4">Deel 1: Klassieke kennistoets zonder AI (begrippen). Pas na behalen mag student in Deel 2 aan de slag mét AI.</p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /><span className="text-muted-foreground">Voorkomt cognitive offloading 100%. Nulpunt is vastgesteld, wat de 2e fase veiliger maakt.</span></li>
                            <li className="flex gap-2 items-start"><AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" /><span className="text-muted-foreground">Kan door studenten als te 'schools' en traditioneel ervaren worden.</span></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Conclusie */}
            <section className="flex flex-col md:flex-row items-center gap-12 bg-card p-10 rounded-[3rem] border border-border shadow-xl">
                <div className="flex-1">
                    <h2 className="text-3xl font-bold font-heading mb-6 text-foreground">Formatief vs. Summatief</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                        De belangrijkste conclusie uit het onderzoek is het strict scheiden van leerdoelen. Tijdens de <strong>formatieve lessen</strong> moet AI volop de ruimte krijgen: studenten moeten kunnen experimenteren, sparren, prutsen en falen met AI als adaptieve tutor (genormaliseerd falen zonder harde consequenties).
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        Tijdens het <strong>summatieve meetmoment</strong> staat echter de betrouwbaarheid van het diploma voorop. Hier is de <em>AI-Audit methode</em> het meest robuust: de AI is de generator, de student is de examinator. Alleen zo meten we de daadwerkelijke vakinhoudelijke oordeelsvorming.
                    </p>
                </div>
                <div className="w-full md:w-1/3 flex justify-center">
                    <div className="w-48 h-48 rounded-full bg-indigo-500/10 flex items-center justify-center border-[8px] border-indigo-500/20">
                        <Lock className="w-20 h-20 text-indigo-500" />
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <PageNavigation
                prev={{ name: "Literatuurstudie", href: "/literatuurstudie" }}
                next={{ name: "Ethische Dilemma's", href: "/ethische-dilemmas" }}
            />
        </div>
    );
}

