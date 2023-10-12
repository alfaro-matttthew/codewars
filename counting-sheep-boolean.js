// function countSheeps(sheep) {
//     if (!Array.isArray(sheep)) {
//         return 'This is not an array'
//     } 

//     let sheepCount = 0;

//     sheep.map((oneSheep) => {
//         if (oneSheep === true) {
//             sheepCount ++
//         }
//     }
//     )

//     return sheepCount;
//   }

function countSheeps(sheep) {
    return sheep.filter(Boolean).length;
  }

const sheepArray = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, false, false, true, true];
const count = countSheeps(sheepArray);
console.log(count); // Output: 17