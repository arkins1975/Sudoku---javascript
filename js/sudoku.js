let tab = [];
let tab1 = [];

let ktoreOkno = "";
let wpiszCyfre = "";
let jakieSudoku = 4;
const losujButton = document.querySelector('.losowanie');
const sprawdzButton = document.querySelector('.sprawdz');
const typSudoku = document.getElementsByClassName('typsudoku');
const leftDiv = document.querySelector('.left');
const rightDiv = document.querySelector('.right');
const containerDiv = document.querySelector('.container');
const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.fa-bars');
const logo = document.querySelector('.logo');

hamburger.addEventListener('click', function () {
    menu.classList.toggle('disabled');
    console.log('jest');
})



for (i = 0; i < typSudoku.length; i++) {
    typSudoku[i].addEventListener('click', function () {
        menu.classList.toggle('disabled');
        if (this.textContent == "3x3") {

            createElement(9);
        } else if (this.textContent == "4x4") {
            createElement(16);
        } else if (this.textContent == "6x6") {
            createElement(36);
        } else if (this.textContent == "9x9") {
            createElement(81);
        }
    })
}


// testowanie sudoku czy prawidowe

function testujSudoku() {
    let dlugosctabeli = tab.length;
    for (i = 0; i <= dlugosctabeli; i++) {
        for (k = 0; k <= dlugosctabeli; k++) {
            if (tab[i] == tab[k] && i != k) {

            }
        }
    }

}

//losowanie liczb do tabeli

