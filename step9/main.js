// const task = (arr, arr1) => {
//     return arr.reduce((acc, rec, idx) => {
//         return [...acc, rec + arr1[idx]]
//     }, [])
// }
// console.log(task([2, 3], [1, 4]));

// acc = [];
// rec = 2;
// arr2[idx] = [1,4][0] = 1
// return [...[], 2+1] = acc

// acc = [3];
// rec = 3;
// arr2[idx] = [1, 4][1] = 4;
// return [...[3], 3 + 4] = acc


// const task = arr => {
//     return arr.reduce((acc, rec) => {
//         return [...acc, rec * 2]
//     }, [])
// }
// console.log(task([2, 3, 1, 4]));

// const task = arr => {
//     return arr.reduce((acc, rec) => {
//         return [...acc, rec.id]
//     }, [])
// }
// console.log(task([{id : '100'}, {id : 5}, {id: true}, {id : undefined}]));

// const task = arr => {
//     return arr.reduce((acc, rec) => {
//         return [...acc, `<div>${rec}</div>`]
//     }, [])
// }
// console.log(task([1, 2]));

// const task = arr => {
//     return arr.reduce((acc, rec) => {
//         if (rec.length % 2 === 0) {
//             return [...acc, rec]
//         }
//         return acc
//     }, [])
// }
// console.log(task(['ab', 'abc', 'abcd']));

// acc = [];
// rec = 'ab';
// rec.length = 2;
// 2 % 2 === 0 = true;
// return [...[], 'ab'] = acc;

// acc = ['ab'];
// rec = 'abc';
// rec.length = 3;
// 3 % 2 === 0 = false;
// return ['ab'] = acc;

// acc = ['ab'];
// rec = 'abcd';
// rec.length = 4
// 4 % 2 === 0 = true;
// return [...['ab'], 'abcd'] = acc;

// const task = arr =>  {
//     return arr.reduce((acc, rec) => {
//         if((rec * 2) % 10 === 0){
//             return [...acc, rec * 2]
//         }
//         return acc
//     }, [])
// }
// console.log(task([1, 2, 3, 7, 10, 5]));

// const task = arr => {
//     return arr.reduce((acc, rec) => {
//         if (rec) {
//             return [...acc, rec]
//         }
//         return acc
//     }, [])
// }
// console.log(task([true, false, true, false]));

// const task = arr => {
//     return arr.reduce((acc, rec) => {
//         if (rec === undefined) {
//             return acc
//         }
//         return [...acc, rec]
//     }, [])
// }
// console.log(task([true, false,, undefined, true, undefinde,  false]));


// const task = arr => {
//     return arr.reduce((acc, rec) => acc + rec, 0)
// }
// console.log(task([1, 2, 3, 4, 5]));

// const task = arr => {
//     return arr.reduce((acc, rec) => {
//         return acc && rec;
//     }, true)
// }
// console.log(task([true, false, true, true]));

// const task = arr => {
//     return arr.reduce((acc, rec, idx) => {
//         return { ...acc, [`field${idx + 1}`]: rec }
//     }, {})
// }
// console.log(task([true, 1, 'wow', 'you are smart brooo']));

// acc = {};
// rec = true;
// idx = 0;
// return { ...{}, field1: true } = acc;

// acc = { field1: true }
// rec = 1;
// idx = 1;
// return {...{field1: true}, fiedl2: 1} = acc;

// acc = {field1: true, field2 = 1};
// rec = 'wow';
// idx = 2;
// return {...{field1: true, field2 : 1}, field3: 'wow'} = acc;

// const task = obj => {
//     return Object.keys(obj).reduce((acc, rec) => {
//         if(typeof rec === 'string'){
//             return {...acc, [rec]: obj[rec]}
//         }
//         return acc;
//     }, {})
// }
// console.log(task({name:'pilot', isActive: true}));

// const task = obj => {
//     return Object.keys(obj).reduce((acc, rec) => {
//         if (!obj[rec]) {
//             return [...acc, rec]
//         }
//         return acc
//     }, [])
// }
// console.log(task({isActive: false, isPilot: true}));

// const task = arr => {
//     return arr.reduce((acc, rec ) => {
//         return acc + rec / arr.length
//     })
// }
// console.log(task[4, 6]);

// const task = (arr, num) => {
//     return arr.reduce((acc, rec) => {
//         return rec(acc)
//     }, num)
// }
// console.log(task[(a) => a + 1, (a) => a * 2], 5);