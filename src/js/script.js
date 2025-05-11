document.querySelector('.btn').addEventListener('click', function () {
    this.style.cursor = 'wait'; // Меняем курсор на wait при клике
    // Выполняем какое-то действие
    setTimeout(() => {
        this.style.cursor = 'pointer'; // Возвращаем курсор на pointer после завершения действия
    }, 2000); // Пример задержки в 2 секунды
});