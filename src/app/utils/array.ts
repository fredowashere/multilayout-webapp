export function intersection(a: any[], b: any[]) {
    return a.filter(v => b.includes(v));
}

export function dedupe(a: any[], key: string | number) {

    if (!a || !Array.isArray(a) || !key)
        return [];

    const freqMap: { [key: string | number]: any } = {};

    a.forEach(x => freqMap[x[key]] = x);

    return Object.values(freqMap);
}