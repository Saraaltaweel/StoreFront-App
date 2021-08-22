let initialState = {
    products: [
      {
        name: 'Natural juice',
        url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cocktails-1594319263.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*',
        category: 'drinks',
        price: 3.0,
        inStock: 5,
      },
      {
        name: 'Milkshake',
        url: 'https://www.unicornsinthekitchen.com/wp-content/uploads/2021/07/Strawberry-Milkshake-2.1200px-1-of-1.jpg',
        category: 'drinks',
        price: 4.50,
        inStock: 3,
      },
      {
        name: 'Smoothie',
        url: 'https://www.dinneratthezoo.com/wp-content/uploads/2018/05/frozen-fruit-smoothie-3.jpg',
        category: 'drinks',
        price: 4.0,
        inStock: 24,
      },
      {
        name: 'Caesar Salad',
        url: 'https://www.recipetineats.com/wp-content/uploads/2016/05/Caesar-Salad_7.jpg',
        category: 'food',
        price: 2.0,
        inStock: 500,
      },
      {
        name: 'Shrimp Pesto Pasta',
        url: 'https://www.acouplecooks.com/wp-content/uploads/2020/08/Shrimp-Pesto-Pasta-004.jpg',
        category: 'food',
        price: 6.75,
        inStock: 12,
      },
      {
        name: 'Mushroom soup',
        url: 'https://www.delonghi.com/Global/recipes/multifry/276.jpg',
        category: 'food',
        price: 3.80,
        inStock: 90,
      },
    ],
    count: 0,
  };
  
  const products = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
      case 'ACTIVE':
        let products = initialState.products.filter((product) =>
          product.category === payload ? product.category : null
        );
        return { products, count: state.count };
      case 'INCREMENT':
        const count = state.count + 1;
        return { products: state.products, count };
      default:
        return state;
    }
  };
  
  export default products;
  
  export const active = (categoryName) => {
    return {
      type: 'ACTIVE',
      payload: categoryName,
    };
  };
  
  export const increment = () => {
    return {
      type: 'INCREMENT',
    };
  };