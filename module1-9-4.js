const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];

const increasePrices = () => {
    let changedPrice = prices.map((price) => {
        return price + 0.5;
    });      
    // console.log(increasedPrice);
    changedPrice.forEach((price, index) => {
        const coffee = coffees[index];
        alert(`Кофе ${coffee} сейчас стоит ${price} евро`);
    });
};

increasePrices();