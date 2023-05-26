export function enforceMinMax(el: HTMLInputElement, minOverride?: number, maxOverride?: number) {

  const min = (minOverride !== undefined) ? minOverride : parseInt(el.min);
  const max = (maxOverride !== undefined) ? maxOverride : parseInt(el.max);

  if (el.value !== "") {

    if (parseInt(el.value) < min)
      el.value = min.toString();

    if (parseInt(el.value) > max)
      el.value = max.toString();
  }
}