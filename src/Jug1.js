class Jugador1 extends Jugador {

    constructor(app, px) {
        super(app, px);

        this.col = this.app.color(
            25,
            25,
            255,
        )
        for (let i = 0; i < 2; i++) {

            this.imagen.push(
                this.app.loadImage(
                    './imagenes/' + (i + 1) + 'c.png')
            );
        }

    }

    mover() {

        //derecha
        if (this.px < 650 && this.app.keyCode == 68) {
            if (
                this.derecho == null &&
                this.izquierdo == null &&
                this.arriba == null &&
                this.abajo == null) {

                this.mov = 0;
                this.derecho = setInterval(this.moverD, 1);
                return;
            }
        }

        //izquierda
        if (this.px > 50 && this.app.keyCode == 65) {
            if (
                this.derecho == null &&
                this.izquierdo == null &&
                this.arriba == null &&
                this.abajo == null) {

                this.mov = 0;
                this.izquierdo = setInterval(this.moverI, 1);
                return;
            }
        }

        //arriba
        if (this.py > 50 && this.app.keyCode == 87) {
            if (
                this.derecho == null &&
                this.izquierdo == null &&
                this.arriba == null &&
                this.abajo == null) {

                this.mov = 0;
                this.arriba = setInterval(this.moverA, 1);
                return;
            }
        }

        //abajo
        if (this.py < 950 && this.app.keyCode == 83) {
            if (
                this.derecho == null &&
                this.izquierdo == null &&
                this.arriba == null &&
                this.abajo == null) {

                this.mov = 0;
                this.abajo = setInterval(this.moverAb, 1);
                return;
            }
        }



    }
}