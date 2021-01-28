export function initialForm<I, T, N, V, L, R, M, X>(
    id: I,
    type: T,
    name: N,
    value: V,
    label: L,
    require: R,
    min: M,
    max: X) {
    return {id, type, name, value, label, require, min, max}
}

export type FormItem = {
    id: string
    type: string
    name: string
    value: string
    require: boolean
    label: string
    min?: number | null | undefined
    max?: number | null | undefined
    autoComplete: string
}
