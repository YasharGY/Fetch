const container = document.querySelector(".container");

fetch("https://dummyjson.com/products")
    .then((x) => x.json())
    .then((x) => {
        x.products.forEach((i) => {
            const image = i.images[0];
            const id = i.id;
            const title = i.title;
            const price = i.price;
            const description = i.description


            const card = document.createElement("div");
            card.className = "card";
            card.style.border = "1px solid gray";
            card.style.width = "500px"
            card.style.background = "lightgray"
            card.style.marginBottom = "20px";
            const img = document.createElement("img");
            img.style.width = "200px"
            const titleSpan = document.createElement("span");

            const descSpan = document.createElement("span")
            descSpan.style.float = "right"

            const priceSpan = document.createElement("span");
            priceSpan.style.float= "right"


            img.src = image;
            titleSpan.innerText = title;
            descSpan.innerText = description;
            priceSpan.innerText = `AZN ${price}`

            card.appendChild(img);
            card.appendChild(titleSpan);
            card.appendChild(priceSpan);
            card.appendChild(descSpan)

            container.appendChild(card);
        });
    });
