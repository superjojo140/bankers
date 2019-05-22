var ist, soll, da, ressources;

function start() {
    ist = $("#inputIst").val();
    ist = stringToMatrix(ist);
    soll = $("#inputSoll").val();
    soll = stringToMatrix(soll);
    ressources = $("#inputRessources").val();
    ressources = stringToMatrix(ressources);
    if (testMatrix(ist, soll, ressources)) {
        if (!generateDaMatrix()) {
            return;
        }
        $("#output").html("");
        printAll();
        while (isFinish() == false) {
            if (!findNext()) {
                $("#output").append("<div class='red'>Deadlock</div>");
                return;
            }
        }
        $("#output").append("<div class='green'>Alle Prozesse erfolgreich abgelaufen</div>");
    }
    
}

function stringToMatrix(input) {
    input = input.split("\n");
    for (var i in input) {
        input[i] = input[i].split(",");
    }
    return input;
}

function matrixToHtml(input) {
    var toReturn = "<table>";
    for (var i in input) {
        toReturn += "<tr>";
        for (var j in input[i]) {
            toReturn += "<td>";
            toReturn += input[i][j];
            toReturn += "</td>";
        }
        toReturn += "</tr>";
    }
    toReturn += "</table>";
    return toReturn;
}

function testMatrix(a, b, c) {
    if (c.length != 1) {
        alert("Die Verfügbarkeitsmatrix muss aus einer Zeile bestehen");
        return false;
    }
    else
    if (a.length != b.length) {
        alert("Die beiden Matritzen sind nicht von gleicher Dimension");
        return false;
    }
    else {
        width = a[0].length;
        if (width != c[0].length) {
            alert("Die Verfügbarkeitsmatrix muss genauso viele Spalten haben, wie die Ist und Soll Matrix");
            return false;
        }
        for (var i in a) {
            if (a[i].length != width || b[i].length != width) {
                alert("Bitte zwei vollständige Matrizen eingeben. Leere Stellen mit Null füllen");
                return false;
            }
        }
        return true;
    }
}

function isSmaller(a, b) {
    for (var i in a) {
        if (a[i] > b[i]) {
            return false;
        }
    }
    return true;
}

function doProcess(i) {
    for (var j in da[0]) {
        da[0][j] = Number(da[0][j]) - Number(soll[i][j]);
        ist[i][j] = Number(ist[i][j]) + Number(soll[i][j]);
        soll[i][j] = 0;
        if (da[0][j] < 0) {
            conosle.log("Fehler beim simulieren des Prozesses" + i + "in Zeile " + j);
            return false;
        }
        da[0][j] = Number(da[0][j]) + Number(ist[i][j]);
        ist[i][j] = 0;
    }
    $("#output").append("Simuliere Prozess " + i + "<br>");
    printAll();
    return true;
}

function isFinish() {
    for (var i in soll) {
        for (var j in soll[i]) {
            if (soll[i][j] != 0) {
                return false;
            }
        }
    }
    return true;
}

function findNext() {
    for (var i in ist) {
        if (isSmaller(soll[i], da[0]) && !isNullLine(soll[i])) {
            doProcess(i);
            return true;
        }
    }
    return false;
}

function printAll() {
    $("#output").append("<tableBox><div>Ist: " + matrixToHtml(ist) + "</div><div>Soll: " + matrixToHtml(soll) + "</div><div>Frei: " + matrixToHtml(da) + "</div></tableBox><br><br>");
}

function isNullLine(a) {
    for (var i in a) {
        if (a[i] != 0) {
            return false;
        }
    }
    return true;
}

function generateDaMatrix() {
    da = ressources;
    for (var i in ist){
        for (var j in ist[i]){
            da[0][j] = Number(da[0][j]) - Number(ist[i][j]);
            if (da[0][j] < 0){
                alert("Es sind bereits mehr Ressourcen in Verwendung (Ist) als verfügbar. Betroffenen Ressource: "+j);
                return false;
            }
        }
    }
    return true;
}

function alert(txt){
    swal({
  title: "Error!",
  text: txt,
  type: "error",
  confirmButtonText: "Ok"
});
}