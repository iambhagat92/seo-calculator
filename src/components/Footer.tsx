import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t bg-muted/40 text-muted-foreground mt-auto">
            <div className="container py-8 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-foreground">CalcHub</h3>
                        <p className="text-sm leading-loose">
                            Your comprehensive platform for SEO, digital economy, and financial calculators.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-foreground">Categories</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/calculators?category=ai-digital" className="hover:text-foreground transition-colors">AI & Digital Economy</Link>
                            </li>
                            <li>
                                <Link href="/calculators?category=indian-market" className="hover:text-foreground transition-colors">Indian Market</Link>
                            </li>
                            <li>
                                <Link href="/calculators?category=creator-economy" className="hover:text-foreground transition-colors">Creator Economy</Link>
                            </li>
                            <li>
                                <Link href="/calculators?category=student" className="hover:text-foreground transition-colors">Student Tools</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-foreground">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/calculators" className="hover:text-foreground transition-colors">All Calculators</Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-foreground transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-foreground">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t pt-8 flex items-center justify-center text-sm">
                    <p>© {currentYear} CalcHub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
