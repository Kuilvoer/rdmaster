import SectionDivider from "@/components/SectionDivider";
import PageNavigation from "@/components/PageNavigation";
import { BookA, Search, BookOpen } from "lucide-react";

export default function BegrippenlijstPage() {
    const concepts = [
        {
            term: "AI-Geletterdheid",
            definition: "Het kritisch kunnen inzetten van AI: weten wat het kan, wat de beperkingen zijn, en wanneer je het bewust níet inzet. Verder kijken dan alleen 'knopvaardigheid'."
        },
        {
            term: "Assessment Security",
            definition: "Het garanderen van de betrouwbaarheid en validiteit van examinering in het AI-tijdperk. De zekerheid dat een diploma daadwerkelijk de capaciteiten van de student bewijst (Dawson, 2021)."
        },
        {
            term: "Automation Bias",
            definition: "De menselijke neiging om output van geautomatiseerde systemen (zoals AI) blind te vertrouwen en kritische controle over te slaan."
        },
        {
            term: "Cognitive Offloading",
            definition: "Het uitbesteden van cognitieve processen aan een externe tool. Voordelig voor routinetaken (efficiëntie), maar schadelijk als we het leren of nadenken zelf uitbesteden (verlies van mentale modellen)."
        },
        {
            term: "Computational Thinking",
            definition: "Het vermogen om problemen op een logische, gestructureerde manier op te breken en te formuleren, zodat een computer (of AI) ze kan uitvoeren."
        },
        {
            term: "Constructionisme",
            definition: "Een leertheorie van Seymour Papert (1980) die stelt dat mensen het beste leren door actief en tastbaar dingen te maken (creëren) die persoonlijke betekenis hebben."
        },
        {
            term: "Constructive Alignment",
            definition: "Een onderwijskundig principe van John Biggs: het afstemmen van leerdoelen, leeractiviteiten en toetsing op elkaar, zodat ze logisch en consistent verbonden zijn."
        },
        {
            term: "De Delta (Δ)",
            definition: "In AI-toetsing: het verschil tussen de initiële, ruwe AI-output en de menselijke, strategische correctie die de student daarna uitvoert. Dit toont de waarde-toevoeging van de student."
        },
        {
            term: "Epistemologische Onafhankelijkheid",
            definition: "Het vermogen en zelfvertrouwen van de student om zélf kennis op te bouwen en te verantwoorden, zonder blind afhankelijk te worden van externe (AI) systemen of orakels."
        },
        {
            term: "Evaluative Judgement",
            definition: "Het vermogen om de kwaliteit van een werk (van jezelf, van anderen, of van een AI) kritisch te beoordelen aan de hand van bepaalde criteria en theorieën."
        },
        {
            term: "Formatief & Summatief Toetsen",
            definition: "Het balanceren tussen veilig mogen experimenteren en falen met AI tijdens het leerproces (formatief), en de harde controle op daadwerkelijk eigen kunnen aan het einde (summatief)."
        },
        {
            term: "Human-in-the-Loop",
            definition: "Het principe waarbij technologie (AI) een proces ondersteunt, maar een mens altijd actief betrokken blijft, het overzicht houdt en de uiteindelijke beslissing of verantwoordelijkheid neemt."
        },
        {
            term: "Iteratief Ontwerpen (Prutsen)",
            definition: "Het stap-voor-stap bouwen, testen en debuggen. In de context van Vibecoding: het vermogen om een foutieve output (error) niet te zien als falen, maar als testdata om de prompt te verbeteren."
        },
        {
            term: "Knopvaardigheid",
            definition: "De oppervlakkige vaardigheid om een tool te bedienen (weten wáár je moet klikken), zonder de achterliggende processen of theorie te begrijpen (niet weten wáárom je klikt)."
        },
        {
            term: "Metacognitie",
            definition: "'Denken over denken'. Het vermogen om je eigen leerproces te plannen, te monitoren en te evalueren. Cruciaal bij het gebruik van AI om niet passief te worden."
        },
        {
            term: "Orchestrating",
            definition: "De rol van de docent als regisseur van de leeromgeving. In plaats van alle antwoorden te geven, begeleidt en ontwerpt de docent het leerproces (en reguleert frustratie)."
        },
        {
            term: "Scaffolding",
            definition: "'In de steigers zetten'. Het bieden van tijdelijke ondersteuning in het leerproces, die langzaam wordt afgebouwd naarmate de lerende competenter wordt."
        },
        {
            term: "TPACK",
            definition: "Een model (Technological Pedagogical Content Knowledge) dat beschrijft welke kennis een docent nodig heeft om technologie effectief in te zetten voor het leren: de balans tussen Vakinhoud, Didactiek en Techniek."
        },
        {
            term: "Valse Positieven (False Positives)",
            definition: "Wanneer AI-detectiesoftware authentiek menselijk werk onterecht als AI-gegenereerd markeert, wat kan leiden tot ernstige schade aan de vertrouwensrelatie tussen docent en student."
        }
    ];

    return (
        <div className="flex flex-col gap-16 pb-24">
            {/* Hero */}
            <section className="relative pt-12 text-center md:text-left overflow-hidden">
                <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-muted blur-[100px] opacity-50" />
                <span className="mb-4 inline-block rounded-full bg-muted px-4 py-1.5 text-sm font-bold text-muted-foreground">
                    Naslagwerk
                </span>
                <h1 className="mb-6 font-heading text-5xl font-extrabold leading-tight md:text-7xl">
                    De <span className="text-muted-foreground">Begrippenlijst</span>
                </h1>
                <p className="max-w-2xl text-xl text-muted-foreground leading-relaxed">
                    Een overzicht van de belangrijkste didactische, technologische en psychologische kernbegrippen die als een rode draad door dit portfolio en de master lopen.
                </p>
            </section>

            {/* Dictionary List */}
            <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {concepts.map((concept, index) => (
                    <div key={index} className="bg-card p-6 md:p-8 rounded-3xl border border-border hover:border-foreground/30 transition-all group flex flex-col">
                        <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-4 group-hover:bg-foreground group-hover:text-background transition-colors text-muted-foreground">
                            <BookA className="w-5 h-5" />
                        </div>
                        <h3 className="font-heading text-xl font-bold mb-3 text-foreground">{concept.term}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                            {concept.definition}
                        </p>
                    </div>
                ))}
            </section>

            <SectionDivider color="fill-muted/20" />

            {/* Navigation */}
            <PageNavigation
                prev={{ name: "Bronnen", href: "/bronnen" }}
                next={{ name: "Home", href: "/" }}
            />
        </div>
    );
}

