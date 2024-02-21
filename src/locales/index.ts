import i18n from 'i18next'
import zhCnTrans from './lang/zh-cn'
import zhTwTrans from './lang/zh-tw'
import enUsTrans from './lang/en'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enUsTrans,
    },
    zhTw: {
      translation: zhTwTrans,
    },
    zhCn: {
      translation: zhCnTrans,
    },
  },
  // 选择默认语言
  fallbackLng: 'zhCn',
  debug: false,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
})

export default i18n
