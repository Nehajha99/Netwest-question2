# About Question
In this problem, I have to find out the length of the largest subset.
# About Solution
- In this code, I started from an empty array and  iterate the loop less than divisor and push the remainder in that array.
```javaScript
    let counts=[]
    for(var i = 0 ; i<k ; i++){
        counts.push(0)
    }
```
- In next step I iterated the elements of the array and perform the arithmetic operations on that elements to get the count of elements according to their possible remainders.
```javaScript
   for (i of s){
        counts[i%k]+=1} 
```
- After this, by using minimum function I get the initialisation of count and know to get the number of iterations.

```javaScript
    let count=Math.min(counts[0],1)
```

- Then, we compare the length of one subset with the other subset to get the maximum subset length. At last, we get the count of subset with maximum length and that subset contain only those elements that are evenly divisible by the divisor.

