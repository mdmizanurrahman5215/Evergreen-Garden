let cartList = [];
const addToCard = (id, name, category, price) => {
  const Exist = cartList.find((item) => item.id == id);
  console.log(Exist);

  if (Exist) {
    Exist.count += 1;
  } else {
    cartList.push({
      id,
      name,
      category,
      price,
      count: 1,
    });
  }

  console.log(cartList);
  displayCart(cartList);
  getTotalPrice(cartList)
};



