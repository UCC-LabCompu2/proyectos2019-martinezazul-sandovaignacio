

function graficar() {

    var canvas = document.getElementById('myCanvas'),
        ctx = canvas.getContext('2d'),
// valores mínimos y máximos de los ejes
        xmin = -10, xmax = 10, ymin = -10, ymax = 10,
//coordenadas
        coordenadax, coordenaday,
//variables matemáticas
        x, y,
//'n' es el número de segmentos de trazo
        n = 100,
// 'p' es el número de segmentos de los ejes
        p = 20,
// variables utilizadas en el lazo for
        i,
// variables que varian entre 0 y 1
        escalax, escalay,
//escalares
        a = document.getElementById('numa').value,
        b = document.getElementById('numb').value,
        c = document.getElementById('numc').value,
        d = document.getElementById('numd').value,
//audio
        audio = new Audio('audio/Ta Da.mp3')

//limpiar el canvas
    ctx.clearRect(0,0, canvas.width, canvas.height);
//Ejes.

    ctx.beginPath();
    ctx.moveTo(0, canvas.height/2);
    ctx.lineTo(canvas.width, canvas.height/2);
    ctx.lineWidth=0.75;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(canvas.width/2, canvas.height);
    ctx.lineTo(canvas.width/2, 0);
    ctx.lineWidth=0.75;
    ctx.stroke();

for (i=0; i<p;i++){
        ctx.font = '15pt Unicode';
        ctx.fillStyle = 'maroon';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        if ((i-10)!=0){
            ctx.fillText(i-10, ( i / p)*canvas.width, canvas.height/2+10);
            ctx.fillText((i-10)*-1, canvas.width/2+10, ( i / p)*canvas.height);
        }
    }

// Dibujar una curva
    ctx.beginPath();
    for (i=0; i<n; i++) {//el lazo for define el trazo
        escalax = i / (n-1);
        x = escalax * (xmax - xmin) + xmin;

        y = Number(a) * Math.pow(x, 3) + Number(b) * Math.pow(x, 2) + Number(c) * x + Number(d);//acá va la función matemática!

        escalay = (y - ymin ) / (ymax - ymin);

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
