/**
 * @description get crx id
 * @returns {string}
 */
export function getCrxId() {
    return `${chrome?.runtime?.id ?? 'unknown'}`
}