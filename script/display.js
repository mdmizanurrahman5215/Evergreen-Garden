const categoryContainer = document.getElementById("category-container");
const buttonContainer = document.getElementById("button-container");
const cardContainer = document.getElementById("card-container");

const categoryBtn = (categories) => {
  //   buttonContainer.innerHTML = "";
  console.log(categories);
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.textContent = category.category_name;
    button.classList.add("btn", "btn-soft", "btn-accent");
    //    `
    //    <button class="btn btn-soft btn-accent"></button>
    //    `
    buttonContainer.appendChild(button);
  });
};

const displayPlants = async (plants) => {
    console.log(plants);
    cardContainer.innerHTML = "";

    if(!plants.length){
     console.log("there has no plants");
     
    }


    plants?.forEach((plant)=>{
        const {id, image, name, description, category, price} = plant
      const div = document.createElement("div")
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
            <div class="badge badge-accent">Accent</div>
            <div class="flex gap-4 justify-between">
              <button class="btn btn-primary">${price}</button>
              <button class="btn btn-primary">Add to card</button>
            </div>
          </div>
        </div>
      `
      cardContainer.appendChild(div)
    })
    
  

};

