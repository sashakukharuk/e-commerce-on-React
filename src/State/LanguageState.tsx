import React, {useState} from "react";
import {InitialLanguageType} from "./Types/LanguageType";
import {requestLanguage} from "../Request/Request";

export const LanguageContext = React.createContext<InitialLanguageType>({} as InitialLanguageType)

export const LanguageState = (props: any) => {
    const initialLanguage = {
        sizeL: 'Розмір',
        quantityL: 'Кількість',
        priceL: 'Ціна',
        currencyL: 'грн.',
        personalL: 'Особисті дані',
        firstNameL: 'Ім`я',
        lastNameL: 'Прізвище',
        phoneNumberL: 'Мобільний номер',
        cancelL: 'Скасувати',
        confirmL: 'Замовити',
        logInL: 'Увійти',
        registerL: 'Реєстрація',
        logOutL: 'Вийти',
        basketL: 'Корзина',
        goodsL: 'Товари',
        nameL: 'Назва',
        deleteL: 'Видалити',
        totalPriceL: 'Загальна вартість',
        registerTitleL: 'Реестрація',
        registerBtnL: 'Зареєструватися',
        emailL: 'Пошта',
        passwordL: 'Пароль',
        repetitionPasswordL: 'Повторіть пароль',
        orderL: 'Замовлення',
        cityL: 'Місто',
        deliveryPointL: 'Нова пошта',
        inBasketL: 'В корзину',
        buyL: 'Купити',
        contactsL: 'Контакти',
        phoneL: 'тел.',
        applyL: 'Застосувати',
        fromL: 'Від',
        toL: 'До',
        requiredL: 'Заповніть поле',
        minL: 'Мало символів має бути',
        maxL: 'Багато символів має бути',
        addBasketL: 'Товар додано',
        cameOutL: 'Ви вийшли з акаунту'
    }

    const [language, setLanguage] = useState(initialLanguage)
    const [key, setKey] = useState('ua')

    const applyLanguage = async (name: string) => {
        setKey(name)
        await requestLanguage.getLanguage(name).then(res => setLanguage(res.data.language))
    }

    return <LanguageContext.Provider value={{language, key, applyLanguage}}>
        {props.children}
    </LanguageContext.Provider>
}
