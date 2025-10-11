// 'use strict';

// const poll = {
//      question: 'What is your favourite programming language?',
//      options: ['1. JavaScript', '2. C++', '3. Rust', '4. Python'],
//      ans: new Array(4).fill(0),
//      registerNewAnswer() {
//           const choice = prompt(`${this.question}\n ${this.options.join('\n')}\n(Write options Number)`)
//           this.ans.length > (choice - 1) && this.ans[choice - 1]++;
//           this.displayResult();
//           this.displayResult('string');
//      },
//      displayResult(type = 'array') {
//           if (type === 'array') console.log(this.ans);
//           else console.log(`Poll results are ${this.ans.join(', ')}`)
//      }
// }

// const test1 = [5, 2, 3]
// const test2 = [1, 5, 3, 9, 6, 1]

// document.querySelector('.poll').addEventListener('click', () => poll.registerNewAnswer());
// // document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

// const arrDisplay = poll.displayResult;
// // arrDisplay.call({ ans: test1 });
// // arrDisplay.call({ ans: test2 });

// // arrDisplay.call({ ans: test1 }, 'string');
// // arrDisplay.call({ ans: test2 }, 'string');

// console.log("Using Bind method need to call it explicitly: ")
// arrDisplay.bind({ ans: test1 })();

// console.log("Using Bind method need to call it explicitly ");
// arrDisplay.bind({ ans: test2 })();

// console.log("Using Bind method need to call it explicitly ");
// arrDisplay.bind({ ans: test1 }, 'string')();

// console.log("Using Bind method need to call it explicitly ");
// arrDisplay.bind({ ans: test2 }, 'string')();


(function(){
     const head = document.querySelector('h1');
     document.querySelector('body').addEventListener('click', () => head.style.color = 'blue');
}());