const mongoose = require('mongoose')
const Schema = mongoose.Schema

const languageSchema = Schema({
  name: {
    type: String,
    required: true
  },
  language: {
    sizeL: {
      type: String,
      required: true
    },
    quantityL: {
      type: String,
      required: true
    },
    priceL: {
      type: String,
      required: true
    },
    currencyL: {
      type: String,
      required: true
    },
    personalL: {
      type: String,
      required: true
    },
    firstNameL: {
      type: String,
      required: true
    },
    lastNameL: {
      type: String,
      required: true
    },
    phoneNumberL: {
      type: String,
      required: true
    },
    cancelL: {
      type: String,
      required: true
    },
    confirmL: {
      type: String,
      required: true
    },
    logInL: {
      type: String,
      required: true
    },
    registerL: {
      type: String,
      required: true
    },
    logOutL: {
      type: String,
      required: true
    },
    basketL: {
      type: String,
      required: true
    },
    goodsL: {
      type: String,
      required: true
    },
    nameL: {
      type: String,
      required: true
    },
    deleteL: {
      type: String,
      required: true
    },
    totalPriceL: {
      type: String,
      required: true
    },
    registerTitleL: {
      type: String,
      required: true
    },
    registerBtnL: {
      type: String,
      required: true
    },
    passwordL: {
      type: String,
      required: true
    },
    repetitionPasswordL: {
      type: String,
      required: true
    },
    orderL: {
      type: String,
      required: true
    },
    emailL: {
      type: String,
      required: true
    },
    cityL: {
      type: String,
      required: true
    },
    deliveryPointL: {
      type: String,
      required: true
    },
    inBasketL: {
      type: String,
      required: true
    },
    buyL: {
      type: String,
      required: true
    },
    contactsL: {
      type: String,
      required: true
    },
    phoneL: {
      type: String,
      required: true
    },
    applyL: {
      type: String,
      required: true
    },
    fromL: {
      type: String,
      required: true
    },
    toL: {
      type: String,
      required: true
    },
    requiredL: {
      type: String,
      required: true
    },
    minL: {
      type: String,
      required: true
    },
    maxL: {
      type: String,
      required: true
    },
    addBasketL: {
      type: String,
      required: true
    },
    cameOutL: {
      type: String,
      required: true
    },
    successStrAuth: {
      h3: {
        type: String,
        required: true
      },
      h4: {
        type: String,
        required: true
      },
      a: {
        type: String,
        required: true
      }
    },
    successStrOrder: {
      h3: {
        type: String,
        required: true
      },
      h4: {
        type: String,
        required: true
      },
      a: {
        type: String,
        required: true
      }
    },
    paymentMethodL: {
      type: String,
      required: true
    },

    paymentMethodsL: [
      {
        value: {
          type: String,
          required: true
        }
      }
    ]
  }
})

module.exports = mongoose.model('languages', languageSchema)
