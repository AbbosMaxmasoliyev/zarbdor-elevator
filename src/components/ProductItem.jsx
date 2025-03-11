import React from "react";

const ProductItem = ({ imgSrc, categories, title }) => {
  return (
    <div class="col-sm-6 col-md-6 col-lg-4 mix filter-innovations" style={{display:"inline-block"}}>
      <div class="portfolio-item">
        <div class="portfolio__img">
          <img src={imgSrc} alt="portfolio img" className="h-[330px] object-cover" />
        </div>
        <div class="portfolio__body">
          <div class="portfolio__cat">
            {categories}
          </div>
          <h4 class="portfolio__title">
            <a href="#">{title}</a>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
