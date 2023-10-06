/* tslint:disable */
/* eslint-disable */
/**
* 可加密的原文最大长度为 `u32.MAX - 1`
*/
export class V0 {
  free(): void;
/**
* 加密(若加密失败则返回空字符串)
* @param {string} str
* @returns {string}
*/
  static encode_base64(str: string): string;
/**
* 解密(若加密失败则返回空字符串)
* @param {string} str
* @returns {string}
*/
  static decode_base64(str: string): string;
}
/**
* 可加密的原文最大长度为 `u32.MAX - 1`
*/
export class V1 {
  free(): void;
/**
* 加密(若加密失败则返回空字符串)
* @param {string} str
* @returns {string}
*/
  static encode_base64(str: string): string;
/**
* 解密(若加密失败则返回空字符串)
* @param {string} str
* @returns {string}
*/
  static decode_base64(str: string): string;
}
/**
* 可加密的原文最大长度为 `u32.MAX - 1`
*/
export class V1Fix {
  free(): void;
/**
* 加密(若加密失败则返回空字符串)
* @param {string} str
* @returns {string}
*/
  static encode_base64(str: string): string;
/**
* 解密(若加密失败则返回空字符串)
* @param {string} str
* @returns {string}
*/
  static decode_base64(str: string): string;
}
/**
* 可加密的原文最大长度为 `u32.MAX - 1`
*/
export class V2 {
  free(): void;
/**
* 是否已注册
* @returns {boolean}
*/
  static is_registered(): boolean;
/**
* 注册. 可重复调用(为减少消耗建议先调用 [Self::is_registered] 查看), 新的结果会覆盖旧结果 (若新key无效等效于调用 [Self::unregister]). 返回注册结果
* @param {string} key
* @returns {boolean}
*/
  static register(key: string): boolean;
/**
* 注册. 由于浏览器插件的 background 中没有 window 对象, 此处使用 eval('chrome.runtime.id') 获取插件 id, 以此作为 key 的校验依据
* @param {string} key
* @returns {boolean}
*/
  static register_crx(key: string): boolean;
/**
* 反注册
*/
  static unregister(): void;
/**
* 加密(若未注册或加密失败则返回空字符串)
* @param {string} str
* @param {number | undefined} key_len
* @param {number | undefined} iv_len
* @returns {string}
*/
  static encode_base64(str: string, key_len?: number, iv_len?: number): string;
/**
* 解密(若未注册或加密失败则返回空字符串)
* @param {string} str
* @returns {string}
*/
  static decode_base64(str: string): string;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_v2_free: (a: number) => void;
  readonly v2_is_registered: () => number;
  readonly v2_register: (a: number, b: number) => number;
  readonly v2_register_crx: (a: number, b: number) => number;
  readonly v2_unregister: () => void;
  readonly v2_encode_base64: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly v2_decode_base64: (a: number, b: number, c: number) => void;
  readonly __wbg_v0_free: (a: number) => void;
  readonly v0_encode_base64: (a: number, b: number, c: number) => void;
  readonly v0_decode_base64: (a: number, b: number, c: number) => void;
  readonly __wbg_v1_free: (a: number) => void;
  readonly v1_encode_base64: (a: number, b: number, c: number) => void;
  readonly v1_decode_base64: (a: number, b: number, c: number) => void;
  readonly __wbg_v1fix_free: (a: number) => void;
  readonly v1fix_encode_base64: (a: number, b: number, c: number) => void;
  readonly v1fix_decode_base64: (a: number, b: number, c: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
