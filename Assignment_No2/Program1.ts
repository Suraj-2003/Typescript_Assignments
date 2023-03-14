// Input : 23   89  6   29  56  45  77  32
// Output : 89

function Maximum(Arr : number[]) : number
{
    let Cnt : number = 0
    let Max : number = Arr[Cnt]

    for(Cnt = 0; Cnt < Arr.length; Cnt++)
    {
        if(Arr[Cnt] > Max)
        {
            Max = Arr[Cnt];
        }
    }

    return Max
}

var Brr : number[] = [23,89,6,29,56,45,77,32]
var Ret : number = 0

Ret = Maximum(Brr)

console.log("Maximum number is : "+Ret)
