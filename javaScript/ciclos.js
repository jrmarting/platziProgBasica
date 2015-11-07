 var c, t, b;

    function inicioCiclos()
    {
        c = document.getElementById("caja");
        t = document.getElementById("alejandra");
        b = document.getElementById("botoncito");

        b.addEventListener("click", calcular);


        // var residuo;
        // while(numeros <= 50)
        // {
        //      residuo = numeros % 2;
        //      if(residuo == 0)
        //      {
        //          c.innerHTML += " " + numeros;
        //     }
        //     numeros++;
        // }
    }

    function calcular()
    {
        var numero = Number(t.value);
        var calculo = 1;
        var n;
        // while(n <= numero)
        // {
        //     calculo = calculo * n;
        //     n++;
        // }
        for(n=1; n <= numero; n++)
        {
            calculo = calculo * n;
        }
        c.innerHTML = "<strong>" + calculo + "</strong>";
    }