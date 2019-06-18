const { succeed, fail, repair } = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {

    describe('repair()', () => {
        it('restores durability to 100', () => {
        expect(repair({ durability: 25 }).durability).toBe(100);
        expect(repair({ durability: -5 }).durability).toBe(100);
        expect(repair({ durability: 4.5}).durability).toBe(100);
        expect(repair({ durability: 100}).durability).not.toBe(55);
        expect(repair({ durability: 55}).durability).not.toBeGreaterThan(100);
        expect(repair({ durability: 'carry'}).durability).not.toBeNaN();
        })
    });
    
    describe('succeed()', () => {
        it('enhancement + 1 under 20', () => {
        expect(succeed({ enhancement: 13 }).enhancement).toBe(14);
        expect(succeed({ durability: 50 }).durability).toBe(50);
        })
    })

    describe('fail()', () => {
        it('enhancement + 1 under 16 etc.', () => {
        expect(fail({ enhancement: 13 }).enhancement).toBe(13);
        expect(fail({ enhancement: 17 }).enhancement).toBe(16);
        expect(fail({ enhancement: 15, durability: 45 }).durability).toBe(35);
        expect(fail({ enhancement: 25, durability: 65 }).durability).toBe(55);
        expect(fail({ enhancement: 12, durability: 35 }).durability).toBe(30);

        })
    })

})
//test and it are basically the same thing.