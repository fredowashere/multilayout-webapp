import createNumberMask from "../shared/directives/dependencies/text2mask/createNumberMask";

export const euroMask = createNumberMask({
    prefix: "€ ",
    allowDecimal: true,
    thousandsSeparatorSymbol: ".",
    decimalSymbol: ","
});

export const euroMaskAllowNegative = createNumberMask({
    prefix: "€ ",
    allowDecimal: true,
    thousandsSeparatorSymbol: ".",
    decimalSymbol: ",",
    allowNegative: true
});

export function numStr2euroMask(unmasked: string) {
    return (unmasked.indexOf("-") > -1 ? "-" : "") + "€ " + unmasked.replace(".", ",");
}

export function euroMask2numStr(masked: string) {
    return masked
        .replace("€ ", "")
        .replaceAll(".", "")
        .replace(",", ".");
}

export function num2euroMask(v?: number | null) {
    return numStr2euroMask(!v ? "0" : (v + "")); 
}

export function euroMask2num(v?: string | null) {
    return parseFloat(euroMask2numStr(!v ? "€ 0" : v));
}