function solve() {
    a = +document.getElementById("a").value;
b = +document.getElementById("b").value;
if (a===0) {
    if (b===0) {
        document.getElementById("result").innerHTML= 'Phương trình có vô số nghiệm';
        
    } else {
        document.getElementById("result").innerHTML= 'Phương trình vô nghiệm';
        
    }
    
} else {
    document.getElementById("result").innerHTML = 'Phương trình có nghiệm là: ' + -b/a ; 
    
}
}