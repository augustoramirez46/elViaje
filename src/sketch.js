new p5(function (app) {

    let logica;

    app.preload = function () {
        logica = new Logica(app);

        logica.laPrevia();


    }

    app.setup = function () {
        app.createCanvas(700, 1000);


    }

    app.draw = function () {
        // app.background(220);
        logica.pintar();

    }

    app.keyPressed = function () {

        logica.movimiento(app.keyCode);
        if (app.keyCode == 32) {

            logica.screen();

            if (logica.restart()) {
                app.setup()
            }

        }

    }


    app.mousePressed = function () {



    }

}
);



