import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | CalcHub",
    description: "Learn more about CalcHub, our mission, and the team behind the ultimate SEO and digital economy calculator platform.",
};

export default function AboutPage() {
    return (
        <div className="container max-w-4xl py-16 md:py-24 space-y-8">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">About CalcHub</h1>

            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                    Welcome to CalcHub, the web's most comprehensive collection of specialized calculators built specifically for creators, students, and digital entrepreneurs in the Indian market.
                </p>

                <h2 className="text-2xl font-bold mt-10">Our Mission</h2>
                <p className="leading-relaxed">
                    Our mission is to democratize financial and analytical data. We believe that complex calculations—whether it's forecasting your YouTube ad revenue, predicting dropshipping profit margins, or plotting out a CGPA comeback—should be instantaneous, visual, and entirely free.
                </p>

                <h2 className="text-2xl font-bold mt-10">Why We Built This</h2>
                <p className="leading-relaxed">
                    We noticed that most online calculators are cluttered with intrusive ads, utilize outdated formulas, or are hidden behind paywalls. CalcHub was engineered from the ground up to be blazing fast, strictly accurate, and beautifully designed. Every calculation runs locally on your browser—meaning your data never leaves your device.
                </p>

                <h2 className="text-2xl font-bold mt-10">Our Commitment to Accuracy</h2>
                <p className="leading-relaxed">
                    Every tool on CalcHub is thoroughly tested against standard mathematical, financial, and analytical formulas. For platforms with dynamic variables (like YouTube RPMs or Instagram bonus rates), we use the latest baseline industry data to provide the most accurate estimates possible.
                </p>
            </div>
        </div>
    );
}
