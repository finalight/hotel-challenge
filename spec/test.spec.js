var Hotel = require("../index")

describe("Hotel room reservation test", function() {
    describe("input 16th to 18th march 2009", function() {
        it("returns lakewood", function() {
        	var hotel = new Hotel();
        	var result = hotel.findCheapest("haha");
        	expect(result).toBe("Lakewood");
        });
    });
});
