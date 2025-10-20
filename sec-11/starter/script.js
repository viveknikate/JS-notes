'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// Display movements
const displayMovements = (acc, sort = 0) => {
  containerMovements.innerHTML = ''
  const temp = sort ? [...acc.movements].sort((a, b) => a - b) : acc.movements;
  // const temp = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;
  temp.forEach((move, i, arr) => {
    const s = move > 0 ? 'deposit' : 'withdrawal';
    const html = `
          <div class="movements__row">
            <div class="movements__type movements__type--${s}">${i + 1} ${s}</div>
            <div class="movements__date">3 days ago</div>
            <div class="movements__value">${move}$</div>
          </div>
        `
    containerMovements.insertAdjacentHTML('afterbegin', html);
  })
}

// Display balance
// const totalBalance = (acc) => acc.movements.reduce((acc, cur) => acc + cur, 0); 
// labelBalance.textContent = `${account2.movements.reduce((acc, cur) => acc + cur, 0)}$`

const calcDisplaySummary = (user) => {
  const movements = user.movements;
  const income = movements.filter(move => move > 0).reduce((acc, cur) => acc + cur, 0);
  const outcome = movements.filter(move => move <= 0).reduce((acc, cur) => acc + cur, 0);
  const interest = movements.filter(move => move > 0).map(each => each * user.interestRate / 100).reduce((accum, cur) => accum + cur, 0);        // 1.2 is interest rate

  labelSumIn.textContent = `${income}$`;
  labelSumOut.textContent = `${Math.abs(outcome)}$`
  labelSumInterest.textContent = `${interest}$`
}
// const BalanceSummary = calcDisplaySummary(account2.movements);
// labelSumIn.textContent = `${BalanceSummary.income}$`;
// labelSumOut.textContent = `${Math.abs(BalanceSummary.outcome)}$`
// labelSumInterest.textContent = `${BalanceSummary.interest}$`

// creating username
const createUserName = (accs) => {
  accs.forEach((acc) => {
    acc.username = acc.owner.toLowerCase().split(' ').map(each => each.slice(0, 1)).join('');
  })
}

const calcDisplayBalance = (acc) => {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${acc.balance}$`
}

createUserName(accounts);

const updateUI = (currentAccount, sort = 0) => {
  // display movements
  displayMovements(currentAccount, sort);

  // display balance
  calcDisplayBalance(currentAccount);

  // display summary
  calcDisplaySummary(currentAccount)
}

// event handlers
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)
  // const pin = username && username.pin === Number(inputLoginPin.value);
  // if (username && pin)
  //   console.log("Clicked")
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // console.log('logged in')
    // display Welcome msg on UI
    labelWelcome.textContent = `Welcome Back ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 1;
    updateUI(currentAccount);
  }
})

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const receiver = inputTransferTo.value;
  const amount = inputTransferAmount.value;
  const receiverAcc = accounts.find(acc => acc.username === receiver);

  if (amount > 0 && currentAccount.balance >= amount && receiverAcc && receiverAcc.username !== currentAccount.username) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
    inputTransferTo.value = inputTransferAmount.value = '';
  } else {
    alert('Account does not exist, please choose js, jd stw, ss. or insufficient balance')
  }
})

btnClose.addEventListener('click', (e) => {
  e.preventDefault();
  const username = inputCloseUsername.value;
  const pin = inputClosePin.value;
  if (currentAccount.username === username && currentAccount.pin === Number(pin)) {
    // const accountIndex = accounts.find((acc, i) => {          // finding account index in array using find method
    //   return acc.username === username && i;
    // });

    const accountIndex = accounts.findIndex(acc => acc.username === username);          // finding account index in array using findIndex method
    containerApp.style.opacity = 0;
    accounts.splice(accountIndex, 1);
    inputCloseUsername.value = inputClosePin.value = ''
    labelWelcome.textContent = `Log in to get started`
  }
})

btnLoan.addEventListener('click', (e) => {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.balance * .1 >= amount) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
    inputLoanAmount.value = '';
  }
})

let isSorted = 0;
btnSort.addEventListener('click', (e) => {
  e.preventDefault();
  updateUI(currentAccount, isSorted = !isSorted);
});