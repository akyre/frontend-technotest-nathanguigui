import {FunctionalComponent, h} from "preact";
import {Message} from "../MessageConversation";
import * as Style from "./style.css"
import {messages} from "../../routes/message/style.css";

interface MessageContentProps {
    content: Message
}

const MessageContent: FunctionalComponent<MessageContentProps> = (props) => {
    return (
        <div style={props.content.sender === "me" ? undefined : {flexDirection: "row-reverse"}} class={Style.messageContentContainer}>
            <div class={Style.messageBlank}>

            </div>
            <div style={props.content.sender === "me" ? {textAlign: "right"} : undefined} class={Style.messageImage}>
                <img src={props.content.sender === "me" ? "/fourcat.png" : "https://picsum.photos/200"}/>
            </div>
            <div class={Style.messageContent}>
                <div style={props.content.sender === "me" ? undefined : {backgroundColor: "#91AFFF", color: "#F6F9FC"}} class={Style.messageContentContent}>
                    {props.content.content}
                </div>
                <div style={props.content.sender === "me" ? undefined : {textAlign: "right"}} class={Style.messageTime}>
                    Lun. 20 avril 2020
                </div>
            </div>
        </div>
    )
}

export default MessageContent;