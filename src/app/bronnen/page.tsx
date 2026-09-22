import SectionDivider from "@/components/SectionDivider";
import PageNavigation from "@/components/PageNavigation";
import { BookMarked, GraduationCap, Library, FileText, Code2, Users, AlertTriangle } from "lucide-react";

export default function BronnenPage() {
    return (
        <div className="flex flex-col gap-16 pb-24">
            {/* Hero */}
            <section className="relative pt-12 text-center md:text-left">
                <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
                    Literatuurverantwoording
                </span>
                <h1 className="mb-6 font-heading text-5xl font-extrabold leading-tight md:text-7xl">
                    Bronnen & <span className="text-primary">APA7</span>
                </h1>
                <p className="max-w-2xl text-xl text-muted-foreground leading-relaxed">
                    Een compleet overzicht van de wetenschappelijke literatuur, onderwijsmodellen en praktijkrichtlijnen 
                    die de theoretische basis vormen voor de producten in dit portfolio.
                </p>
            </section>

            <SectionDivider color="fill-primary/5" />

            {/* Literatuur per Vak */}
            <section className="grid gap-8">
                
                {/* 1. Digitale Geletterdheid */}
                <div className="bg-card p-8 rounded-3xl border border-border">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center">
                            <BookMarked className="w-6 h-6 text-rose-500" />
                        </div>
                        <h2 className="text-2xl font-bold font-heading text-foreground">Digitale Geletterdheid</h2>
                    </div>
                    <ul className="space-y-4 text-muted-foreground pl-4 border-l-2 border-rose-500/20">
                        <li>
                            <strong>Kennisrotonde. (2021).</strong> Hoe kan (generatieve) kunstmatige intelligentie worden ingezet voor feedback in het onderwijs?
                        </li>
                        <li>
                            <strong>Npuls, & Vereniging Hogescholen. (2023).</strong> AI-GO: Raamwerk voor verantwoord gebruik van AI in het hoger onderwijs.
                        </li>
                        <li>
                            <strong>Pijpers, R. (2025).</strong> Digitale geletterdheid. Geraadpleegd van https://www.kennisnet.nl/digitale-geletterdheid/
                        </li>
                    </ul>
                </div>

                {/* 2. Digitale Didactiek */}
                <div className="bg-card p-8 rounded-3xl border border-border">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center">
                            <Library className="w-6 h-6 text-teal-500" />
                        </div>
                        <h2 className="text-2xl font-bold font-heading text-foreground">Digitale Didactiek</h2>
                    </div>
                    <ul className="space-y-4 text-muted-foreground pl-4 border-l-2 border-teal-500/20">
                        <li>
                            <strong>Bonache, H., Lorenzo, M., & Rosales, C. (2026).</strong> Strategies to optimise active learning and reduce social loafing. <em>Innovations in Education & Teaching International, 63</em>(1), 179-192.
                        </li>
                        <li>
                            <strong>Fadillah, S. M., & Ha, M. (2024).</strong> Using rubrics to enhance accuracy of peer assessment and self-judgment in biology learning. <em>Asia-Pacific Science Education, 10</em>(2), 265-288.
                        </li>
                        <li>
                            <strong>Gielen, S., Tops, L., Dochy, F., Onghena, P., & Smeets, S. (2010).</strong> A comparative study of peer and teacher feedback. <em>British Educational Research Journal, 36</em>(1), 143-162.
                        </li>
                        <li>
                            <strong>Johnson, D. W., & Johnson, R. T. (2009).</strong> An educational psychology success story: Social interdependence theory and cooperative learning. <em>Educational Researcher, 38</em>(5), 365-379.
                        </li>
                        <li>
                            <strong>Koehler, M., & Mishra, P. (2009).</strong> What is technological pedagogical content knowledge (TPACK)? <em>Contemporary Issues in Technology and Teacher Education, 9</em>(1), 60-70.
                        </li>
                        <li>
                            <strong>Kolb, L. (2017).</strong> Learning first, technology second: The educator's guide to designing authentic lessons. <em>International Society for Technology in Education.</em>
                        </li>
                        <li>
                            <strong>Lipnevich, A. A., et al. (2025).</strong> Unheard and unused: Why students reject teacher and peer feedback. <em>Frontiers in Education, 10</em>.
                        </li>
                    </ul>
                </div>

                {/* 3. Literatuurstudie */}
                <div className="bg-card p-8 rounded-3xl border border-border">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                            <FileText className="w-6 h-6 text-blue-500" />
                        </div>
                        <h2 className="text-2xl font-bold font-heading text-foreground">Literatuurstudie</h2>
                    </div>
                    <ul className="space-y-4 text-muted-foreground pl-4 border-l-2 border-blue-500/20">
                        <li>
                            <strong>Anthonysamy, L., Koo, A.-C., & Hew, S.-H. (2020).</strong> Self-regulated learning strategies and non-academic outcomes in higher education blended learning environments: A one decade review. <em>Education and Information Technologies, 25</em>(5), 3677-3704.
                        </li>
                        <li>
                            <strong>Banihashem, S. K., Bond, M., Bergdahl, N., Drachsler, H., & Jandric, P. (2025).</strong> A systematic mapping review at the intersection of artificial intelligence and self-regulated learning. <em>International Journal of Educational Technology in Higher Education, 22</em>, Article 50.
                        </li>
                        <li>
                            <strong>Bobula, M. (2024).</strong> Generative artificial intelligence (AI) in higher education: A comprehensive review of challenges, opportunities, and implications. <em>Journal of Learning Development in Higher Education, 30</em>, Article 155592.
                        </li>
                        <li>
                            <strong>Dahri, Z. H., Vighio, M. S., Ali, N., & Yahaya, N. (2024).</strong> Extended TAM-based acceptance of AI-powered ChatGPT for supporting metacognitive self-regulated learning in education: A mixed-methods study. <em>Heliyon, 10</em>(8), e29317.
                        </li>
                        <li>
                            <strong>Petridou, E., & Lao, L. (2024).</strong> Identifying challenges and best practices for implementing AI additional qualifications in vocational and continuing education: A mixed methods analysis. <em>International Journal of Lifelong Education, 43</em>(4), 385-400.
                        </li>
                        <li>
                            <strong>Richardson, J. C., Caskurlu, S., & Castellanos-Reyes, D. (2022).</strong> Instructors' conceptualization and implementation of scaffolding in online higher education courses. <em>Journal of Computing in Higher Education, 34</em>(1), 242-279.
                        </li>
                        <li>
                            <strong>Risko, E. F., & Gilbert, S. J. (2016).</strong> Cognitive offloading. <em>Trends in Cognitive Sciences, 20</em>(9), 676-688.
                        </li>
                        <li>
                            <strong>Sardi, J., Darmansyah, C., Candra, O., Yuliana, D. F., Habibullah, Y., Yanto, D. T. P., & Eliza, F. (2025).</strong> How generative AI influences students' self-regulated learning and critical thinking skills? A systematic review. <em>International Journal of Engineering Pedagogy, 15</em>(1), 94-108.
                        </li>
                        <li>
                            <strong>Sol, Y., & Stokking, K. (2023).</strong> Metacognitieve kennis en vaardigheden, zelfregulatie, en leervaardigheden. <em>SLO.</em>
                        </li>
                        <li>
                            <strong>Tai, J., Ajjawi, R., Boud, D., Dawson, P., & Panadero, E. (2018).</strong> Developing evaluative judgement: enabling students to make decisions about the quality of work. <em>Higher Education, 76</em>(3), 467-481.
                        </li>
                        <li>
                            <strong>Valencia-Vallejo, N., López-Vargas, O., & Sanabria-Rodríguez, L. (2019).</strong> Effect of a metacognitive scaffolding on self-efficacy, metacognition, and achievement in e-learning environments. <em>Knowledge Management & E-Learning, 11</em>(1), 1-19.
                        </li>
                        <li>
                            <strong>Xu, X., Qiao, L., Cheng, N., Liu, H., & Zhao, W. (2025).</strong> Enhancing self-regulated learning and learning experience in generative AI environments: The critical role of metacognitive support. <em>British Journal of Educational Technology.</em>
                        </li>
                    </ul>
                </div>

                {/* 4. Gepersonaliseerd Leren (GOAI) */}
                <div className="bg-card p-8 rounded-3xl border border-border">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center">
                            <GraduationCap className="w-6 h-6 text-indigo-500" />
                        </div>
                        <h2 className="text-2xl font-bold font-heading text-foreground">Gepersonaliseerd Leren (GOAI)</h2>
                    </div>
                    <ul className="space-y-4 text-muted-foreground pl-4 border-l-2 border-indigo-500/20">
                        <li>
                            <strong>Bender, E. M., Gebru, T., McMillan-Major, A., & Shmitchell, S. (2021).</strong> On the dangers of stochastic parrots: Can language models be too big? <em>Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency</em>, 610-623.
                        </li>
                        <li>
                            <strong>Biggs, J., & Tang, C. (2011).</strong> Teaching for quality learning at university (4e ed.). <em>Open University Press.</em>
                        </li>
                        <li>
                            <strong>Dawson, P. (2021).</strong> Defending assessment security in a digital world: Preventing e-cheating and supporting academic integrity in higher education. <em>Routledge.</em>
                        </li>
                        <li>
                            <strong>Holmes, W., Persson, J., Chounta, I.-A., Wasson, B., & Dimitrova, V. (2022).</strong> Artificial intelligence and education: A critical view through the lens of human rights, democracy and the rule of law. <em>Council of Europe.</em>
                        </li>
                        <li>
                            <strong>Jisc. (2023, 6 september).</strong> Artificial intelligence (AI) in tertiary education.
                        </li>
                        <li>
                            <strong>Krathwohl, D. R. (2002).</strong> A revision of Bloom's taxonomy: An overview. <em>Theory Into Practice, 41</em>(4), 212-218.
                        </li>
                        <li>
                            <strong>Lodge, J., Howard, S., Bearman, M. L., Dawson, P., & Associates. (2023).</strong> Assessment reform for the age of artificial intelligence. <em>Tertiary Education Quality and Standards Agency.</em>
                        </li>
                        <li>
                            <strong>Risko, E. F., & Gilbert, S. J. (2016).</strong> Cognitive offloading. <em>Trends in Cognitive Sciences, 20</em>(9), 676-688.
                        </li>
                        <li>
                            <strong>Tai, J., Ajjawi, R., Boud, D., Dawson, P., & Panadero, E. (2018).</strong> Developing evaluative judgement: Enabling students to make decisions about the quality of work. <em>Higher Education, 76</em>(3), 467-481.
                        </li>
                        <li>
                            <strong>Villarroel, V., Bloxham, S., Bruna, D., Bruna, C., & Herrera-Seda, C. (2018).</strong> Authentic assessment: Creating a blueprint for course design. <em>Assessment & Evaluation in Higher Education, 43</em>(5), 840-854.
                        </li>
                        <li>
                            <strong>Werkgroep APA. (2024).</strong> De APA-richtlijnen uitgelegd: Generatieve AI (Versie 1.0). <em>SURF.</em>
                        </li>
                    </ul>
                </div>

                {/* 5. Ethische Dilemma's */}
                <div className="bg-card p-8 rounded-3xl border border-border">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                            <AlertTriangle className="w-6 h-6 text-purple-500" />
                        </div>
                        <h2 className="text-2xl font-bold font-heading text-foreground">Ethische Dilemma's</h2>
                    </div>
                    <ul className="space-y-4 text-muted-foreground pl-4 border-l-2 border-purple-500/20">
                        <li>
                            <strong>Korthagen, F., & Vasalos, A. (2005).</strong> Levels in reflection: Core reflection as a means to enhance professional growth. <em>Teachers and Teaching, 11</em>(1), 47-71. https://doi.org/10.1080/1354060042000337093
                        </li>
                        <li>
                            <strong>Risko, E. F., & Gilbert, S. J. (2016).</strong> Cognitive offloading. <em>Trends in Cognitive Sciences, 20</em>(9), 676-688. https://doi.org/10.1016/j.tics.2016.07.002
                        </li>
                        <li>
                            <strong>Tai, J., Ajjawi, R., Boud, D., Dawson, P., & Panadero, E. (2018).</strong> Developing evaluative judgement: enabling students to make decisions about the quality of work. <em>Higher Education, 76</em>(3), 467-481. https://doi.org/10.1007/s10734-017-0220-3
                        </li>
                    </ul>
                </div>

                {/* 6. Creëren met Technologie */}
                <div className="bg-card p-8 rounded-3xl border border-border">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                            <Code2 className="w-6 h-6 text-emerald-500" />
                        </div>
                        <h2 className="text-2xl font-bold font-heading text-foreground">Creëren met Technologie</h2>
                    </div>
                    <ul className="space-y-4 text-muted-foreground pl-4 border-l-2 border-emerald-500/20">
                        <li>
                            <strong>Anderson, L. W., & Krathwohl, D. R. (2001).</strong> A taxonomy for learning, teaching, and assessing: A revision of Bloom's taxonomy of educational objectives. <em>Longman.</em>
                        </li>
                        <li>
                            <strong>Kajamaa, A., Kumpulainen, K., & Olkinuora, H.-R. (2020).</strong> Teacher interventions in students' collaborative work in a technology-rich educational makerspace. <em>British Journal of Educational Technology, 51</em>(2), 371-386. https://doi.org/10.1111/bjet.12837
                        </li>
                        <li>
                            <strong>Papert, S. (1980).</strong> Mindstorms: Children, computers, and powerful ideas. <em>Basic Books.</em>
                        </li>
                        <li>
                            <strong>Wing, J. M. (2006).</strong> Computational thinking. <em>Communications of the ACM, 49</em>(3), 33-35. https://doi.org/10.1145/1118168.1118215
                        </li>
                    </ul>
                </div>

                {/* 7. Kritisch Denken */}
                <div className="bg-card p-8 rounded-3xl border border-border">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                            <Users className="w-6 h-6 text-orange-500" />
                        </div>
                        <h2 className="text-2xl font-bold font-heading text-foreground">Kritisch Denken</h2>
                    </div>
                    <ul className="space-y-4 text-muted-foreground pl-4 border-l-2 border-orange-500/20">
                        <li>
                            <em>Voor dit onderdeel is voornamelijk gebruikgemaakt van de overkoepelende theorieën uit de literatuurstudie (zoals Evaluative Judgement en Automation Bias).</em>
                        </li>
                    </ul>
                </div>

                {/* 8. Vibecoding */}
                <div className="bg-card p-8 rounded-3xl border border-border">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center">
                            <Code2 className="w-6 h-6 text-cyan-500" />
                        </div>
                        <h2 className="text-2xl font-bold font-heading text-foreground">Vibecoding</h2>
                    </div>
                    <ul className="space-y-4 text-muted-foreground pl-4 border-l-2 border-cyan-500/20">
                        <li>
                            <em>De literatuurverantwoording voor de workshop Vibecoding overlapt volledig met het theoretisch kader beschreven in "Creëren met Technologie" (Papert, Wing, Kajamaa).</em>
                        </li>
                    </ul>
                </div>

            </section>

            {/* Navigation */}
            <PageNavigation
                prev={{ name: "Vibecoding", href: "/vibecoding" }}
                next={{ name: "Begrippenlijst", href: "/begrippenlijst" }}
            />
        </div>
    );
}
