function bubbleSort(arr){
    var placeHolder = arr.length;
    if (arr.length === 1){
        return arr;
    } else {
        while (placeHolder > 1){
            for (var i=0; i<arr.length; i++){
                if (arr[i+1] && arr[i] > arr[i+1]){
                    [arr[i],arr[i+1]] = [arr[i+1],arr[i]];
                } 
            }
            placeHolder--;
        }
    }
    return arr;
}