let button = document.getElementById('pobierz-dane');

$(document).ready(function() {
    $('#pobierz-dane').click(function(){

        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
        .done(function(data) { 
        
            if($('#dane-programisty').length == 0){
                let divDane = $('<div id="dane-programisty">');

                let paragraf = $('<p>').text(`Dane: ${data.imie}, ${data.nazwisko} , ${data.zawod}, ${data.firma}`);


                
                $(divDane).append(paragraf);

                $(divDane).insertAfter($('button'));
            } 
            else {
                let paragraf = $('<p>').text(`Dane: ${data.imie}, ${data.nazwisko} , ${data.zawod}, ${data.firma}`);

                $('#dane-programisty').append(paragraf);

            }
        })
    })
})