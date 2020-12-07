export function valueCheck<T>(item: T): boolean {
    const object1 = Object.entries(item)
    for (let [key, value] of object1) {
        if (value === 0 || value === '') {
            return true
        }
    }
    return false
}
