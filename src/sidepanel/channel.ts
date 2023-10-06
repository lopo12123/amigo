import {CryptoChannelMessage} from "../declaration/channel";

abstract class SidePanelChannelImpl {
    public static encrypt(text: string): Promise<string> {
        return chrome.runtime.sendMessage({
            channel: 'crypto',
            origin: 'sidepanel',
            payload: {encrypt: true, text}
        } as CryptoChannelMessage)
    }

    public static decrypt(text: string): Promise<string> {
        return chrome.runtime.sendMessage({
            channel: 'crypto',
            origin: 'sidepanel',
            payload: {encrypt: false, text}
        } as CryptoChannelMessage)
    }
}

export {
    SidePanelChannelImpl
}