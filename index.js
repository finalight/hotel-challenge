var _ = require('lodash');

function HotelMetaData() {
    return {
        hotels: [{
            name: 'Lakewood',
            rating: 3,
            pricing: { regular: { weekday: 110, weekend: 90 }, rewards: { weekday: 80, weekend: 80 } }
        }, {
            name: 'Bridgewood',
            rating: 4,
            pricing: { regular: { weekday: 160, weekend: 60 }, rewards: { weekday: 110, weekend: 50 } }
        }, {
            name: 'Ridgewood',
            rating: 5,
            pricing: { regular: { weekday: 220, weekend: 150 }, rewards: { weekday: 100, weekend: 40 } }
        }],
        weekdays: ['mon', 'tues', 'wed', 'thur', 'fri'],
        weekends: ['sun', 'sat']
    }
}


function Hotel() {}

Hotel.getDates = function(dates) {
    var hotelsInformation = HotelMetaData();
    var result = dates.split(",").map(function(item) {
        var trimmed_item = item.trim();
        var opening_bracket_pos = trimmed_item.indexOf('(');
        var closing_bracket_pos = trimmed_item.indexOf(')');
        var date = trimmed_item.substr(0, opening_bracket_pos);
        var day = trimmed_item.substr(opening_bracket_pos + 1, closing_bracket_pos - opening_bracket_pos - 1);
        if (hotelsInformation.weekdays.indexOf(day) > -1) {
            day = "weekday";
        } else if (hotelsInformation.weekends.indexOf(day) > -1) {
            day = "weekend";
        }
        return { date: trimmed_item.trim(), day_type: day };
    });
    return result;
}

Hotel.prototype.findCheapest = function(input) {
    //split the text
    var input_array = input.split(":")
    var customer_type = input_array[0].toLowerCase().trim();

    var date_array = Hotel.getDates(input_array[1]);

    return this.getHotelRate(customer_type, date_array).name;
}

Hotel.prototype.getHotelRate = function(customer_type, date_array) {
    //get total pricing for each hotel
    var hotelsInformation = HotelMetaData();
    var total_pricing = 0;
    var hotel_result;
    var hotel_array = [];

    hotelsInformation.hotels.forEach(function(hotel) {
        total_pricing = 0;

        date_array.forEach(function(date) {
            total_pricing += hotel.pricing[customer_type][date.day_type];
        });
        hotel_result = { name: hotel.name, price: total_pricing, rating: hotel.rating };
        hotel_array.push(hotel_result)

    });
    return this.getHotelsRates(hotel_array);
}

Hotel.prototype.getHotelsRates = function(hotels) {
    var hotel_result = _.orderBy(hotels, ['price','rating'], ['asc', 'desc']);
    return hotel_result[0];
}

module.exports = Hotel;
