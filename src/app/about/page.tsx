'use client'
import Navbar from "@/components/homePage/navbar";
import Footer from "@/components/homePage/footer";
import styles from '@/styles/index.module.css';
import { Review } from "@/interfaces/interfaces";

export default function About(){
    const reviews: Review[] = [
        {
            text:`Duis congue lectus vel rutrum facilisis. In hac habitasse platea dictumst. 
                Nam accumsan libero libero, vehicula fringilla elit mattis sed. 
                Praesent nec feugiat velit, sit amet tempor.`,
            name:'Debbie suzan',
            stars:5
        },
        {
            text:`Duis congue lectus vel rutrum facilisis. In hac habitasse platea dictumst. 
               Nam accumsan libero libero, vehicula fringilla elit mattis sed. 
               Praesent nec feugiat velit, sit amet tempor.`,
            name:'Madison Evans',
            stars:5
        }
    ]
    return (
        <div className={styles.slideIn}>
            <Navbar props={5}/>
            <div className={'mt-[20px]'}>
                <p className={styles.bestSellers}>About us</p>
                <div className={styles.ptags}>
                    <p className={'text-lg pr-[15px] md:pr-[25px]'}>Our Story...</p>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit vulputate,
                    fermentum pellentesque feugiat aenean fringilla torquent malesuada. Taciti fames vehicula.
                    aliquam arcu nascetur habitasse dictum conubia eleifend, proin netus magna mollis pulvinar
                    nostra habitant suscipit quisque, eu molestie fusce et mi in adipiscing ad.
                    </p>
                    <p>
                    Commodo efficitur ac quisque in taciti arcu volutpat condimentum a tortor, malesuada facilisi etiam congue dictum 
                    finibus nulla nisi lorem, metus inceptos cras ridiculus curabitur.<br/>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit vulputate, fermentum pellentesque
                    feugiat aenean fringilla torquent malesuada. Taciti fames vehicula aliquam arcu nascetur habitasse 
                    dictum conubia eleifend, proin netus magna mollis pulvinar.<br/><br/>
                    Erat eget ante vulputate. Consectetur felis finibus nibh eleifend curae rutrum class ultrices velit,
                    ante volutpat ex cras semper at pretium conubia sodales, interdum torquent varius malesuada facilisi
                    dictum nec metus. Lacinia suspendisse magnis turpis massa etiam iaculis est, nam magna ultricies leo 
                    himenaeos scelerisque natoque viverra, lorem libero commodo tellus aliquet ornare.
                    </p>
                </div>
                <div className={'md:px-[5px] my-[20px]'}>
                    <p className={`${styles.bestSellers} mb-[20px]`}>Customer Reviews</p>
                    <div className={'flex flex-col gap-[30px] md:gap-[45px] px-[5px] items-center'}>
                        {
                            reviews.map((review,index)=>(
                                <div className={`${styles.review}`} >
                                    <p className={'text-lg italic sm:text-xl md:text-3xl px-[20px] text-center'}>{review.text}</p>
                                    <p className={'font-bold text-lg sm:text-xl md:text-2xl'}>{review.name}</p>
                                    <p >{review.stars}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}