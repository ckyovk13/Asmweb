const menu = document.getElementById("menu");
      const button = document.getElementById("button");

      button.addEventListener("click", function () {
        menu.classList.toggle("hidden");
      });
      const id = new URLSearchParams(window.location.search).get("id");
      const products = [
        { id: 1,
          img:"./src/img/Works1.jpg",
          name: "Designing Dashboards", 
          age:"2020", 
          address :"Dashboard", 
          description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."},
        { id: 2,
          img:"./src/img/works2.jpg",
          name: "Vibrant Portraits of 2020", 
          age:"2018", 
          address :"Illustration", 
          description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." },
        {id: 3 ,img:"./src/img/works3.jpg",name: "36 Days of Malayalam type", age:"2018", address :"Dashboard", description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."},
        {id: 4 ,img:"./src/img/works4.jpg",name: "Components", age:"2018", address :"Components, Design", description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."},
    ];
    const showProduct = products.find(function (element) {
      return element.id == id;
  });
  document.getElementById("detail").innerHTML = `<h2 class="font-heebo text-[34px] font-bold mt-20">
  ${showProduct.name}
</h2>

<div class="flex space-x-4 mt-5">
  <span class="text-[18px] text-white bg-[#FF7C7C] px-2 py-1 rounded-full">${showProduct.age}</span>
  <span class="text-[20px] font-heebo text-[#21243D]">${showProduct.address}</span>
</div>
<p>${showProduct.description}</p>`;