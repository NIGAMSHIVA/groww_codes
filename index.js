// use Of map,filter reduce


const arr = [1, 4, 5, 9];

console.log(arr.reduce(function abc(max, curr) {
    
    if (curr > max)
        max = curr;
        
    return max;
},0))



