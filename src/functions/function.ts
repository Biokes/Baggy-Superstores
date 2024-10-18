
export default function GeneratePrice():number{
    const randomBuffer = new Uint32Array(1);
    crypto.getRandomValues(randomBuffer);
    const min = 10;
    const range =30;
    const randomNumber = randomBuffer[0] / (0xFFFFFFFF + 1);
    return Math.floor(randomNumber * range) + min;
}