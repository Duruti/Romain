


var convertisseurRomain = function(num) {
    if (num<=0) return '0'; 
    var valeurDecimale = [ 1000000,500000,100000,50000,10000,5000,1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    var chiffreRomains = 
    [ '(M)','(D)','(C)','(L)','(X)','(V)','M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
    
    // convertie le nombre via les tableaux
    const convert =  n =>{
        let i = valeurDecimale.indexOf(n)
        return chiffreRomains[i] 
    }
    // recherche le nombre inferieur
    const min = n =>{
        while(valeurDecimale.indexOf(n) == -1){
            n--; 
         }
         return n;
    }
    const isOk = (v,n) => {
        if ((n-v) >= 0){
             let r=v;
             while(r<=n){
                r += v
                result.push(convert(v))
                }
               return (n-(r-v))
        } 
        return -1  
    }

    let result = []
    if (valeurDecimale.indexOf(num) != -1) result.push(convert(num));
    else{
        // recherche le chiffre disponible inferieur
        let v = min(num); 
        let r =isOk(v,num) 
        while(r>0){
            let v1 = min(r); 
            r =isOk(v1,r) 
        } 
    }
    return result.join('')
}

let btnSubmit = document.querySelector("#submit");
let inputValue = document.querySelector("#inputValue");
let result = document.querySelector("#result");

//console.log(btnSubmit)
btnSubmit.addEventListener("click",function(){
    const v = parseInt(inputValue.value);
    result.textContent = v + " donne en chiffre Romain: "+ convertisseurRomain(v)
    inputValue.value = "";
});

// 36 = XXXVI
// 2000 = MM
// 5648 = MMMMMDCXLVIII
