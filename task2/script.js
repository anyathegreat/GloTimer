const day = {
    date: new Date(),
    getPartDay(){
        let hours = this.date.getHours();

        if(hours < 6) return "Ночь";
        if(hours < 12) return "Утро";
        if(hours < 18) return "День";
        return "Вечер";
    },
    getDayOfWeek(){
    const daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    
    return daysOfWeek[this.date.getDay()];
    },
    getTimeOfDay(){
        const hours = this.getFormat(this.date.getHours());
        const minuts = this.getFormat(this.date.getMinutes());
        const seconds = this.getFormat(this.date.getSeconds());

        return `${hours}:${minuts}:${seconds} PM`;
    },
    getFormat(date){
        return String(date).length === 1 ? `0${date}`: date;
    },
    timeUntilNewYear(){
        const nextNewYear = new Date(this.date.getFullYear() + 1, 0, 1);
        const timeDiff = nextNewYear - this.date;
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        return days;
    }
}

function createElementDate(){
    const ul = document.querySelector(".container ul");
    
    ul.insertAdjacentHTML("beforeend",`
        <li>Добрый ${day.getPartDay()}</li>
        <li>Сегодня: ${day.getDayOfWeek()}</li>
        <li>Текущее время: ${day.getTimeOfDay()}</li>
        <li>До нового года осталось ${day.timeUntilNewYear()} дней</li>
        `);
}

createElementDate();
