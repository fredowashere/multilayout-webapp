export function resolve(path: string, obj = self, separator = '.') {
    const properties = path.split(separator);
    return properties.reduce((prev: any, curr: any) => prev?.[curr], obj);
};