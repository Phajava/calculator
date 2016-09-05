 function Check (Eingabe) { 
    var nur_das = "0123456789[]()-+*%/."; 
      for (var i = 0; i < Eingabe.length; i++) 
       if (nur_das.indexOf(Eingabe.charAt(i)) < 0) 
         return false; 
           return true; 
  }
 
  function result () { 
    var x = 0; 
    if (Check(window.document.calculator.Display.value)) 
      x = eval(window.document.calculator.Display.value); 
     window.document.calculator.Display.value = x; 
   } 
 
  function toAdd (Zeichen) { 
    window.document.calculator.Display.value = window.document.calculator.Display.value + Zeichen; 
  } 
 
  function Sonderfunktion (Funktion) { 
    if (Check(window.document.calculator.Display.value)) { 
      if (Funktion == "sqrt") { 
        var x = 0; x = eval(window.document.calculator.Display.value); 
        window.document.calculator.Display.value = Math.sqrt(x); 
      } 
     } 
    else window.document.calculator.Display.value = 0
  } 
