import { categoryConstants } from "../actions/constant";

const initState = {
  categories: [],
  loading: false,
  error: null,
};

const buildNewCategories = (parentid, categories, category) => {
  let myCategories = [];

  if (parentid === undefined) {
    return [
      ...categories,
      {
        _id: category._id,
        name: category.name,
        slug: category.slug,
        children: [],
      },
    ];
  }

  for (const cat of categories) {
    if (cat._id === parentid) {
      myCategories.push({
        ...cat,
        children: cat.children
          ? buildNewCategories(
              parentid,
              [
                ...cat.children,
                {
                  _id: category._id,
                  name: category.name,
                  slug: category.slug,
                  parentid: category.parentid,
                  children: category.children,
                },
              ],

              category
            )
          : [],
      });
    } else {
      myCategories.push({
        ...cat,
        children: cat.children
          ? buildNewCategories(parentid, cat.children, category)
          : [],
      });
    }
  }
  return myCategories;
};

export default (state = initState, action) => {
  // console.log(action.payload.categories);
  switch (action.type) {
    case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:
      state = {
        ...state,
        categories: action.payload.categories,
      };
      break;
    case categoryConstants.ADD_NEW_CATEGORY_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case categoryConstants.ADD_NEW_CATEGORY_SUCCESS:
      const category = action.payload.category;
      const updatedCategories = buildNewCategories(
        category.parentid,
        state.categories,
        action.payload.category
      );
      console.log(updatedCategories);
      state = {
        ...state,
        categories: updatedCategories,
        loading: false,
      };
      break;
    case categoryConstants.ADD_NEW_CATEGORY_FAILURE:
      state = {
        ...initState,
        loading: false,
        error: action.payload.error,
      };
      break;
      default: 
      break;
  }
  return state;
};
