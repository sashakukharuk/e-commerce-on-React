import {ChatType} from "../Types/ChatType";

export const chatState = {
    chat: {} as ChatType,
    message: '',
    clientId: '',
    isHide: false,
    isCLose: false
}
export type ChatStateType = typeof chatState
