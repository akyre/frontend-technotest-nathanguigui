import {FunctionalComponent, h} from "preact";
import * as style from "./style.css"

const HomeNav: FunctionalComponent = () => {
    return (
        <div class={style.homeNavContainer}>
            <div class={style.homeLogo}>
                <a class={style.logoLink} href="#">
                    <img class={style.mainLogo} src="/logo.svg"/>
                </a>
            </div>
            <div class={style.homeLink}>
                <div><a href="#" class={style.basicLink} aria-current>Products</a></div>
                <div><a href="#" class={style.basicLink}>Partners</a></div>
                <div><a href="#" class={style.basicLink}>Community</a></div>
                <div><a href="#" class={style.basicLink}>Pricing</a></div>
            </div>
            <div class={style.accountLink}>
                <div style="display: flex">
                    <div class={style.linkRightContainer}><a class={style.linkRight} href="#">Sign in</a></div>
                    <div class={style.linkRightContainer}><a class={style.linkRight && style.filledLink} href="#">Sign up</a></div>
                </div>
            </div>
        </div>
    )
}

export default HomeNav;