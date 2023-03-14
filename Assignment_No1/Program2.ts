// Input : 5
// Output : Area of circle is : 78.5

function Area(Radius : number, PI : number = 3.14) : number
{
    return PI * Radius * Radius
}

var Ret : number = 0

Ret = Area(5)

console.log("Area of circle is : "+Ret)
