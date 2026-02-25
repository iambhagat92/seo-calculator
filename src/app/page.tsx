import { calculators } from "@/data/calculators";
import Link from "next/link";
import { ArrowRight, Calculator, TrendingUp, Users, GraduationCap, Zap, Briefcase } from "lucide-react";

export default function Home() {
  const featured = calculators.slice(0, 6);

  const categories = [
    { id: "ai-digital", name: "AI & Digital Economy", icon: <Zap className="w-5 h-5" />, count: calculators.filter(c => c.category === 'ai-digital').length },
    { id: "indian-market", name: "Indian Market Specific", icon: <TrendingUp className="w-5 h-5" />, count: calculators.filter(c => c.category === 'indian-market').length },
    { id: "creator-economy", name: "Creator Economy", icon: <Users className="w-5 h-5" />, count: calculators.filter(c => c.category === 'creator-economy').length },
    { id: "student", name: "Student Focused", icon: <GraduationCap className="w-5 h-5" />, count: calculators.filter(c => c.category === 'student').length },
    { id: "startup-business", name: "Startup & Online Business", icon: <Briefcase className="w-5 h-5" />, count: calculators.filter(c => c.category === 'startup-business').length },
    { id: "productivity", name: "Productivity Based", icon: <Calculator className="w-5 h-5" />, count: calculators.filter(c => c.category === 'productivity').length },
  ];

  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b bg-background pt-24 pb-32">
        <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-muted/50 via-muted/0 to-transparent pointer-events-none" />
        <div className="container relative z-10 flex flex-col items-center text-center space-y-8">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
            🎉 37+ Free Built-in Calculators
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl text-balance">
            The Ultimate <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">Calculator Platform</span> for Modern Needs
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl text-balance">
            From YouTube RPM to Dropshipping Margins and SIP step-ups. Get precise, instant, visual results with zero clutter.
          </p>

          <div className="w-full max-w-xl mt-8">
            <form action="/calculators" className="relative group flex items-center">
              <input
                type="text"
                name="q"
                placeholder="E.g., YouTube RPM, GST, SIP..."
                className="w-full h-14 pl-6 pr-32 rounded-full border-2 border-primary/20 bg-background text-lg shadow-sm focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all outline-none"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 rounded-full bg-primary text-primary-foreground px-6 font-semibold shadow hover:bg-primary/90 transition-colors flex items-center gap-2"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Category Grid Section */}
      <section className="py-20 bg-muted/30">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Explore by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Find exactly what you need organized logically.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(cat => (
              <Link key={cat.id} href={`/calculators?category=${cat.id}`} className="group relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition-all hover:border-primary/40 block">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </div>
                  <h3 className="font-bold text-lg">{cat.name}</h3>
                </div>
                <p className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  {cat.count} Calculators <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Calculators Section */}
      <section className="py-24">
        <div className="container space-y-12">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Trending Calculators</h2>
            <Link href="/calculators" className="text-primary font-semibold hover:underline flex items-center gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {featured.map(calc => (
              <Link key={calc.id} href={`/${calc.slug}`} className="flex flex-col p-8 space-y-4 bg-card rounded-2xl border shadow-sm hover:shadow-lg hover:border-primary/50 transition-all">
                <h3 className="text-2xl font-bold">{calc.title}</h3>
                <p className="text-muted-foreground line-clamp-2">{calc.content.intro}</p>
                <div className="pt-4 mt-auto">
                  <span className="inline-flex items-center justify-center rounded-md font-medium px-4 py-2 bg-muted text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors w-full sm:w-auto">
                    Calculate Now
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO internal link farm map - hidden logically but functionally present */}
      <section className="bg-muted py-16 border-t mt-auto">
        <div className="container">
          <h2 className="text-xl font-bold mb-6">Complete Calculator Directory</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm">
            {calculators.map(calc => (
              <Link key={calc.id} href={`/${calc.slug}`} className="text-muted-foreground hover:text-primary transition-colors hover:underline truncate">
                {calc.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
