$( document ).ready(function() {
    var numberToGuess = Math.floor(Math.random() * (102)) + 19;
    
    var counter = 0;
    
    var crystalGen = function () {
      return Math.floor(Math.random() * 12) + 1;
    }
    
    var numbers = [crystalGen, crystalGen, crystalGen, crystalGen];
    
    var wins = 0;
    var losses = 0;

    $('#number').text(numberToGuess);
    
    var numbers = [crystalGen, crystalGen, crystalGen, crystalGen];
    for (var i=0; i< numbers.length; i++){
      var imageCrystal = $('<img>');
      
      imageCrystal.attr('id', i);
      imageCrystal.attr('data-num', numbers[i]);
      imageCrystal.attr('src', 'assets/images/crystal' + (i+1) +'.png');
      imageCrystal.attr('alt', 'crystals');
      imageCrystal.addClass('crystalImage');
      $('#crystals').append(imageCrystal);
    };


    
    $('.crystalImage').on('click', function(){
      counter = counter + parseInt($(this).data('num'));
      $('#yourScore').text(counter);
      if (counter == numberToGuess){
        alert('You won!!!!');
        wins++;
        document.querySelector('#wins').innerHTML = "Wins: " + wins;
        counter=0;
        document.querySelector('#yourScore').innerHTML = counter;
        numberToGuess = Math.floor(Math.random() * (102)) + 19;
        $('data-num').Attr(numberToGuess);
        for (i=0;i<4;i++) {
          $('#' + i).attr('data-num', crystalGen);
        };
      }else if( counter > numberToGuess){
        alert('You lost!');
        // console.log(numbers);
        // var numbers = [crystalGen, crystalGen, crystalGen, crystalGen];
        // console.log(numbers);
        losses++;
        document.querySelector('#losses').innerHTML = "Losses: " + losses;
        counter=0;
        document.querySelector('#yourScore').innerHTML = counter;
        numberToGuess = Math.floor(Math.random() * (102)) + 19;
        $('#number').text(numberToGuess);
        for (i=0;i<4;i++) {
          $('#' + i).attr('data-num', crystalGen);
        }
      };
    });
    
  // if (counter == numberToGuess){
  //   console.log(numbers);
  //   var numbers = [crystalGen, crystalGen, crystalGen, crystalGen];
  //   console.log(numbers);
  // } else if( counter > numberToGuess){
  //   console.log(numbers);
  //   var numbers = [crystalGen, crystalGen, crystalGen, crystalGen];
  //   console.log(numbers);
  // };

  });

