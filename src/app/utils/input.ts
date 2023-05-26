export function enforceMinMax(el: HTMLInputElement, minOverride?: number, maxOverride?: number) {

  const min = (minOverride !== undefined) && minOverride || parseInt(el.min);
  const max = (maxOverride !== undefined) && maxOverride || parseInt(el.max);

  if (el.value !== "") {

    if (parseInt(el.value) < min)
      setTimeout(() => el.value = min.toString(), 0);

    if (parseInt(el.value) > max)
      setTimeout(() => el.value = max.toString(), 0);
  }
}