import { StaticImageData } from "next/image"

export interface SliderProps{
    props:number
}
export interface BagDetails{
    image:StaticImageData | string,
    store: string,
    price: string,
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
export interface TouchComponentProps{
    props:number,
    collection: BagDetails[]
}
export interface RouterData{
    url: string,
    bagDetails: BagDetails
}
export interface CartItem{
    quantity:number,
    bag:BagDetails
}