function tieneMayusculasOCaracteresEspeciales(texto) {
    const regexMayusculas = /[A-Z]/;
    const regexCaracteresEspeciales = /[^a-z0-9\s]/; // Permite solo letras minúsculas, números y espacios
    return regexMayusculas.test(texto) || regexCaracteresEspeciales.test(texto);
}

function encriptar() {
    var texto = document.querySelector("#input-texto").value;
    if (tieneMayusculasOCaracteresEspeciales(texto)) {
        alert('El texto no debe contener mayúsculas ni caracteres especiales.');
    } else {
        var textoCifrado = texto.replace(/e/gi, "enter")
                                .replace(/i/gi, "imes")
                                .replace(/a/gi, "ai")
                                .replace(/o/gi, "ober")
                                .replace(/u/gi, "ufat");
        document.querySelector(".text-input-salida").value = textoCifrado;
    }
}

function desencriptar() {
    var texto = document.querySelector("#input-texto").value;
    if (tieneMayusculasOCaracteresEspeciales(texto)) {
        alert('El texto no debe contener mayúsculas ni caracteres especiales.');
    } else {
        var textoCifrado = texto.replace(/enter/gi, "e")
                                .replace(/imes/gi, "i")
                                .replace(/ai/gi, "a")
                                .replace(/ober/gi, "o")
                                .replace(/ufat/gi, "u");
        document.querySelector(".text-input-salida").value = textoCifrado;
    }
}

document.querySelector("#btn-encriptar").onclick = encriptar;
document.querySelector("#btn-desencriptar").onclick = desencriptar;
