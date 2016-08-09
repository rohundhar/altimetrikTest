


var increment = 0;
var counter = 0;
var id_array = [];
var bool_array = [];


for (var i = 0; i < 10000000; i++) {
	bool_array[i] = false;
};
console.log("array prepped");
for (var i = 0; i < 10000000; i++){
	var id = Math.floor((Math.random() * 3986371923));
	if (bool_array[id] == true){
		increment++;
	}
	bool_array[id] = true;
	id_array.push(id);
}
console.log("Same ID's found:"+increment);
/*
for (var i = 0; i < 10000000; i++){

	if (bool_array[id_array[i]] == true){
		console.log
	}

	for (var j = 0; j < 10000000; j++){
		if (id_array[i] == id_array[j] && i!= j){
			console.log("SAME ID FOUND");
			console.log("Looking for :"+id_array[i]+"  found: "+id_array[j]);
			increment++;
		}
	}
	counter++;
	console.log(counter);
}
*/