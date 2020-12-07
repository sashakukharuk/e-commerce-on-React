import React from 'react'
import f from './Form.module.css'
import {FormItem} from "./createObject";

export type ValueType = {
    values: string
    field: string
}

type PropsType = {
    item: FormItem
    applyField: (value: ValueType) => void
}
type initialValuesType = {item: string}

export class FormControl extends React.Component<PropsType> {
    private item: FormItem
    private readonly applyField: (value: ValueType) => void
    private readonly errors: initialValuesType
    public state: {value: string}
    constructor(props: PropsType) {
        super(props)
        this.item = props.item
        this.applyField = props.applyField
        this.errors = {item: ''}
        this.state = {value: String(props.item.value)}
    }
    onChange(values: string): initialValuesType {
        console.log('render')
        // this.applyField({values: values, name: this.item.name})
        this.errors.item = ''
        if (this.item.require) {
            if (!values) {
                this.errors.item = 'Required';
                return this.errors as initialValuesType
            }
            if (this.item.min !== 0) {
                if (values.length < this.item.min) {
                    this.errors.item = `Must be ${this.item.min} characters or less`;
                } else {
                    this.errors.item = ''
                }
            }
            if (this.item.min !== 0) {
                if (values.length > this.item.max) {
                    this.errors.item = `Must be ${this.item.max} characters or less`;
                }
            }
        }
        return this.errors as initialValuesType
    }
    render() {
        return (
            <form>
                <label htmlFor={this.item.name} className={f.title}>{this.item.label}</label>
                <input
                    id={this.item.id}
                    name={this.item.name}
                    type={this.item.type}
                    onChange={(event) => {
                        this.setState({value: event.target.value})
                        this.onChange(event.target.value)
                    }}
                    onBlur={(event) => this.onChange(event.target.value)}
                    value={this.state.value}
                />
                {this.errors?.item ? <span>{this.errors?.item}</span> : null}
            </form>
        );
    }
}
