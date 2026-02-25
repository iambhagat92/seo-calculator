import { calculators } from "@/data/calculators";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "All SEO Calculators - CalcHub",
    description: "Browse our complete directory of 37 free, high-performance calculators for Indian creators, students, and businesses.",
};

export default function CalculatorsListingPage({
    searchParams
}: {
    searchParams: { category?: string; q?: string }
}) {
    let filteredList = calculators;

    if (searchParams.category) {
        filteredList = filteredList.filter(c => c.category === searchParams.category);
    }

    if (searchParams.q) {
        const q = searchParams.q.toLowerCase();
        filteredList = filteredList.filter(c =>
            c.title.toLowerCase().includes(q) ||
            c.content.intro.toLowerCase().includes(q) ||
            c.primaryKeyword.toLowerCase().includes(q)
        );
    }

    const categoryLabels: Record<string, string> = {
        "ai-digital": "AI & Digital Economy",
        "indian-market": "Indian Market Specific",
        "student": "Student Focused",
        "creator-economy": "Creator Economy",
        "startup-business": "Startup & Online Business",
        "productivity": "Productivity Based"
    };

    return (
        <div className="container py-12 md:py-20 space-y-12">
            <section className="text-center space-y-4 max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Browse All Calculators</h1>
                <p className="text-lg text-muted-foreground">
                    Find the exact tool you need from our comprehensive suite of 37 highly specialized calculators.
                </p>
            </section>

            {/* Filter visual feedback could go here */}

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredList.length > 0 ? (
                    filteredList.map((calc) => (
                        <Link
                            href={`/${calc.slug}`}
                            key={calc.id}
                            className="group flex flex-col p-6 space-y-3 bg-card rounded-xl border border-border shadow-sm hover:shadow-md hover:border-primary/50 transition-all"
                        >
                            <div className="flex items-start justify-between">
                                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                                    {categoryLabels[calc.category] || "Tool"}
                                </span>
                            </div>
                            <h2 className="text-xl font-bold group-hover:text-primary transition-colors">
                                {calc.title}
                            </h2>
                            <p className="text-sm text-muted-foreground line-clamp-3">
                                {calc.content.intro}
                            </p>
                            <div className="pt-4 mt-auto">
                                <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Open Calculator &rarr;
                                </span>
                            </div>
                        </Link>
                    ))
                ) : (
                    <div className="col-span-full py-12 text-center text-muted-foreground">
                        No calculators found matching your criteria. Try adjusting your search or filters.
                    </div>
                )}
            </section>
        </div>
    );
}
