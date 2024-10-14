import { makeStyles } from "@mui/material"
import { Theme } from "@mui/material/styles"
export default function useStyles(){
    return makeStyles((theme: Theme)=>({
        textField:{
            width:'30px',
            color: theme.palette.augmentColor
        }    
    }))
} 