import {InferActionsTypes} from "../Types/InferActionsType";
import {ChatType} from "../Types/ChatType";

export const SET_CHAT = 'SET_CHAT'
export const SET_MESSAGE = 'SET_MESSAGE'
export const SET_CLIENT_ID = 'SET_CLIENT_ID'
export const SET_HIDE_CHAT = 'SET_HIDE_CHAT'
export const SET_CLOSE_CHAT = 'SET_CLOSE_CHAT'

export const actionChat = {
    setChat: (chat: ChatType) => ({type: SET_CHAT, chat} as const),
    setMessage: (message: string) => ({type: SET_MESSAGE, message} as const),
    setClientId: (id: string) => ({type: SET_CLIENT_ID, id} as const),
    setHideChat: (isHide: boolean) => ({type: SET_HIDE_CHAT, isHide} as const),
    setCloseChat: (isClose: boolean) => ({type: SET_CLOSE_CHAT, isClose} as const),
}

export type ActionChatType = InferActionsTypes<typeof actionChat>
