const menu = document.getElementById("menu");
      const button = document.getElementById("button");

      button.addEventListener("click", function () {
        menu.classList.toggle("hidden");
      });
      const users = [
        { id: 1, title: "UI Interactions of the week", description : "12 Feb 2019", date : "Express, Handlebars", shortDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."},
        { id: 2, title: "UI Interactions of the week", description : "12 Feb 2019", date : "Express, Handlebars", shortDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."},
        { id: 3, title: "UI Interactions of the week", description : "12 Feb 2019", date : "Express, Handlebars", shortDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."},
        { id: 3, title: "UI Interactions of the week", description : "12 Feb 2019", date : "Express, Handlebars", shortDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."},
    ];
    function listProduct(users) {
        if (!Array.isArray(users) || users.length == 0) return false;
        let result = "";
        for (let i = 0; i < users.length; i++) {
            const userName = users[i];
            result += `
            <div class="border-b py-8 p-5 py-8">
                    <h3 class="mb-5">
                        <a href="" class="text-2xl font-bold ">${userName.title}</a>
                    </h3>
                    <div class="flex space-x-4 text-[#21243D] mb-5">
                        <span>${userName.date}</span> 
                        <span>|</span>
                        <span class="text-[#8695A4]">${userName.description}</span>
                    </div>
                    
                        <p>${userName.shortDescription}</p>
                    
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
    render("users", listProduct(users));