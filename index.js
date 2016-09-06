function Hotel() {
    this.lakewood_rating = 3;
    this.bridgewood_rating = 3;
    this.ridgewood_rating = 3;
    this.hotels = ['Lakewood', 'Bridgewood', 'Ridgewood'];
}

Hotel.prototype.findCheapest = function (input) {
    return this.hotels[0];
}

module.exports = Hotel;
