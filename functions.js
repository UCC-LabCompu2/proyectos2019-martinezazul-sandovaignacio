/**
 * Graficador de funciones cúbicas
 * Por Azul Martinez e Ignacio Sandoval
 */


/**
 * Se muestra un recuadro con el gráfico de la función correspondiente
 * @method function graficar
 * @return gráfico de la función
 */
function graficar() {
    var canvas = document.getElementById('myCanvas'),
        ctx = canvas.getContext('2d');
    var xmin = -10, xmax = 10, ymin = -10, ymax = 10,
        audio = new Audio('audio/Ta Da.mp3'),
        p = 20,
        i;
    var escalax, escalay,
        a = document.getElementById('numa').value,
        b = document.getElementById('numb').value,
        c = document.getElementById('numc').value,
        d = document.getElementById('numd').value,
        coordenadax, coordenaday,
        x, y,
        n = 100;


    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ejeX(ctx, canvas.height, canvas.width);
    ejeY(ctx, canvas.height, canvas.width);


    for (i = 0; i < p; i++) {
         ctx.font = '15pt Unicode';
         ctx.fillStyle = 'maroon';
         ctx.textAlign = 'center';
         ctx.textBaseline = 'middle';
         if ((i - 10) != 0) {
             ctx.fillText(i - 10, (i / p) * canvas.width, canvas.height / 2 + 10);
             ctx.fillText((i - 10) * -1, canvas.width / 2 + 10, (i / p) * canvas.height);
         }
     }
    ctx.beginPath();
         //el lazo for define el trazo
    for (i = 0; i < n; i++) {
        escalax = i / (n - 1);
        x = escalax * (xmax - xmin) + xmin;

        y = Number(a) * Math.pow(x, 3) + Number(b) * Math.pow(x, 2) + Number(c) * x + Number(d);

        escalay = (y - ymin) / (ymax - ymin);

        escalay = 1 - escalay;

        coordenadax = escalax * canvas.width;
        coordenaday = escalay * canvas.width;

        ctx.lineTo(coordenadax, coordenaday);
         }
        ctx.strokeStyle = '#eb4f31';
        ctx.lineWidth = 2;
        ctx.stroke();
        audio.play();

 }

/**
 * Se dibuja el eje X por medio de una animación
 * @method function ejeX
 * @param ctx
 * @param alto
 * @param ancho
 * @returns dibujo del eje X
 */
async function ejeX (ctx, alto, ancho){
    ctx.strokeStyle = '#eb4f31';
    ctx.lineWidth = 0.75;
    ctx.beginPath();
    for (let i = 0; i < ancho; i++) {
        await retardo(4)
        ctx.moveTo(0, alto / 2);
        ctx.lineTo(i, alto / 2);
        ctx.stroke();
    }
    ctx.closePath();
}

/**
 * Se dibuja el eje Y por medio de una animación
 * @method ejeY
 * @param ctx
 * @param alto
 * @param ancho
 * @returns dibujo del eje Y
 */
async function ejeY (ctx, alto, ancho){
    ctx.strokeStyle = '#eb4f31';
    ctx.lineWidth = 0.75;
    ctx.beginPath();

    for (let i = 0; i < alto; i++) {
        await retardo(4)
        ctx.moveTo(ancho/2, 0);
        ctx.lineTo(ancho/2, i);
        ctx.stroke();
    }
    ctx.closePath();
}

/**
 * Se genera un retardo para la animación de los ejes
 * @method retardo
 * @param ms
 * @returns
 */
function retardo(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}