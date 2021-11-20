function nonDivisibleSubset(k, s) {
    let counts=[]
    for(var i = 0 ; i<k ; i++){
        counts.push(0)
    }
    for (i of s){
        counts[i%k]+=1}
    let count=Math.min(counts[0],1)
    for (var i = 1 ; i<Math.floor(k/2)+1;i++){
        if (i == k-i){
            count+=1
        }else{
            count+=Math.max(counts[i],counts[k-i])
        }
    }return count   

}
console.log(nonDivisibleSubset(4,[19,10,10,22,25,24,12]))