        // f = flam
        // g = grossa
        // p = prima
        // r = regadora
        // rt = regadora troll (no es pot encaixar enlloc)

        var piezasInicio =
        [
            {
                id: 0,
                piezas: ['f2', 'g2', 'r1', 'p1']
            },
            {
                id: 1,
                piezas: ['f2', 'p2', 'r1', 'g1']
            },
            {
                id: 2,
                piezas: ['f2', 'g2', 'rt', 'p1']
            },
            {
                id: 3,
                piezas: ['r2', 'g2', 'f1', 'p1']
            },
            {
                id: 4,
                piezas: ['r2', 'f1', 'p1', 'g1']
            },
            {
                id: 5,
                piezas: ['r1', 'g1', 'p1', 'f2']
            },
            {
                id: 6,
                piezas: ['f2', 'g2', 'p1', 'r2']
            },
            {
                id: 7,
                piezas: ['p2', 'r1', 'f2', 'g1']
            },
            {
                id: 8,
                piezas: ['p2', 'f1', 'g1', 'r2']
            },
        ];

        var posicionesCorrectas = [];

        function shuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
            }
            return array;
        }

        function doTheyFit(first, second) {
            if
                (
                    (first == 'f1' && second == 'f2') ||
                    (first == 'f2' && second == 'f1') ||
                    (first == 'g1' && second == 'g2') ||
                    (first == 'g2' && second == 'g1') ||
                    (first == 'p1' && second == 'p2') ||
                    (first == 'p2' && second == 'p1') ||
                    (first == 'r1' && second == 'r2') ||
                    (first == 'r2' && second == 'r1')
                )
            {
                return true;
            } 
            else 
            {
                return false;
            }
        }

        var completo = false;
        var resultado = [];
        var intentos = 0;
        var piezas;
        var rotaciones;

        main:
        while(completo == false) {

            intentos++;

            piezas = shuffle(piezasInicio);
            rotaciones = [];
            var pieza1 = piezas[0].piezas;
            var pieza2 = piezas[1].piezas;
            var pieza3 = piezas[2].piezas;
            var pieza4 = piezas[3].piezas;
            var pieza5 = piezas[4].piezas;
            var pieza6 = piezas[5].piezas;
            var pieza7 = piezas[6].piezas;
            var pieza8 = piezas[7].piezas;
            var pieza9 = piezas[8].piezas;
            
            var rotacion = 2;
            var rotacion2;

            pieza1: for(posicion1 in pieza1) {
                rotacion++;
                rotacion = rotacion == 4 ? 0 : rotacion;
                rotacion2 = 0;
                pieza2: for(posicion2 in pieza2) {
                    rotacion2++;                    
                    rotacion2 = rotacion2 == 4 ? 0 : rotacion2;
                    var imagen1 = pieza1[posicion1];
                    posicionesCorrectas[1] = pieza1[posicion1];
                    var imagen2 = pieza2[posicion2];
                    if (doTheyFit(imagen1, imagen2)) {
                        // Añade el resultado
                        resultado.push(imagen1);
                        resultado.push(imagen2);

                        rotaciones.push(rotacion);
                        rotaciones.push(rotacion2);
                        
                        break pieza1;
                        break pieza2;
                    }                   
                }
            }   

            if(resultado.length !== 2) {
                continue main;
            }

            // Determina las imágenes 3, 9 y 13

            var imagen2 = resultado[1];
            var index = pieza2.indexOf(imagen2);
            var imagen3;
            var imagen9;

            switch (index) {
                case 0:
                    imagen3 = pieza2[2];
                    imagen9 = pieza2[3];
                    break;
                case 1:
                    imagen3 = pieza2[3];
                    imagen9 = pieza2[0];
                    break;
                case 2:
                    imagen3 = pieza2[0];
                    imagen9 = pieza2[1];
                    break;
                case 3:
                    imagen3 = pieza2[1];
                    imagen9 = pieza2[2];
                    break;
            }

            var letraImagen9 = imagen9.slice(0,1);

            var imagen13;
            var index = pieza1.indexOf(imagen1);
            switch (index) {
                case 0:
                    imagen13 = pieza1[1];
                    break;
                case 1:
                    imagen13 = pieza1[2];
                    break;
                case 2:
                    imagen13 = pieza1[3];
                    break;
                case 3:
                    imagen13 = pieza1[0];
                    break;
            }

            rotacion = 0;

            pieza3: for(posicion in pieza3) {
                rotacion++;
                rotacion = rotacion == 4 ? 0 : rotacion;
                var imagen4 = pieza3[posicion];       
                if (doTheyFit(imagen3, imagen4)) {
                    // Añade el resultado
                    resultado.push(imagen3);
                    resultado.push(imagen4);        

                    rotaciones.push(rotacion);

                    break pieza3;
                }
            }


            if(resultado.length !== 4) {
                resultado = [];
                continue main;
            } 

            // Determina la imagen 5            

            var imagen4 = resultado[3];
            var index = pieza3.indexOf(imagen4);
            var imagen5;

            switch (index) {
                case 0:
                    imagen5 = pieza3[3];
                    break;
                case 1:
                    imagen5 = pieza3[0];
                    break;
                case 2:
                    imagen5 = pieza3[1];
                    break;
                case 3:
                    imagen5 = pieza3[2];
                    break;
            }

            rotacion = 3;

            pieza4: for(posicion in pieza4) {
                rotacion++;            
                rotacion = rotacion == 4 ? 0 : rotacion;
                var imagen6 = pieza4[posicion];
                var imagen7 = pieza4[Number(posicion) - 1];
                var imagen23 = pieza4[Number(posicion) + 2];
                if(imagen23 == undefined) {
                    if(posicion == 2) {
                    imagen23 = pieza4[0];
                }
                    if(posicion == 3) {
                        imagen23 = pieza4[1];
                    }   
                }           
                if(imagen7 == undefined) {
                    imagen7 = pieza4[0];
                }
                if (doTheyFit(imagen5, imagen6)) {
                    // Añade el resultado
                    resultado.push(imagen5);
                    resultado.push(imagen6);

                    rotaciones.push(rotacion);

                    break pieza4;
                }
            }

            if(resultado.length !== 6) {
                resultado = [];
                continue main;
            }

            rotacion = 2;

            pieza5: for(posicion in pieza5) {
                rotacion++;            
                rotacion = rotacion == 4 ? 0 : rotacion;
                var imagen8 = pieza5[posicion];
                var imagen10 = pieza5[Number(posicion) - 1];
                var imagen11 = pieza5[Number(posicion) + 2];
                var imagen19 = pieza5[Number(posicion) + 1];
                if(imagen19 == undefined) {
                    imagen19 = pieza5[0];
                    imagen11 = pieza5[1];
                }
                if(imagen11 == undefined) {
                    imagen11 = pieza5[0];
                }   
                if(imagen10 == undefined) {
                    imagen10 = pieza5[0];
                }
                if(doTheyFit(imagen9, imagen10) && doTheyFit(imagen7, imagen8)) {
                    // Añade el resultado
                    resultado.push(imagen7);
                    resultado.push(imagen8);

                    rotaciones.push(rotacion);

                    break pieza5;
                }
            }

            if(resultado.length !== 8) {
                resultado = [];
                continue main;
            }

            rotacion = 2;

            pieza6: for(posicion in pieza6) {
                rotacion++;            
                rotacion = rotacion == 4 ? 0 : rotacion;
                var imagen12 = pieza6[posicion];
                var imagen14 = pieza6[Number(posicion) - 1];
                var imagen15 = pieza6[Number(posicion) + 1];
                if(imagen14 == undefined) {
                    imagen14 = pieza5[0];
                }
                if(imagen15 == undefined) {
                    imagen15 = pieza5[0];
                }
                if(doTheyFit(imagen11, imagen12) && doTheyFit(imagen13, imagen14)) {
                    // Añade el resultado
                    resultado.push(imagen11);
                    resultado.push(imagen12);

                    rotaciones.push(rotacion);


                    break pieza6;
                }
            }

            if(resultado.length !== 10) {
                resultado = [];
                continue main;
            }
            
            rotacion = 3;

            pieza7: for(posicion in pieza7) {
                rotacion++;            
                rotacion = rotacion == 4 ? 0 : rotacion;
                var imagen16 = pieza7[posicion];
                var imagen16 = pieza7[posicion];
                var imagen17 = pieza7[Number(posicion) + 1];
                if(imagen17 == undefined) {
                    imagen17 = pieza7[0];
                }
                if(doTheyFit(imagen15, imagen16)) {
                    // Añade el resultado
                    resultado.push(imagen15);
                    resultado.push(imagen16);

                    rotaciones.push(rotacion);

                    break pieza7;
                }
            }

            if(resultado.length !== 12) {
                resultado = [];
                continue main;
            } 

            rotacion = 0;

            pieza8: for(posicion in pieza8) {
                rotacion++;            
                rotacion = rotacion == 4 ? 0 : rotacion;
                var imagen18 = pieza8[posicion];
                var imagen20 = pieza8[Number(posicion) + 1];
                var imagen21 = pieza8[Number(posicion) + 2];
                if(imagen20 == undefined) {
                    imagen20 = pieza8[0];
                    imagen21 = pieza8[1];
                }
                if(imagen21 == undefined) {
                    imagen21 = pieza8[0];
                }
                if(doTheyFit(imagen17, imagen18) && doTheyFit(imagen19, imagen20)) {
                    // Añade el resultado
                    resultado.push(imagen17);
                    resultado.push(imagen18);

                    rotaciones.push(rotacion);

                    break pieza8;
                }
            }

            if(resultado.length !== 14) {
                resultado = [];
                continue main;
            }

            rotacion = 0;

            pieza9: for(posicion in pieza9) {
                rotacion++;
                rotacion = rotacion == 4 ? 0 : rotacion;
                var imagen22 = pieza9[posicion];
                var imagen24 = pieza9[Number(posicion) + 1];
                if(imagen24 == undefined) {
                    imagen24 = pieza9[0];
                }
                if(doTheyFit(imagen21, imagen22) && doTheyFit(imagen23, imagen24)) {
                    // Añade el resultado
                    resultado.push(imagen21);
                    resultado.push(imagen22);

                    rotaciones.push(rotacion);                    

                    break pieza9;
                }
            }        

            if(resultado.length !== 16) {
                resultado = [];
                continue main;
            } else {
                completo = true;
            }                    
        
        } // main        

        var rotaciones = rotaciones.map(function(rotacion) {
            var deg;                
            switch (rotacion) {
                case 0:
                    deg = 360;
                    break;
                case 1:
                    deg = 90;
                    break;
                case 2: 
                    deg = 180;
                    break;
                case 3:
                    deg = 270;
                    break;
            }             
            return deg;   
        });          

        // Determina el orden de las imágenes
        piezas = piezas.map(function(pieza) {
            return pieza.id;
        });      

        var resultado = [];

        for (var i = 1; i < 25; i++) {
            resultado[i] = self['imagen'+i];
        }

        postMessage({ resultado: resultado, intentos: intentos, piezas: piezas, rotaciones: rotaciones });
