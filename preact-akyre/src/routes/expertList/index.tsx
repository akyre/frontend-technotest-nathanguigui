import {FunctionalComponent, h} from "preact";
import * as Style from "./style.css"
import ExpertLine from "../../components/ExpertLine";

export interface Expert {
    name: string;
    job: string;
    expert_in: string;
    price: number;
    services: string[];
    photo_url: string
}

const ExpertList: FunctionalComponent = () => {

    const ExpertList: Array<Expert> = [
        {
            name: "Lucas alloin",
            job: "C# developper",
            expert_in: "Xamarin",
            price: 2,
            services: [
                "Code review",
                "Peer coding"
            ],
            photo_url: "https://picsum.photos/800"
        }, {
            name: "Antoine Herbose",
            job: "C# developper",
            expert_in: "Xamarin",
            price: 2,
            services: [
                "Code review",
                "Peer coding"
            ],
            photo_url: "https://picsum.photos/800"
        }, {
            name: "Richard Boom",
            job: "JS developper",
            expert_in: "Electron",
            price: 2,
            services: [
                "Code review",
                "Peer coding"
            ],
            photo_url: "https://picsum.photos/800"
        }, {
            name: "Alexandre Fourcat",
            job: "Rust developper",
            expert_in: "gfx-rs",
            price: 2,
            services: [
                "Code review",
                "Peer coding"
            ],
            photo_url: "https://picsum.photos/800"
        }, {
            name: "Thomas Nicollet",
            job: "JS developper",
            expert_in: "Cloud",
            price: 2,
            services: [
                "Code review",
                "Peer coding"
            ],
            photo_url: "https://picsum.photos/800"
        }, {
            name: "Night",
            job: "JS developper",
            expert_in: "Cloud",
            price: 2,
            services: [
                "Code review",
                "Peer coding"
            ],
            photo_url: "https://picsum.photos/800"
        }, {
            name: "Nathan Guigui",
            job: "C developper",
            expert_in: "QT",
            price: 2,
            services: [
                "Code review",
                "Peer coding"
            ],
            photo_url: "https://picsum.photos/800"
        }, {
            name: "Lucas alloin",
            job: "C# developper",
            expert_in: "Xamarin",
            price: 2,
            services: [
                "Code review",
                "Peer coding"
            ],
            photo_url: "https://picsum.photos/800"
        }, {
            name: "Lucas alloin",
            job: "C# developper",
            expert_in: "Xamarin",
            price: 2,
            services: [
                "Code review",
                "Peer coding"
            ],
            photo_url: "https://picsum.photos/800"
        }, {
            name: "Lucas alloin",
            job: "C# developper",
            expert_in: "Xamarin",
            price: 2,
            services: [
                "Code review",
                "Peer coding"
            ],
            photo_url: "https://picsum.photos/800"
        }, {
            name: "Lucas alloin",
            job: "C# developper",
            expert_in: "Xamarin",
            price: 2,
            services: [
                "Code review",
                "Peer coding"
            ],
            photo_url: "https://picsum.photos/800"
        }, {
            name: "Lucas alloin",
            job: "C# developper",
            expert_in: "Xamarin",
            price: 2,
            services: [
                "Code review",
                "Peer coding"
            ],
            photo_url: "https://picsum.photos/800"
        },
    ]

    return (
        <div style={{overflowX: "hidden"}}>
            <div class={Style.expertListTitle}>Choose your expert</div>

            <div class={Style.expertListContainer}>
                <ExpertLine experts={ExpertList} category_title={"Vos experts favoris"}/>
                <hr style={{"width": "65%", "border": "1.5px solid #FFE27B"}}/>
                <ExpertLine experts={ExpertList} category_title={"Les derniers experts avec qui vous avez travailler"}/>
                <hr style={{"width": "65%", "border": "1.5px solid #FFE27B"}}/>
                <ExpertLine experts={ExpertList} category_title={"Experts suceptibles de vous aider"}/>
            </div>

        </div>
    )
}

export default ExpertList;