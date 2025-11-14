
  
          import { product as DBProducts } from "./prodect";
  
        export const getVisibleProducts = (
            selectedCategories = [],
            selectedRating = 0,
            initPriceRange
          ) => {
              let products = [...DBProducts];
    
         
              if (selectedCategories.length > 0) {
            products = products.filter((product) =>
                selectedCategories.includes(product.category)
          );
        }
    if (selectedRating) {
            products = products.filter((product) => product.rating >= selectedRating);
          }
  
          if (initPriceRange && initPriceRange.min !== undefined && initPriceRange.max !== undefined) {
          products = products.filter(
              (product) =>
            product.price >= initPriceRange.min &&
        product.price <= initPriceRange.max
      );
    }
  
    return products;
  };
  
