function ChkArmstrong(No : number) : boolean
{
    var temp : number = 0
    var Cnt : number = 0
    
    var Sum : number = 0
    var Mul : number = 1
    var i  : number = 0
    var Digit : number  = 0

    temp = No

    while(No != 0)
    {
        Cnt++
        No = No / 10
    }

    No = temp
   
    while(No != 0)
    {
        Digit = No % 10
        Mul = 1
        for(i = 0; i < Cnt; i++)
        {
            Mul = Mul * Digit
        }

        Sum = Sum + Mul
        No = No / 10
            
    }

    if(Sum == temp)
    {
        return true
    }
    else
    {
        return false
    }
}

var bRet : boolean

bRet = ChkArmstrong(153)

if(bRet == true)
{
    console.log("It is Armstrong number")
}
else
{
    console.log("It is not Armstrong number") 
}
