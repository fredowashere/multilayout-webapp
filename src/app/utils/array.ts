export function intersection(a: any[], b: any[]) {
    return a.filter(v => b.includes(v));
}

export function dedupe<T>(a: T[], key: string) {

    if (!a || !Array.isArray(a) || !key)
        return [];

    const freqMap: { [key: string | number]: T } = {};

    a.forEach((x: any) => freqMap[x[key]] = x);

    return Object.values(freqMap);
}