"use client";

import React, { useState } from "react";
import { CalculatorSchema } from "@/data/calculators";
import VerticalBarGraph from "./VerticalBarGraph";
import { Info, CheckCircle2, AlertOctagon, HelpCircle } from "lucide-react";

interface CalculatorLayoutProps {
    calculator: CalculatorSchema;
}

export default function CalculatorLayout({ calculator }: CalculatorLayoutProps) {
    // Initialize state with default values
    const [inputs, setInputs] = useState<Record<string, number>>(() => {
        const initial: Record<string, number> = {};
        calculator.fields.forEach(field => {
            initial[field.id] = field.defaultValue ?? 0;
        });
        return initial;
    });

    const handleInputChange = (id: string, value: string) => {
        setInputs(prev => ({
            ...prev,
            [id]: value === "" ? 0 : Number(value)
        }));
    };

    const handleReset = () => {
        const resetValues: Record<string, number> = {};
        calculator.fields.forEach(field => {
            resetValues[field.id] = field.defaultValue ?? 0;
        });
        setInputs(resetValues);
    };

    const result = calculator.calculate(inputs);

    // Calculate a reasonable max value for the graph. Usually 2x the result or a fixed number if result is 0
    const maxValue = result > 0 ? result * 1.5 : 100;

    return (
        <article className="max-w-4xl mx-auto space-y-12 pb-16">

            {/* Header Area */}
            <section className="text-center space-y-4 pt-8">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    {calculator.title}
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {calculator.content.intro}
                </p>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Input Form Area */}
                <section className="bg-card border border-border rounded-xl p-6 shadow-sm">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold border-b pb-2">Inputs</h2>

                        {calculator.fields.map((field) => (
                            <div key={field.id} className="space-y-2">
                                <label htmlFor={field.id} className="text-sm font-semibold flex justify-between">
                                    <span>{field.label}</span>
                                    {field.type === 'currency' && <span className="text-muted-foreground text-xs">INR (₹)</span>}
                                    {field.type === 'percentage' && <span className="text-muted-foreground text-xs">%</span>}
                                </label>
                                <div className="relative">
                                    {field.type === 'currency' && (
                                        <span className="absolute left-3 top-2.5 text-muted-foreground font-medium">₹</span>
                                    )}
                                    <input
                                        id={field.id}
                                        type="number"
                                        value={inputs[field.id] || ""}
                                        onChange={(e) => handleInputChange(field.id, e.target.value)}
                                        min={field.min}
                                        max={field.max}
                                        step={field.step ?? 1}
                                        className={`flex h-11 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ${field.type === 'currency' ? 'pl-8' : ''}`}
                                        placeholder={field.placeholder ?? "0"}
                                    />
                                    {field.type === 'percentage' && (
                                        <span className="absolute right-3 top-2.5 text-muted-foreground font-medium">%</span>
                                    )}
                                </div>
                            </div>
                        ))}

                        <div className="pt-4 flex gap-4">
                            {/* Note: In React, state updates instantly on change, so "Calculate" is purely visual/UX placebo. We use it to trigger animations if needed, or simply let it be an interactive feel. */}
                            <button
                                onClick={() => { /* State is already updated, just for purely UX feel */ }}
                                className="flex-1 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-11 px-8"
                            >
                                Calculate Now
                            </button>
                            <button
                                onClick={handleReset}
                                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-11 px-6"
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                </section>

                {/* Output Graph Area */}
                <section className="sticky top-24">
                    <VerticalBarGraph
                        value={result}
                        maxValue={maxValue}
                        label={calculator.resultLabel}
                        prefix={calculator.resultPrefix}
                        suffix={calculator.resultSuffix}
                    />
                </section>
            </div>

            {/* SEO & Educational Content Area */}
            <section className="space-y-10 border-t pt-10">

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <Info className="w-6 h-6 text-primary" />
                            Formula & Logic
                        </h2>
                        <div className="bg-muted/50 p-4 rounded-lg border">
                            <code className="text-lg font-mono font-semibold text-primary">{calculator.content.formula}</code>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {calculator.content.formulaExplanation}
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <CheckCircle2 className="w-6 h-6 text-green-500" />
                            Example Walkthrough
                        </h2>
                        <div className="bg-card border p-4 rounded-lg shadow-sm">
                            <p className="leading-relaxed whitespace-pre-line text-muted-foreground">
                                {calculator.content.example}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4 border rounded-xl p-6 bg-card box-border">
                        <h3 className="text-xl font-bold mb-4">Top Use Cases</h3>
                        <ul className="space-y-3">
                            {calculator.content.useCases.map((useCase, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                    <span className="text-muted-foreground">{useCase}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4 border rounded-xl p-6 bg-destructive/5 border-destructive/20 box-border">
                        <h3 className="text-xl font-bold text-destructive/90 flex items-center gap-2 mb-4">
                            <AlertOctagon className="w-5 h-5" />
                            Common Mistakes To Avoid
                        </h3>
                        <ul className="space-y-3">
                            {calculator.content.commonMistakes.map((mistake, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-destructive/60 mt-2 shrink-0" />
                                    <span className="text-muted-foreground">{mistake}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Schema / FAQ Block */}
            <section className="border-t pt-10 space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                    <HelpCircle className="w-8 h-8 text-primary" />
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    <div className="border rounded-lg p-5">
                        <h3 className="font-semibold text-lg mb-2">How precise is the {calculator.title}?</h3>
                        <p className="text-muted-foreground">The calculations are based on standard mathematical formulas and provide accurate estimates based on the exact numbers you input. However, real-world variables (like platform policy changes or market fluctuations) may slightly alter final outcomes.</p>
                    </div>
                    <div className="border rounded-lg p-5">
                        <h3 className="font-semibold text-lg mb-2">Is my input data saved somewhere?</h3>
                        <p className="text-muted-foreground">No. All calculations happen entirely in your browser using Client-Side JavaScript. We do not store, send, or track any of your financial data entered into this tool.</p>
                    </div>
                </div>
            </section>

        </article>
    );
}
