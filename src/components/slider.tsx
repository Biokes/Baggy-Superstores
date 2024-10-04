import styles from '../index.module.css'
export default function Slider(){

    return (
            <ul className={`${styles.hamburgerSlider} h-full w-[120px] `}>
                <li>Home</li>
                <li>New</li>
                <li>Shopping bag</li>
                <li>Backpack bags</li>
                <li>Cosmetic Bags</li>
                <li>About us</li>
                <li>Contact</li>
            </ul>
    )
}