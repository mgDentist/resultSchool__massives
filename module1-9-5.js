const clientsEstimations = [];

const askClientToGiveEstimation = () => {
    let askAboutService = Number(prompt(`Как вы оцениваете нашу кофейню от 1 до 10?`));
    if (askAboutService > 0 && askAboutService <= 10) {
        clientsEstimations.push(askAboutService);
        // console.log(clientsEstimations, 1);
    }
    return clientsEstimations;
};

for (i = 1; i <= 5; i++) {
    askClientToGiveEstimation();
}
// console.log(clientsEstimations, 2);
let goodEstimations = [];
let notGoodEstimations = [];

clientsEstimations.filter((star) => {
    if (star > 5) {
        goodEstimations.push(star);
    } else if (star <= 5) {
        notGoodEstimations.push(star);
    };
    // console.log(goodEstimations, 'ok');
    // console.log(notGoodEstimations, 'not ok');
});

alert(`Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}`);

