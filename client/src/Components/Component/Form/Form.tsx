import React from 'react'
import {FormItem} from "./createObject";
import {Form, Formik} from "formik";
import a from "./Form.module.css";
import {Button} from "../Button/Button";
import {Language} from "../../../State/Types/LanguageType";
import {MySelect, MyTextInput} from "./MyTextInput";
import {NavLink} from "react-router-dom";

type PropsType = {
    name: string
    btnName?: string
    language: Language
    args: FormItem[]
    disabled: boolean
    sendForm: (form: any) => void
    options?: { value: string }[]
    url?: string
    btnNameCancel?: string
}

export const FormControl = ({name, btnName, language, args, disabled, sendForm, options, url, btnNameCancel}: PropsType) => {
    const object = args.reduce((acm, item) => {
        // @ts-ignore
        acm[item.name] = item.value
        return acm
    }, {})

    const optionsArr = [<option key={0} value=''/>]

    return <Formik
        initialValues={object}
        onSubmit={sendForm}
    >
        {() => (
            <Form>
                <div className={a.authBlock}>
                    <div className={a.auth}>
                        <div className={a.authContent}>
                            <span className={a.authTitle}>{name}</span>
                            {args.map(item =>
                                item.type !== 'select'
                                    ? <MyTextInput key={item.id} item={item} language={language}/>
                                    : <MySelect key={item.id} item={item} language={language}>
                                        {options && optionsArr.concat(options.map((option, idx) => <option key={++idx}
                                                                                         value={option.value}>{option.value}</option>))}
                                    </MySelect>)}
                        </div>
                        {!btnNameCancel
                            ? <div className={a.authAction}>
                                <Button disabled={disabled} name={btnName ? btnName : 'button'}/>
                            </div>
                            : <div className={a.orderAction}>
                                <div className={a.orderBtnLeft}>
                                    <NavLink to={url ? url : '/'}>
                                        <Button disabled={false} name={btnNameCancel ? btnNameCancel : 'Cancel'}/>
                                    </NavLink>
                                </div>
                                <div className={a.orderBtnRight}>
                                    <Button disabled={disabled} name={btnName ? btnName : 'Confirm'}/>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </Form>
        )}
    </Formik>
}
