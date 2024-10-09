import styles from '@/styles/index.module.css';
import Navbar from '@/components/homePage/navbar';
import Footer from '@/components/homePage/footer'
export default function Privacy(){
    return (
        <div>
            <Navbar props={8}/>
            <div className={'flex flex-col gap-4 my-[20px]'}>
                <p className={styles.bestSellers}>Privacy</p>
                <div className={`flex flex-col items-start ${styles.ptags}`}>
                    <p>
                        1. Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit vulputate,
                        fermentum pellentesque feugiat aenean fringilla torquent malesuada.
                        Taciti fames vehicula aliquam arcu nascetur habitasse dictum conubia eleifend,
                        proin netus magna mollis pulvinar nostra habitant suscipit quisque, eu molestie fusce et mi in adipiscing ad.
                        Commodo efficitur ac quisque in taciti arcu volutpat condimentum a tortor, malesuada facilisi
                        etiam congue dictum finibus nulla nisi lorem, metus inceptos cras ridiculus curabitur
                    </p>
                    <p>
                        2. Erat eget ante vulputate. Consectetur felis finibus nibh eleifend curae rutrum class ultrices velit,
                        ante volutpat ex cras semper at pretium conubia sodales,
                        interdum torquent varius malesuada facilisi dictum nec metus.
                        Lacinia suspendisse magnis turpis massa etiam iaculis est, 
                        nam magna ultricies leo himenaeos scelerisque natoque viverra, 
                        lorem libero commodo tellus aliquet ornare. Class mus sit odio vitae scelerisque augue, 
                        dignissim ornare et eros a proin, fringilla varius turpis curae tristique. 
                        Commodo cras phasellus efficitur facilisi sit elit interdum augue litora fusce, 
                        felis odio magnis taciti et diam potenti curae penatibus platea,
                        amet facilisis turpis ipsum ligula class aliquet ex eros.
                    </p>
                    <p>
                        3. Euismod ex tempor viverra lacinia etiam facilisis nulla venenatis donec,
                        eleifend aliquam himenaeos curabitur quam elit odio fringilla, quis amet adipiscing 
                        ligula congue montes vulputate luctus. Odio lacus ullamcorper vestibulum tincidunt est 
                        varius libero mi, imperdiet nisi turpis maecenas venenatis eleifend tellus, tempus inceptos 
                        sit ligula at arcu dictumst. Primis eleifend neque mauris tristique venenatis ante odio, justo 
                        felis facilisi habitasse sapien id vehicula, pretium scelerisque nascetur enim per tincidunt.
                    </p>
                    <p>
                        4. Quam class risus adipiscing dui felis a aliquet, cras aptent pellentesque lorem vivamus tempus,
                        velit inceptos porta sit bibendum dis. Ullamcorper pulvinar blandit arcu augue nulla senectus donec 
                        sociosqu nullam, id commodo inceptos habitasse lacus suscipit tempor lorem viverra, nisi dui facilisis
                        porttitor ultrices magnis erat turpis. 
                    </p>
                    <p>
                        5. Quam class risus adipiscing dui felis a aliquet, cras aptent pellentesque lorem vivamus tempus,
                        velit inceptos porta sit bibendum dis. Ullamcorper pulvinar blandit arcu augue nulla senectus donec 
                        sociosqu nullam, id commodo inceptos habitasse lacus suscipit tempor lorem viverra, nisi dui facilisis
                        porttitor ultrices magnis erat turpis.
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}