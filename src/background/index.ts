import {Logger} from "../utils/logger";
import {prepareCrypto, prepareSidePanel} from "./prelude";
import {BackgroundChannelImpl} from "./channel";

Logger.BACKGROUND.info('[background] started')
prepareCrypto()
prepareSidePanel()
BackgroundChannelImpl.listen()