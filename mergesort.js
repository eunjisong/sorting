function mergeSort(arr){
    var newarr = []
    if(arr[0].length <= 1){
        newarr.push(arr);
    } else {
        var splitArr = split(arr);
        for (var i=0; i<splitArr.length; i++){
            mergeSort(splitArr[i]);
        }
    }
    return newarr;
}

function split(arr){
    if(arr.length <= 1){
        return arr    
    } else if(arr.length % 2 !== 0 ) {
        var midPoint = Math.floor(arr.length / 2) + 1; 
        return [arr.slice(0, midPoint), arr.slice(midPoint)];
    } else {
        return [arr.slice(0, arr.length/2), arr.slice(arr.length/2)];   
    }
}

function merge(arr1, arr2, newArr){
    if(newArr === undefined){
         newArr = [];
    }
    if (!arr1 || !arr2){
        return "you need two arrays to run this function!";
    }

    if(arr1.length > 1){
        if (arr1[0] < arr2[0]){
            newArr.push(arr1[0]);
            newArr = merge(arr1.slice(1),arr2, newArr);
        } else {
            newArr.push(arr2[0]);
            newArr = merge(arr1,arr2.slice(1), newArr);
        }
    } else {
        if (arr1[0] < arr2[0]){
            newArr.push(arr1[0],arr2[0]);
        } else {
            newArr.push(arr2[0],arr1[0])
        }

    }
 //   console.log(newArr);
    return newArr;
}

