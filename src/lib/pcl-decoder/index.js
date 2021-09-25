import wasm from './index_bg.wasm';

const heap = new Array(32);

heap.fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}
/**
* @returns {any}
*/
export function get_memory() {
    const ret = wasm.get_memory();
    return takeObject(ret);
}

/**
* @returns {number}
*/
export function get_memory_width() {
    const ret = wasm.get_memory_width();
    return ret >>> 0;
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

let WASM_VECTOR_LEN = 0;

let cachedTextEncoder = new TextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory;
}

function passStringToWasm(arg) {

    let len = arg.length;
    let ptr = wasm.__wbindgen_malloc(len);

    const mem = getUint8Memory();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = wasm.__wbindgen_realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

let cachegetInt32Memory = null;
function getInt32Memory() {
    if (cachegetInt32Memory === null || cachegetInt32Memory.buffer !== wasm.memory.buffer) {
        cachegetInt32Memory = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

function getStringFromWasm(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}
/**
*/
export class PCLDecoder {

    static __wrap(ptr) {
        const obj = Object.create(PCLDecoder.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_pcldecoder_free(ptr);
    }
    /**
    * @returns {PCLDecoder}
    */
    constructor() {
        const ret = wasm.pcldecoder_new();
        return PCLDecoder.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    get_copy_memory_ptr() {
        const ret = wasm.pcldecoder_get_copy_memory_ptr(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get_position_memory_ptr() {
        const ret = wasm.pcldecoder_get_position_memory_ptr(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get_color_memory_ptr() {
        const ret = wasm.pcldecoder_get_color_memory_ptr(this.ptr);
        return ret;
    }
    /**
    * @param {number} num_points
    * @param {number} point_step
    * @param {number} offset_x
    * @param {number} offset_y
    * @param {number} offset_z
    * @param {number} offset_rgb
    * @param {number} offset_intensity
    * @param {boolean} use_intensity_channel
    * @param {boolean} use_rainbow
    */
    compute(num_points, point_step, offset_x, offset_y, offset_z, offset_rgb, offset_intensity, use_intensity_channel, use_rainbow) {
        wasm.pcldecoder_compute(this.ptr, num_points, point_step, offset_x, offset_y, offset_z, offset_rgb, offset_intensity, use_intensity_channel, use_rainbow);
    }
}

export const __wbindgen_memory = function() {
    const ret = wasm.memory;
    return addHeapObject(ret);
};

export const __wbg_new_59cb74e423758ede = function() {
    const ret = new Error();
    return addHeapObject(ret);
};

export const __wbg_stack_558ba5917b466edd = function(arg0, arg1) {
    const ret = getObject(arg1).stack;
    const ret0 = passStringToWasm(ret);
    const ret1 = WASM_VECTOR_LEN;
    getInt32Memory()[arg0 / 4 + 0] = ret0;
    getInt32Memory()[arg0 / 4 + 1] = ret1;
};

export const __wbg_error_4bb6c2a97407129a = function(arg0, arg1) {
    const v0 = getStringFromWasm(arg0, arg1).slice();
    wasm.__wbindgen_free(arg0, arg1 * 1);
    console.error(v0);
};

export const __wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
};

export const __wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm(arg0, arg1));
};

