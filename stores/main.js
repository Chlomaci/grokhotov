import { defineStore } from 'pinia';
import {useFetch} from "nuxt/app";

export const useStore = defineStore('websiteStore', {
    state: () => ({
        basketCards: [],
        viewedCards: [],
        isLoading: true,
        isInstallation: false,
        total: '0',
        totalQuantity: 0,
        activeSlide: 1,
        activePage: 0,
    }),
    actions: {
        async getBasketCards() {
            const {data} = await useFetch('/api/getBasketProducts');
            this.basketCards = data.value;
            this.isLoading = false;
        },
        async getViewedCards() {
            const {data} = await useFetch('/api/getViewedProducts');
            this.viewedCards = data.value;
            this.isLoading = false;
            this.activePage = 1;
        },
        async buy() {
            if (this.basketCards.length >= 1){
                await useFetch('/api/postBasket', {
                    method: 'post',
                    body: { basket: this.basketCards }
                })
                this.basketCards = [];
                this.total = 0;
                this.totalQuantity = 0;
                this.isInstallation = false;
                alert('Успешно!')
            }
            else return
        }
    }
})

export default useStore