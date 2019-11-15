function createArrayOfFunctions(y) {
    var arr = [];
    for (var i=0; i<y; i++){
        arr[i]=function(x) { return x + i;}
    }
    return arr;
}

//In this question, when we call out the function, it appears that i is always equal to y.
//This is because, var makes i disclose globally. 
//We can use let instead of var to make i disclose locally:

function createArrayOfFunctions(y) {
    var arr = [];
    for (let i=0; i<y; i++){
        arr[i]=function(x) { return x + i;}
    }
    return arr;
}