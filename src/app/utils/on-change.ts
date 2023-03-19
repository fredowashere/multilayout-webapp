export interface SimpleChange<T> {
    firstChange: boolean;
    isFirstChange: () => boolean;
    previousValue: T;
    currentValue: T;
}

export function OnChange<T = any>(
    callback: (value: T, simpleChange?: SimpleChange<T>) => void
) {

    const cachedValueKey = Symbol();
    const firstChangeKey = Symbol();

    return (target: any, key: any) => {
        Object.defineProperty(target, key, {
            set: (value: any) => {

                if (target[cachedValueKey] === value) return;

                if (target[firstChangeKey] === undefined)
                    target[firstChangeKey] = true;
                else
                    target[firstChangeKey] = false;

                const simpleChange: SimpleChange<T> = {
                    firstChange: target[firstChangeKey],
                    isFirstChange: () => target[firstChangeKey],
                    previousValue: target[cachedValueKey],
                    currentValue: value
                }

                target[cachedValueKey] = value;
                callback.call(target, value, simpleChange);
            },
            get: () => {
                return target[cachedValueKey];
            }
        });
    }
}