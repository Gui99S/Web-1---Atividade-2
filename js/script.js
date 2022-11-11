function pegaUsername() {
    var username = document.getElementById("id-username").value;
    console.log(username.length);
    return username;
}

function pegaPassword() {
    var password = document.getElementById("id-password").value;
    console.log("Senha digitada: " + password);
    return password;
}

function validarLogin() {
    var username = pegaUsername();
    var password = pegaPassword();

    if(username.length < 1) {
      alert("Preencha o campo NOME DE USUÁRIO!");
      document.querySelector("id-username").focus();
    }

    if(password.length < 1) {
      alert("Preencha o campo SENHA!");
      document.querySelector("id-password").focus();
    }

    if(username.length > 0 && password.length > 0) {
        if(username == "admin" && password == "admin") {
          alert("Login efetuado com sucesso!");
          window.location.replace("index.html");
        } else {
          alert("Usuário ou senha inválido!");
          document.getElementById("id-username").value="";
          document.getElementById("id-password").value="";
          document.getElementById("id-username").focus();
        }
    }
}
