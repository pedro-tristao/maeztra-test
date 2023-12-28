function permutation(n) { 
    if (n < n) return -1 
  
    let result = n 
    for (let i = 1; i < n; i++)  
        result *= n - i; 
  
    return result 
} 
  
console.log("Quantidade de modos distintos para foto: ", permutation(6))