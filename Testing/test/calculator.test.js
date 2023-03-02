const mathOperations=require('../src/calculator');
describe("calculator tests",()=>{
    test("sum of 2 numbers",()=>{
        var result=mathOperations.sum(1,2);
        expect(result).toBe(3)
    })
    test("sub of 2 numbers",()=>{
        var result=mathOperations.sub(2,2)
        expect(result).toBe(0)
    })
    test("mul of 2 numbers",()=>{
        var result=mathOperations.mul(2,2)
        expect(result).toBe(4)
    })
    test("div of 2 numbers",()=>{
        var result=mathOperations.div(2,2)
        expect(result).toBe(1)
    })
})