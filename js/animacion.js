function tierra_luna() {
    var elem = document.getElementById("haz_luz");
    var texto = document.getElementById("dato_tiempo");
    var etiquetaTitulo = document.getElementById("HazLuzEtiquetaTitulo");
    var boton = document.getElementById("botones_datos");

    var pos = 70;
    var pos2 = 190;
    var pos3 = 0;
    var pausa = 0;
    var id = setInterval(frame, 30);

    boton.style.display="none";
    texto.innerHTML = "Iniciando";
    elem.style.top = pos + 'px';
    elem.style.left = pos2 + 'px';
    etiquetaTitulo.innerHTML = "Haz de Luz | Luna - Tierra";

    function frame() {
        if (pausa >= 80) {
            if (pos >= 440 && pos2 <= 15) {

                clearInterval(id);
                texto.innerHTML = "1.28 Segundos/Luz";
                boton.style.display="block";

            } else {

                if (pos < 440) {
                    pos = pos + 2.1;
                }

                if (pos2 > 10) {
                    pos2--;
                }

                if (Number(pos3).toFixed(2) < 1.28) {
                    pos3 = pos3 + 0.007;
                }

                elem.style.top = pos + 'px';
                elem.style.left = pos2 + 'px';
                texto.innerHTML = Number(pos3).toFixed(2) + ' Segundos/Luz'
            }
        } else {

            if (pausa == 20) {
                texto.innerHTML = "Iniciando en 3";
            } else if (pausa == 40) {
                texto.innerHTML = "Iniciando en 2";
            } else if (pausa == 60) {
                texto.innerHTML = "Iniciando en 1";
            }

            pausa++;
        }
    }
}

function tierra_estrella() {
    var elem = document.getElementById("haz_luz");
    var texto = document.getElementById("dato_tiempo");
    var etiquetaTitulo = document.getElementById("HazLuzEtiquetaTitulo");
    var boton = document.getElementById("botones_datos");

    var pos = 80;
    var pos2 = -410;
    var pos3 = 0;
    var pausa = 0;
    var id = setInterval(frame, 20);

    boton.style.display="none";
    texto.innerHTML = "Iniciando";
    elem.style.top = pos + 'px';
    elem.style.left = pos2 + 'px';
    etiquetaTitulo.innerHTML = "Haz de Luz | Estrella - Tierra";

    function frame() {
        if (pausa >= 120) {
            if (pos >= 440 && pos2 >= 0) {

                clearInterval(id);
                texto.innerHTML = "8.61 Años/Luz";
                boton.style.display="block";

            } else {

                if (pos < 440) {
                    pos = pos + 0.88;
                }
                if (pos2 < 0) {
                    pos2 = pos2 + 1;
                }
                if (Number(pos3).toFixed(2) < 8.61) {
                    pos3 = pos3 + 0.0224;
                }

                elem.style.top = pos + 'px';
                elem.style.left = pos2 + 'px';
                texto.innerHTML = Number(pos3).toFixed(2) + ' Años/Luz';
            }
        } else {

            if (pausa == 30) {
                texto.innerHTML = "Iniciando en 3";
            } else if (pausa == 60) {
                texto.innerHTML = "Iniciando en 2";
            } else if (pausa == 90) {
                texto.innerHTML = "Iniciando en 1";
            }

            pausa++;
        }
    }
}
