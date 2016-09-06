describe("Hotel room reservation test", function() {
    describe("input 16th to 18th march 2009", function() {
        it("returns lakewood", function() {
            expect("Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)").tobe("Lakewood");
        });
    });
});
