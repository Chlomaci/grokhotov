import {defineEventHandler} from "h3";
import {readBody} from "h3";

export default defineEventHandler(async (event) => {
    const basket = await readBody(event)
    console.log(basket)
    return { basket }
})

