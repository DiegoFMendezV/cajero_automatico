let cuenta1 = { nombre: 'Diego', saldo: 200, contraseña: 1234}
let cuenta2 = { nombre: 'Julie', saldo: 290, contraseña: 4321}
let cuenta3 = { nombre: 'Isabella', saldo: 150, contraseña: 1020}

function login(){
  let user = document.getElementById("name").value
  let pass = document.getElementById("password").value
  if (user==cuenta1.nombre && pass==cuenta1.contraseña || user==cuenta2.nombre && pass==cuenta2.contraseña || user==cuenta3.nombre && pass==cuenta3.contraseña) {
    location="cajero.html";
  }else{
    alert('Datos incorrectos')
  }
}

let saldoactual = 200

function saldo(){
alert('Tu saldo actual es de $ ' + saldoactual)
}

function retirar(){
  const monto = prompt('Digite el monto que desea retirar')
  if (monto > saldoactual) {
    alert('Saldo insuficiente')
  }else{
    alert('Retiro exitosamente')
    saldoactual = saldoactual - monto
    alert('Su nuevo saldo es de $' + saldoactual)
  }
}

function consignar(){
  const consignar = parseInt(prompt('Digite el monto que desea consignar'))
    alert('Consignación exitosamente')
    saldoactual = saldoactual + consignar
    alert('Tu nuevo saldo es de $' + saldoactual)
}