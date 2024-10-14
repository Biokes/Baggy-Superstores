import { RootState } from "@/redux/store"
import { useSelector } from "react-redux"

export default function Cart(){
    const selector = useSelector((state:RootState)=>state.cart)
    return (
        <div>

        </div>
    )
}