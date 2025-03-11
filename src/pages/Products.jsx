import React from "react";
import ProductItem from "../components/ProductItem";

const Products = () => {
  const portfolioData = [
    {
    imgSrc: "assets/images/banners/17.png",
      categories: ["Eco", "Wheat"],
      title: "Expanding Wheat Processing Capacity",
    },
    {
        imgSrc: "assets/images/banners/17.png",
        categories: ["Natural", "Quality"],
      title: "Advanced Wheat Production Technology",
    },
    {
        imgSrc: "assets/images/banners/17.png",
        categories: ["Supply", "Logistics"],
      title: "Streamlined Wheat Distribution Networks",
    },
  ];
  return (
    <>
      <section
        class="page-title page-title-layout1 bg-overlay bg-overlay-2 bg-parallax text-center"
        style={{
          backgroundImage: "url(assets/images/banners/18.png)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
              <h1 class="pagetitle__heading mb-0">Projects</h1>
              <p class="pagetitle__desc mb-0">
                With our innovative technologies, clear focus on the needs of
                our customers, and 1,210 dedicated employees, we energize
                society. Let’s make tomorrow different today!
              </p>
              <a href="#projects" class="scroll-down">
                <i class="icon-arrow-down"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" class="portfolio-layout2">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <ul class="portfolio-filter d-flex flex-wrap justify-content-center list-unstyled">
                <li>
                  <a class="filter active" href="#" data-filter="all">
                    ALL Works
                  </a>
                </li>
                <li>
                  <a class="filter" href="#" data-filter=".filter-eco">
                    ECO
                  </a>
                </li>
                <li>
                  <a class="filter" href="#" data-filter=".filter-finance">
                    Finance
                  </a>
                </li>
                <li>
                  <a class="filter" href="#" data-filter=".filter-energy">
                    Green Energy
                  </a>
                </li>
                <li>
                  <a class="filter" href="#" data-filter=".filter-infractures">
                    Infractures
                  </a>
                </li>
                <li>
                  <a class="filter" href="#" data-filter=".filter-innovations">
                    Innovations
                  </a>
                </li>
              </ul>
            </div>
            <div className="row">
              {portfolioData.map((item, idx) => (
                <ProductItem
                  key={idx}
                  imgSrc={item.imgSrc}
                  categories={item.categories}
                  title={item.title}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
