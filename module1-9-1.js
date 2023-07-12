const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];
//получение посылки
const giveParcel = () => {
    let hasParcel = peopleWaiting.shift();
    alert(`${hasParcel} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`)
    return peopleWaiting;
};

giveParcel(); // Получила посылку Кристина
giveParcel(); // Получил посылку Олег
giveParcel(); // Получил посылку Кирилл

//ушли без посылки
const leaveQueueWithoutParcel = () => {
    let hasntParcel = peopleWaiting.pop()
    alert(`${hasntParcel} не получил(а) посылку и ушел(ла) из очереди`);
};

leaveQueueWithoutParcel();
leaveQueueWithoutParcel();
leaveQueueWithoutParcel();
leaveQueueWithoutParcel();
