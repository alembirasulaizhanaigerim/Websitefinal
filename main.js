function checkGuess() {
    var guessInput = document.getElementById('guessInput');
    var guess = parseInt(guessInput.value);
  
    if (isNaN(guess)) {
      document.getElementById('result').textContent = 'Введите число!';
      return;
    }
  
    var availableApartments = 10; // Количество доступных квартир
  
    if (guess === availableApartments) {
      document.getElementById('result').textContent = 'Congrats! You guessed right!';
    } else if (guess < availableApartments) {
      document.getElementById('result').textContent = 'More';
    } else {
      document.getElementById('result').textContent = 'Less';
    }
  }