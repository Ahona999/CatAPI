let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let fact = await getFacts();// as below its an async function it will return an promise so we add await
    //console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
});



let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let facts = await axios.get(url);
        return facts.data.fact;
    } catch (e) {
        console.log("Error found 404", e);
        return "No Fact Found";
    };
};