import SectionDivider from "@/components/SectionDivider";
import { BrainCircuit, Cpu, HandMetal, Hourglass, MessagesSquare, Repeat, Layers, Timer, MessageCircle, Mic, ArrowRight, CheckCircle } from "lucide-react";

export default function CriticalThinkingPage() {
    return (
        <div className="flex flex-col gap-24 pb-24">
            {/* Hero */}
            <section className="relative pt-20 md:pt-32 pb-12 text-center md:text-left overflow-hidden">
                <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-secondary/20 blur-[120px] opacity-40" />
                <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-primary/20 blur-[120px] opacity-40" />

                <span className="font-sans text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
                    Nieuw Inzicht
                </span>
                <h1 className="mb-6 font-heading text-6xl md:text-8xl font-black text-foreground leading-[0.9] -ml-1">
                    Kritisch <br /> <span className="text-primary">Denken</span>.
                </h1>
                <p className="max-w-2xl text-xl md:text-2xl text-muted-foreground leading-relaxed italic font-serif">
                    &quot;Laat de robot niet jouw push-ups doen.&quot;
                </p>
                <p className="max-w-xl text-lg text-muted-foreground mt-4">
                    Over eigenaarschap, outsourcing van denkprocessen en de &apos;Human in the Loop&apos;.
                </p>
            </section>

            {/* The Value of Friction */}
            <section className="bg-gradient-to-r from-primary/5 to-transparent p-8 md:p-12 rounded-3xl border-l-4 border-primary">
                <div className="max-w-4xl">
                    <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                        Een pleidooi voor <span className="text-primary italic">Traagheid</span>
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                        In een wereld van directe antwoorden is vertragen een superkracht. Leren vereist wrijving.
                        Als we alle &apos;cognitieve belasting&apos; uitbesteden aan AI, worden we wel efficiënter, maar niet slimmer.
                        De kunst is om AI te gebruiken om te versnellen in routine, maar te vertragen in begrip.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-border">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-muted border border-border flex items-center justify-center font-bold text-sm text-muted-foreground">1</span>
                            <div>
                                <strong className="text-foreground block mb-1">Systeem 1 (Snel)</strong>
                                <p className="text-sm text-muted-foreground">Intuïtief, automatisch, AI-ondersteund. Handig voor productie, gevaarlijk voor oordeelsvorming.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-primary/5 border border-primary/20">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">2</span>
                            <div>
                                <strong className="text-foreground block mb-1">Systeem 2 (Traag)</strong>
                                <p className="text-sm text-muted-foreground">Analytisch, bewust, menselijk. <span className="italic text-primary">Hier vindt het leren plaats.</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Problem: Outsourcing */}
            <section className="grid gap-16 md:grid-cols-2 items-center">
                <div className="space-y-8">
                    <h2 className="font-heading text-4xl font-bold text-foreground leading-tight">
                        Het Gevaar: <br /><span className="text-destructive">Outsourcing</span>
                    </h2>
                    <div className="prose prose-lg text-muted-foreground space-y-6">
                        <p>
                            We zien een fenomeen dat we &quot;The Google Effect&quot; noemen, maar dan in het kwadraat. Studenten kiezen onbewust de weg van de minste weerstand.
                            Het gevaar is niet dat AI het werk doet, maar dat AI het <em>denkproces</em> overneemt.
                        </p>
                        <blockquote className="border-l-4 border-destructive pl-6 italic text-foreground text-xl">
                            &quot;Outsourcing van het denkproces = De robot doet jouw push-ups.&quot;
                        </blockquote>
                        <p>
                            Je wordt er zelf niet sterker van. De uitdaging voor het onderwijs is om deze dynamiek om te draaien: AI als sparringpartner, niet als uitvoerder.
                        </p>
                    </div>
                </div>
                <div className="bg-background rounded-3xl p-8 border border-border shadow-2xl shadow-primary/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-5">
                        <BrainCircuit className="w-64 h-64 text-foreground" />
                    </div>
                    <div className="relative z-10">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                            <BrainCircuit className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 font-heading">The Human in the Loop</h3>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                            Technologie verbieden is een achterhoedegevecht. De enige duurzame oplossing is <strong>Metacognitie</strong>: het nadenken over je eigen denken.
                            De mens moet de architect blijven van de oplossing, waarbij AI slechts de aannemer is.
                        </p>
                    </div>
                </div>
            </section>

            {/* Scaffolding Theory */}
            <section className="grid gap-6 md:grid-cols-2">
                <div className="bg-background p-8 rounded-3xl border border-border shadow-sm flex flex-col justify-between">
                    <div>
                        <h3 className="font-heading text-2xl font-bold mb-4 flex items-center gap-3">
                            <span className="p-2 bg-muted rounded-lg"><Layers className="w-5 h-5 text-foreground" /></span>
                            Hard Scaffolding
                        </h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            <strong>Structuur vooraf.</strong> Het inbouwen van verplichte denkstappen <em>in</em> de opdracht, zodat de student niet direct naar de oplossing kan springen.
                        </p>
                    </div>
                    <ul className="space-y-3 text-sm text-muted-foreground bg-muted/30 p-4 rounded-xl">
                        <li className="flex gap-2 items-center"><CheckCircle className="w-4 h-4 text-muted-foreground" /> Verplichte tussenproducten</li>
                        <li className="flex gap-2 items-center"><CheckCircle className="w-4 h-4 text-muted-foreground" /> &quot;Van verbieden naar omarmen&quot; zones, met richtlijnen</li>
                    </ul>
                </div>
                <div className="bg-background p-8 rounded-3xl border border-border shadow-sm flex flex-col justify-between">
                    <div>
                        <h3 className="font-heading text-2xl font-bold mb-4 flex items-center gap-3">
                            <span className="p-2 bg-primary/10 rounded-lg"><MessageCircle className="w-5 h-5 text-primary" /></span>
                            Soft Scaffolding
                        </h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            <strong>Begeleiding tijdens.</strong> De didactische dialoog in de klas. De docent als model die laat zien hoe een expert denkt (en twijfelt!).
                        </p>
                    </div>
                    <ul className="space-y-3 text-sm text-muted-foreground bg-primary/5 p-4 rounded-xl">
                        <li className="flex gap-2 items-center"><CheckCircle className="w-4 h-4 text-primary" /> Modeling (&quot;Kijk hoe kan en hoe ik het check&quot;)</li>
                        <li className="flex gap-2 items-center"><CheckCircle className="w-4 h-4 text-primary" /> Vragen naar het &apos;waarom&apos;</li>
                    </ul>
                </div>
            </section>

            <SectionDivider color="fill-primary/5" />

            {/* The Solution: Driebaansweg */}
            <section className="space-y-16">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="font-heading text-5xl font-bold mb-6 text-foreground">De Driebaansweg</h2>
                    <p className="text-xl text-muted-foreground font-serif italic mb-4">Een model van Dieter Vlaminck (2025) om te bepalen wanneer je AI inzet.</p>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        In dit model wordt onderscheid gemaakt tussen drie banen: <strong>Keep It</strong>, <strong>Share It</strong> en <strong>Delegate It</strong>.
                        Het helpt studenten en docenten om bewuste keuzes te maken over de rol van AI in hun werkproces.
                        Niet alles hoeft geautomatiseerd te worden; soms is de worsteling van het zelf doen essentieel voor diepgaand begrip.
                    </p>
                </div>

                {/* Road Visualization */}
                <div className="relative p-8 md:p-12 bg-[#1c1917] rounded-3xl border-x-8 border-dashed border-primary/20 overflow-hidden shadow-2xl">
                    <div className="absolute top-0 bottom-0 left-1/3 w-px border-l-2 border-dashed border-primary/10 hidden md:block" />
                    <div className="absolute top-0 bottom-0 right-1/3 w-px border-l-2 border-dashed border-primary/10 hidden md:block" />

                    <div className="grid md:grid-cols-3 gap-12 relative z-10">
                        {/* Lane 1: Keep It */}
                        <div className="space-y-6 text-center group">
                            <div className="mx-auto w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-3xl font-bold shadow-lg shadow-primary/20 mb-6 group-hover:scale-110 transition-transform duration-500">
                                <HandMetal className="w-10 h-10" />
                            </div>
                            <h3 className="text-3xl font-bold text-foreground font-heading">1. Keep It</h3>
                            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 min-h-[220px] flex flex-col justify-center transition-colors group-hover:bg-primary/10">
                                <p className="text-muted-foreground text-lg">Is de vaardigheid kern voor je carrière of ontwikkeling? <strong className="text-primary block mt-2 text-xl">Doe het zelf.</strong> <span className="text-sm opacity-70">Train die spier. Besteed dit nooit uit.</span></p>
                            </div>
                        </div>

                        {/* Lane 2: Share It */}
                        <div className="space-y-6 text-center group">
                            <div className="mx-auto w-20 h-20 rounded-full bg-primary/80 text-white flex items-center justify-center text-3xl font-bold shadow-lg shadow-primary/20 mb-6 group-hover:scale-110 transition-transform duration-500">
                                <MessagesSquare className="w-10 h-10" />
                            </div>
                            <h3 className="text-3xl font-bold text-foreground font-heading">2. Share It</h3>
                            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 min-h-[220px] flex flex-col justify-center transition-colors group-hover:bg-primary/10">
                                <p className="text-muted-foreground text-lg">Kan AI fungeren als sparringpartner? <strong className="text-primary block mt-2 text-xl">Samenwerken.</strong> <span className="text-sm opacity-70">Laat AI de structuur maken, jij de inhoud.</span></p>
                            </div>
                        </div>

                        {/* Lane 3: Delegate It */}
                        <div className="space-y-6 text-center group">
                            <div className="mx-auto w-20 h-20 rounded-full bg-primary/60 text-white flex items-center justify-center text-3xl font-bold shadow-lg shadow-primary/20 mb-6 group-hover:scale-110 transition-transform duration-500">
                                <Cpu className="w-10 h-10" />
                            </div>
                            <h3 className="text-3xl font-bold text-foreground font-heading">3. Delegate It</h3>
                            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 min-h-[220px] flex flex-col justify-center transition-colors group-hover:bg-primary/10">
                                <p className="text-muted-foreground text-lg">Is het routinewerk of controle? <strong className="text-primary block mt-2 text-xl">Besteed uit.</strong> <span className="text-sm opacity-70">Focus op waardecreatie.</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Practical Tools - Grid (Loose Techniques) */}
            <section className="bg-muted/30 p-8 md:p-12 rounded-3xl border border-border">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="font-heading text-4xl font-bold mb-4 text-foreground">Tools voor Thuis</h2>
                    <p className="text-muted-foreground text-lg">Drie concrete technieken om metacognitie direct toe te passen.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Tool 1 */}
                    <div className="bg-background p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors group shadow-sm">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                            <Layers className="w-6 h-6 text-primary group-hover:text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 font-heading">Prompt Sandwich</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Bouw je prompt op als een burger. <br />
                            <strong>Bodem (Jouw Concept):</strong> Begin altijd met je eigen ruwe idee of antwoord. <br />
                            <strong>Beleg (AI Verrijking):</strong> Vraag AI om dit aan te vullen, tegen te spreken of te verbeteren. <br />
                            <strong>Top (Jouw Validatie):</strong> Eindig met jouw kritische check en synthese. Jij bent de chef.
                        </p>
                    </div>

                    {/* Tool 2 */}
                    <div className="bg-background p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors group shadow-sm">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                            <Timer className="w-6 h-6 text-primary group-hover:text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 font-heading">5-Minuten Timer</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            De belangrijkste knop is de pauzeknop. Voordat je op &apos;Generate&apos; klikt: wacht 5 minuten. Formuleer een hypothese. Zonder verwachting is de output waardeloos.
                        </p>
                    </div>

                    {/* Tool 3 */}
                    <div className="bg-background p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors group shadow-sm">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                            <MessageCircle className="w-6 h-6 text-primary group-hover:text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 font-heading">Explain Back</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            De ultieme check voor eigenaarschap. Kun je het uitleggen aan een ander zonder naar je scherm te kijken? Pas dan is de kennis van jou.
                        </p>
                    </div>
                </div>
            </section>

            {/* Conclusion */}
            <section className="text-center max-w-3xl mx-auto space-y-8 mt-12">
                <p className="text-3xl font-heading font-black italic text-foreground leading-tight">
                    &quot;Kritisch denken in tijden van AI is geen kwestie van pessimisme. Het is een kwestie van <span className="text-primary">eigenaarschap</span>.&quot;
                </p>
                <div className="flex items-center justify-center gap-4">
                    <span className="h-px w-12 bg-primary/30"></span>
                    <cite className="block text-muted-foreground not-italic font-bold tracking-widest uppercase text-sm">Rody Damman</cite>
                    <span className="h-px w-12 bg-primary/30"></span>
                </div>
            </section>
        </div>
    );
}
