import Link from "next/link";
import SectionDivider from "@/components/SectionDivider";
import { Download, Code2, Paintbrush, Zap, UploadCloud, RefreshCw, LayoutTemplate, Box, Database, ArrowRight, Lightbulb, CheckCircle } from "lucide-react";

export default function VibecodingPage() {
    return (
        <div className="flex flex-col gap-16 pb-24">
            {/* Hero Section */}
            <section className="relative pt-12 md:pt-20 overflow-hidden">
                {/* Neon Accents */}
                <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-[100px] opacity-50" />
                <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px] opacity-40" />

                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-7">
                        <span className="mb-4 inline-block rounded-full bg-cyan-500/10 px-4 py-1.5 text-sm font-bold text-cyan-400">
                            Product 3: Vibecoding
                        </span>
                        <h1 className="mb-6 font-heading text-6xl md:text-8xl font-black leading-[0.9] -ml-1">
                            Vibe<span className="text-cyan-400">CODING.</span>
                        </h1>
                        <p className="max-w-2xl text-xl md:text-2xl text-muted-foreground leading-relaxed italic font-serif mb-6">
                            &quot;Je hoeft de taal van de machine niet perfect te spreken, zolang je maar helder kunt uitleggen wat de machine voor jou moet doen.&quot;
                        </p>

                        <div className="prose prose-lg text-muted-foreground text-lg leading-relaxed space-y-4">
                            <p>
                                Vibecoding is een nieuwe benadering van programmeren waarbij je niet langer zelf elke regel code typt, maar als een <strong className="text-cyan-400">regisseur</strong> samenwerkt met Generatieve AI (zoals ChatGPT, GitHub Copilot of Gemini).
                            </p>
                            <p>
                                Je beschrijft je idee in natuurlijke taal (je &apos;vibe&apos; of visie), en de AI vertaalt dit naar werkende code. Het verplaatst de uitdaging van de <em>syntaxis uit je hoofd leren</em> naar <em>logisch nadenken en problemen oplossen</em>.
                            </p>
                        </div>
                    </div>

                    <div className="md:col-span-5 relative">
                        {/* Highlight Box */}
                        <div className="bg-gradient-to-br from-cyan-950/80 to-background p-8 rounded-3xl border border-cyan-500/30 shadow-xl rotate-1 relative z-10">
                            <h3 className="font-heading text-2xl font-bold mb-6 text-foreground border-b border-cyan-500/20 pb-4">De Werkplaats</h3>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="block text-foreground mb-1 text-lg">Concept</strong>
                                        <span className="text-sm text-muted-foreground">Van MVP idee naar kraakheldere prompt.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="block text-foreground mb-1 text-lg">Generatie</strong>
                                        <span className="text-sm text-muted-foreground">AI schrijft de basiscode en componenten.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="block text-foreground mb-1 text-lg">Iteratie</strong>
                                        <span className="text-sm text-muted-foreground">Testen, debuggen via de console en bijsturen.</span>
                                    </div>
                                </li>
                            </ul>

                            <a
                                href="/downloads/Ontdek de kracht van vibecoding.pptx"
                                download
                                className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-cyan-950 font-bold px-6 py-4 rounded-xl transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]"
                            >
                                <Download className="w-5 h-5" />
                                Download Setup Gids
                            </a>
                        </div>
                        {/* Decorative background element behind the box */}
                        <div className="absolute top-4 -right-4 w-full h-full bg-cyan-500/5 rounded-3xl -z-10 -rotate-2 border border-cyan-500/10 hidden md:block" />
                    </div>
                </div>
            </section>

            <SectionDivider color="fill-cyan-500/5" />

            {/* The Foundation: Building a House */}
            <section className="px-4 max-w-7xl mx-auto w-full">
                <div className="grid gap-12 md:grid-cols-12 items-center">
                    <div className="md:col-span-5 space-y-6">
                        <h2 className="font-heading text-4xl font-bold text-foreground leading-tight">De <span className="text-blue-400">Fundering</span> van het Web</h2>
                        <div className="border-l-4 border-blue-500 pl-6 bg-blue-500/5 py-4 rounded-r-2xl pr-4">
                            <p className="text-lg text-foreground italic font-heading">
                                &quot;Zelfs als AI het huis bouwt, moet je de blauwdruk snappen.&quot;
                            </p>
                        </div>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Om effectief te kunnen <em>doorprompten</em> (bijsturen) en fouten te repareren, is het essentieel dat je de drie pijlers van de web architectuur herkent. Zonder deze basis blijf je afhankelijk van pure chance.
                        </p>
                    </div>

                    <div className="md:col-span-7 grid sm:grid-cols-3 gap-4">
                        {/* HTML */}
                        <div className="bg-background p-6 rounded-2xl border border-border shadow-sm flex flex-col h-full hover:border-orange-500/50 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4 text-orange-500">
                                <Code2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold font-heading mb-1 text-foreground">HTML</h3>
                            <span className="text-xs font-bold text-orange-400 uppercase tracking-wide mb-3">Het Skelet</span>
                            <p className="text-sm text-muted-foreground leading-relaxed">Wat staat er op de pagina? Bepaalt de muren, deuren en structuur.</p>
                        </div>

                        {/* CSS */}
                        <div className="bg-background p-6 rounded-2xl border border-border shadow-sm flex flex-col h-full hover:border-blue-500/50 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 text-blue-500">
                                <Paintbrush className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold font-heading mb-1 text-foreground">CSS</h3>
                            <span className="text-xs font-bold text-blue-400 uppercase tracking-wide mb-3">De Opmaak</span>
                            <p className="text-sm text-muted-foreground leading-relaxed">Hoe ziet het eruit? Bepaalt het schilderwerk, de kleur en presentatie.</p>
                        </div>

                        {/* JS */}
                        <div className="bg-background p-6 rounded-2xl border border-border shadow-sm flex flex-col h-full hover:border-yellow-500/50 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center mb-4 text-yellow-500">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold font-heading mb-1 text-foreground">JavaScript</h3>
                            <span className="text-xs font-bold text-yellow-500 uppercase tracking-wide mb-3">Intersectie</span>
                            <p className="text-sm text-muted-foreground leading-relaxed">Wat doet het? Zorgt voor interactie, gedrag en elektriciteit.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* De Workflow (Driebaansweg Style) */}
            <section className="bg-gradient-to-b from-cyan-950/10 to-transparent p-8 md:p-16 rounded-[3rem] border border-cyan-500/10 mx-4 max-w-7xl md:mx-auto mt-16">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Het <span className="text-cyan-400">Proces</span></h2>
                    <p className="text-lg text-muted-foreground">Geen code meer inkloppen, maar regisseren en schaven in een iteratieve workflow.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative z-10">
                    <div className="hidden md:block absolute top-[50%] left-[10%] right-[10%] h-px bg-cyan-500/20 -z-10 border-t border-dashed border-cyan-500/50" />

                    {/* Phase 1 */}
                    <div className="bg-background rounded-3xl p-8 border border-border shadow-lg shadow-cyan-900/10 group hover:-translate-y-2 transition-transform">
                        <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-cyan-950 transition-colors">
                            <Lightbulb className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold font-heading mb-2">Idee & Prompt</h3>
                        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                            Start met je doel of probleem. Bepaal je Minimum Viable Product (MVP) en schrijf een gedetailleerde prompt voor de AI die de context, de output-vorm (HTML/CSS) en stap-voor-stap logica uitlegt.
                        </p>
                    </div>

                    {/* Phase 2: Active Glow Component */}
                    <div className="bg-background rounded-3xl p-8 border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.1)] group hover:-translate-y-2 transition-transform relative">
                        <div className="absolute inset-0 bg-cyan-500/5 rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="w-14 h-14 rounded-2xl bg-cyan-500 text-cyan-950 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20">
                            <RefreshCw className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold font-heading mb-2"><span className="text-cyan-400">Doorprompten</span></h3>
                        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                            Zodra de AI genereert, plak je de code in Cursor of VS Code en bekijk je de output in je browser. Krijg je een Error of klopt de UI niet? Geef foutmeldingen terug aan de bot en vraag om reparaties.
                        </p>
                        <div className="bg-muted p-3 rounded-lg border border-border mt-4">
                            <p className="text-xs font-mono font-bold text-cyan-400 text-center uppercase tracking-wider">Fail Fast, Prompt Better</p>
                        </div>
                    </div>

                    {/* Phase 3 */}
                    <div className="bg-background rounded-3xl p-8 border border-border shadow-lg shadow-cyan-900/10 group hover:-translate-y-2 transition-transform">
                        <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                            <UploadCloud className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold font-heading mb-2">Afronden & Delen</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Werkt je tool lokaal goed? Dan is de laatste stap lanceren. Platformen als GitHub Pages of Vercel maken het super simpel om je map in een levende website te veranderen.
                        </p>
                    </div>
                </div>
            </section>

            <SectionDivider color="fill-cyan-500/5" />

            {/* Showcase & Ideas (Dense Bento Grid Concept) */}
            <section className="max-w-7xl mx-auto w-full px-4 mb-8">
                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Col 1: Projecten */}
                    <div className="space-y-6">
                        <h2 className="font-heading text-3xl font-bold text-foreground flex items-center gap-3">
                            Gerealiseerd met AI <ArrowRight className="w-5 h-5 text-cyan-500" />
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="bg-card p-6 rounded-2xl border border-border hover:border-cyan-500/30 transition-all flex flex-col group shadow-sm bg-gradient-to-br hover:from-cyan-950/20 hover:to-transparent">
                                <LayoutTemplate className="w-8 h-8 text-cyan-500/50 mb-3 group-hover:text-cyan-400 transition-colors" />
                                <h3 className="text-lg font-bold font-heading text-foreground mb-1">MBOTech Overzicht</h3>
                                <p className="text-xs text-muted-foreground flex-1 leading-relaxed">Onderwijsuitdagingen gekoppeld aan VR/AI in een interactief dashboard-format.</p>
                            </div>
                            <div className="bg-card p-6 rounded-2xl border border-border hover:border-blue-500/30 transition-all flex flex-col group shadow-sm bg-gradient-to-br hover:from-blue-950/20 hover:to-transparent">
                                <Box className="w-8 h-8 text-blue-500/50 mb-3 group-hover:text-blue-400 transition-colors" />
                                <h3 className="text-lg font-bold font-heading text-foreground mb-1">LEGO DB</h3>
                                <p className="text-xs text-muted-foreground flex-1 leading-relaxed">Een snelle character- en ability tracker om speelsets te filteren.</p>
                            </div>
                            <div className="bg-card p-6 rounded-2xl border border-border hover:border-teal-500/30 transition-all flex flex-col group sm:col-span-2 shadow-sm bg-gradient-to-tr hover:from-teal-950/20 hover:to-transparent">
                                <Database className="w-8 h-8 text-teal-500/50 mb-3 group-hover:text-teal-400 transition-colors" />
                                <h3 className="text-lg font-bold font-heading text-foreground mb-1">Cobblemon Project</h3>
                                <p className="text-xs text-muted-foreground flex-1 leading-relaxed">Grote hoeveelheden minecraft game-data getransformeerd naar een visueel inzichtelijke en dynamische tabel-layout met sorteeropties.</p>
                            </div>
                        </div>
                    </div>

                    {/* Col 2: Generator */}
                    <div className="bg-background rounded-3xl p-8 border border-border shadow-md flex flex-col justify-between relative overflow-hidden h-full border-l-4 border-l-cyan-500">
                        <div className="absolute top-0 right-0 -m-10 opacity-5 pointer-events-none">
                            <Zap className="w-64 h-64 text-cyan-500" />
                        </div>

                        <div className="relative z-10 w-full h-full">
                            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Bouw je eigen Tools</h2>
                            <p className="text-muted-foreground mb-8 text-lg">Weet je even niet wat je moet bouwen? Begin simpel.</p>

                            <div className="grid gap-6">
                                <div className="bg-muted/40 p-5 rounded-xl border border-border/50">
                                    <h3 className="text-sm font-bold font-heading text-cyan-400 uppercase tracking-wider mb-3">Voor de Les (Docenten)</h3>
                                    <ul className="space-y-3">
                                        <li className="text-sm font-medium text-foreground flex items-start gap-2"><ArrowRight className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" /> <span>Rubric calculator voor formatieve evaluatie.</span></li>
                                        <li className="text-sm font-medium text-foreground flex items-start gap-2"><ArrowRight className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" /> <span>Casus of Rollenspel scenario generator.</span></li>
                                        <li className="text-sm font-medium text-foreground flex items-start gap-2"><ArrowRight className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" /> <span>Verzuim/voortgang dashboard o.b.v CSV.</span></li>
                                    </ul>
                                </div>
                                <div className="bg-primary/5 p-5 rounded-xl border border-primary/10">
                                    <h3 className="text-sm font-bold font-heading text-blue-400 uppercase tracking-wider mb-3">Voor Privé (Hobby)</h3>
                                    <ul className="space-y-3">
                                        <li className="text-sm font-medium text-foreground flex items-start gap-2"><ArrowRight className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /> <span>Verzameling tracker (Pokémon, Zegels, Boeken).</span></li>
                                        <li className="text-sm font-medium text-foreground flex items-start gap-2"><ArrowRight className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /> <span>Bouw/Kosten calculator voor een verbouwing.</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

