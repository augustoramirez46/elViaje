class Pez extends Enemigo {

    constructor(app, seccion, tanda) {
        super(app, seccion, tanda);

        this.tipo = [1, 2, 3, 4, 5];

        let i = this.app.random(this.tipo);
        
        

        switch (i) {
            case 1:
                this.imagen.push(
                    this.app.loadImage("./imagenes/pezA.png")
                );
                break;

            case 2:
                this.imagen.push(
                    this.app.loadImage("./imagenes/pezM.png")
                );
                break;

            case 3:
                this.imagen.push(
                    this.app.loadImage("./imagenes/pezN.png")
                );
                break;

            case 4:
                this.imagen.push(
                    this.app.loadImage("./imagenes/pezR.png")
                );
                break;

            case 5:
                this.imagen.push(
                    this.app.loadImage("./imagenes/pezV.png")
                );
                break;
        }

        
    }


}