function xo(str){
	var x = 0
	var o = 0
	for (i = 0; i <= str.length; i++){
		if (str[i] == 'x'){
			x++
		}
		else if(str[i] == 'o'){
			o++
		}
	}
	return x == o // output true
}// output false
console.log(xo('xoxoxo'))