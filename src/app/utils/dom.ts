export function delayedScrollTo(id: string, ms?: number) {
    ms = ms || 50;
    setTimeout(
        () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }),
        ms
    );
}