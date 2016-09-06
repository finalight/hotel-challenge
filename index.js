function Hotel() {
    this.lakewood_rating = 3;
    this.bridgewood_rating = 3;
    this.ridgewood_rating = 3;
    this.hotels = ['Lakewood', 'Bridgewood', 'Ridgewood'];
}

Hotel.prototype.findCheapest = function (input) {
	//split the text
	var input_array = input.split(":")
	var customer_type = input_array[0].trim();

	console.log(customer_type);
    return this.hotels[0];
}

module.exports = Hotel;
