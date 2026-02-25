import { Metadata } from "next";
import { Mail, MapPin, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact Us | CalcHub",
    description: "Get in touch with the CalcHub team for feedback, feature requests, or support.",
};

export default function ContactPage() {
    return (
        <div className="container max-w-4xl py-16 md:py-24 space-y-12">
            <div className="space-y-4 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Contact Us</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    We'd love to hear from you. Whether you have a feature request, noticed a bug, or just want to say hello.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mt-12">
                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg text-primary">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Email Support</h3>
                            <p className="text-muted-foreground mt-1">Our team typically responds within 24 hours.</p>
                            <a href="mailto:support@calchub.example.com" className="text-primary font-medium hover:underline mt-2 block">
                                support@calchub.example.com
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg text-primary">
                            <MessageSquare className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Calculator Requests</h3>
                            <p className="text-muted-foreground mt-1">Need a specific calculator we don't have yet? Let us know and we might build it!</p>
                            <a href="mailto:ideas@calchub.example.com" className="text-primary font-medium hover:underline mt-2 block">
                                ideas@calchub.example.com
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg text-primary">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Headquarters</h3>
                            <p className="text-muted-foreground mt-1">
                                CalcHub Inc.<br />
                                Bangalore, Karnataka<br />
                                India
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-card border rounded-2xl p-8 shadow-sm">
                    <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                    <form className="space-y-4" action={() => { }}>
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">Name</label>
                            <input id="name" type="text" className="w-full p-3 rounded-lg border bg-transparent" placeholder="Your name" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <input id="email" type="email" className="w-full p-3 rounded-lg border bg-transparent" placeholder="you@example.com" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">Message</label>
                            <textarea id="message" rows={4} className="w-full p-3 rounded-lg border bg-transparent" placeholder="How can we help?"></textarea>
                        </div>
                        <button type="button" className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors">
                            Send Message
                        </button>
                        <p className="text-xs text-center text-muted-foreground mt-4">
                            * This is a demonstration form.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
