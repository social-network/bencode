import encode from './encode.js'
import decode from './decode.js'
import encodingLength from './encoding-length.js'

const bencode = {
    encode,
    decode,
    byteLength: encodingLength,
    encodingLength
}

export default bencode
