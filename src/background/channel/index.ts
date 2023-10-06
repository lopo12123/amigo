import {ChannelMessageCommon} from "../../declaration/channel";
import {cryptoResolver} from "./crypto";
import {Logger} from "../../utils/logger";

const logger = Logger.BACKGROUND

const channelMessageScheduler = (message: ChannelMessageCommon, _sender: chrome.runtime.MessageSender, sendResponse: (response?: any) => void) => {
    const {channel, origin, payload} = message

    switch (channel) {
        case 'crypto':
            cryptoResolver(origin, payload, sendResponse)
            break
    }

    return true
}

abstract class BackgroundChannelImpl {
    public static listen() {
        chrome.runtime.onMessage.addListener(channelMessageScheduler)
        logger.info('[messenger] listener added')
    }
}

export {
    BackgroundChannelImpl
}