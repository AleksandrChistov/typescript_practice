import {getUnique, isInArray, sumator, turnWords} from "./main";

describe('isInArray: function', () => {
    it('should return false if the array does not contain this arguments', () => {
        const result = isInArray([5, '8', false], 5, '12', false);

        expect(result).toBeFalsy();
    })

    it('should return true if the array contains this arguments', () => {
        const result = isInArray([5, '8', false], '8', 5, false);

        expect(result).toBeTruthy();
    })
})

describe('sumator: function', () => {
    it('should throw error if one of arguments is Infinity', () => {
        expect(() => sumator('10', Infinity)).toThrowError('The function accepts only arguments as numbers!');
    })

    it('should throw error if one of arguments is NaN', () => {
        expect(() => sumator(NaN, 20)).toThrowError('The function accepts only arguments as numbers!');
    })

    it('should throw error if one of arguments is "10px"', () => {
        expect(() => sumator('10px', 20)).toThrowError('The function accepts only arguments as numbers!');
    })

    it('should throw error if one of arguments is type of boolean', () => {
        expect(() => sumator(true, 20)).toThrowError('The function accepts only arguments as numbers!');
    })

    it('should return 30 if the arguments "10" и 20', () => {
        const result = sumator('10', 20);

        expect(result).toBe(30);
    })
})

describe('getUnique: function', () => {
    it('should return array with unique arguments', () => {
        const result = getUnique([1, 'str', false, 'str', {name: 'Alex'}, 1, null]);

        expect(result).toEqual([1, 'str', false, {name: 'Alex'}, null]);
    })
})

describe('turnWords: function', () => {
    it('should return a reversed string with symbols at the same positions', () => {
        const result = turnWords('s1ta$%r3t 2 hel^lo');

        expect(result).toBe('t1ra$%t3s 2 oll^eh');
    })

    it('should return a reversed string with symbols at the same positions', () => {
        const result = turnWords('s1tar3t 2 hello');

        expect(result).toBe('t1rat3s 2 olleh');
    })

    it('should return a reversed string with symbols at the same positions', () => {
        const result = turnWords('s@tar3t 2   hel5');

        expect(result).toBe('t@rat3s 2   leh5');
    })
})