function losujSudoku(jakie) {

    var min = 1;
    var max = 3;
    tab = [];

    if (jakie == 9) {
        for (i = 0; i <= 2; i++) {
            tab[i] = [];
            for (k = 0; k <= 2; k++) {
                tab[i][k] = Math.floor(Math.random() * (max - min + 1) + min);
            }
        }
        while (sprawdzsudoku3x3() == false) {
            for (i = 0; i <= 2; i++) {
                tab[i] = [];
                for (k = 0; k <= 2; k++) {
                    tab[i][k] = Math.floor(Math.random() * (max - min + 1) + min);
                }
            }
        }
        // sprawdzamy czy sudoku jest poprawne
    } else if (jakie == 16) {
        max = 4;
        tab = [];
        for (i = 0; i <= 3; i++) {
            tab[i] = [];
            if (i == 0) {
                for (k = 0; k <= 3; k++) {
                    tab[i][k] = Math.floor(Math.random() * (max - min + 1) + min);
                }
                while (sprawdzjednatablice(tab[i]) == false) {
                    //tab[i] = [];
                    for (k = 0; k <= 3; k++) {
                        tab[i][k] = Math.floor(Math.random() * (max - min + 1) + min);
                    }
                }
            } else {
                for (k = 0; k <= 3; k++) {
                    tab[i][k] = 0;
                }
            }
        }
        var tab11 = [];

        for (i = 0; i <= 3; i++) {
            tab11[i] = [];
        }

        for (i = 0; i <= 1; i++) {
            var k = i;
            if (i == 1) {
                k++;
            }
            tab11[k][0] = tab[i][0];
            tab11[k][1] = tab[i][1];
            tab11[k][2] = tab[i + 2][0];
            tab11[k][3] = tab[i + 2][1];

            tab11[k + 1][0] = tab[i][2];
            tab11[k + 1][1] = tab[i][3];
            tab11[k + 1][2] = tab[i + 2][2];
            tab11[k + 1][3] = tab[i + 2][3];

        }

        // 8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888

        var wiersz = [0, 0, 0, 0];
        var tab11kolumna = [0, 0, 0, 0];
        var tab11sekcja = [0, 0, 0, 0];
        var tab11wiersz = [];
        var cos = "";
        var licznik = 1;
        var index
        for (i = 0; i <= 3; i++) {
            licznik = 1;
            while (licznik <= 5) {
                tab11wiersz = tab11[i];
                wiersz = [1, 2, 3, 4];
                kolumna = [1, 2, 3, 4];
                for (k = 0; k <= 5; k++) {
                    if (tab11[i][k] != 0) {
                        cos = tab11wiersz[k];
                        for (z = 0; z <= wiersz.length; z++) {
                            if (cos == wiersz[z]) {
                                wiersz.splice(z, 1);
                            }
                        }
                    }
                }
                for (k = 0; k <= 3; k++) {
                    if (tab11[i][k] == 0) {
                        for (z = 0; z <= 3; z++) {
                            tab11kolumna[z] = tab11[z][k];
                        }
                        for (l = 0; l <= 3; l++) {
                            cos = tab11kolumna[l];
                            for (z = 0; z <= wiersz.length; z++) {
                                if (cos == wiersz[z]) {
                                    wiersz.splice(z, 1);
                                }
                            }
                        }
                        if (i < 2 && k < 2) {
                            tab11sekcja = tab[0];
                        } else if (i < 2 && k >= 2) {
                            tab11sekcja = tab[2];
                        } else if (i >= 2 && k < 2) {
                            tab11sekcja = tab[1];
                        } else if (i >= 2 && k >= 2) {
                            tab11sekcja = tab[3];
                        }
                        for (l = 0; l <= 3; l++) {
                            cos = tab11sekcja[l];
                            for (z = 0; z <= wiersz.length; z++) {
                                if (cos == wiersz[z]) {
                                    wiersz.splice(z, 1);
                                }
                            }
                        }
                        if (wiersz.length == 0) {
                            for (w = 0; w <= 3; w++) {
                                tab11[i][w] = 0;
                            }
                            for (e = 0; e <= 1; e++) {
                                var d = e;
                                if (e == 1) {
                                    d++;
                                }
                                tab[e][0] = tab11[d][0];
                                tab[e][1] = tab11[d][1];
                                tab[e + 2][0] = tab11[d][2];
                                tab[e + 2][1] = tab11[d][3]

                                tab[e][2] = tab11[d + 1][0];
                                tab[e][3] = tab11[d + 1][1];
                                tab[e + 2][2] = tab11[d + 1][2];
                                tab[e + 2][3] = tab11[d + 1][3];
                            }
                            licznik = 1;
                            k = 5;
                        } else if (wiersz.length == 1) {
                            tab11[i][k] = wiersz[0];
                            for (z = 0; z <= wiersz.length; z++) {
                                if (tab11[i][k] == wiersz[z]) {
                                    wiersz.splice(z, 1);
                                }
                            }
                            for (e = 0; e <= 1; e++) {
                                var d = e;
                                if (e == 1) {
                                    d++;
                                }
                                tab[e][0] = tab11[d][0];
                                tab[e][1] = tab11[d][1];
                                tab[e + 2][0] = tab11[d][2];
                                tab[e + 2][1] = tab11[d][3]

                                tab[e][2] = tab11[d + 1][0];
                                tab[e][3] = tab11[d + 1][1];
                                tab[e + 2][2] = tab11[d + 1][2];
                                tab[e + 2][3] = tab11[d + 1][3];
                            }
                        } else {
                            index = Math.floor(Math.random() * (wiersz.length - 1 + 1) + 0);
                            tab11[i][k] = wiersz[index];
                            for (z = 0; z <= wiersz.length; z++) {
                                if (tab11[i][k] == wiersz[z]) {
                                    wiersz.splice(z, 1);
                                }
                            }
                            //tab = []
                            for (e = 0; e <= 1; e++) {
                                var d = e;
                                if (e == 1) {
                                    d++;
                                }
                                tab[e][0] = tab11[d][0];
                                tab[e][1] = tab11[d][1];
                                tab[e + 2][0] = tab11[d][2];
                                tab[e + 2][1] = tab11[d][3]

                                tab[e][2] = tab11[d + 1][0];
                                tab[e][3] = tab11[d + 1][1];
                                tab[e + 2][2] = tab11[d + 1][2];
                                tab[e + 2][3] = tab11[d + 1][3];
                            }
                        }
                        licznik = 1;
                        k = 5;

                    } else {
                        licznik++;

                    }
                }
            }
        }

        //888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888

    } else if (jakie == 36) {
        max = 6;
        tab = [];
        for (i = 0; i <= 5; i++) {
            tab[i] = [];
            if (i == 0) {
                for (k = 0; k <= 5; k++) {
                    tab[i][k] = Math.floor(Math.random() * (max - min + 1) + min);
                }
                while (sprawdzjednatablice(tab[i]) == false) {
                    for (k = 0; k <= 5; k++) {
                        tab[i][k] = Math.floor(Math.random() * (max - min + 1) + min);
                    }
                }
            } else {
                for (k = 0; k <= 5; k++) {
                    tab[i][k] = 0;
                }
            }
        }
        var tab11 = [];
        for (i = 0; i <= 5; i++) {
            tab11[i] = [];
        }

        for (i = 0; i <= 2; i++) {
            var k = i;
            if (i == 1) {
                k++;
            } else if (i == 2) {
                k += 2;
            }
            tab11[k][0] = tab[i][0];
            tab11[k][1] = tab[i][1];
            tab11[k][2] = tab[i][2];
            tab11[k][3] = tab[i + 3][0];
            tab11[k][4] = tab[i + 3][1];
            tab11[k][5] = tab[i + 3][2];

            tab11[k + 1][0] = tab[i][3];
            tab11[k + 1][1] = tab[i][4];
            tab11[k + 1][2] = tab[i][5];
            tab11[k + 1][3] = tab[i + 3][3];
            tab11[k + 1][4] = tab[i + 3][4];
            tab11[k + 1][5] = tab[i + 3][5];

        }

        // 8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888

        var wiersz = [0, 0, 0, 0, 0, 0];
        var tab11kolumna = [0, 0, 0, 0, 0, 0];
        var tab11sekcja = [0, 0, 0, 0, 0, 0];
        var tab11wiersz = [];
        var cos = "";
        var licznik = 1;
        var index
        for (i = 0; i <= 5; i++) {
            licznik = 1;
            while (licznik <= 6) {
                tab11wiersz = tab11[i];

                wiersz = [1, 2, 3, 4, 5, 6];
                kolumna = [1, 2, 3, 4, 5, 6];
                for (k = 0; k <= 5; k++) {

                    if (tab11[i][k] != 0) {
                        cos = tab11wiersz[k];
                        for (z = 0; z <= wiersz.length; z++) {
                            if (cos == wiersz[z]) {
                                wiersz.splice(z, 1);
                            }
                        }
                    }
                }

                for (k = 0; k <= 5; k++) {
                    if (tab11[i][k] == 0) {
                        for (z = 0; z <= 5; z++) {
                            tab11kolumna[z] = tab11[z][k];
                        }
                        for (l = 0; l <= 5; l++) {
                            cos = tab11kolumna[l];
                            for (z = 0; z <= wiersz.length; z++) {
                                if (cos == wiersz[z]) {
                                    wiersz.splice(z, 1);
                                }
                            }
                        }
                        if (i < 2 && k < 3) {
                            tab11sekcja = tab[0];
                        } else if (i < 2 && k >= 3) {
                            tab11sekcja = tab[3];
                        } else if (i >= 2 && i < 4 && k < 3) {
                            tab11sekcja = tab[1];
                        } else if (i >= 2 && i < 4 && k >= 3) {
                            tab11sekcja = tab[4];
                        } else if (i >= 4 && k < 3) {
                            tab11sekcja = tab[2];
                        } else if (i >= 4 && k >= 3) {
                            tab11sekcja = tab[5];
                        }

                        for (l = 0; l <= 5; l++) {
                            cos = tab11sekcja[l];
                            for (z = 0; z <= wiersz.length; z++) {
                                if (cos == wiersz[z]) {
                                    wiersz.splice(z, 1);
                                }
                            }
                        }

                        if (wiersz.length == 0) {
                            for (w = 0; w <= 5; w++) {
                                tab11[i][w] = 0;
                            }
                            for (e = 0; e <= 2; e++) {
                                var d = e;
                                if (e == 1) {
                                    d++;
                                } else if (e == 2) {
                                    d += 2;
                                }
                                tab[e][0] = tab11[d][0];
                                tab[e][1] = tab11[d][1];
                                tab[e][2] = tab11[d][2];
                                tab[e + 3][0] = tab11[d][3];
                                tab[e + 3][1] = tab11[d][4];
                                tab[e + 3][2] = tab11[d][5];

                                tab[e][3] = tab11[d + 1][0];
                                tab[e][4] = tab11[d + 1][1];
                                tab[e][5] = tab11[d + 1][2];
                                tab[e + 3][3] = tab11[d + 1][3];
                                tab[e + 3][4] = tab11[d + 1][4];
                                tab[e + 3][5] = tab11[d + 1][5];

                            }
                            licznik = 1;
                            k = 9;
                        } else if (wiersz.length == 1) {
                            tab11[i][k] = wiersz[0];
                            for (z = 0; z <= wiersz.length; z++) {
                                if (tab11[i][k] == wiersz[z]) {
                                    wiersz.splice(z, 1);
                                }
                            }
                            for (e = 0; e <= 2; e++) {
                                var d = e;
                                if (e == 1) {
                                    d++;
                                } else if (e == 2) {
                                    d += 2;
                                }
                                tab[e][0] = tab11[d][0];
                                tab[e][1] = tab11[d][1];
                                tab[e][2] = tab11[d][2];
                                tab[e + 3][0] = tab11[d][3];
                                tab[e + 3][1] = tab11[d][4];
                                tab[e + 3][2] = tab11[d][5];


                                tab[e][3] = tab11[d + 1][0];
                                tab[e][4] = tab11[d + 1][1];
                                tab[e][5] = tab11[d + 1][2];
                                tab[e + 3][3] = tab11[d + 1][3];
                                tab[e + 3][4] = tab11[d + 1][4];
                                tab[e + 3][5] = tab11[d + 1][5];

                            }
                        } else {
                            index = Math.floor(Math.random() * (wiersz.length - 1 + 1) + 0);
                            tab11[i][k] = wiersz[index];
                            for (z = 0; z <= wiersz.length; z++) {
                                if (tab11[i][k] == wiersz[z]) {
                                    wiersz.splice(z, 1);
                                }
                            }
                            //tab = []
                            for (e = 0; e <= 2; e++) {
                                var d = e;
                                if (e == 1) {
                                    d++;
                                } else if (e == 2) {
                                    d += 2;
                                }
                                tab[e][0] = tab11[d][0];
                                tab[e][1] = tab11[d][1];
                                tab[e][2] = tab11[d][2];
                                tab[e + 3][0] = tab11[d][3];
                                tab[e + 3][1] = tab11[d][4];
                                tab[e + 3][2] = tab11[d][5];


                                tab[e][3] = tab11[d + 1][0];
                                tab[e][4] = tab11[d + 1][1];
                                tab[e][5] = tab11[d + 1][2];
                                tab[e + 3][3] = tab11[d + 1][3];
                                tab[e + 3][4] = tab11[d + 1][4];
                                tab[e + 3][5] = tab11[d + 1][5];

                            }
                        }
                        licznik = 1;
                        k = 9;

                    } else {
                        licznik++;

                    }
                }
            }
        }

        //888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888

    } else if (jakie == 81) {
        max = 9;
        tab = [];
        for (i = 0; i <= 8; i++) {
            tab[i] = [];
            if (i == 0) {
                for (k = 0; k <= 8; k++) {
                    tab[i][k] = Math.floor(Math.random() * (max - min + 1) + min);
                }
                while (sprawdzjednatablice(tab[i]) == false) {
                    for (k = 0; k <= 8; k++) {
                        tab[i][k] = Math.floor(Math.random() * (max - min + 1) + min);
                    }

                }
            } else {
                for (k = 0; k <= 8; k++) {
                    tab[i][k] = 0;

                }
            }
        }
        var tab11 = [];

        for (i = 0; i <= 8; i++) {
            tab11[i] = [];
        }

        var v = 0;
        var l = 0;
        var z = 0;
        var j = 0;
        while (z <= 8) {

            tab11[z][j] = tab[v][l];
            tab11[z + 1][j] = tab[v][l + 3];
            tab11[z + 2][j] = tab[v][l + 6];
            j++;
            l++;
            if (l % 3 == 0) {
                l = 0;
                v += 3;
            }
            if (j % 9 == 0) {
                v -= 8;
                j = 0;
                z += 3;
            }

        }

        var wiersz = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        var tab11kolumna = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        var tab11sekcja = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        var tab11wiersz = [];
        var cos = "";
        var licznik = 1;
        var index
        for (i = 0; i <= 8; i++) {
            licznik = 1;
            while (licznik <= 9) {
                tab11wiersz = tab11[i];
                wiersz = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                kolumna = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                for (k = 0; k <= 8; k++) {
                    if (tab11[i][k] != 0) {
                        cos = tab11wiersz[k];
                        for (z = 0; z <= wiersz.length; z++) {
                            if (cos == wiersz[z]) {
                                wiersz.splice(z, 1);
                            }
                        }

                    }

                }
                for (k = 0; k <= 8; k++) {
                    if (tab11[i][k] == 0) {
                        for (z = 0; z <= 8; z++) {
                            tab11kolumna[z] = tab11[z][k];
                        }
                        for (l = 0; l <= 8; l++) {
                            cos = tab11kolumna[l];
                            for (z = 0; z <= wiersz.length; z++) {
                                if (cos == wiersz[z]) {
                                    wiersz.splice(z, 1);
                                }
                            }
                        }
                        if (i < 3 && k < 3) {
                            tab11sekcja = tab[0];
                        } else if (i < 3 && k >= 3 && k < 6) {
                            tab11sekcja = tab[3];
                        } else if (i < 3 && k >= 6) {
                            tab11sekcja = tab[6];
                        } else if (i >= 3 && i < 6 && k < 3) {
                            tab11sekcja = tab[1];
                        } else if (i >= 3 && i < 6 && k >= 3 && k < 6) {
                            tab11sekcja = tab[4];
                        } else if (i >= 3 && i < 6 && k >= 6) {
                            tab11sekcja = tab[7];
                        } else if (i >= 6 && k < 3) {
                            tab11sekcja = tab[2];
                        } else if (i >= 6 && k >= 3 && k < 6) {
                            tab11sekcja = tab[5];
                        } else if (i >= 6 && k >= 6) {
                            tab11sekcja = tab[8];
                        }
                        for (l = 0; l <= 8; l++) {
                            cos = tab11sekcja[l];
                            for (z = 0; z <= wiersz.length; z++) {
                                if (cos == wiersz[z]) {
                                    wiersz.splice(z, 1);
                                }
                            }
                        }
                        if (wiersz.length == 0) {
                            for (w = 0; w <= 8; w++) {
                                tab11[i][w] = 0;
                            }
                            var v = 0;
                            var l = 0;
                            var z = 0;
                            var j = 0;
                            while (z <= 8) {
                                tab[v][l] = tab11[z][j];
                                tab[v][l + 3] = tab11[z + 1][j];
                                tab[v][l + 6] = tab11[z + 2][j];
                                j++;
                                l++;
                                if (l % 3 == 0) {
                                    l = 0;
                                    v += 3;
                                }
                                if (j % 9 == 0) {
                                    v -= 8;
                                    j = 0;
                                    z += 3;
                                }

                            }
                            licznik = 1;
                            k = 9;
                        } else if (wiersz.length == 1) {
                            tab11[i][k] = wiersz[0];
                            for (z = 0; z <= wiersz.length; z++) {
                                if (tab11[i][k] == wiersz[z]) {
                                    wiersz.splice(z, 1);
                                }
                            }
                            var v = 0;
                            var l = 0;
                            var z = 0;
                            var j = 0;
                            while (z <= 8) {

                                tab[v][l] = tab11[z][j];
                                tab[v][l + 3] = tab11[z + 1][j];
                                tab[v][l + 6] = tab11[z + 2][j];
                                j++;
                                l++;
                                if (l % 3 == 0) {
                                    l = 0;
                                    v += 3;
                                }
                                if (j % 9 == 0) {
                                    v -= 8;
                                    j = 0;
                                    z += 3;
                                }
                            }
                        } else {
                            index = Math.floor(Math.random() * (wiersz.length - 1 + 1) + 0);
                            tab11[i][k] = wiersz[index];
                            for (z = 0; z <= wiersz.length; z++) {
                                if (tab11[i][k] == wiersz[z]) {
                                    wiersz.splice(z, 1);
                                }
                            }
                            //tab = []
                            var v = 0;
                            var l = 0;
                            var z = 0;
                            var j = 0;
                            while (z <= 8) {
                                tab[v][l] = tab11[z][j];
                                tab[v][l + 3] = tab11[z + 1][j];
                                tab[v][l + 6] = tab11[z + 2][j];
                                j++;
                                l++;
                                if (l % 3 == 0) {
                                    l = 0;
                                    v += 3;
                                }
                                if (j % 9 == 0) {
                                    v -= 8;
                                    j = 0;
                                    z += 3;

                                }
                            }

                        }

                        licznik = 1;
                        k = 9;

                    } else {
                        licznik++;

                    }
                }

            }

        }

    }
}




