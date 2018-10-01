function balikKata(kata){
	var balik = ''
	for (var i = kata.length-1; i>=0; i--){
		balik = balik+kata[i]	
	}
	return balik
	
}
console.log(balikKata('Hello'))

/*i = 5 - 1; 4 >= 0;
balik = ''+ o
i = 4 - 1; 3 >= 0;
balik = 'o'+ 'l'
i = 3 - 1; 2 >= 0;
balik = 'ol'+ 'l'
i = 2 - 1; 1 >= 0;
balik = 'oll'+ 'e'
i = 1 - 1; 0 >= 0;
balik = 'olle'+ 'h'
i = 0 - 1; -1 >= 0;
false*/