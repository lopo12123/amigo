import {Logger} from "../utils/logger";
import {prepareCrypto, prepareSidePanel} from "./prelude";
import {ChannelImpl} from "./channel";

Logger.BACKGROUND.info('[background] started')
prepareCrypto()
prepareSidePanel()
ChannelImpl.listen()