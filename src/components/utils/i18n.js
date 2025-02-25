import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    uz: {
        translation: {
            "header": {
                "button-text": "Bo'limlar",
                "search": "Qidirish...",
                "input-btn": "Qidirish",
                "Comparison": "Taqqoslash",
                "Payment":"To'lov",
                "Track": "Trek",
                "Cart": "Savatcha",
                "Favorites":"Sevimlilar",
                "Language": "Русский",
                "Login":"Kirish",
                "Modal":{
                    "modal-text":"Kirish yoki shaxsiy kabinet yaratish",
                    "modal-phone":"Telefon",
                    "modal-btn":"Faollashtirish kodini oling",
                    "modal-p":"Yoki",
                    "modal-card1-h": "Endi bozorga borishga hojat yo'q ",
                    "modal-card1-p": "Bizda qulay narxlar va uyga yetkazib berish mavjud ",
                    "modal-card2-h": "Tez yetkazib berish ",
                    "modal-card2-p": "Bizning xizmatimiz sizni ajablantiradi ",
                    "modal-card3-h": "Siz uchun qulayliklar ",
                    "modal-card3-p": "Nosozlik yuzaga kelganda tez rasmiylashtirish va qaytarish kafolati ",
                    "modal-card4-h": "Bo'lib to'lash",
                    "modal-card4-p": "Oldindan to'lov yo'q"
                }
            }
        }
    },
    ru: {
        translation: {
            "header": {
                "button-text": " Категории",
                "search": "Поиск...",
                "input-btn": "Искать",
                "Comparison": "Сравнение",
                "":"Оплатить",
                "Track": "Отследить",
                "Cart": "Корзина",
                "Favorites":"Избранное",
                "Language": "O'zbekcha",
                "Login":"Войти",
                "Modal":{
                    "modal-text":"Вход или создать личный кабинет",
                    "modal-phone":"Телефон",
                    "modal-btn":"Получить код активации",
                    "modal-p":"или",
                    "modal-card1-h": "Больше не нужно ходить на базар ",
                    "modal-card1-p": "У нас выгодные цены и доставка до дома",
                    "modal-card2-h": "Быстрая доставка",
                    "modal-card2-p": "Наш сервис удивит вас ",
                    "modal-card3-h": "Удобства для вас ",
                    "modal-card3-p": "Быстрое оформление и гарантия на возврат в случае неисправности",
                    "modal-card4-h": "Рассрочка",
                    "modal-card4-p": "Без предоплат"
                }
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "uz",
        lng: "uz",

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;