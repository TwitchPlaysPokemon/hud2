export default function Duration(seconds: number, splits: { [key: string]: number } = { d: 24, h: 60, m: 60, s: 1 }) {
    const result: typeof splits = {};
    Object.keys(splits).forEach((s, i, arr) => {
        result[s] = Math.floor(arr.filter((_, ai) => ai >= i).reduce((total, key) => total / splits[key], seconds));
        if (i) {
            result[s] %= splits[arr[i - 1]];
        }
    });
    return result;
}