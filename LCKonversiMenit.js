function konversiMenit(menit){
	var jam = Math.floor(menit / 60)
	var sisa = Math.floor(menit % 60)
	 if (sisa <= 9){
		return jam+' : 0'+sisa
 }
	return jam+': '+sisa
}

console.log(konversiMenit(72))