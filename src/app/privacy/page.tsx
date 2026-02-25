import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | CalcHub",
    description: "Privacy Policy for CalcHub calculators and tools.",
};

export default function PrivacyPage() {
    return (
        <div className="container max-w-4xl py-16 md:py-24 space-y-8">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Privacy Policy</h1>
            <p className="text-muted-foreground">Last Updated: October 2023</p>

            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
                <h2 className="text-2xl font-bold mt-10">1. Information We Collect</h2>
                <p className="leading-relaxed">
                    At CalcHub, we prioritize your privacy. <strong>We do not collect, store, or transmit any of the data you input into our calculators.</strong> All calculations are performed mathematically on the client-side (right in your own browser). We do not save your financial figures, grades, or personal estimates to any database.
                </p>

                <h2 className="text-2xl font-bold mt-8">2. Analytics and Cookies</h2>
                <p className="leading-relaxed">
                    We may use standard, anonymized web analytics tools (like Google Analytics or Vercel Analytics) to understand which calculators are most popular, how users navigate the site, and what region our traffic comes from. This data is strictly aggregated and cannot be used to identify individuals.
                </p>

                <h2 className="text-2xl font-bold mt-8">3. Local Storage</h2>
                <p className="leading-relaxed">
                    We may use your browser's local storage solely to remember your UI preferences, such as your decision to use Light Mode or Dark Mode. This preference data never leaves your device.
                </p>

                <h2 className="text-2xl font-bold mt-8">4. Embedded Content and Links</h2>
                <p className="leading-relaxed">
                    Our website may contain links to third-party resources or documentation. If you click on a third-party link, you will be directed to that site. We strongly advise you to review the Privacy Policy of every site you visit.
                </p>

                <h2 className="text-2xl font-bold mt-8">5. Changes to This Policy</h2>
                <p className="leading-relaxed">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                </p>

                <h2 className="text-2xl font-bold mt-8">6. Contact Us</h2>
                <p className="leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us via our Contact Page.
                </p>
            </div>
        </div>
    );
}
