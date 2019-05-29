class Logica {


    constructor(app) {
        this.app = app;

        this.jugadores = [];
        this.enemigos = [];

        this.segundos = 0;
        this.nEne = 2;

        this.segundos = 0;
        this.medusas = true;

        this.fondiu = 0;
        this.fondo = [];
        for (let i = 0; i < 7; i++) {

            this.fondo.push(
                this.app.loadImage('./imagenes/bg' + i + '.png'));

        }


        this.jugadores.push(new Jugador1(this.app, 250));
        this.jugadores.push(new Jugador2(this.app, 450));




    }

    laPrevia() {

        this.lajuente = this.app.loadFont("./imagenes/fuente.TTF")
        this.app.soundFormats('mp3', 'ogg', 'wav');
        this.miCancion = this.app.loadSound("./sound/awa.mp3");

        this.miDolor = this.app.loadSound("./sound/auchi.wav");

        this.miGanador = this.app.loadSound('./sound/win.wav');

        

    }

    screen() {
        if (this.fondiu <= 1)  {
            this.fondiu++;
        }

        if (this.fondiu == 1) {
            this.miCancion.setVolume(1);
            this.miCancion.play();

            return;
        }

        if (this.fondiu >= 5) {
            this.segundos = 0
            this.fondiu = 0;
        }

    }

    pintar() {

        this.app.imageMode(this.app.CORNER)
        this.app.image(this.fondo[this.fondiu], 0, 0);


        switch (this.fondiu) {
            case 0:
                break;

            case 1:
                break;

            case 5:
                break;

            case 6:
                break;

            default:

                /*
                                this.app.rectMode(this.app.CORNER);
                                this.app.noFill();
                
                                for (let i = 0; i < 7; i++) {
                
                                    for (let a = 0; a < 10; a++) {
                
                                        this.app.rect(0 + i * 100, 0 + a * 100, 100, 100);
                                    }
                                }
                */
                for (let u = 0; u < this.jugadores.length; u++) {

                    this.jugadores[u].pintar();

                }

                for (let i = 0; i < this.enemigos.length; i++) {
                    this.enemigos[i].pintar();;

                }

                if (this.fondiu == 2 && this.medusas) {

                    this.timer = this.timer.bind(this);
                    this.crono = setInterval(this.timer, 1000);

                    for (let i = 0; i < 15; i++) {
                        this.enemigos.push(new Medusa(this.app, 1, 1))
                        this.enemigos.push(new Medusa(this.app, 2, 1))

                    }
                    this.medusas = false;
                }

                for (let i = 0; i < this.jugadores.length; i++) {



                    if (this.jugadores[i].py <= 50 && this.fondiu < 4) {

                        this.jugadores[0].py = 950;
                        this.jugadores[1].py = 950;


                        this.jugadores[0].px = 250;
                        this.jugadores[1].px = 450;


                        this.fondiu++;


                        if (this.fondiu == 2) {

                            for (let i = 0; i < 9; i++) {
                                this.enemigos.push(new Medusa(this.app, 1, 1))
                                this.enemigos.push(new Medusa(this.app, 2, 1))

                            }
                        }

                        if (this.fondiu == 3) {
                            this.enemigos.splice(0);

                            for (let i = 0; i < 15; i++) {
                                this.enemigos.push(new Pez(this.app, 1, 1))
                                this.enemigos.push(new Pez(this.app, 2, 1))

                            }
                        }

                        if (this.fondiu == 4) {
                            this.enemigos.splice(0);

                            for (let i = 0; i < 15; i++) {
                                this.enemigos.push(new Cangrejo(this.app, 1, 1))
                                this.enemigos.push(new Cangrejo(this.app, 2, 1))

                            }
                        }


                    }

                    if (this.jugadores[i].py <= 50 && this.fondiu == 4) {
                        if (this.jugadores[i] instanceof Jugador1) {
                            this.enemigos.splice(0);
                            this.enemigos.splice(0);
                            this.fondiu += 2;
                            this.miGanador.play();
                            this.miCancion.stop();
                        } else {
                            this.enemigos.splice(0);
                            this.enemigos.splice(0);
                            this.fondiu++;
                            this.miGanador.play();
                            this.miCancion.stop();

                        }
                    }


                    for (let o = 0; o < this.enemigos.length; o++) {
                        if (this.app.dist(this.jugadores[i].px, this.jugadores[i].py, this.enemigos[o].px, this.enemigos[o].py) < 50) {


                            this.jugadores[i].px = this.app.width / 2;
                            this.jugadores[i].py = 950;
                            this.miDolor.play();
                            this.enemigos.splice(o, 1);
                            return;
                        }
                    }
            

                }
                this.pillarMiMouse();

                break;

        }
        
    }

    movimiento() {



        for (let u = 0; u < this.jugadores.length; u++) {

            this.jugadores[u].mover();

        }



    }

    pillarMiMouse() {

        this.app.fill(255);
        this.app.textSize(40);
        this.app.textFont(this.lajuente);
        this.app.text('tiempo :' + ' ' + this.segundos,40, 50);
    }

    timer() {
        this.segundos++;
        this.nEne++;



        if (this.nEne % 2 == 0) {

            switch (this.fondiu) {

                case 2:
                    for (let i = 0; i < 3; i++) {
                        this.enemigos.push(new Medusa(this.app, 1, 2))
                        this.enemigos.push(new Medusa(this.app, 2, 2))

                    }
                    break;

                case 3:
                    for (let i = 0; i < 3; i++) {
                        this.enemigos.push(new Pez(this.app, 1, 2))
                        this.enemigos.push(new Pez(this.app, 2, 2))

                    }
                    break;

                case 4:
                    for (let i = 0; i < 3; i++) {
                        this.enemigos.push(new Cangrejo(this.app, 1, 2))
                        this.enemigos.push(new Cangrejo(this.app, 2, 2))

                    }
                    break;

            }

        }

    }

    restart() {

        if (this.fondiu >= 5) {
            this.fondiu = 0;

          
            
            this.medusas = false;
            return true; 
            
        }
    }










}