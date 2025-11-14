

import { priceRange } from "../data/prodect";

function HandlePrice({ initPriceRange, onPriceChange }) {
  return (
    <div className="bg-black rounded-xl shadow-lg p-6 max-w-md mx-auto border border-gray-800">
      <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-gray-300 font-semibold text-lg mb-4">
        Filter by Price
      </h3>

      <div className="relative w-full h-2 bg-gray-800 rounded-full overflow-hidden">

        <div
          className="absolute h-full bg-gradient-to-r from-sky-500 via-sky-400 to-gray-900"
          style={{
            width: `${
              ((initPriceRange.max - priceRange.min) /
                (priceRange.max - priceRange.min)) *
              100
            }%`,
          }}
        ></div>

        <input
          type="range"
          min={priceRange.min}
          max={priceRange.max}
          step="10"
          value={initPriceRange.max}
          onChange={onPriceChange}
          className="absolute w-full h-2 appearance-none bg-transparent cursor-pointer custom-slider"
        />
      </div>

      <div className="flex justify-between mt-3 text-gray-300 font-medium">
        <span>${initPriceRange.min}</span>
        <span>${initPriceRange.max}</span>
      </div>
    </div>
  );
}

export default HandlePrice;



