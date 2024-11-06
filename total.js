

function total(cardNumber) {
    // Check if the card number length is between 12 and 16
    if (cardNumber.length < 12 || cardNumber.length > 16) {
    return "Invalid Credit Card";
    }

    // All but the last four digits
    return '*'.repeat(cardNumber.length - 4) + cardNumber.slice(-4);
}

module.exports = total;
