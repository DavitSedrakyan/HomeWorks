function myFind(find, arr) {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === find) {
            return find
        }
    }
    return undefined
}


const arr = [1,2,3,4,5]
console.log(myFind(5, arr))

2

function myFilter(callbackFn, arr) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (callbackFn(arr[i], i, arr)) {
            newArr.push(arr[i])
        }
    }
    return newArr
}



console.log(myFilter((el) => {
    return el > 4
}, [0,1,2,3,4,5,6]))

3

function myMap(callbackFn, arr) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callbackFn(arr[i], i, arr));
    }
    return newArr
}

console.log(myMap((el,i) => {
    return el * (i + 1)
},[2,4,6,8,10]))

4

function myEvery(callbackFn, arr) {
    let i = 0
    for (const el of arr) {
        if(!(callbackFn(el,i,arr))) {
            return false
        }
        i++
    }
    return true
}

console.log(myEvery((el) => {
    return el > 100
}, [3,4,5,6,76,4]))

5

function mySome(callbackFn, arr) {
    let i = 0
    for (const el of arr) {
        if(callbackFn(el,i,arr)) {
            return true
        }
        i++
    }
    return false
}

console.log(mySome((el) => {
    return el < 0.5
}, [0,1,2,3,4,5,67,7]))

6

function myFindIndex(search, arr) {
    for (let i = 0;  i<=arr.length; i++) {
        if (arr[i] === search) {
            return i
        }
    }
    return -1
}

console.log(myFindIndex('el', [3,1,5,'el']))

7

function myForEach(callbackFn, arr) {
    for (let i = 0; i<arr.length; i++) {
        callbackFn(arr[i], i, arr)
    }
}

const arr = [2,4,3,1,2,3,5]

console.log(myForEach())
