export default interface bencode {
    // todo: stricter typing?
    encode(data: any, buffer?: Buffer, offest?: number): Buffer;

    decode(data: Buffer | string, start?: number, end?: number, encoding?: any): any;
}