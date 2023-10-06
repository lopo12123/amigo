import {Logger} from "../utils/logger";
import {prepareCrypto} from "./crypto";
import {ChannelImpl} from "./channel";

Logger.BACKGROUND.info('[background] started')
prepareCrypto()
ChannelImpl.listen()