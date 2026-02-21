import Link from "next/link";
import SectionDivider from "@/components/SectionDivider";
import { Download, Code2, Paintbrush, Zap, Play, UploadCloud, RefreshCw, LayoutTemplate, Box, Database, ArrowRight } from "lucide-react";

export default function VibecodingPage() {
    return (
        <div className="flex flex-col gap-24 pb-24">
            {/* Hero Section */}
            <section className="relative pt-20 md:pt-32 pb-12 text-center md:text-left overflow-hidden">
                {/* Electric Blue Halos */}
                <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px] opacity-40" />
                <div className="absolute top-0 left-0 -z-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-[120px] opacity-40" />

                <div className="max-w-4xl mx-auto md:mx-0">
                    <span className="font-sans text-cyan-400 font-bold tracking-widest uppercase text-sm mb-4 block">
                        Workshop Digital Recap
                    </span>
                    <h1 className="mb-6 font-heading text-6xl md:text-9xl font-black text-foreground leading-[0.9] -ml-1">
                        Vibe<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">coding</span>.
                    </h1>
                    <p className="max-w-2xl text-xl md:text-3xl text-muted-foreground leading-relaxed font-heading italic">
                        Ontdek de kracht van je eigen webtools bouwen met Generatieve AI.
                    </p>

                    <div className="mt-12 bg-cyan-950/20 border-l-4 border-cyan-500 p-6 md:p-8 rounded-r-3xl rounded-bl-3xl max-w-3xl backdrop-blur-sm">
                        <blockquote className="text-xl md:text-2xl font-serif italic text-foreground leading-relaxed">
                            &quot;Code laten schrijven met GenAI tools (zoals ChatGPT, Gemini, Antigravity, Github Copilot). Het is een avontuur: je leert coderen door te doen.&quot;
                        </blockquote>
                    </div>

                    <div className="mt-10">
                        <a
                            href="/downloads/Ontdek de kracht van vibecoding.pptx"
                            download
                            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-cyan-950 font-bold px-6 py-3 rounded-full transition-colors shadow-lg shadow-cyan-500/20"
                        >
                            <Download className="w-5 h-5" />
                            Download Presentatie
                        </a>
                    </div>
                </div>
            </section>

            <SectionDivider color="fill-cyan-500/5" />

            {/* The Foundation: Building a House */}
            <section className="space-y-12">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-foreground">De Fundering</h2>
                    <p className="text-lg text-muted-foreground">Het bouwen van een website is als het bouwen van een huis. Dit zijn de drie pijlers.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {/* HTML */}
                    <div className="bg-card p-8 rounded-3xl border border-border hover:border-cyan-500/30 transition-colors group">
                        <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 transition-transform">
                            <Code2 className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold font-heading mb-2 text-foreground">HTML <span className="text-muted-foreground text-lg italic ml-2">(Het Skelet)</span></h3>
                        <p className="text-muted-foreground">Wat staat er op de pagina? De structuur en basis elementen (muren, deuren, ramen).</p>
                    </div>

                    {/* CSS */}
                    <div className="bg-card p-8 rounded-3xl border border-border hover:border-cyan-500/30 transition-colors group">
                        <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 transition-transform">
                            <Paintbrush className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold font-heading mb-2 text-foreground">CSS <span className="text-muted-foreground text-lg italic ml-2">(De Opmaak)</span></h3>
                        <p className="text-muted-foreground">Hoe ziet het eruit? Kleur, vorm en presentatie (het schilderwerk, de inrichting).</p>
                    </div>

                    {/* JS */}
                    <div className="bg-card p-8 rounded-3xl border border-border hover:border-cyan-500/30 transition-colors group">
                        <div className="w-16 h-16 rounded-2xl bg-yellow-400/10 flex items-center justify-center mb-6 text-yellow-500 group-hover:scale-110 transition-transform">
                            <Zap className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold font-heading mb-2 text-foreground">JavaScript <span className="text-muted-foreground text-lg italic ml-2">(De Interactie)</span></h3>
                        <p className="text-muted-foreground">Wat doet het? Gedrag, actie en reactie (de elektriciteit, de waterleiding).</p>
                    </div>
                </div>
            </section>

            {/* The 3-Step Process */}
            <section className="my-12">
                <div className="bg-cyan-950/20 border border-cyan-500/20 p-8 md:p-16 rounded-3xl max-w-5xl mx-auto relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                        <RefreshCw className="w-64 h-64 text-cyan-400" />
                    </div>

                    <h2 className="font-heading text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">De Workflow</h2>

                    <div className="space-y-12 relative">
                        {/* Connecting Line */}
                        <div className="absolute top-4 left-[2.25rem] bottom-4 w-px bg-cyan-500/20 hidden md:block" />

                        {/* Step 1 */}
                        <div className="flex flex-col md:flex-row gap-6 relative z-10">
                            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-cyan-500 text-cyan-950 flex items-center justify-center font-bold text-xl shadow-lg shadow-cyan-500/20">
                                1
                            </div>
                            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-2xl border border-border flex-1 border-l-4 border-l-cyan-500">
                                <h3 className="text-xl font-bold font-heading text-foreground mb-2 flex items-center gap-2">
                                    <Play className="w-5 h-5 text-cyan-400" /> Genereren & Testen
                                </h3>
                                <p className="text-muted-foreground mb-4">Heb je een code? Check en test deze in de browser.</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-muted px-3 py-1 rounded-full text-xs text-muted-foreground border border-border">Gemini Pro</span>
                                    <span className="bg-muted px-3 py-1 rounded-full text-xs text-muted-foreground border border-border">Antigravity</span>
                                    <span className="bg-muted px-3 py-1 rounded-full text-xs text-muted-foreground border border-border">VS Code</span>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col md:flex-row gap-6 relative z-10">
                            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-cyan-900 border-2 border-cyan-500 text-cyan-400 flex items-center justify-center font-bold text-xl">
                                2
                            </div>
                            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-2xl border border-border flex-1">
                                <h3 className="text-xl font-bold font-heading text-foreground mb-2 flex items-center gap-2">
                                    <UploadCloud className="w-5 h-5 text-cyan-400" /> Online Zetten <span className="text-xs font-normal font-sans bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded-full ml-2">Optioneel</span>
                                </h3>
                                <p className="text-muted-foreground">Optioneel maar krachtig. Gebruik platforms zoals GitHub om je repository aan te maken en je project te delen met de wereld.</p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col md:flex-row gap-6 relative z-10">
                            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-cyan-900 border-2 border-cyan-500 text-cyan-400 flex items-center justify-center font-bold text-xl">
                                3
                            </div>
                            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-2xl border border-border flex-1">
                                <h3 className="text-xl font-bold font-heading text-foreground mb-2 flex items-center gap-2">
                                    <RefreshCw className="w-5 h-5 text-cyan-400" /> Optimaliseren (Doorprompten)
                                </h3>
                                <p className="text-muted-foreground italic mb-2">"Blijven prutsen, blijven proberen, blijven prompten."</p>
                                <p className="text-muted-foreground text-sm">Geef niet op bij een Error 404, maar gebruik het om te leren. Elke fout is een kans om je prompt te verbeteren.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Showcase / Inspiratie */}
            <section className="space-y-12">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-foreground">Inspiratie</h2>
                    <p className="text-lg text-muted-foreground">Wat is er allemaal mogelijk? Een greep uit gerealiseerde projecten.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
                    {/* Project 1 */}
                    <div className="bg-card rounded-3xl overflow-hidden border border-border group hover:border-cyan-500/50 transition-all flex flex-col">
                        <div className="aspect-video bg-muted flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-400 via-background to-background group-hover:opacity-40 transition-opacity" />
                            <LayoutTemplate className="w-16 h-16 text-cyan-500/50 group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold font-heading text-foreground mb-2">MBOTech</h3>
                            <p className="text-sm text-muted-foreground flex-1">Dashboard met een overzicht van toepassingen voor AI, VR en AR in het onderwijs.</p>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="bg-card rounded-3xl overflow-hidden border border-border group hover:border-cyan-500/50 transition-all flex flex-col">
                        <div className="aspect-video bg-muted flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500 via-background to-background group-hover:opacity-40 transition-opacity" />
                            <Box className="w-16 h-16 text-blue-500/50 group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold font-heading text-foreground mb-2">LEGO Dimensions</h3>
                            <p className="text-sm text-muted-foreground flex-1">Interactieve database: overzicht van alle karakters, abilities en uitgebreide filteropties.</p>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="bg-card rounded-3xl overflow-hidden border border-border group hover:border-cyan-500/50 transition-all flex flex-col">
                        <div className="aspect-video bg-muted flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-500 via-background to-background group-hover:opacity-40 transition-opacity" />
                            <Database className="w-16 h-16 text-teal-500/50 group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold font-heading text-foreground mb-2">Cobblemon Dashboard</h3>
                            <p className="text-sm text-muted-foreground flex-1">Complexe game-data rondom mods en updates snel en visueel inzichtelijk gemaakt.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ideeën Generator */}
            <section className="bg-gradient-to-b from-transparent to-cyan-950/10 rounded-3xl p-8 md:p-12 border border-border max-w-5xl mx-auto w-full">
                <div className="text-center mb-10">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Ideeën Generator</h2>
                    <p className="text-muted-foreground">Weet je even niet wat je moet bouwen? Begin hier.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Categorie 1 */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold font-heading text-cyan-400 border-b border-cyan-500/20 pb-2">Werk & Studie</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-muted-foreground"><ArrowRight className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" /> <span><strong>Rubric calculator:</strong> Automatiseer het nakijken.</span></li>
                            <li className="flex items-start gap-3 text-muted-foreground"><ArrowRight className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" /> <span><strong>KPI Dashboard:</strong> Visuele data voor jaarverslagen.</span></li>
                            <li className="flex items-start gap-3 text-muted-foreground"><ArrowRight className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" /> <span><strong>Transcriptie-analyse:</strong> Tool om interviews sneller te verwerken.</span></li>
                            <li className="flex items-start gap-3 text-muted-foreground"><ArrowRight className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" /> <span><strong>Interactieve Quiz:</strong> Of een memory card generator voor docenten.</span></li>
                        </ul>
                    </div>

                    {/* Categorie 2 */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold font-heading text-blue-400 border-b border-blue-500/20 pb-2">Privé & Hobby</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-muted-foreground"><ArrowRight className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /> <span><strong>Verzameling catalogus:</strong> Spaarlijsten bijhouden (bijv. Pokémon, postzegels).</span></li>
                            <li className="flex items-start gap-3 text-muted-foreground"><ArrowRight className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /> <span><strong>Bouw Calculator:</strong> Kostenplaatje voor verbouwing/nieuwebouw stroomlijnen.</span></li>
                            <li className="flex items-start gap-3 text-muted-foreground"><ArrowRight className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /> <span><strong>Persoonlijk Dashboard:</strong> Koppel weersinformatie of andere API's.</span></li>
                            <li className="flex items-start gap-3 text-muted-foreground"><ArrowRight className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /> <span><strong>Community Site:</strong> Een simpele website voor een vereniging of lokaal dorp.</span></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Afsluiting / CTA */}
            <section className="text-center max-w-3xl mx-auto mt-8">
                <p className="text-2xl md:text-3xl font-heading font-bold text-foreground leading-relaxed mb-8">
                    &quot;Begin klein en simpel. <span className="text-cyan-400 italic">The sky is the limit.</span>&quot;
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-foreground text-background font-bold px-8 py-4 rounded-full hover:bg-cyan-400 transition-colors"
                    >
                        Zelf aan de slag (GitHub)
                    </a>
                </div>
            </section>
        </div>
    );
}
