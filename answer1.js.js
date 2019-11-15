function isSubset(arrayA, arrayB) {
    var matchScore = 0;
    for (var i = 0; i < arrayB.length; i++) {
        for (var j = 0; j < arrayA.length; j++) {
            if (arrayB[i] === arrayA[j]) {
                matchScore++;
                break;
            }
        }
    }
    if (matchScore === arrayB.length) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isSubset(["A", "B", "C", "D", "E"], ["A", "B", "C"]));

//Big-O notation: O(A*B), where A is the array length of arrayA. and B is the array length of arrayB