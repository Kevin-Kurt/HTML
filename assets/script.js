document.getElementById('bnt').onclick = teste

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (txtEmail.value.indexOf('@') == -1){
        txtEmail.innerHTML = "E-mail invalido"
        txtEmail.style.color = 'red"'
    }

}


