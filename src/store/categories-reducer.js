let initialState = {
    categories: [
      {
        name: 'food',
        display_name: 'Food',
        description: 'Welcome to Food Section',
      },
      {
        name: 'drinks',
        display_name: 'Drinks',
        description: 'Welcome to Drinks Section',
      },
    ],
    activeCategories: {},
  };
  
  const categories = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
      case 'ACTIVE':
        let activeCategories = initialState.categories.find((category)=>category.name === payload);
        return { categories: initialState.categories, activeCategories};
      default:
        return state;
    }
  };
  
  export default categories;
  
  // actions:
  export const active = (name) => {
    return {
      type: 'ACTIVE',
      payload: name,
    };
  };