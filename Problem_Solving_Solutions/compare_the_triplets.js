function compareTriplets(a, b) {
    let counterA = 0, counterB = 0;
    for(let i=0;i<a.length;i++){
        if(a[i] > b[i]){
            counterA++;
        }
        else if(a[i] < b[i]){
            counterB++;
        }
    }
    
    return [counterA,counterB];
    }