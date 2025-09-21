//Pyramid of stars

var i,j;
var str="";

for(i=1;i<10;i++){
    str="";
    k=2;
    for(j=10;j>i;j--)
    {
        str= str + " ";
    }
    // for(k=2;k<=i*2;k++)
    // {
    //     str= str + "*";
    // }

    // OR
    while(k<=i*2){
        str= str + "*";
        k++;
    }
    console.log(str);
}

