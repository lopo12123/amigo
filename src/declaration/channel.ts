export type ChannelOrigin = 'background' | 'content' | 'sidepanel'

export type CryptoChannelMessage = {
    channel: 'crypto'
    origin: ChannelOrigin
    payload: {
        encrypt: boolean
        text: string
    }
}

export type ChannelMessageCommon = CryptoChannelMessage

export type ChannelMessageResolver = (origin: ChannelMessageCommon['origin'], payload: ChannelMessageCommon['payload'], sendResponse: (response?: any) => void) => void