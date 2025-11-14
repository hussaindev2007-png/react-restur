

import { useState } from "react";
import CategoryFilter from "./component/CategoryFilter";
import Products from "./component/Products";
import { getVisibleProducts } from "./data/product-filters";
import RatingFilter from "./component/RatingFilter";
import Footer from "./component/Footer";
import { priceRange } from "./data/prodect";
import HandlePrice from "./component/handleprice";
import FilterBy from "./component/filterby";


const initPriceFilter = {
  min: priceRange.min,
  max: priceRange.max,
};

function App() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [initPriceRange, setInitPriceRange] = useState(initPriceFilter);
  const [sortOption, setSortOption] = useState("none");
   const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");

  
  const onPriceChange = (e) => {
    setInitPriceRange((prev) => ({
      ...prev,
      max: Number(e.target.value),
    }));
  };


  const onChangeCategoryHandler = (category, isChecked) => {
    setSelectedCategories((prev) =>
      isChecked ? [...prev, category] : prev.filter((cat) => cat !== category)
    );
  };


  const onChangeRatingHandler = (rating) => {
    setSelectedRating(Number(rating));
  };

  const filteredProducts = getVisibleProducts(
    selectedCategories,
    selectedRating,
    initPriceRange,
    sortOption
  );

  
  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      <FilterBy 
      setInitPriceRange = {setInitPriceRange} 
      setSelectedCategories  ={setSelectedCategories }
      setSelectedRating = {setSelectedRating}
      
           selectedCategories = {selectedCategories}
           selectedRating={selectedRating}
           initPriceRange ={initPriceRange}
            setSortOption ={setSortOption}
           sortOption = {sortOption}

           filteredProducts = {filteredProducts}
           setShowSearch ={setShowSearch}
  search ={search}
  showSearch={showSearch}
  setSearch={setSearch}
  
           />
   
      <div className="grid grid-cols-12 gap-3 my-2 mx-2">
   
        <div className="col-span-2 space-y-4">
          <CategoryFilter
            selectedCategories={selectedCategories}
            onChangeCategory={onChangeCategoryHandler}
          />
          <HandlePrice
            initPriceRange={initPriceRange}
            onPriceChange={onPriceChange}
            />
          <RatingFilter
            onChangeRating={onChangeRatingHandler}
            selectedRating={selectedRating}
            />
        </div>

        
        <div className="col-span-10">
          <Products products={filteredProducts}  search={search}  />
          <Footer 
          

          />
        </div>
      </div>
    </div>
  );
}

export default App;
