declare const bencode: {
    encode(data: any, buffer?: Buffer, offest?: number): Buffer;
    decode(data: Buffer | string, start?: number, end?: number, encoding?: any): any;
};

export default bencode;
