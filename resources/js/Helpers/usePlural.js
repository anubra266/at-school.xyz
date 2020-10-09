/**
 * Pluralise a collection where it applies
 * @param {array} array Collection to be described
 * @param {string} adjective String that describes List
 * @param {string} suffix String to append to plural
 */
export function usePlural(array, adjective, suffix) {
    const isPlural = array.length !== 1;
    suffix = isPlural ? suffix : "";
    return `${array.length} ${adjective}${suffix}`;
}
