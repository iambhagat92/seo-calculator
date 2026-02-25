import { calculators } from "@/data/calculators";
import CalculatorLayout from "@/components/CalculatorLayout";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PageProps {
    params: Promise<{ slug: string }>;
}

// Ensure statically generated pages at build time for max SEO
export async function generateStaticParams() {
    return calculators.map((calc) => ({
        slug: calc.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const calc = calculators.find((c) => c.slug === slug);

    if (!calc) {
        return {
            title: "Calculator Not Found",
        };
    }

    // Schema.org structured data for SEO (FAQ & Breadcrumbs)
    const schemaMarkup = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://calchub.example.com/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Calculators",
                        "item": "https://calchub.example.com/calculators"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": calc.title,
                        "item": `https://calchub.example.com/${calc.slug}`
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": `How precise is the ${calc.title}?`,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The calculations are based on standard mathematical formulas and provide accurate estimates based on the exact numbers you input. However, real-world variables may slightly alter final outcomes."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is my input data saved somewhere?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. All calculations happen entirely in your browser. We do not store, send, or track any of your financial data entered into this tool."
                        }
                    }
                ]
            }
        ]
    };

    return {
        title: calc.seoTitle,
        description: calc.metaDescription,
        keywords: [calc.primaryKeyword, calc.category.replace("-", " ")],
        alternates: {
            canonical: `https://calchub.example.com/${calc.slug}`
        },
        // We inject the JSON-LD schema into the head directly using the specific metadata mechanism Next uses if required, 
        // but Next 13+ metadata doesn't natively serialize schemas well through the export. 
        // We will inject a `<script>` tag in the component itself for guaranteed correctness.
    };
}

export default async function DynamicCalculatorPage({ params }: PageProps) {
    const { slug } = await params;
    const calc = calculators.find((c) => c.slug === slug);

    if (!calc) {
        notFound();
    }

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://calchub.example.com/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Calculators",
                        "item": "https://calchub.example.com/calculators"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": calc.title,
                        "item": `https://calchub.example.com/${calc.slug}`
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": `How precise is the ${calc.title}?`,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The calculations are based on standard mathematical formulas and provide accurate estimates based on the exact numbers you input. However, real-world variables may slightly alter final outcomes."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <div className="container py-10 md:py-16">
                <CalculatorLayout calculatorId={calc.id} />
            </div>
        </>
    );
}
