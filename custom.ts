
/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    //% block
    //% blockSetVariable
    export function filterChar(i: string): number {
        // Add code here
        let input = i
        output = parseInt(input);
        return output;
    }

    //% block
    //% blockSetVariable
    export function antiNeg(n: number): number {
        // Add code here
        let negn = n
        let outputn = Math.abs(negn);
        return outputn;
    }
}
