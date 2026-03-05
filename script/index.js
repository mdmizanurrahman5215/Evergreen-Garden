
const fetchCategory = async()=>{

    // showLoading()

 try {
    const response = await fetch("https://openapi.programming-hero.com/api/categories")
    const data = await response.json()
    const categories =  data.categories
    categoryBtn(categories)
   
    
 } catch (error) {
    console.log(error);
    
 }finally{
    // showLoading()
 }
}
fetchCategory()

const fetchPlants = async()=>{
    showLoading()
     try {
    const response = await fetch(
      "https://openapi.programming-hero.com/api/plants",
    );
    const data = await response.json();

    const plants = data.plants;
    displayPlants(plants);
    console.log(plants);
  } catch (error) {
    console.log(error);
  } finally {
    // showLoading()
    closeLoading()
  }
}

const fetchByCategory = async(id)=>{
    console.log(id);
    
  showLoading()
     try {
    const response = await fetch(`https://openapi.programming-hero.com/api/category/${id}`);
    const data = await response.json();

    const plants = data.plants;
    displayPlants(plants);
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    // showLoading()
    closeLoading()
  }
}

 fetchPlants();