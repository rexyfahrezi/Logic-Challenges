function bandingkanAngka(angka1,angka2){
	if (angka1 === angka2){
		return -1 //output return 1
	}
	if (angka1 < angka2){
		return true //output true
	}
	if (angka1 > angka2){
		return false //output false
	}
}
console.log(bandingkanAngka(6,5)) // false
console.log(bandingkanAngka(2,2)) // -1
console.log(bandingkanAngka(5,6)) // true