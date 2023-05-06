// Problem:1
// Explanation: A simple program to calculate a final value by doing multiplication,addition, division and substraction of an input

function mindGame(num)
{   
    if(typeof(num)=='number')
    {
        let finalValue= (((num*3)+10)/2)-5;
        return finalValue;
        
    }
    else
    {
        return 'Error:please give a number';
    }
}



// Problem:2
// Explanation: This problem is for showing "even" if the string's length is even and showing "odd" if the length is odd.

function evenOdd(MyString)
{
   if(typeof(MyString)!=='string')
   {
    return "Error: Please give a string"
 
   }
   else
   {
     let stringLength=MyString.length;
     if(stringLength % 2==0)
      {
        return "even"
      }
      else
      {
        return "odd"
      }
   }

}


// Problem:3
// Explanation: In this problem we have to input a number. Then we will subtract 7 from the input. If the recent value will less than 7, return the value. Otherwise return the double of input

function isLGSeven(number)
{
  if(typeof( number)=='number')
  {
    let substract= number-7;
    if(substract<7)
    {
        return substract;
    }
    else
    {
        return number*2;
    }

  }
  else{
    return "Error! give a number";
  }

}



// Problem:4
// Explanation: We have to count how many negative numbers in an array and return it. Here negative means Bad data and positive means Good Data

function findingBadData(MyArray)
{
   if(Array.isArray(MyArray)== true)
   { 
    let count=0;
     for(let i=0; i<MyArray.length; i++)
     {
       let elements= MyArray[i];
       if(elements<0)
     {
        count=count+1;
     }
     }
     return count
   }
   else
   {
    return "Error! Give array";
   }
}


// Problem:5
// Explanation: We have to convert gems into diamond. we have to multiple each number with each power of friend. Then if the total is bigger then 2000, we will minus 2000 from the total number of diomond and return it. If the value will less than 2000 we will directly return the total diamond.

function gemsToDiamond(num1,num2,num3)
{
   if(typeof(num1 && num2 && num3)== 'number')
   {
      let totalDiamond= ((num1*21)+(num2*32)+(num3*43));
      if(totalDiamond>1000*2)
      {
        return totalDiamond-2000;
      }
      else
      {
        return totalDiamond;
      }
   }
   else
   {
    return "Error! Please give every parameter value as number";
   }
}
