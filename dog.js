let btn = document.querySelector("button");
let url = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async () => {
       let imgLink = await dogImg();
       let img = document.querySelector("#result");
       img.setAttribute("src", imgLink);
    });


async function dogImg() {
    try {
        let res = await axios.get(url);
        return res.data.message;
    } catch (e) {
        return "No Image Found";
    };
};