import createNumberMask from "../shared/directives/dependencies/text2mask/createNumberMask";

export const euroMask = createNumberMask({
    prefix: '€ ',
    allowDecimal: true,
    thousandsSeparatorSymbol: '.',
    decimalSymbol: ','
});

export function euroMask2numStr(masked: string) {
    const unmasked = masked
        .replace("€ ", "")
        .replaceAll(".", "")
        .replace(",", ".");
    return unmasked;
}

export function numStr2euroMask(unmasked: string) {
    const _unmasked = unmasked + "";
    const masked = "€ " + _unmasked.replace(".", ",");
    return masked;
}