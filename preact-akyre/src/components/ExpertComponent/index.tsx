import {FunctionalComponent, h} from "preact";
import {Expert} from "../../routes/expertList";
import * as Style from "./style.css"

interface ExpertComponentProps {
    expert: Expert
}

const ExpertComponent: FunctionalComponent<ExpertComponentProps> = (props: ExpertComponentProps) => {
    return (
        <div class={Style.expertComponentContainer} style={{backgroundImage: "url('" + props.expert.photo_url + "')"}}>
            <div class={Style.expertComponentTop}>
                <div>{props.expert.name}</div>
                <div>- {props.expert.job}</div>
            </div>

            <div class={Style.expertComponentBottom}>
                <div class={Style.expertComponentBottomLeft}>
                    <div>{props.expert.expert_in}</div>
                    <div style={{display: "flex"}}>{props.expert.services.map((service) =>
                        <div>{service}</div>)}
                    </div>
                </div>
                <div>
                    {props.expert.price}c
                </div>
            </div>
        </div>
    )
}

export default ExpertComponent;