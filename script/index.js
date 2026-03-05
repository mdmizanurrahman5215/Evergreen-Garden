
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
  }
}
