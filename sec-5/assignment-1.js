let str = "vivek";
console.log(str);

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log("min element: ", Math.min(...arr));
console.log("max element: ", Math.max(...arr));

let min = Infinity, max = -Infinity;
for (let i = 0; i < arr.length; i++) {
     if (arr[i] < min)
          min = arr[i];
     if (arr[i] > max)
          max = arr[i];
}
console.log(min, max);

// mergin 2 array
const a1 = [1, 2, 3, 4];
const a2 = [5, 6, 7, 8];
const a3 = [...a1, ...a2];
console.log(a3);
const a4 = a2.concat(a1);
console.log(a4);
const a5 = [13, 25, 46, 58, 68, ...a3];
console.log(a5);

console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
console.warn('warning sign', 78);
console.error('error sign', 45);

const obj = { a: 1, b: 2, c: 3 };
console.log(obj);
console.table(obj);
debugger;
