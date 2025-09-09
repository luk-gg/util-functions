export function sortAlphabetically(data, key = null) {
    return data.sort((a, b) => sortAlphabeticallyOnce(a, b, key));
}

export function sortAlphabeticallyOnce(a, b, key) {
    if (key) {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
    }
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}