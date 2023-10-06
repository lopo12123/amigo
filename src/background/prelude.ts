import init, {V0, V2} from "rusty_crypto"
import {Logger} from "../utils/logger";

const logger = Logger.BACKGROUND;

// TODO: replace key according to your crxId
const PLUGIN_CRYPTO_KEY = '2Nvi6p8dVGBalBAEVS/alnC12kkxPK4RKfKJRqtmvckcRoilZTqnQdwp3Alc6Omx'

/**
 * Prepare the crypto module for use. Should be called as early as possible.
 */
const prepareCrypto = async () => {
    logger.verbose('[crypto] fetching')
    await fetch('/misc/web.wasm')
        .then(r => r.arrayBuffer())
        .then(init)
        .then(_ => {
            logger.info('[crypto] initialized');

            // TODO: replace key according to your crxId
            const isOk = V2.register_crx(V0.encode_base64(chrome.runtime.id))
            logger.info(`[crypto] registered | result = ${isOk}`)
        })
        .catch(err => {
            logger.error(`[crypto] ${err}`)
        })
        .finally(() => {
            logger.verbose('[crypto] finished')
        })
}

const prepareSidePanel = (): Promise<void> => {
    logger.verbose('[panel] setting behavior')
    return chrome.sidePanel.setPanelBehavior({openPanelOnActionClick: true})
        .then(() => {
            logger.info('[panel] behavior set')
        })
        .catch(err => {
            logger.error(`[panel] ${err}`)
        })
}

export {
    prepareCrypto,
    prepareSidePanel
}