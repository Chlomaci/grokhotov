import {defineEventHandler} from "h3";

export default defineEventHandler((event) => {
    return [
        {
            id: 1,
            img: '@/assets/product_small_1.png',
            title: 'Вытяжное устройство G2H',
            description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
            article: 'G2H1065',
            priceForOne: '12 644',
            quantity: 1,
            totalPrice: '12 644',
        },
        {
            id: 2,
            img: '@/assets/product_small_2.png',
            title: 'Вытяжное устройство BXC',
            description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
            article: 'G2H1066',
            priceForOne: '12 644',
            quantity: 2,
            totalPrice: '25 288',
        },
        {
            id: 3,
            img: '@/assets/product_small_3.png',
            title: 'Вытяжное устройство GHN',
            description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
            article: 'G2H1067',
            priceForOne: '12 644',
            quantity: 1,
            totalPrice: '12 644',
        },
    ]
})