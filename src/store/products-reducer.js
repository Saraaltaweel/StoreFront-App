let initialState = {
    products: [
      {
        _id: '5f1a51f01910080017657ed2',
        name: 'Natural juice',
        url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cocktails-1594319263.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*',
        category: 'drinks',
        price: 3.0,
        inStock: 5,
        count: 0,
      },
      {
        _id: '5f1a51f71910080017657ed3',
        name: 'Milkshake',
        url: 'https://www.unicornsinthekitchen.com/wp-content/uploads/2021/07/Strawberry-Milkshake-2.1200px-1-of-1.jpg',
        category: 'drinks',
        price: 4.50,
        inStock: 3,
        count: 0,
      },
      {
        _id: '5f1a52031910080017657ed5',
        name: 'Smoothie',
        url: 'https://www.dinneratthezoo.com/wp-content/uploads/2018/05/frozen-fruit-smoothie-3.jpg',
        category: 'drinks',
        price: 4.0,
        inStock: 24,
        count: 0,
      },
      {
        _id: '5f1a5f761910080017657ed6',
        name: 'Caesar Salad',
        url: 'https://www.recipetineats.com/wp-content/uploads/2016/05/Caesar-Salad_7.jpg',
        category: 'food',
        price: 2.0,
        inStock: 500,
        count: 0,
      },
      {
        _id: '5f1a5faf1910080017657ed8',
        name: 'Shrimp Pesto Pasta',
        url: 'https://www.acouplecooks.com/wp-content/uploads/2020/08/Shrimp-Pesto-Pasta-004.jpg',
        category: 'food',
        price: 6.75,
        inStock: 12,
        count: 0,
      },
      {
        _id: '5f1a5faf1910080017657ed9',
        name: 'Mushroom soup',
        url: 'https://www.delonghi.com/Global/recipes/multifry/276.jpg',
        category: 'food',
        price: 3.80,
        inStock: 90,
        count: 0,
      },
    ],
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
        let productList = state.products.map((product) =>
        payload.name === product.name
        ? {
            _id: product._id,
            name: product.name,
            url: product.url,
            category: product.category,
            price: product.price,
            inStock: product.inStock - 1,
            count: product.count + 1,
          }
        : product
    );
    return { products: productList };
      case 'DECREMENT':
        let newProducts = state.products.map((product) =>
          payload.name === product.name
            ? {
                _id: product._id,
                name: product.name,
                url: product.url,
                category: product.category,
                price: product.price,
                inStock: product.inStock + payload.count + 1,
                count: product.count - payload.count - 1,
              }
            : product
        );
        return { products: newProducts };
      default:
        return state;
    }
  };
  
  export default products;