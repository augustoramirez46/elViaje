class Jugador{
    constructor(app, px){

        this.app = app;
        
        this.px = px;
        
        this.py = 950;

        this.pxF;
        this.pyF;

        this.tam = 50;
        
        this.col;

        this.moverD = this.moverD.bind(this);
        this.derecho = null;

        this.moverI = this.moverI.bind(this);
        this.izquierdo = null;

        this.moverA = this.moverA.bind(this);
        this.arriba = null;

        this.moverAb = this.moverAb.bind(this);
        this.abajo = null;

        this.mov = 0;
        this.indice = 0;
        this.saltin = false;

        this.imagen = [];

        this.wiggle = this.wiggle.bind(this);
        setInterval(this.wiggle, 500);

    }

    pintar(){
        if (this.indice == 0){
        this.app.imageMode(this.app.CENTER);
        this.app.image(this.imagen[this.indice], this.px, this.py, 110, 100);
        } else {
            this.app.imageMode(this.app.CENTER);
            this.app.image(this.imagen[this.indice], this.px, this.py, 100, 100);   
        }
       
    }

    moverD() {

        this.px += 4;
        this.mov += 4;

        if (this.mov == 100) {
            clearInterval(this.derecho);
            this.derecho = null;


            return;
        }


    }

    moverI() {

        this.px -= 4;
        this.mov += 4;

        if (this.mov == 100) {
            clearInterval(this.izquierdo);
            this.izquierdo = null;


            return;
        }


    }

    moverA() {

        this.py -= 4;
        this.mov += 4;

        if (this.mov == 100) {
            clearInterval(this.arriba);
            this.arriba = null;


            return;
        }


    }

    moverAb() {

        this.py += 4;
        this.mov += 4;

        if (this.mov == 100) {
            clearInterval(this.abajo);
            this.abajo = null;


            return;
        }


    }

    wiggle() {
        //animacion de imagen y saltito
        if (this.saltin == false) {
            
            this.indice ++;
            
            this.saltin = true;
        }else{
            
            this.indice --;

            this.saltin = false;
        }


    }




}