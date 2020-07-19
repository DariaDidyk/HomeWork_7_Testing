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
//         if (typeof obj[key] === 'object') {
//         count ++;
//         return getDepth(obj[key], count);
//         }
//     }

//     return count
// }
// console.log(getDepth(something));


// 2. Написать ф-ю, принимающую 2 объекта и выводящую число обозначающее количество несовпадений в них. Покрыть тестами

const first = {
    a: {
        a: {
            a: 3,
        },
        b: 1,
    },
};

const second = {
    a: {
        a: {
            a: {
                a: {
                    a: 6,
                },
                b: 3,
            },
        },
        b: 1,
    },
}

function getDiscrepancy(obj1 = first, obj2 = second) {
    for (let key in obj1 && key in obj2) {
        if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
        count ++;
        return getDiscrepancy(obj1[key], count);
        return getDiscrepancy(obj2[key], count);
        }
    }
    if (obj1[key] !== obj2[key]) {
        count++;
    }

    return count
}
console.log(getDiscrepancy(obj1, obj2));