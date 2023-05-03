export function enforceMinMax(el: HTMLInputElement) {
    if (el.value != "")
      if (+el.value < +el.min)
        el.value = el.min;
      if (+el.value > +el.max)
        el.value = el.max;
}