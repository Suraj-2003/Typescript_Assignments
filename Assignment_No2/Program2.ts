// Input : 23   6   7   4   5   7
// Output : Addition is 52

function Summation(Arr : number[]) : number
{
    let Cnt : number = 0
    let Sum : number = 0

    for(Cnt = 0; Cnt < Arr.length; Cnt++)
    {
        Sum = Sum + Arr[Cnt];
    }

    return Sum
}

var Brr : number[] = [23,6,7,4,5,7]
var Ret : number = 0

Ret = Summation(Brr)
console.log("Addition is : "+Ret)
