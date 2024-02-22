// 1
function rNum(num, i=num.toString().length-1, str='') {
    if (i < 0) {
        return Number(str)
    }
    str += num.toString()[i]
    return rNum(num, --i, str)
}

// 2
function findSecNum(arr, num, i=0, count=0) {
    if (!(i <= arr.length-1)) {
        return undefined
    } else if (arr[i] === num && count>0) {
        return i
    } else if (num === arr[i]) {
        count++
    }
    return findSecNum(arr,num,++i, count)
}

// 3
function findSubStr(substring, str, i=0, count=0) {
    if (!(i <= str.length-1)) {
        return count
    } else if (substring === str.substr(i, substring.length)) {
        count++
    }
    return findSubStr(substring,str, ++i, count)
}
