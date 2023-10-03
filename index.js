function createOrder(stringArray) {
    const order = {};

    for (const flavor of stringArray) {
        if (!order[flavor]) {
            order[flavor] = {amount: 1};
        } else {
            order[flavor].amount++;
        }
    }
    return order;
}

const userInputString = prompt("Please enter your froyo flavors, separated by commas.", "vanilla,vanilla,vanilla,strawberry,coffee,coffee");

const stringArray = userInputString.split(",");

const order = createOrder(stringArray);

console.table(order);