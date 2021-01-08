import {ChatType} from "../Types/ChatType";

export const chatState = {
    chat: {} as ChatType,
    message: '',
    managerId: '5fbaa5f204909f0438a6bbb0',
    clientId: '',
    isHide: false,
    isCLose: false
}
export type ChatStateType = typeof chatState
