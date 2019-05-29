class Enemigo {
    constructor(app, seccion, tanda) {

        this.app = app;

        this.sc1 = [650, 750, 850];
        this.sc2 = [250, 350, 450];

        this.sele = [0, 1, 2];

        this.ubi = seccion;

        if (seccion == 1) {

            let a = this.app.random(this.sele);

            

            this.py = this.sc1[a];


        }

        if (seccion == 2) {

            let a = this.app.random(this.sele);

            this.py = this.sc2[a];


        }
        console.log("tanda" + tanda)
        if (tanda == 1) {
            this.px = this.app.random(0, this.app.width);
        }

        if (tanda == 2) {

            switch (this.ubi) {
                case 1:
                        this.px = this.app.random(700, 900);


                    break;

                case 2:

                    

                    this.px = this.app.random(-200, 0);
                    break;

            }

        }




        this.moverD = this.moverD.bind(this);
        this.derecho = null;

        this.moverI = this.moverI.bind(this);
        this.izquierdo = null;

        this.timer = this.timer.bind(this);
        setInterval(this.timer, 1000);


        this.mov = 0;

        this.imagen = [];

    }

    pintar() {

        if (this.ubi == 1) {
        this.app.imageMode(this.app.CENTER);
        this.app.image(this.imagen[0], this.px, this.py);
        }

        if (this.ubi == 2) {
            this.app.imageMode(this.app.CENTER);
            this.app.push();
            this.app.translate(this.px, this.py);
            this.app.scale(-1,1);
            this.app.image(this.imagen[0], 0, 0);
            this.app.pop();
            
            }
        

        // push, scale -1 1 , translate px y py, image en 0,0 antes o despues del translate, pop



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

    timer() {

        if (this.ubi == 2) {
            if (
                this.derecho == null &&
                this.izquierdo == null) {

                this.mov = 0;
                this.derecho = setInterval(this.moverD, 10);
                return;
            }
        }

        if (this.ubi == 1) {
            if (
                this.derecho == null &&
                this.izquierdo == null) {

                this.mov = 0;
                this.izquierdo = setInterval(this.moverI, 10);
                return;
            }
        }



    }



}