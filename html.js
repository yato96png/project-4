let whiteBeans = 75; // Белые фасолины
let blackBeans = 150; // Черные фасолины

while (whiteBeans + blackBeans > 1) {
    if (whiteBeans >= 2) {
        whiteBeans -= 2; // Убираем две белые фасолины
        blackBeans += 1; // Возвращаем одну черную из кучи
    } else if (whiteBeans >= 1 && blackBeans >= 1) {
        whiteBeans -= 1; // Убираем белую фасолину
    } else if (blackBeans >= 2) {
        blackBeans -= 1; // Убираем одну черную фасолину
    }
}

if (whiteBeans === 1) {
    console.log("Белый горошек остался.");
} else if (blackBeans === 1) {
    console.log("Черный горошек остался.");
}
