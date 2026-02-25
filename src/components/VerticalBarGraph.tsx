"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface VerticalBarGraphProps {
    value: number;
    maxValue: number;
    label?: string;
    prefix?: string;
    suffix?: string;
}

export default function VerticalBarGraph({
    value,
    maxValue,
    label = "Result",
    prefix = "",
    suffix = ""
}: VerticalBarGraphProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Small delay to ensure CSS animation triggers on mount
        const timer = setTimeout(() => setMounted(true), 100);
        return () => clearTimeout(timer);
    }, [value]);

    // Ensure safe percentage calculation
    const safeMax = Math.max(value, maxValue, 1);
    const percentage = Math.min(100, Math.max(0, (value / safeMax) * 100));

    const formatValue = (val: number) => {
        return new Intl.NumberFormat('en-IN', { maximumFractionDigits: 2 }).format(val);
    };

    return (
        <div className="w-full flex flex-col items-center justify-center p-6 bg-card rounded-xl border border-border shadow-sm">
            <h3 className="text-lg font-semibold mb-6 text-foreground">{label}</h3>

            {/* Container for the specific bar graph */}
            <div className="relative h-64 w-32 flex items-end justify-center rounded-lg bg-muted/50 border border-border overflow-hidden graph-bar-wrapper">

                {/* The visual bar */}
                <div
                    className={cn(
                        "w-full bg-primary absolute bottom-0 graph-fill rounded-t-sm",
                        !mounted ? "h-0 opacity-0" : "opacity-100"
                    )}
                    style={{ height: mounted ? `${percentage}%` : "0%" }}
                >
                    {/* Shine effect for premium feel */}
                    <div className="absolute top-0 inset-x-0 h-1/4 bg-gradient-to-b from-white/20 to-transparent"></div>
                </div>

            </div>

            <div className="mt-6 flex flex-col items-center">
                <span className="text-3xl font-bold tracking-tight text-foreground">
                    {prefix}{formatValue(value)}{suffix}
                </span>
                <span className="text-sm text-muted-foreground mt-1">
                    Max threshold: {prefix}{formatValue(safeMax)}{suffix}
                </span>
            </div>
        </div>
    );
}
