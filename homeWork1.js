// 2
function shollowCompare(fO,sO) {
    const firstObjArr = Object.entries(fO)
    const secondObjArr = Object.entries(sO)
    let falseCounter = 0
    if (firstObjArr.length !== secondObjArr.length) {
        return false
    } else {
        for (let i = 0; i < firstObjArr.length; i++) {
            for (let nums = 0; nums < firstObjArr[i].length; nums++) {
                if (firstObjArr[i][nums] !== secondObjArr[i][nums]) {
                    falseCounter++
                } 
            }
        }
    }
    return falseCounter === 0 ? true: false
}

const fTestObj = { a: '1', p: '2', a:4 }
const sTestObj = { a: '1', p: '2' }
console.log(shollowCompare(fTestObj, sTestObj))

// 3
function palindromeStr(str) {
    let secStr = ''
    for (let i=str.length-1; i>=0; i--) {
        secStr += str[i]
    }
    return secStr === str
}
console.log(palindromeStr('lol'))

// 4
function findMissing(arr) {
    const sortedArr = arr.sort((a,b) => a-b)
    const missingNumsArr = []
    
    for (let i = 0; i < arr.length; i++) {
        if (i === 1) break
        for (let num = sortedArr[0]; num < arr[arr.length-1]; num++) {
            if (!sortedArr.includes(num)) {
                missingNumsArr.push(num)
            }
        }
    }
    return missingNumsArr
}

const testArr = [4,1,5,6,7,13,9,10,11,12,8,14,17]
console.log(findMissing(testArr))

// 5
function exists(arr,el) {
    for (let i = 0; i <= arr.length; i++) {
        if (el === arr[i]) {
            return true
        } else if (i === arr.length-1 && el !== arr[i]) {
            return false
        }
    }
}

const arr = [2,5,1,7,8,5,34,76,12,64,76]
console.log(exists(arr, 100))
console.log(exists(arr, 12))
