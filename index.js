function Hotel() {
    this.lakewood_rating = 3;
    this.bridgewood_rating = 3;
    this.ridgewood_rating = 3;
    this.hotels = ['Lakewood', 'Bridgewood', 'Ridgewood'];
}

Hotel.prototype.findCheapest = function(input) {
    //split the text
    var input_array = input.split(":")
    var customer_type = input_array[0].trim();

    var date_array = input_array[1].split(",").map(function(item) {
        var trimmed_item = item.trim();
        var opening_bracket_pos = trimmed_item.indexOf('(');
        var closing_bracket_pos = trimmed_item.indexOf(')');
        var day = trimmed_item.substr(opening_bracket_pos + 1, closing_bracket_pos - opening_bracket_pos - 1);
        return [trimmed_item.trim(), day];
    });


    // console.log(date_array);
    return this.hotels[0];
}

module.exports = Hotel;
