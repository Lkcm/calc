console.log("Ola mundo")

function calcularMais() {
    var n1 = Number(document.getElementById("n1+").value)
    var n2 = Number(document.getElementById("n2+").value)
    var somamais = document.getElementById("somamais")

    if (somamais.textContent === undefined) {
        somamais.textContent = (n1 + n2).toFixed(2)
    }
    else {
       somamais.innerText = (n1 + n2).toFixed(2)
    }
}  

function calcularMenos() {
    var n1 = Number(document.getElementById("n1-").value)
    var n2 = Number(document.getElementById("n2-").value)
    var somamenos = document.getElementById("somamenos")

    if (somamenos.textContent === undefined) {
        somamenos.textContent =  (n1 - n2).toFixed(2)
    }
    else {
        somamenos.innerText = (n1 - n2).toFixed(2)
    }
}

function calcularVezes() {
    var n1 = Number(document.getElementById("n1*").value)
    var n2 = Number(document.getElementById("n2*").value)
    var somavezes = document.getElementById("somavezes")

    if (somavezes.textContent === undefined) {
        somavezes.textContent = (n1 * n2).toFixed(2)
    }
    else {
        somavezes.innerText = (n1 * n2).toFixed(2)
    }
}

function calcularDivide() {
    var n1 = Number(document.getElementById("n1/").value)
    var n2 = Number(document.getElementById("n2/").value)
    var somadivide = document.getElementById("somadivide")

    if (somadivide.textContent === undefined) {
        somadivide.textContent = (n1 / n2).toFixed(2)
    }
    else {
        somadivide.textContent = (n1 / n2).toFixed(2)
    }
}

var n1= 

function calcularSomaRandom() {
    var n1 = Number(document.getElementById("n1+&").value)
    var n2 = Number(document.getElementById("n2+&").value)
    var somarandom = document.getElementById("somarandom")

    if (somarandom.textContent === undefined) {
        somarandom.textContent = (Math.randon(n1) / n2).toFixed(2)
    }
    else {
        somarandom.textContent = (n1 / n2).toFixed(2)
    }
} 





































































// let r1 = 1

// let r2 = 2

// let inputN1 = document.getElementById("n1");

// let inputN2 = document.getElementById("n2");

// let result = document.getElementById("resultado");

// function calculator() {
//     console.log("Calculando...");

//     let n1 = parseInt(inputN1.value);
//     let n2 = parseInt(inputN2.value);
//     let soma = n1+n2;

//     result.innerHTML = `${soma}`;
//     console.log(soma);
// }

// function inputN1(input) {
//     let n1 = document.getElementById("n1");
//     let r1 = n1.innerText = input.value;
//     console.log(r1)
//     return r1
// }

// function inputN2(input) {
//     let n2 = document.getElementById("n2");
//     let r2 = n2.innerText = input.value;
//     console.log(r2)
//     return r2
// }

    // let num1 = document.getElementsByClassName("n1")[0];
    // let num2 = document.getElementsByClassName("n2")[0];
    // let numero1 = parseInt(num1.textContent);
    // let numero2 = parseInt(num2.textContent);
    // let soma = numero1+numero2;
    
    // document.getElementById("soma").innerHTML = (soma)
    // document.getElementById("soma").innerHTML = `${soma} `


