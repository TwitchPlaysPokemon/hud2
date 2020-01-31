export default function ZeroPad(value: number, length = 1) {
    let outstr = value.toString();
    while (outstr.length < length)
        outstr = '0' + outstr;
    return outstr;
}