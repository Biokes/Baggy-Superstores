import { TouchComponentProps } from "@/interfaces/interfaces";
import {Navbar} from "@/components/homePage/home";

export default function TouchComponent({props}:TouchComponentProps){
    
    return (
        <div>
            <Navbar props={0}/>
        </div>
    )
}