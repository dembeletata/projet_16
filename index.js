// alert('le fichiedr fonctionne');
  /*console.log("hello");4
  var untext = "voici un text";
  console.log(untext);
  var untext = "voici...";
  console.log(untext);*/

  /*let x=50;
  let y=10;
  if (x>y) {
    y=(x-40)/(x/10)+8;
    console.log(y);
    
  } else(console.log(x));*/
  
  /*let x=6;
  let y="5";

  if (x === y) {
    console.log("true !");
    
  } else if (x == y) {
    console.log("x et y egaux en valeur");
  } else {
    console.log(x + " et " + y + " ne sont pas egaux");
    console.log(`${x} et ${y} ne sont pas egaux`);

  }*/

  let total = 0;
  function addittion(x) {
    total += x;
    return total;  
  }

  function soustraction(x) {
    total -= x;
    return total; 
  }

  function division(x) {
    if (total === 0) {
      return (total =x);
      
    } else {
      total /= x;
      return total; 
    }
    
  }

  function multiplication(x) {
    if (total === 0) {
      return (total =x);
      
    } else {
      total *= x;
      return total; 
    }
    
  }

  function reset() {
    total = 0;
  }