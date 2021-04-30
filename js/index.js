let score = 0;
let winner = '';
let userPicked = '';
let housePicked = '';
let step1Element = document.getElementById('step1');
let step2Element = document.getElementById('step2');
let userPickedContainer = document.getElementById('you-picked-container');
let housePickedContainer = document.getElementById('house-picked-container');
let houseSelectingLoading = document.getElementById('house-selecting');
let resultElement = document.getElementById('result');
let scoreElement = document.getElementById('score');
let wingif = document.getElementById('wingif');

function pickOne(picked) {
  // hide step1
  step1Element.style.display = 'none';
  // show step2
  step2Element.style.display = 'flex';
  userPicked = picked;
  console.log(userPicked);
  step2();
}

function step2() {

   // house picked
  switch(userPicked) {
    case 'rock': {
      userPickedContainer.innerHTML = `
      <div class="rock" id="">
      <img src="./images/icon-rock.svg" alt="rock" />
    </div>
      `;
      break;
    }
    case 'paper': {
      userPickedContainer.innerHTML = `
      <div class="paper">
      <img src="./images/icon-paper.svg" alt="paper" />
    </div>
      `;
      break;
    }
    case 'scissors': {
      userPickedContainer.innerHTML = `
      <div class="scissors">
      <img src="./images/icon-scissors.svg" alt="scissors" />
    </div>
      `;
      break;
    }
  }

  // house picked
  let arr = ['rock', 'paper', 'scissors'];
  housePicked = arr[Math.floor(Math.random()*arr.length)];
  setTimeout(() => {
    houseSelectingLoading.style.display = 'none';
    switch(housePicked) {
      case 'rock': {
        housePickedContainer.innerHTML = `
        <span class="house-selecting" id="house-selecting"></span>
        <div class="rock" id="houseSelected">
        <img src="./images/icon-rock.svg" alt="rock" />
      </div>
        `;
        document.getElementById('house-selecting').style.display = 'none';
        break;
      }
      case 'paper': {
        housePickedContainer.innerHTML = `
        <span class="house-selecting" id="house-selecting"></span>
        <div class="paper" id="houseSelected">
        <img src="./images/icon-paper.svg" alt="paper" />
      </div>
        `;
        document.getElementById('house-selecting').style.display = 'none';
        break;
      }
      case 'scissors': {
        housePickedContainer.innerHTML = `
        <span class="house-selecting" id="house-selecting"></span>
        <div class="scissors" id="houseSelected">
        <img src="./images/icon-scissors.svg" alt="scissors" />
      </div>
        `;
        document.getElementById('house-selecting').style.display = 'none';
        break;
      }
    }
    step3();
  }, 3000);

}

function step3() {
  if((userPicked == 'scissors' && housePicked == 'paper') || (userPicked == 'paper' && housePicked == 'rock') || (userPicked == 'rock' && housePicked == 'scissors')) {
    winner = 'user';
  } else if(userPicked == housePicked) {
    winner = 'draw';
  } else {
    winner = 'house';
  }

  console.log(winner);

  switch(winner) {
    case 'user': {
      resultElement.children[0].innerHTML = 'you win';
      score++;
      wingif.style.display = 'block';
      setTimeout(() => {
        wingif.style.display = 'none';
      }, 2000)
      break;
    }
    case 'house': {
      resultElement.children[0].innerHTML = 'you lose';
      score--;
      break;
    }
    case 'draw': {
      resultElement.children[0].innerHTML = 'draw';
      break;
    }
  }
  resultElement.style.display = 'flex';
  scoreElement.innerHTML = score;
}

function playAgain() {
  step2Element.style.display = 'none';
  resultElement.style.display = 'none';
  document.getElementById('house-selecting').style.display = 'block';
  document.getElementById('houseSelected').style.display = 'none';
  step1Element.style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display ='none';
}

function openModal() {
  document.getElementById('modal').style.display ='flex';
}