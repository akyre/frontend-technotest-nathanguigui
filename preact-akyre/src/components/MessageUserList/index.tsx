import {FunctionalComponent, h} from "preact";
import * as Style from "./style.css"

interface User {
    first_name: string,
    last_name: string,
    user_id: string,
    photo_url: string
}

interface MessageUserListProps {
    users: Array<User>
    selected_user: string
    select_user: (newUser: string) => void
}

const MessageUserList: FunctionalComponent<MessageUserListProps> = (props) => {
    return (
        <div class={Style.list}>
            {props.users.map((user) =>
                <div class={props.selected_user === user.user_id ? Style.itemSelected : Style.item} onClick={() => props.select_user(user.user_id)}>
                    <img class={Style.itemImage} src={user.photo_url}/>
                    <div style={props.selected_user === user.user_id && {color: "#F6F9FC"}} class={Style.itemContent}>
                        {user.first_name} {user.last_name}
                    </div>
                </div>
            )}
        </div>
    )
}

export default MessageUserList;