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

test('tdd function create world',function(){
    ok(typeof esercizio.init === "function", "init è una funzione");
    var stub = sinon.stub(esercizio, "nextGeneration");
    esercizio.init([]);
    ok(stub.called,'next generation viene richiamato da init');
});

test('tdd esercizio applicoRegola torna true o false', function() {
    esercizio.init([]);
    ok(esercizio.applicoRegola(1,1,"regola") === false, 'se la matrice è vuota torna false');
});

test('tdd esercizio applicoRegola torna false se non è presente la cella', function() {
    esercizio.init([ [0,1,1], [1,1,1], [0,0,0] ]);
    ok(esercizio.applicoRegola(2,3,"regola") === false, 'se non trova la cella');
});

test('tdd esercizio applicoRegola torna numero vicini se esistono', function() {
    esercizio.init([ [0,1,1], [1,1,1], [0,0,0] ]);
    var vicini = esercizio.applicoRegola(1,1,"fakeregola");
    ok(vicini === 4);
});
