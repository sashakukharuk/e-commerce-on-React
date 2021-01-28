import {PositionsType} from "../Types/PositionsType";

export const positionsState = {
    from: {id: 'from', type: 'number', name: 'from', value: '', label: 'Від', require: false, min: 0, max: 0, autoComplete: 'off'},
    to: {id: 'to', type: 'number', name: 'to', value: '', label: 'До', require: false, min: 3, max: 30, autoComplete: 'off'},
    size: {id: 'size', type: 'select', name: 'size', value: '', label: '', require: false, min: 3, max: 50, autoComplete: 'off'},
    sizeValue: [{value: ''}, {value: 'S'}, {value: 'M'}, {value: 'L'}, {value: 'XL'}, {value: 'XXL'}],
    positions: [] as PositionsType[],
    disabled: false,
}
export type PositionsStateType = typeof positionsState
