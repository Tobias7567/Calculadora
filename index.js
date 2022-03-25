var operandoa;
var operandob;
var operacion;
function init(){
    //variables
    var resultado = document.getElementById('resultado');
    var cuenta = document.getElementById('cuenta');
    var restaurar = document.getElementById('restaurar');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var punto = document.getElementById('punto');
    var igual = document.getElementById('igual');
    var calculadora = document.getElementById('calculadora')
  }
  init()
  calculadora.addEventListener('click', agregarnumero); 
  suma.addEventListener('click' , sumar) 
  resta.addEventListener('click' , restar) 
  multiplicacion.addEventListener('click' , multiplicar) 
  division.addEventListener('click' , dividir) 
  igual.addEventListener('click' , igualdad) 
  restaurar.addEventListener('click' , resetear ) 
  restaurar.addEventListener('click' , limpiarcuenta ) 
  punto.addEventListener('click' , punto1) 
       
  
  function agregarnumero (e){
                              if(e.target.classList.contains('numero')) {
                               let datosnumeros = e.target.parentElement ;
                                 const infonumeros = datosnumeros.querySelector('#datodenumero').textContent 
                                  resultado.textContent= resultado.textContent + infonumeros ;
                           }}

function punto1 ()  {
                    resultado.textContent= resultado.textContent + "."
                }

function mostracuenta() {
                   cuenta.textContent = operandoa + operacion + operandob
                 }

 function sumar ()  {
                    operandoa = resultado.textContent;
                   operacion = "+"
                   limpiar()
                }
function restar ()  {
                    operandoa = resultado.textContent;
                   operacion = "-"
                   limpiar()
                }
function multiplicar ()  {
                    operandoa = resultado.textContent;
                   operacion = "*"
                   limpiar()
                }
function dividir ()  {
                    operandoa = resultado.textContent;
                   operacion = "/"
                   limpiar()
                }
function igualdad()    {
                    operandob = resultado.textContent;
                    console.log(operandob)
                    resolver()
                }
function limpiar(){
                    resultado.textContent = "";
                  
                  }
function resetear(){
                    resultado.textContent = "";
                    operandoa = 0;
                    operandob = 0;
                    operacion = "";

                  }
 function limpiarcuenta () {
                    cuenta.textContent = "" ; 
                  }
function resolver(){
                    var res = 0;
                    switch(operacion){
                      case "+":
                        res = parseFloat(operandoa) + parseFloat(operandob);
                        break;
                  
                      case "-":
                          res = parseFloat(operandoa) - parseFloat(operandob);
                          break;
                  
                      case "*":
                        res = parseFloat(operandoa) * parseFloat(operandob);
                        break;
                  
                      case "/":
                        res = parseFloat(operandoa) / parseFloat(operandob);
                        break;
                    }
                    mostracuenta()                 
                    resetear();
                  
                    resultado.textContent = res;
                  }

                
        