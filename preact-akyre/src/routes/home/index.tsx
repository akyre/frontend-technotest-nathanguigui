import {FunctionalComponent, h} from "preact";
import * as style from "./style.css";
import HomeNav from "../../components/HomeNav";
import HomeFooter from "../../components/HomeFooter";

const Home: FunctionalComponent = () => {

    return (
        <div style="display: flex; flex-direction: column">
            <HomeNav/>
            <div class={style.headContainer}>
                <div class={style.quoteContainer}>
                    <h1 class={style.quote}>Talk is cheap, show me the code.</h1>
                    <h5>(cf. Linus Torvald)</h5>
                </div>

                <div class={style.section2}>
                    <h1 class={style.slogan}>
                        Akyre, une plateforme pour les développeurs permettant de Fletcher
                    </h1>
                </div>

                <div class={style.section3}>
                    <div><a href="/historic" class={style.redButton}>Get started</a></div>
                    <div><a href="#" class={style.greenButton}>How does it work ???</a></div>
                </div>

                <div class={style.blankSpace}/>

            </div>
            <HomeFooter/>
        </div>
    );
};

export default Home;
