import { KEPEKLISTA } from "./adat.js";


$(function () {
    console.log(KEPEKLISTA)
    let txt = osszealit(KEPEKLISTA);
    const ARTICLEELEM = $("article");
    ARTICLEELEM.append(txt);
    const KEP = $("article div img");
    megfordit();
    kattintas(KEPEKLISTA);
});
function osszealit(KEPEKLISTA) {
    let txt = "";
    for (let i = 0; i < KEPEKLISTA.length; i++) {
        txt += "<div><img src='" + KEPEKLISTA[i] + "'alt='kep'></div>";
    }
    return txt;
}

function megfordit() {
    const KEPELEM = $("article img");
    KEPELEM.attr("src", "kepek/hatter.jpg");
}


function kattintas(KEPEKLISTA) {
    let szamlalo=0;
    let aktElem="";
    let aktElem2="";
    const KEPELEM = $("article img");
    KEPELEM.each(function (index) {
        $(this).on("click", function () {
            $(this).attr("src", KEPEKLISTA[index]);
            if (szamlalo == 2 ) {
                KEPELEM.attr("src", "kepek/hatter.jpg");
                szamlalo=0;
                if (aktElem === aktElem2) {
                    KEPELEM.remove(KEPELEM[0]);
                }
            }
            else
            {
                szamlalo++;
            }
            
        });
    });
}




