const cpu_score = document.querySelector('#cpu_score');   
const user_score = document.querySelector('#user_score'); 
const choices = document.querySelectorAll('button');
const rock_btn = document.querySelector('#rock');
const paper_btn = document.querySelector('#paper');
const scissors_btn = document.querySelector('#scissors');
const winner_block = document.querySelector('#fade-in-win');
const winner_text = document.querySelector('#round-winner');
const body = document.querySelector('body');
const winner_div = document.createElement('div');
const the_winner = document.createElement('h1');


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
    enlarge_text('cpu');
    update_score('cpu');
    return;
}

function user_win() {
    enlarge_text('user');
    update_score('user');
    return;
}

function stale_mate() {
    enlarge_text('tie');
    return;
}

function enlarge_text(textToEnlarge) {
    if(textToEnlarge == 'cpu') {
        winner_text.innerText  = 'Result: The CPU Won!';
    }
    if(textToEnlarge == 'user') {
        winner_text.innerText = 'Result: You Won!';
    }
    if (textToEnlarge == 'tie') {
        winner_text.innerText = 'Result: Tie!';
    }
}

function update_score(winner) {
    if (winner === 'cpu') {
        cpu_score.textContent = +cpu_score.textContent + 1;
        if (+cpu_score.textContent === 5) {
            display_winner("The Computer Won!");
            cpu_score.textContent = 0;
            user_score.textContent = 0;
            winner_text.innerText = "Round Result: ";
            return;
        }
    }
    if (winner === 'user') {
        user_score.textContent = +user_score.textContent + 1;
        if (+user_score.textContent === 5) {
            display_winner('You Won!');
            cpu_score.textContent = 0;
            user_score.textContent = 0;
            winner_text.innerText = "Round Result: ";
            return;
        }
    }
}

function display_winner(game_result) {
    the_winner.innerText = `${game_result}`;
    the_winner.style.fontSize = '64px';
    winner_div.style.width = '100%';
    winner_div.style.backgroundColor = 'black';
    winner_div.style.display = 'flex';
    winner_div.style.justifyContent = 'center';
    winner_div.style.alignItems = 'center';

    winner_div.appendChild(the_winner);

    body.append(winner_div);
}

function reset_winner() {
    if(winner_div.removeChild(winner_text)){
        winner_text.innerText = " ";
    }
    return;
}

