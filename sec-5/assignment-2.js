// eg. [17, 22, 33]
// ... 17℃ in day 1, ... 22℃ in day 2, ... 33℃ in day 3 ...

const printTemp = tempArr => {
     // for (let i = 0; i < tempArr.length; i++)
     //      console.log(`... ${tempArr[i]}℃ in day ${i + 1}, `);
     // console.log('...');

     // or
     // let s = '';
     // for (let i = 0; i < tempArr.length; i++)
     //      s += `... ${tempArr[i]}℃ in day ${i + 1}, `
     // s += '...'
     // return s;

     // or
     for (let i = 0; i < tempArr.length; i++)
          process.stdout.write(`... ${tempArr[i]}℃ in day ${i + 1}, `);          // to print on same line
     console.log('...');
     return 0;
}

const a1 = [17, 22, 33];
console.log(printTemp(a1));

const stringiVersion = JSON.stringify(a1);
console.log("stringified version: ", stringiVersion, " stringiVersion[0]: ", stringiVersion[0]);
