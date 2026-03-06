const categoryContainer = document.getElementById("category-container");
const buttonContainer = document.getElementById("button-container");
const cardContainer = document.getElementById("card-container");
const alltrees = document.getElementById("alltrees");
const cartListContainer = document.getElementById("cart-list");
const totalElem = document.getElementById("total");

const categoryBtn = (categories) => {
  // buttonContainer.innerHTML = "";
  //   console.log(categories);

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.textContent = category.category_name;
    button.id = `category-${category.id}`;
    button.classList.add("btn", "btn-soft", "btn-accent");

    button.addEventListener("click", function () {
      setActive(button);
      fetchByCategory(category.id);
    });

    buttonContainer.appendChild(button);
  });
};

const displayPlants = async (plants) => {
  //   console.log(plants);
  cardContainer.innerHTML = "";

  if (!plants.length) {
    console.log("there has no plants");
  }

  plants?.forEach((plant) => {
    const { id, image, name, description, category, price } = plant;
    const div = document.createElement("div");
    div.innerHTML = `
        <div data-id = "${id}" class="card bg-base-100 shadow-sm">
          <figure class="h-48 w-full overflow-hidden">
            <img
              src="${image}"
              alt="${name}"
              class="w-full h-full object-cover"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">${name}</h2>
            <p class="line-clamp-2">
             ${description}
            </p>
            <div class="badge badge-accent">${category}</div>
            <div class="flex gap-4 justify-between">
              <button class="btn btn-primary">${price}</button>
              <button onclick= "addToCard(${id}, '${name}', '${category}', ${price})" class="btn btn-primary">Add to card</button>
            </div>
          </div>
        </div>
      `;
    cardContainer.appendChild(div);
  });
};

function setActive(activeBtn) {
  const buttons = document.querySelectorAll("#button-container button");
  //   console.log(buttons);

  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });
  activeBtn.classList.add("active");
}

alltrees.addEventListener("click", function () {
  const buttons = document.querySelectorAll("#button-container button");
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });
  alltrees.classList.add("active");
});

const displayCart = () => {
  cartListContainer.innerHTML = "";

  if (!cartList.length) {
    const div = document.createElement("div");
    div.innerHTML = `
          <div class="text-center  mx-auto"> 
            <p>Your cart is empty <br> Add trees to get started</p>
          </div>
    `;
    cartListContainer.appendChild(div);

    return;
  }

  cartList.forEach((cart) => {
    const { name, count, price } = cart;
    const div = document.createElement("div");
    div.classList.add("bg-white", "p-4" ,"rounded-md", "shadow-md", "flex", "justify-between" ,"items-center")
    div.innerHTML = `
             <div class="flex flex-col">
                <h3 class="text-2xl font-semibold">${name}</h3>
                <div >
                    <span>${price}</span> x <span>${count}</span>
                </div>
            </div>
            <div class="flex flex-col">
                <span class = "cursor-pointer">X</span>
                <span>${price*count}</span>
            </div>
               
       
    `;
    cartListContainer.appendChild(div);
  });
};

const getTotalPrice = (array)=>{
  console.log(array);
  const totalPrice = array.reduce((total, item)=>{
    return total + Number(item.price) * Number(item.count)
  },0)
  console.log(totalPrice);
  totalElem.innerText = `$ ${totalPrice}`

  
//   array.reduce()
  
}