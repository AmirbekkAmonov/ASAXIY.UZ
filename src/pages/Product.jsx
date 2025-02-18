import React, { useState, useEffect } from "react";
import "@/styles/main.scss";
import ProductCard from "@/components/ProductCard";
import SkeletonCard from "@/components/SkeletonCard";
import { Link } from "react-router-dom";
import Filter from "@/components/Filter";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import axios from "axios";
function Product({ search }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ name: "all", price: "all", rating: "all" });

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
        setFilteredProducts(response.data.products); 
        setLoading(false);
      })
      .catch((error) => {
        console.error("Xatolik yuz berdi: ", error);
        setLoading(false);
      });
  }, []); 

  useEffect(() => {
    let sortedProducts = [...products];

    if (filters.name === "a-z") {
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (filters.name === "z-a") {
      sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
    }

    if (filters.price === "low-high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (filters.price === "high-low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    if (filters.rating === "asc") {
      sortedProducts.sort((a, b) => a.rating - b.rating);
    } else if (filters.rating === "desc") {
      sortedProducts.sort((a, b) => b.rating - a.rating);
    }

    setFilteredProducts(sortedProducts);
  }, [filters, products]);

  const bestsellerProducts = [...products]
    .filter((product) =>
      search ? product.title.toLowerCase().includes(search.toLowerCase()) : true
    )
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);


  const xaznaProducts = filteredProducts
    .filter((product) => product.category === "groceries")
    .slice(0, 10);

  const popularProducts = filteredProducts.slice(0, 20);


  return (
    <section className="product">
      <Filter onFilterChange={setFilters} />
      {/* CORUSEL */}
      <div className="product-title">
        <Link to={"/empty"} className="h2" style={{ marginLeft: "10px" }}>
          Super narx
        </Link>
        <Link to={"/empty"}>Barcha mahsulotlar</Link>
      </div>
      <div className="product-grid product-carousel">
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          loop={true}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          style={{ width: "98%", padding: "5px 15px", background: "#006bff", borderRadius: "10px" }} 
        >
          {loading
            ? [...Array(6)].map((_, index) => (
              <SwiperSlide key={index}>
                <SkeletonCard />
              </SwiperSlide>
            ))
            : popularProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="custom-swiper-buttons">
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>

      {/* BESTSELLER */}
      <div className="product-title">
        <Link to={"/empty"} className="h2">
          BESTSELLER
        </Link>
        <Link to={"/empty"}>Barcha mahsulotlar</Link>
      </div>
      <div className="product-grid">
        {loading ? (
          [...Array(10)].map((_, index) => <SkeletonCard key={index} />)
        ) : bestsellerProducts.length > 0 ? (
          bestsellerProducts.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <div className="no-results">
            <h3>Mahsulot topilmadi!</h3>
          </div>
        )}
      </div>

      {/* XAZNA */}
      <div className="product-title">
        <Link to={"/empty"} className="h2">
          Xazna 0-0-6 (Faqat oziq-ovqat)
        </Link>
        <Link to={"/empty"}>Barcha mahsulotlar</Link>
      </div>
      <div className="product-grid">
        {loading
          ? [...Array(10)].map((_, index) => <SkeletonCard key={index} />)
          : xaznaProducts.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>

      {/* OMMABOP TOVARLAR */}
      <div className="product-title">
        <Link to={"/empty"} className="h2">
          Ommabop tovarlar
        </Link>
        <Link to={"/empty"}>Barcha mahsulotlar</Link>
      </div>
      <div className="product-grid">
        {loading
          ? [...Array(20)].map((_, index) => <SkeletonCard key={index} />)
          : popularProducts.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </section>
  );
}

export default Product;
