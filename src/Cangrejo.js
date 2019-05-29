class Cangrejo extends Enemigo {

    constructor(app, seccion, tanda) {
        super(app, seccion, tanda);

        this.imagen.push(
            this.app.loadImage("./imagenes/cangrejo.png")
        );



    }


}