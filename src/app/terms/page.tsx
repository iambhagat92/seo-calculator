import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | CalcHub",
    description: "Terms of Service for using CalcHub platforms and tools.",
};

export default function TermsPage() {
    return (
        <div className="container max-w-4xl py-16 md:py-24 space-y-8">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Terms of Service</h1>
            <p className="text-muted-foreground">Last Updated: October 2026</p>

            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
                <h2 className="text-2xl font-bold mt-10">1. Acceptance of Terms</h2>
                <p className="leading-relaxed">
                    By accessing and using CalcHub ("Platform", "Site", "Service"), you accept and agree to be bound by the terms and provisions of this agreement.
                </p>

                <h2 className="text-2xl font-bold mt-8">2. Use License</h2>
                <p className="leading-relaxed">
                    Permission is granted to temporarily use the materials and calculators on CalcHub's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4 text-muted-foreground">
                    <li>You may not modify or copy the underlying site code.</li>
                    <li>You may not attempt to decompile or reverse engineer any software contained on CalcHub.</li>
                    <li>You may not remove any copyright or other proprietary notations from the materials.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8">3. Disclaimer of Liability</h2>
                <p className="leading-relaxed">
                    The educational calculators and tools on CalcHub are provided on an 'as is' basis. While we strive to ensure the formulas are mathematically sound and based on current industry standards, <strong>we make no warranties</strong>, expressed or implied, regarding the accuracy, reliability, or completeness of any calculation results. Use the site's results as an estimate only; formal financial or legal advice should be sought from licensed professionals.
                </p>

                <h2 className="text-2xl font-bold mt-8">4. Financial Disclaimer</h2>
                <p className="leading-relaxed">
                    CalcHub is not a registered financial advisor or broker. The results output by calculators (such as Dropshipping margins, SIP Step-ups, or Ad revenue estimators) do not constitute financial advice. All figures are illustrative and predictive based solely on the variables you enter.
                </p>

                <h2 className="text-2xl font-bold mt-8">5. Modifications</h2>
                <p className="leading-relaxed">
                    CalcHub may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                </p>

                <h2 className="text-2xl font-bold mt-8">6. Governing Law</h2>
                <p className="leading-relaxed">
                    These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                </p>
            </div>
        </div>
    );
}