// tworzenie  

const createInsertBox = function (howbox) {
    const insertBox = document.querySelector('.insertBox');
    let insertBoxContent = "";
    for (i = 1; i <= howbox; i++) {

        insertBoxContent += "<div class='insertBoxList'>" + i + '</div>';
    }
    insertBox.innerHTML = insertBoxContent;
}


// funkcja tworzy obraz 

const createElement = function (howDiv) {
    let containerContent = "";
    var containerHandle = document.querySelector('.container');

    losujSudoku(howDiv);
    if (howDiv == 9) {
        logo.textContent = "Ułóż cyfry 1,2,3 w pionie i poziomie";
        //        leftDiv.className = "left trzy";
        containerDiv.className = "container trzy";
        //        rightDiv.className = "right trzy";

        createInsertBox(3);
        for (var i = 0; i <= howDiv - 1; i++) {
            containerContent += "<div class='square'>" + "</div>";
        }
    } else if (howDiv == 16) {
        logo.textContent = "Ułóż cyfry 1,2,3,4 w pionie i poziomie";

        //        leftDiv.className = "left cztery";
        containerDiv.className = "container cztery";
        //        rightDiv.className = "right cztery";
        createInsertBox(4);
        for (var i = 0; i <= howDiv - 1; i++) {
            if (i == 0 || i == 4 || i == 8 || i == 12) {
                containerContent += "<div class='ramka cztery'>";
            }
            containerContent += "<div class='square'>" + "</div>";
            if (i == 3 || i == 7 || i == 11 || i == 15) {
                containerContent += "</div>";
            }
        }
    } else if (howDiv == 36) {
        logo.textContent = "Ułóż cyfry 1,2,3,4,5,6 w pionie i poziomie";

        //        leftDiv.className = "left szesc";
        containerDiv.className = "container szesc";
        //        rightDiv.className = "right szesc";
        createInsertBox(6);
        for (var i = 0; i <= howDiv - 1; i++) {
            if (i == 0 || i == 6 || i == 12 || i == 18 || i == 24 || i == 30) {
                containerContent += "<div class='ramka szesc'>";
            }
            containerContent += "<div class='square'>" + "</div>";
            if (i == 5 || i == 11 || i == 17 || i == 23 || i == 29 || i == 35) {
                containerContent += "</div>";
            }
        }
    } else if (howDiv == 81) {
        logo.textContent = "Ułóż cyfry 1,2,3,4,5,6,7,8,9 w pionie i poziomie";

        //        leftDiv.className = "left dziewiec";
        containerDiv.className = "container dziewiec";
        //        rightDiv.className = "right dziewiec";

        createInsertBox(9);
        for (var i = 0; i <= howDiv - 1; i++) {
            if (i == 0 || i == 9 || i == 18 || i == 27 || i == 36 || i == 45 || i == 54 || i == 63 || i == 72) {
                containerContent += "<div class='ramka dziewiec'>";
            }
            containerContent += "<div class='square'>" + "</div>";
            if (i == 8 || i == 17 || i == 26 || i == 35 || i == 44 || i == 53 || i == 62 || i == 71 || i == 80) {
                containerContent += "</div>";
            }
        }
    }
    containerHandle.innerHTML = containerContent;
    const sudokuElement1 = document.getElementsByClassName('square');
    //wyświetla sudoku na ekranie
    if (sudokuElement1.length == 9) {
        let licznik = 0;
        let licznik2 = 0;
        for (i = 0; i <= 2; i++) {
            for (k = 0; k <= 2; k++) {
                var losowaliczba = Math.floor(Math.random() * (1 - 0 + 1) + 0);
                if (losowaliczba == 1 && licznik2 < 3) {
                    sudokuElement1[licznik].innerHTML = tab[i][k];
                    licznik2++;
                }
                licznik++;
            }
            //var target = Math.floor(Math.random() * (8));
        }
    } else if (sudokuElement1.length == 16) {
        let licznik = 0;
        let licznik2 = 0;
        for (i = 0; i <= 3; i++) {
            for (k = 0; k <= 3; k++) {
                var losowaliczba = Math.floor(Math.random() * (1 - 0 + 1) + 0);
                if (losowaliczba == 1 && licznik2 < 6) {
                    sudokuElement1[licznik].innerHTML = tab[i][k];
                    licznik2++;
                }
                licznik++;
            }
        }
    } else if (sudokuElement1.length == 36) {
        let licznik = 0;
        let licznik2 = 0;
        for (i = 0; i <= 5; i++) {
            for (k = 0; k <= 5; k++) {
                var losowaliczba = Math.floor(Math.random() * (1 - 0 + 1) + 0);
                if (losowaliczba == 1 && licznik2 < 16) {
                    sudokuElement1[licznik].innerHTML = tab[i][k];
                    licznik2++;
                }
                licznik++;
            }
        }
    } else if (sudokuElement1.length == 81) {
        let licznik = 0;
        let licznik2 = 0;
        for (i = 0; i <= 8; i++) {
            for (k = 0; k <= 8; k++) {
                var losowaliczba = Math.floor(Math.random() * (1 - 0 + 1) + 0);
                if (losowaliczba == 1 && licznik2 < 30) {
                    sudokuElement1[licznik].innerHTML = tab[i][k];
                    licznik2++;
                }
                licznik++;
            }
        }
    }
    funkcjaGlowna();
}
const sprawdz = function () {
    const sudokuElement = document.getElementsByClassName('square');
    var licznik = 0;
    var wartosc = "";
    menu.classList.toggle('disabled');
    for (i = 0; i < tab.length; i++) {
        for (k = 0; k < tab[i].length; k++) {
            wartosc = sudokuElement[licznik].innerHTML;
            if (tab[i][k] != wartosc) {

                sudokuElement[licznik].classList.add('error');
            } else {
                sudokuElement[licznik].classList.remove('error');
            }
            licznik++;
        }
    }
}

