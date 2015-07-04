module("tests", {
	setup: function () {
	},
	teardown: function () {
	}
});

test('tdd esercizio', function(){
	ok(typeof esercizio === "object", "esercizio è un oggetto");
    ok(typeof esercizio.nextGeneration === "function", "nextGeneration è una funzione");
});
