// Input : "pune kothrud Marvellous Infosystems"
// Output : String contains Marvellous in it.

function ChkString(str : string) : boolean
{
    let Cnt : number = 0
    let bFlag : boolean = false
    let Arr : string[] = str.split(' ');
    
    while(Cnt < Arr.length)
    {
        if(Arr[Cnt] == "Marvellous")
        {
            bFlag = true
            break;
        }
        Cnt++;
    }
    return bFlag 
}

var Data : string = "pune kothrud Marvellous Infosystems"
var bRet : boolean

bRet = ChkString(Data)

if(bRet == true)
{
    console.log("String contains Marvellous in it")
}
else
{
    console.log("String contains no Marvellous in it")
}
