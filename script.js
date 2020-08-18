// 1. Написать ф-ю, принимающую объект и возвращающую число означающее максимальную глубину вложенности объектов в ней. Покрыть тестами

// const something = {
//     a: {
//         a: {
//             a: 3,
//         },
//         b: 1,
//     },
//     a: {
//         a: {
//             a: 3,
//         },
//         b: 2,
//     },
//     a: {
//         a: {
//             a: {
//                 a: {
//                     a: 3,
//                 },
//                 b: 4,
//             },
//         },
//         b: 5,
//     },
// };

// function getDepth(obj, count = 1) {
//     for (let key in obj) {
//         if (obj !== null && typeof obj[key] === 'object') {
//         count ++;
//         return getDepth(obj[key], count);
//         }
//     }
//     return count;
// }
// console.log(getDepth(something));


// 2. Написать ф-ю, принимающую 2 объекта и выводящую число обозначающее количество несовпадений в них. Покрыть тестами

const image = {
    heigth: 45,
    width: 60,
    color: 'yellow',
    theme: 'landscape',
};

const cat = {
    heigth: 45,
    width: 60,
    'eyes color': 'green eyes',
    'hair color': 'grey',
};


function getDiscrepancy(obj1, obj2) {
    if (!obj2 || Object.prototype.toString.call(obj2) !== '[object Object]') {
        return obj1;
    }

    let diffs = {};
    let key;
    let compare = function (item1, item2, key) {

        let type1 = Object.prototype.toString.call(item1);
        let type2 = Object.prototype.toString.call(item2);

        if (type2 === '[object Undefined]') {
            diffs[key] = null;
            return;
        }
        if (type1 !== type2) {
            diffs[key] = item2;
            return;
        }
        if (type1 === '[object Object]') {
            let objDiff = getDiscrepancy(item1, item2);
            if (Object.keys(objDiff).length > 0) {
                diffs[key] = objDiff;
            }
            return;
        }
    };

    for ( key in obj1) {
        if (obj1.hasOwnProperty(key)) {
            compare(obj1[key], obj2[key], key); //сравнение обьектов
        }
    }

    for (key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            if (!obj1[key] && obj1[key] !== obj2[key]) {
                diffs[key] = obj2[key];
            }
        }
    }
    console.log(diffs);
    return Object.keys(diffs).length;
};

console.log(getDiscrepancy(cat, image));
