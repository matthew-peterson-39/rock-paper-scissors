const cpu_score = document.querySelector('#cpu_score');   
const user_score = document.querySelector('#user_score'); 
const choices = document.querySelectorAll('button');
const rock_btn = document.querySelector('#rock');
const paper_btn = document.querySelector('#paper');
const scissors_btn = document.querySelector('#scissors');

choices.forEach((choice) => {
    // and for each one we add a 'click' listener
    choice.addEventListener('click', () => {
        user_choice = choice.id;
        cpu_choice = select_cpu();
        get_winner(user_choice, cpu_choice);
    });
});

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

function select_cpu() {
    let cpu_choices = ['rock', 'paper', 'scissors'];
    let rand_index = getRandomIntInclusive(0, 3);
    let cpu_choice = cpu_choices[rand_index];
    return cpu_choice;
}

function get_winner(user, cpu) {
    if (user === 'rock') {
        if (cpu === 'rock') {
            stale_mate();
            return;
        }
        if (cpu === 'paper') {
            cpu_win();
            return;
        }
        if (cpu === 'scissors') {
            user_win();
            return;
        }
    }
    if (user === 'paper') {
        if (cpu === 'rock') {
            user_win();
            return;
        }
        if (cpu === 'paper') {
           stale_mate();
            return;
        }
        if (cpu === 'scissors') {
            cpu_win();
            return;
        } 
    }
    if (user === 'scissors') {
        if (cpu === 'rock') {
            cpu_win();
            return;
        }
        if (cpu === 'paper') {
            user_win();
            return;
        }
        if (cpu === 'scissors') {
            stale_mate();
            return;
        }
    }
}

function cpu_win() {
    alert('You lose!');
    update_score('cpu');
    return;
}

function user_win() {
    alert('You won!');
    update_score('user');
    return;
}

function stale_mate() {
    alert('Tie! No winner this round.')
    return;
}

function update_score(winner) {
    if (winner === 'cpu') {
        cpu_score.textContent = +cpu_score.textContent + 1;
        if (+cpu_score.textContent === 5) {
            alert("You lost!");
            cpu_score.textContent = 0;
            user_score.textContent = 0;
            return;
        }
    }
    if (winner === 'user') {
        user_score.textContent = +user_score.textContent + 1;
        if (+user_score.textContent === 5) {
            alert("You won!");
            cpu_score.textContent = 0;
            user_score.textContent = 0;
            return;
        }
    }

    
}
