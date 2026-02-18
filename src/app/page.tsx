import Link from "next/link";
import SectionDivider from "@/components/SectionDivider";
import { ArrowRight, BookOpen, Brain, Layers, MonitorPlay } from "lucide-react";

export default function Home() {
    return (
        <div className="flex flex-col gap-24 pb-24">
            {/* Editorial Hero */}
            <section className="relative pt-20 md:pt-32 pb-12">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px] opacity-20" />

                <div className="max-w-4xl">
                    <span className="font-sans text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
                        Master Portfolio
                    </span>
                    <h1 className="font-heading text-2xl md:text-9xl font-black text-foreground leading-[0.9] -ml-1 mb-8">
                        Master <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-tertiary to-secondary">Onderwijs & Technologie</span>.
                    </h1>
                    <p className="font-heading text-lg md:text-3xl text-muted-foreground max-w-2xl leading-relaxed italic">
                        Een zoektocht naar de <em className="text-foreground not-italic">menselijke maat</em> in een gedigitaliseerd onderwijslandschap.
                    </p>
                </div>
            </section>

            {/* Bento Grid Navigation */}
            <section className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[250px]">
                {/* 1. Literature (Foundation) - Large Square (2x2) */}
                <Link
                    href="/literatuurstudie"
                    className="group relative md:col-span-2 md:row-span-2 bg-card rounded-3xl p-8 flex flex-col justify-between border border-border overflow-hidden hover:border-tertiary/50 transition-all duration-500"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <BookOpen className="w-64 h-64 text-tertiary" />
                    </div>
                    <div>
                        <span className="bg-tertiary/10 text-tertiary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                            De Basis
                        </span>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 text-foreground group-hover:text-tertiary transition-colors">
                            Literatuur<br />studie
                        </h2>
                    </div>
                    <div className="flex items-center gap-4 mt-8 md:mt-0">
                        <p className="text-muted-foreground max-w-sm">
                            Onderzoek naar metacognitie, self-efficacy en de pedagogische risico's van AI.
                        </p>
                        <div className="w-12 h-12 rounded-full bg-tertiary text-white flex items-center justify-center group-hover:scale-110 transition-transform ml-auto shadow-lg shadow-tertiary/20">
                            <ArrowRight className="w-6 h-6" />
                        </div>
                    </div>
                </Link>

                {/* 2. Critical Thinking (Mindset) - Wide (2x1) */}
                <Link
                    href="/kritisch-denken"
                    className="group relative md:col-span-2 bg-card rounded-3xl p-8 flex flex-col justify-center border border-border overflow-hidden hover:border-primary/50 transition-all duration-500 min-h-[200px]"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Brain className="w-32 h-32 text-primary" />
                    </div>
                    <div className="flex justify-between items-end relative z-10">
                        <div>
                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                Mindset
                            </span>
                            <h2 className="font-heading text-3xl font-bold mt-3 text-foreground group-hover:text-primary transition-colors">
                                Kritisch Denken
                            </h2>
                            <p className="text-muted-foreground mt-2 text-sm max-w-xs">The Google Effect & The Human in the Loop.</p>
                        </div>
                        <div className="w-10 h-10 rounded-full border border-primary/30 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </div>
                </Link>

                {/* 3. Didactics (Method) - Standard (1x1) */}
                <Link
                    href="/digitale-didactiek"
                    className="group relative bg-card rounded-3xl p-6 flex flex-col justify-between border border-border overflow-hidden hover:border-secondary/50 transition-all duration-500 min-h-[200px]"
                >
                    <div className="absolute bottom-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Layers className="w-24 h-24 text-secondary" />
                    </div>

                    <div className="flex justify-between items-start z-10">
                        <span className="bg-secondary/10 text-secondary w-fit px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                            De Methode
                        </span>
                        <div className="w-8 h-8 rounded-full border border-secondary/30 text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all">
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>

                    <div>
                        <h2 className="font-heading text-2xl font-bold mt-2 text-foreground group-hover:text-secondary transition-colors">
                            Digitale Didactiek
                        </h2>
                        <p className="text-muted-foreground text-xs mt-2">TPACK & Ontwerp.</p>
                    </div>
                </Link>

                {/* 4. Literacy (Skill) - Standard (1x1) */}
                <Link
                    href="/digitale-geletterdheid"
                    className="group relative bg-card rounded-3xl p-6 flex flex-col justify-between border border-border overflow-hidden hover:border-foreground/50 transition-all duration-500 min-h-[200px]"
                >
                    <div className="absolute bottom-0 right-0 p-2 opacity-5 group-hover:opacity-10 transition-opacity">
                        <MonitorPlay className="w-24 h-24 text-foreground" />
                    </div>

                    <div className="flex justify-between items-start z-10">
                        <span className="bg-foreground/5 text-foreground w-fit px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                            De Vaardigheid
                        </span>
                        <div className="w-8 h-8 rounded-full border border-foreground/30 text-foreground flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all">
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>

                    <div>
                        <h2 className="font-heading text-2xl font-bold mt-2 text-foreground group-hover:text-foreground/80 transition-colors">
                            Digitale Geletterdheid
                        </h2>
                        <p className="text-muted-foreground text-xs mt-2">Knoppen vs. Gedrag.</p>
                    </div>
                </Link>

            </section>

            <SectionDivider color="fill-primary/5" />

            <section className="text-center max-w-3xl mx-auto space-y-8 mt-12">
                <p className="text-3xl font-heading font-black italic text-foreground leading-tight">
                    &quot;Technologie is geen doel op zich, maar een <span className="text-primary">middel</span>.&quot;
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
