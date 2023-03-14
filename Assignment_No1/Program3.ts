// Input : 20
// Output : 1   2   4   5   10

function DisplayFactors(No : number)
{
    let Fact : number = 0
    let Cnt : number = 0

    for(Cnt = 1; Cnt <= No/2; Cnt++)
    {
        if(No % Cnt == 0)
        {
            console.log(Cnt)
        }
    }
}

DisplayFactors(20)
