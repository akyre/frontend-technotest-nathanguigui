import {FunctionalComponent, h} from "preact";
import {useState} from "preact/hooks";
import * as Style from "./style.css"
import MessageUserList from "../../components/MessageUserList";
import MessageConversation from "../../components/MessageConversation";

const Message: FunctionalComponent = () => {

    const users = [
        {
            first_name: "Robert",
            last_name: "Joyeux",
            user_id: "123",
            photo_url: "https://picsum.photos/200"
        },
        {
            first_name: "Alexandre",
            last_name: "Fourcat",
            user_id: "456",
            photo_url: "https://picsum.photos/200"
        },
        {
            first_name: "Richard",
            last_name: "Baumgartner",
            user_id: "789",
            photo_url: "https://picsum.photos/200"
        },
        {
            first_name: "Thomas",
            last_name: "Nicollet",
            user_id: "101",
            photo_url: "https://picsum.photos/200"
        },
        {
            first_name: "Killian",
            last_name: "Perrier",
            user_id: "121",
            photo_url: "https://picsum.photos/200"
        },
    ]

    const usersMessages = [
        {
            user_id: "123",
            messages: [
                {
                    content: "Bonjour Alexandre, êtes-vous disponible pour qu’on puisse s’appeler ?",
                    sender: "user"
                }, {
                    content: "Bonjour Robert, oui je suis disponible dans 5 min. Durant le rendez-vous est-il possible d’accès la conversation sur mes techniques de programmation. J’aimerais également apprendre une norme de programmation, pouvez-vous me conseiller la-dessus ?",
                    sender: "me"
                }
            ]
        }
    ]

    const [selectedConversation, setSelectedConversation] = useState(users[0].user_id);

    return (
        <div class={Style.messages}>
            <div class={Style.messagesContact}>
                <MessageUserList users={users} selected_user={selectedConversation}
                                 select_user={setSelectedConversation}/>
            </div>
            <div class={Style.messagesMessage}>
                <MessageConversation display_name={`${users.find((usr) => {
                    return usr.user_id === selectedConversation
                })?.first_name} ${users.find((usr) => {
                    return usr.user_id === selectedConversation
                })?.last_name}`} conversation={usersMessages.find((conversation) => {
                    return conversation.user_id === selectedConversation
                })}/>
            </div>
        </div>
    )
}

export default Message;