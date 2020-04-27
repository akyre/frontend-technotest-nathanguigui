import {FunctionalComponent, h} from "preact";
import * as Style from "./style.css";
import MessageContent from "../MessageContent";

export interface Message {
    content: string
    sender: string
}

interface Conversation {
    user_id: string
    messages: Array<Message>
}

interface MessageConversationProps {
    display_name: string,
    conversation: any
}

const MessageConversation: FunctionalComponent<MessageConversationProps> = (props) => {
    return (
        <div class={Style.conversation}>
            <div class={Style.conversationTop}>
                <div class={Style.conversationName}>{props.display_name}</div>
                <div class={Style.conversationMessage}>
                    {props.conversation && props.conversation.messages?.map((messages: Message) =>
                        <MessageContent content={messages}/>
                    )}
                </div>
            </div>
            <div class={Style.conversationBottom}>
                <input class={Style.conversationInput} placeholder={"Ecrivez-votre message…"}/>
                <div class={Style.conversationButton}>
                    <div class={Style.conversationRound}>
                        <div class={Style.conversationTriangle}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageConversation;