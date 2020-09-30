/**
 * Pluralise a collection where it applies
 * @param {array} array Collection to be described
 * @param {string} adjective String that describes List
 */
export function usePlural(array, adjective) {
    const isPlural = array.length !== 1;
    const lastLetter = adjective.charAt(adjective.length - 1);
    const suffix = isPlural ? (lastLetter === "s" ? "'" : "s") : "";
    return `${array.length} ${adjective}${suffix}`;
}
