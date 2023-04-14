export function enforceMinMax(
  el: HTMLInputElement,
  opt?: { min?: number, max?: number }
) {

  if (el.value == "") return;

  let min = el.min;
  if (opt && "min" in opt) min = opt.min + "";
  if (min !== "" && +el.value < +min) el.value = min;

  let max = el.max;
  if (opt && "max" in opt) max = opt.max + "";
  if (max !== "" && +el.value > +max) el.value = max;
}