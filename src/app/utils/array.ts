export function intersection(a: any[], b: any[]) {
    return a.filter(v => b.includes(v));
}