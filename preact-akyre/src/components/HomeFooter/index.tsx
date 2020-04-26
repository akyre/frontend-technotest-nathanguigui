import {FunctionalComponent, h} from "preact";
import * as style from "./style.css"

const HomeFooter = () => {
    return (
        <div class={style.footer}>
            <div class={style.footerLeft}>
                <div class={style.footerLinks}>
                    <div class={style.linkCategory}>
                        <div class={style.categoryTitle}>Products</div>
                        <a href="https://google.com" class={style.categoryLink}>Code review</a>
                        <a href="https://google.com" class={style.categoryLink}>Peer coding</a>
                        <a href="https://google.com" class={style.categoryLink}>Benchmarking</a>
                        <a href="https://google.com" class={style.categoryLink}>Analytics</a>
                    </div>
                    <div class={style.linkCategory}>
                        <div class={style.categoryTitle}>Company</div>
                        <a href="https://google.com" class={style.categoryLink}>About us</a>
                        <a href="https://google.com" class={style.categoryLink}>Management</a>
                        <a href="https://google.com" class={style.categoryLink}>Newsroom</a>
                        <a href="https://google.com" class={style.categoryLink}>Contact us</a>
                    </div>
                    <div class={style.linkCategory}>
                        <div class={style.categoryTitle}>Ressources</div>
                        <a href="https://google.com" class={style.categoryLink}>Github</a>
                    </div>
                </div>
                <div class={style.legalMentions}>
                    © 2020 Akyre - All rights reserved | <a href="https://google.com">Terms of Service</a> | <a
                    href="https://google.com">Privacy</a> | <a href="https://google.com">Legal</a>
                </div>
            </div>
            <div class={style.footerLogo}>
                <div class={style.footerLogoContent}>
                    <img src="/logo.svg"/>
                    <div class={style.footerLogoText}>Trouvez l'expert dont <strong>vous</strong> avez besoin.</div>
                </div>
            </div>
        </div>
    )
}

export default HomeFooter;