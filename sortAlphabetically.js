export function sortAlphabetically(data, key, options) {
    return data.sort((a, b) => sortAlphabeticallyOnce(a, b, key, options));
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator
export function sortAlphabeticallyOnce(a, b, key = null, options) {
    const l = String(key ? a[key] : a)
    const r = String(key ? b[key] : b)
    if (options?.locale) return new Intl.Collator(options.locale, options).compare(l, r)
    // return l.localeCompare(r)
    if (l.toLowerCase() < r.toLowerCase()) return -1;
    if (l.toLowerCase() > r.toLowerCase()) return 1;
    return 0;
}