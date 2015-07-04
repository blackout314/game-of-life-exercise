/**
 * -- RULE --
 * cells near < 2   -> die
 * cells near > 3   -> die
 * cells near 2||3  -> alive
 * cells near =3    -> born
 */
var matrice = [
    [0, 1, 1, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0]
],
    esercizio = (function () {
        "use strict";
        var startMatrice = [],
            x = 0,
            y = 0,
            innerX = 0,
            innerY = 0;
        return {
            init: function (matrix) {
                startMatrice = matrix;
                this.nextGeneration(matrix);
            },
            nextGeneration: function (stato) {
                for (x = 0; x < stato.length; x++) {
                    for (y = 0; y < stato[x].length; y++) {
                        this.applicoRegola(x,y);
                    }
                }
            },
            applicoRegola: function (x, y, regola) {
                // sanity check
                if (typeof startMatrice === "undefined" || startMatrice.length === 0) {
                    return false;
                }
                if (typeof startMatrice[x][y] === "undefined"){
                    return false;
                }
                // vicini
                var contatoreVicini = 0;
                for (innerX = (x-1); innerX <= (x+1); innerX++) {
                    for (innerY = (y-1); innerY <= (y+1); innerY++) {
                        if (
                            typeof startMatrice[innerX] !== "undefined" &&
                            typeof startMatrice[innerX][innerY] !== "undefined" &&
                            startMatrice[innerX][innerY] === 1
                        ) {
                            if (innerX !== x || innerY !== y) {
                                contatoreVicini++;
                            }
                        }
                    }
                }
                if (contatoreVicini !== 0) {
                    return contatoreVicini;
                }
                return false;
            }
        };
    }());

esercizio.init(matrice);
