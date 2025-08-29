"use client";

import { BlockMath, InlineMath } from 'react-katex';
import { cn } from "@/lib/utils";

interface FormulaProps {
  children?: string;
  math?: string;
  className?: string;
  block?: boolean;
}

export function Formula({ children, math, className, block = false }: FormulaProps) {
  const formula = math || children || "";
  
  if (block) {
    return (
      <div className={cn("my-4 overflow-x-auto", className)}>
        <BlockMath math={formula} />
      </div>
    );
  }
  
  return (
    <span className={className}>
      <InlineMath math={formula} />
    </span>
  );
}

interface DefinitionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Definition({ title, children, className }: DefinitionProps) {
  return (
    <div className={cn("p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/20 rounded-r-lg", className)}>
      <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">{title}</h4>
      <div className="text-sm text-blue-900 dark:text-blue-100">
        {children}
      </div>
    </div>
  );
}

interface ExampleProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Example({ title, children, className }: ExampleProps) {
  return (
    <div className={cn("p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-950/20 rounded-r-lg", className)}>
      <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">{title}</h4>
      <div className="text-sm text-green-900 dark:text-green-100">
        {children}
      </div>
    </div>
  );
}

interface SummaryProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Summary({ title = "Riassunto", children, className }: SummaryProps) {
  return (
    <div className={cn("p-4 border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-950/20 rounded-r-lg", className)}>
      <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">{title}</h4>
      <div className="text-sm text-orange-900 dark:text-orange-100">
        {children}
      </div>
    </div>
  );
}