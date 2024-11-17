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
        activePage: 1,
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
        },
    }
})

export default useStore