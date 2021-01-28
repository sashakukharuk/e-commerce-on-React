export type SuccessStr = {
    h3: string
    h4: string
    a: string
}

export type Language = {
    sizeL: string
    quantityL: string
    priceL: string
    currencyL: string
    personalL: string
    firstNameL: string
    lastNameL: string
    phoneNumberL: string
    cancelL: string
    confirmL: string
    logInL: string
    registerL: string
    logOutL: string
    basketL: string
    goodsL: string
    nameL: string
    deleteL: string
    totalPriceL: string
    registerTitleL: string
    registerBtnL: string
    emailL: string
    passwordL: string
    repetitionPasswordL: string
    orderL: string
    cityL: string
    deliveryPointL: string
    inBasketL: string
    buyL: string
    contactsL: string
    phoneL: string
    applyL: string
    fromL: string
    toL: string
    requiredL: string
    minL: string
    maxL: string
    addBasketL: string
    cameOutL: string
    successStrAuth: SuccessStr
    successStrOrder: SuccessStr
    paymentMethodL: string
    paymentMethodsL: {value: string}[]

}
export type InitialLanguageType = {
    language: Language
    key: string
    applyLanguage: (name: string) => void
}

export type LanguageType = {
    name: string
    language: Language
}
