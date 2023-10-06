import {ChannelMessageResolver} from "../../declaration/channel";
import {V2} from "rusty_crypto";

export const cryptoResolver: ChannelMessageResolver = (_origin, payload, sendResponse) => {
    try {
        const {encrypt, text} = payload
        sendResponse(encrypt ? V2.encode_base64(text) : V2.decode_base64(text))
    } catch (err) {
        sendResponse()
    }
}