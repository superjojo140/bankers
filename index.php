<!DOCTYPE html>
<html lang="de">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bankers Algorithmus</title>
</head>

<body>
        <div class="mainContainer">
            <div class="outputContainer">
                <h2>Bankier Algorithmus</h2>
                <p id="infoText"> Mit dem Bankieralgorithmus von Edsger W. Dijkstra kann man bestimmen ob es bei bestimmten Ressourcenbelegungen verschiedener Prozesse in einem Betriebssystem zu Verklemmungen (sogenannten Deadlocks) kommen kann.<br><br>
                    <a href="https://de.wikipedia.org/wiki/Bankieralgorithmus">Weiterlesen auf Wikipedia</a></p>
                <hr>
                   <h2>Simulator</h2>
                <p>
                Auf dieser Seite kannst du den Bankier Algorithmus für beliebige Ausgangszustände simulieren. Es werden sogar alle Zwischenschritte angezeigt.<br>
                    
                Die Spalten der Matrix werden durch Kommas getrennt, die Zeilen einfach durch Zeilen.
                </p> 
            </div>
            <div class="inputContainer">
                <div class="rightContainer"> <span class="span"> Aktuell belegte Ressourcen: </span>
                    <textarea id="inputIst" placeholder="Bitte eintragen" rows="10"></textarea>
                </div>
                <div class="rightContainer"> <span class="span">Angeforderte Ressourcen: </span>
                    <textarea id="inputSoll" placeholder="Bitte eintragen" rows="10"></textarea>
                </div>
                <div class="rightContainer"> <span class="span">Insgesamt verfügbare Ressourcen</span>
                    <textarea id="inputRessources" placeholder="Bitte eintragen" rows="1"></textarea>
                    <button onclick="start()">Berechnen</button>
                </div>
            </div>
            <div id="output" class="outputContainer"></div>
        </div>
</body>
<script src="https://code.jquery.com/jquery-3.1.1.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.js"></script>
<script src="bankers.js"></script>
<link rel="stylesheet" href="banker.css">

</html>
