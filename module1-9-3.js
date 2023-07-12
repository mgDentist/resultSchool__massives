const coffees = ['Latte', 'Cappuccino', 'Americano'];

const cafeResponse = () => {
    const coffeeName = prompt(`Поиск кофе по названию:
    (Введите название кофе латинскими буквами)`).trim();

    let normalizedCoffeeName = coffeeName[0].toUpperCase() + coffeeName.slice(1).toLowerCase();
    console.log(normalizedCoffeeName);

    const IfFoundCoffee = coffees.some((name) => {
        return name === normalizedCoffeeName;
    });

    if (IfFoundCoffee) {
        const indexOfCustomerCoffee = coffees.findIndex((item) => {
            return item === normalizedCoffeeName;
        });
        alert(`Держите ваш любимый кофе ${normalizedCoffeeName}. Он ${indexOfCustomerCoffee + 1}-й по популярности в нашей кофейне.`);
    } else {
        alert(`К сожалению, такого вида кофе нет в наличии`);
    }
};

cafeResponse();

