function tierra_luna() {
    var elem = document.getElementById("haz_luz");
    var texto = document.getElementById("dato_tiempo");

    var pos = 450;
    var pos2 = 50;
    var pos3 = 0;
    var id = setInterval(frame, 30);

    texto.innerHTML = "Iniciando";
    elem.style.top = pos + 'px';
    elem.style.left = pos2 + 'px';

    function frame() {
        if (pos <= 70 && pos2 >= 230) {
            clearInterval(id);
        } else {

            if (pos > 70) {
                pos = pos - 2.1;
            }
            if (pos2 < 230) {
                pos2++;
            }
            if (Number(pos3).toFixed(2) < 1.26) {
                pos3 = pos3 + 0.007;
            }

            elem.style.top = pos + 'px';
            elem.style.left = pos2 + 'px';
            texto.innerHTML = Number(pos3).toFixed(2) + ' segundos/luz'
        }
    }
}

function tierra_estrella() {
    var elem = document.getElementById("haz_luz");
    var texto = document.getElementById("dato_tiempo");

    var pos = 450;
    var pos2 = 50;
    var pos3 = 0;
    var id = setInterval(frame, 20);

    texto.innerHTML = "Iniciando";
    elem.style.top = pos + 'px';
    elem.style.left = pos2 + 'px';

    function frame() {
        if (pos <= 60 && pos2 <= -360) {
            clearInterval(id);
            texto.innerHTML = "8.61 años/luz";
        } else {

            if (pos > 60) {
                pos--;
            }
            if (pos2 > -360) {
                pos2 = pos2 - 1.055;
            }
            if (Number(pos3).toFixed(2) < 8.61) {
                pos3 = pos3 + 0.0224;
            }

            elem.style.top = pos + 'px';
            elem.style.left = pos2 + 'px';
            texto.innerHTML = Number(pos3).toFixed(2) + ' años/luz';
        }
    }
}
