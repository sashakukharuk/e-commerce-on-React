type Message = {
    _id: string
    senderId: string
    message: string
}

export type ChatType = {
    _id: string
    senderId: string
    recipientId: string
    messages: Message[]
}

export type InitialChatType = {
    chat: ChatType
    message: string
    clientId: string
    isHide: boolean
    isCLose: boolean
    setMessage: (message: string) => void
    sendMessage: () => void
    hideChat: () => void
    closeChat: () => void
}
