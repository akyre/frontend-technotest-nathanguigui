import {FunctionalComponent, h, Fragment} from "preact";
import {Expert} from "../../routes/expertList";
import ExpertComponent from "../ExpertComponent";
import * as Style from "./style.css";
import {useRef, useState} from "preact/hooks";

interface ExpertLineProps {
    experts: Array<Expert>
    category_title: string
}

const ExpertLine: FunctionalComponent<ExpertLineProps> = (props: ExpertLineProps) => {

    const sliderRef = useRef();

    const [isScrolling, setIsScrolling] = useState(false);
    const [clientX, setClientX] = useState(0);
    const [scrollX, setScrollX] = useState(0);

    const onMouseDown = (e: any) => {
        if (e.which === 1) {
            setIsScrolling(true);
            setClientX(e.clientX);
        }
    };

    const onMouseUp = () => {
        setIsScrolling(false)
    };

    const onMouseMove = (e: any) => {
        if (isScrolling) {
            e.preventDefault();
            // @ts-ignore
            sliderRef.current.scrollLeft = scrollX - (e.clientX - clientX);
            setScrollX(scrollX - (e.clientX - clientX));
            setClientX(e.clientX);
        }
    };

    const onScroll = (e: any) => {
        setScrollX(e.target.scrollLeft)
    }

    function detectMob() {
        const toMatch = [
            /Android/i,
            /webOS/i,
            /iPhone/i,
            /iPad/i,
            /iPod/i,
            /BlackBerry/i,
            /Windows Phone/i
        ];

        return toMatch.some((toMatchItem) => {
            return navigator.userAgent.match(toMatchItem);
        });
    }

    return (
        <Fragment>
            <div class={Style.expertLineTitle}>{props.category_title}</div>
            <div style={isScrolling ? {
                cursor: "grabbing",
                transform: "scale(1.02)"
            } : detectMob() ? {scrollSnapType: "x mandatory"} : undefined}
                 ref={ref => sliderRef.current = ref} class={Style.expertLineContainer}
                 onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseMove={onMouseMove} onScroll={onScroll}>
                <div style={{display: "flex", paddingLeft: "30px"}}>
                    {props.experts.map((expert) =>
                        <ExpertComponent expert={expert}/>
                    )}
                </div>
            </div>
        </Fragment>
    )
}

export default ExpertLine;