function Hotel() {
    this.lakewood_rating = 3;
    this.bridgewood_rating = 3;
    this.ridgewood_rating = 3;
    this.hotels = ['Lakewood', 'Bridgewood', 'Ridgewood'];
    this.weekdays = ['mon', 'tue', 'wed', 'thur', 'fri'];
    this.weekends = ['sat', 'sun'];
    this.hotel_rates = [{
        name: "Lakewood",
        weekday_regular: 110,
        weekday_reward: 80,
        weekend_regular: 90,
        weekend_reward: 80
    }]
}

Hotel.prototype.findCheapest = function(input) {
    //split the text
    var input_array = input.split(":")
    var customer_type = input_array[0].trim();

    var date_array = input_array[1].split(",").map(function(item) {
        var trimmed_item = item.trim();
        var opening_bracket_pos = trimmed_item.indexOf('(');
        var closing_bracket_pos = trimmed_item.indexOf(')');
        var date = trimmed_item.substr(0, opening_bracket_pos);
        var day = trimmed_item.substr(opening_bracket_pos + 1, closing_bracket_pos - opening_bracket_pos - 1);
        return [trimmed_item.trim(), day];
    });

    var total_pricing_array = [];

    total_pricing_array.push(this.getHotelRate(this.hotels[0], customer_type, date_array));
    total_pricing_array.push(this.getHotelRate(this.hotels[1], customer_type, date_array));
    total_pricing_array.push(this.getHotelRate(this.hotels[2], customer_type, date_array));

    lakewood_total = this.getHotelRate(this.hotels[0], customer_type, date_array);
    bridgewood_total = this.getHotelRate(this.hotels[1], customer_type, date_array);
    ridgewood_total = this.getHotelRate(this.hotels[2], customer_type, date_array);

    console.log("lakewood ", lakewood_total)
    console.log("bridgewood ", bridgewood_total)
    console.log("ridgewood ", ridgewood_total)

    //find the minimum of the three hotel pricing
    if (lakewood_total > bridgewood_total) {
        if (bridgewood_total > ridgewood_total) {
            return this.hotels[2];
        }
        return this.hotels[1];
    } else if (lakewood_total > ridgewood_total) {
        if (ridgewood_total > bridgewood_total) {
            return this.hotels[1];
        }
        return this.hotels[0];
    }
    return this.hotels[0]
}

Hotel.prototype.getHotelRate = function(hotel_name, customer_type, date_array) {
    //get total pricing for each hotel
    var self = this;
    var total_pricing = 0;
    var returnObject = {};

    date_array.forEach(function(date) {
        if (self.weekdays.indexOf(date[1]) > -1) {
            if (hotel_name.toLowerCase() === "lakewood") {
                total_pricing += 110;
            } else if (hotel_name.toLowerCase() === "bridgewood") {
                total_pricing += 160;
            } else if (hotel_name.toLowerCase() === "ridgewood") {
                total_pricing += 220;
            }
        } else if (self.weekends.indexOf(date[1]) > -1) {
            if (hotel_name.toLowerCase() === "lakewood") {
                total_pricing += 90;
            } else if (hotel_name.toLowerCase() === "bridgewood") {
                total_pricing += 60;
            } else if (hotel_name.toLowerCase() === "ridgewood") {
                total_pricing += 150;
            }
        }
    });
    return total_pricing;
}

Array.prototype.contains = function(needle) {
    for (i in this) {
        if (this[i] == needle) return true;
    }
    return false;
}

module.exports = Hotel;
