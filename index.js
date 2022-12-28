console.log("This screen shows Date and Real Timing of India.")

function dateClick() {
    setInterval(() => {
        let a;
        let date;
        let time;

        a = new Date;
        time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
        date = a.getDate() + "/" + (a.getMonth() + 1) + "/" + a.getFullYear();

        document.getElementById("date").innerHTML = date;
        document.getElementById("time").innerHTML = time;
    }, 1000);
}