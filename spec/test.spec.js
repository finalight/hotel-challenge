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

describe("Get best hotel based on price and rate (getHotelRate) test", function() {
   describe("input client type regular, date 16th march 2009", function () {
      it("returns Lakewood", function () {
          var hotel = new Hotel();
          var dates = [
              { date: '16Mar2009(mon)', day_type: 'weekday' }
          ];
          var result = hotel.getHotelRate("regular", dates);
          expect(result.name).toEqual('Lakewood');
      }) ;
   });   
    
    describe("input client type rewards, dates 19th to 21th march 2009", function () {
      it("returns Ridgewood", function () {
          var hotel = new Hotel();
          var dates = [
              { date: '19Mar2009(thur)', day_type: 'weekday' },
              { date: '20Mar2009(fri)', day_type: 'weekday' },
              { date: '21Mar2009(sat)', day_type: 'weekend'}
          ];
          var result = hotel.getHotelRate("rewards", dates);
          expect(result.name).toEqual('Ridgewood');
      });
   });

    describe("input client type regular, dates 20th to 22th march 2009", function () {
        it("returns Bridgewood", function () {
            var hotel = new Hotel();
            var dates = [
                { date: '20Mar2009(fri)', day_type: 'weekday'},
                { date: '21Mar2009(sat)', day_type: 'weekend'},
                { date: '22Mar2009(sun)', day_type: 'weekend'}
            ];
            var result = hotel.getHotelRate("regular", dates);
            expect(result.name).toEqual('Bridgewood');
        });
    });
});