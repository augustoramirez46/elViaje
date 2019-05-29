class Medusa extends Enemigo {

    constructor(app, seccion, tanda) {
        super(app, seccion, tanda);

        this.imagen.push(
            this.app.loadImage("./imagenes/medusa.png")
        );



    }


}