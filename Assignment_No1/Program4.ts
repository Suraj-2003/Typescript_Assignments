// Input : 11
// Output : It is prime number

function ChkPrime(No : number) : boolean
{
    let Cnt : number = 0
    let Count : number = 0
    
    for(Cnt = 2; Cnt <= No/2; Cnt++)
    {
        if(No % Cnt == 0)
        {
            Count++
        }
    }

    if(Count == 0)
    {
        return true
    }
    else
    {
        return false
    }
}

var bRet : boolean

bRet = ChkPrime(11)

if(bRet == true)
{
    console.log("It is prime number")
}
else
{
    console.log("It is not prime number")
}
