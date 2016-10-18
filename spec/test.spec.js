var Hotel = require("../index")

describe("Hotel room reservation test", function() {
    describe("input 16th to 18th march 2009", function() {
        it("returns lakewood", function() {
            var hotel = new Hotel();
            var result = hotel.findCheapest('Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)');
            expect(result).toBe("Lakewood");
        });
    });

    describe("input 16th to 18th march 2009", function() {
        it("returns bridgewood", function() {
            var hotel = new Hotel();
            var result = hotel.findCheapest('Regular: 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)');
            expect(result).toBe("Bridgewood");
        });
    });

    describe("input 16th to 18th march 2009", function() {
        it("returns ridgewood", function() {
            var hotel = new Hotel();
            var result = hotel.findCheapest('Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)');
            expect(result).toBe("Ridgewood");
        });
    });

    describe("input 16th to 18th september 2016", function() {
        it("returns lakewood", function() {
            var hotel = new Hotel();
            var result = hotel.findCheapest('Rewards: 6Sep2016(tues), 7Sep2016(wed), 8Sep2016(thur)');
            expect(result).toBe("Lakewood");
        });
    });
});

describe("Get the cheapest hotel with the highest rating", function() {
  var hotels = [
    { name: "Hotel1", price: 100, rating: 5 },
    { name: "Hotel2", price: 100, rating: 4 },
    { name: "Hotel3", price: 90, rating: 4 },
    { name: "Hotel4", price: 95, rating: 5 }
  ];

  it("should return the hotel with the lowest price with the highest rating", function() {
    var hotel = new Hotel();
    var result = hotel.getHotelsRates(hotels);
    expect(result).toEqual({ name : 'Hotel3', price : 90, rating : 4 });
  });
});
