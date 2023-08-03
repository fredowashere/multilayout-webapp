import createNumberMask from "../shared/directives/dependencies/text2mask/createNumberMask";

export interface NumberMaskOptions {
    prefix?: string;
    allowDecimal?: boolean;
    allowNegative?: boolean;
    integerLimit?: number;
    decimalLimit?: number;
}

export interface NumberMaskConfig extends NumberMaskOptions {
    prefix: string;
}

export class NumberMask {

    private config: NumberMaskConfig;
    private numberMask: any;

    constructor(opts?: NumberMaskOptions) {

        this.config = {
            prefix:        opts?.prefix        || "",
            allowNegative: opts?.allowNegative || false,
            allowDecimal:  opts?.allowDecimal  || true,
            integerLimit:  opts?.integerLimit  || 6,
            decimalLimit:  opts?.decimalLimit  || 2,
        };

        this.numberMask = createNumberMask({
            ...this.config,
            thousandsSeparatorSymbol: ".", // Do not touch this
            decimalSymbol: "," // Do not touch this
        });
    }

    getMask() {
        return this.numberMask;
    }

    numberToMask(num?: number | null) {
        const numStr = num ? (num + "") : "0"; // cast number to string or "0"
        return this.numStrToMask(numStr);
    }

    numStrToMask(unmasked: string) {
        const isNegative = unmasked.indexOf("-") > -1;
        return (isNegative ? "-" : "") + this.config.prefix + unmasked.replace(".", ",");
    }

    maskToNumber(numStr?: string | null) {
        return parseFloat(this.maskToNumStr(numStr || (this.config.prefix + "0")));
    }

    maskToNumStr(masked: string) {
        return masked
            .replace(this.config.prefix, "") // replace prefix with empty string       
            .replace(/\./g, "")              // replace dots with empty string
            .replace(",", ".");              // replace comma with dot
    }
}