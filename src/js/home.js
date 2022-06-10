const menu = document.getElementById("menu");
      const button = document.getElementById("button");

      button.addEventListener("click", function () {
        menu.classList.toggle("hidden");
      });
      const products = [
        { id: 1,img:"./src/img/Works1.jpg",name: "Designing Dashboards", age:"2020", address :"Dashboard", description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."},
        { id: 2, img:"./src/img/works2.jpg",name: "Vibrant Portraits of 2020", age:"2018", address :"Illustration", description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." },
        {id: 3 ,img:"./src/img/works3.jpg",name: "36 Days of Malayalam type", age:"2020", address :"Dashboard", description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
    ];
    function listProduct(products) {
        if (!Array.isArray(products) || products.length == 0) return false;
        let result = "";
        for (let i = 0; i < products.length; i++) {
            const product = products[i];
            result += `
            <div>
            <img src="${product.img}" alt="" class="rounde-lg">
        </div>
        <div>
            <h3><a href="./detail.html?id=${product.id}" class="text-[#212430] text-[30px] font-bold">${product.name}</a></h3>
            <div class="flex space-x-4 items-center py-5">
                <span class="inline-block bg-[#142850] py-1 px-2 font-bold text-white rounded-full">${product.age}</span>
                <span class="text-[#8695A4]">${product.address}</span>
            </div>
            <p class="text-[#212430]">${product.description}</p>
        </div>
            `;
        }
        return result;
    }
    
    function render(elementId, content) {
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = content;
        }
    }
    render("products", listProduct(products));