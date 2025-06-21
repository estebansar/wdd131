let count = 1;

const addButton = document.querySelector("#add");
const form = document.querySelector("#registrationForm");
const summary = document.querySelector("#summary");

addButton.addEventListener("click", () => {
    count++;
    const html = participantTemplate(count);
    addButton.insertAdjacentHTML("beforebegin", html);

});

function participantTemplate(count) {
    return `
        <section class="participant">
            <label for="name${count}">Name</label>
             <input id="name${count}" name="name${count}" type="text">
            
            <label for="age${count}">Age</label>
            <input id="age${count}" name="age${count}" type="number">

            <label for="fee${count}">Fee</label>
            <input id="fee${count}" name="fee${count}" type="number"></input>
        </section>
    `;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name= document.querySelector("#adultName").value;
    const total = totalfees();
    const message = successTemplate({name, count, total});

    form.classList.add("hide");
    summary.classList.remove("hide");
    summary.innerHTML = message;
});

function totalfees() {
    let fees = [...document.querySelectorAll("[id^=fee]")];
    return fees.reduce((sum, el) => sum + Number(el.value || 0), 0);
}

function successTemplate(info) {
    return `<p>Thnak  you ${info.name} for registering. You have registered $(info.count} participant and owe $${info.total} in Fees.</p>`;
}