const funkcjaGlowna = function () {
    const sudokuElement = document.getElementsByClassName('square');
    const insertBoxList = document.getElementsByClassName('insertBoxList');
    const insertBox = document.querySelector(".insertBox");
    for (k = 0; k < insertBoxList.length; k++) {
        insertBoxList[k].addEventListener('click', function () {
            wpiszCyfre = this.innerHTML;
            ktoreOkno.innerHTML = wpiszCyfre;
            insertBox.classList.remove('enabled');
            ktoreOkno.classList.remove('active');
        })
    }
    for (i = 0; i < sudokuElement.length; i++) {
        sudokuElement[i].addEventListener('click', function () {
            const squareActiveList = document.getElementsByClassName('square active');
            if (squareActiveList.length == 0) {
                insertBox.classList.add('enabled');
                ktoreOkno = this;
                ktoreOkno.classList.add('active');
            }
        })
    }
}

function losujtablicewielowymiarowa() {
    var min = 1;
    var max = 4;
    for (i = 0; i <= 3; i++) {
        tab1[i] = [];
        for (k = 0; k <= 3; k++) {
            tab1[i][k] = Math.floor(Math.random() * (max - min + 1) + min);
        }
    }
}

function sprawdzsudoku3x3() {
    for (i = 0; i <= 2; i++) {

        for (k = 0; k <= 2; k++) {

            for (j = 0; j <= 2; j++) {
                if (tab[i][k] == tab[i][j] && k != j) {
                    return false;
                }
                if (tab[k][i] == tab[j][i] && k != j) {
                    return false;
                }

            }
        }
    }
    return true;
}

function sprawdzjednatablice(tablica) {
    for (var i = 0; i < tablica.length; i++) {
        for (var k = 0; k < tablica.length; k++) {
            if (tablica[i] == tablica[k] && i != k) {
                return false;
            }
        }
    }
    return true;
}

sprawdzButton.addEventListener('click', sprawdz);
losujButton.addEventListener('click', function () {
    menu.classList.toggle('disabled');
    createElement(document.getElementsByClassName('square').length);
});
//narysuj tabele

createElement(9);
losujtablicewielowymiarowa();

//funkcja główna nasłuchuje kliknięcie i pozwala na wpisanie liczby w okienko
function poprawsudoku(tab11) {
    wiersz = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    kolumna = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    var wartosc = "";
    for (var i = 0; i <= 8; i++) {
        wartosc = tab11[i];
        for (var k = 0; k <= 8; k++) {
            if (wiersz[wartosc[k] - 1] == 0) {
                wiersz[wartosc[k] - 1] = 1;
            } else {
                wartosc[k] = 0;
            }
        }
        tab11[i] = wartosc;
        wiersz = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        kolumna = [0, 0, 0, 0, 0, 0, 0, 0, 0];


    }
}
