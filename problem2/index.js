function generateresult()
{
    
      var a=(document.getElementById('mainvalue').value);
     
      var b=(document.getElementById('percentagetip').value); 
      
      var c= (a*b)/100;
      
      document.getElementById('tipamount').innerHTML=c;
      var sum=(Number(a)+c);
     
      document.getElementById('Totalamount').innerHTML=sum;
}
