console.log("Ola mundo")


    let n1 = document.getElementsByClassName("n1")[0];
    let n2 = document.getElementsByClassName("n2")[0];
    let numero1 = parseInt(n1.textContent);
    let numero2 = parseInt(n2.textContent);
    let soma = numero1+numero2;
    
    document.getElementById("soma").innerHTML = (soma)
    // document.getElementById("soma").innerHTML = `${soma} `

    


