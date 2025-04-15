import { cn } from "../lib/utils"

export function TypographyH1({ children, className }) {
    return (
        <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)}>
            {children}
        </h1>
    )
}

export function TypographyH2({ children, className }) {
    return (
        <h2 className={cn("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0", className)}>
            {children}
        </h2>
    )
}

export function TypographyH3({ children, className }) {
    return (
        <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)}>
            {children}
        </h3>
    )
}

export function TypographyH4({ children, className }) {
    return (
        <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)}>
            {children}
        </h4>
    )
}

export function TypographyP({ children, className }) {
    return (
        <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
            {children}
        </p>
    )
}

export function TypographyBlockquote({ children, className }) {
    return (
        <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
            "{children}"
        </blockquote>
    )
}

export function TypographyList({ className }) {
    return (
        <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}>
            <li>1st level of puns: 5 gold coins</li>
            <li>2nd level of jokes: 10 gold coins</li>
            <li>3rd level of one-liners : 20 gold coins</li>
        </ul>
    )
}

export function TypographyLead({ children, className }) {
    return (
        <p className={cn("text-lg text-muted-foreground", className)}>
            {children}
        </p>
    )
}

export function TypographyLarge({ children, className }) {
    return (
        <div className={cn("text-lg font-semibold", className)}>
            {children}
        </div>
    )
}

export function TypographySmall({ children, className }) {
    return (
        <small className={cn("text-sm font-medium leading-none", className)}>
            {children}
        </small>
    )
}

export function TypographyMuted({ children, className }) {
    return (
        <p className={cn("text-sm text-muted-foreground", className)}>
            {children}
        </p>
    )
}
