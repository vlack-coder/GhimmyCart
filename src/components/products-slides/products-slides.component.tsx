import React from "react";

import "swiper/swiper-bundle.css";
import "./products-slides.styles.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, EffectFade, Autoplay } from "swiper";

import { ProductsCollectionProps } from "../../redux/products-collection/products-collection.types";
import { selectCollectionByName } from "../../redux/products-collection/products-collection.selector";
import { AppStateTypes } from "../../redux/root.reducer";
import { connect, useSelector } from "react-redux";
import { PLACEHOLDER_PRODUCT_IMAGE } from "../../utils/utils";

SwiperCore.use([Pagination, EffectFade, Autoplay]);

// type Props = LinkStateProps;


const ProductsSlides: React.FC = () => {
  const collection: ProductsCollectionProps | undefined = useSelector(selectCollectionByName('bags'))

  const { isFetching, products } = collection || {};

  console.log({ products });

  const slides = products?.length
    ? products.map((product, idx) => (
      <SwiperSlide key={product?._id || idx} tag="li">
        {/* <div className="slid"> */}
        <img
          src={product?.productImage || PLACEHOLDER_PRODUCT_IMAGE}
          alt=""
        />
        {/* </div> */}

      </SwiperSlide>
    ))
    : [];

  if (isFetching) return null;

  return (
    <div className="slid" style={{ marginTop: '7.5rem', paddingTop: '2rem', backgroundColor: '' }}>
      <Swiper
        className="products-slides"
        wrapperTag="ul"
        tag="section"
        pagination={{
          clickable: true,
        }}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        effect="flip"
        lazy={true}
      >
        {slides}
      </Swiper>
      <hr/>
    </div>
  );
};

// type LinkStateProps = {
//   collection?: ProductsCollectionProps;
// };

// const mapStateToProps = (state: AppStateTypes): LinkStateProps => {
//   return {
//     collection: selectCollectionByName("bags")(state),
//   };
// };

export default ProductsSlides;