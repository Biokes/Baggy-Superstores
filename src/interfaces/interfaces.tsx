import { StaticImageData } from "next/image"

export interface SliderProps{
    props:number
}
export interface BagDetails{
    image:StaticImageData | string,
    store: string,
    price: number,
}

export interface FormValues {
    email: string,
    password: string,
    confirmPassword: string,
}
export interface ApiResponse {
    success: boolean,
    data:string | {
        id:number,
        email:string
    },
    timeStamp:Date
}
export interface RouterData{
    url: string,
    bagDetails: BagDetails
}
export interface CartItem{
    quantity:number,
    bag:BagDetails
}
export interface ContactRequest{
    name:string,
    email:string,
    question: string
}
export interface Review{
    text:string,
    name:string,
    stars:number
}

export interface Cart{
    cart: CartItem[]
}