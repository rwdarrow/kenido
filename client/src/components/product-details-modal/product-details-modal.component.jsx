import React, { useContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { AnimatePresence } from "framer-motion";

import Separator from "../separator/separator.component";
import { addItem } from "../../redux/cart/cart.actions";
import { hideProductDetailsModal } from "../../redux/shop/shop.actions";
import {
  selectIsModalShowing,
  selectModalItemToShow,
} from "../../redux/shop/shop.selectors";

import { LanguageContext } from "../../containers/language";
import { Text } from "../../containers/language";

import {
  ModalContainer,
  ModalContentContainer,
  CloseButton,
  SlideshowContainer,
  SlideshowImage,
  DetailsContainer,
  NameContainer,
  PriceContainer,
  DescriptionContainer,
  MiscPropsContainer,
  PropertyTextContainer,
  WeightIcon,
  ClockIcon,
  CheckIcon,
  CloseIcon,
  AddToCartButton,
} from "./product-details-modal.styles";

const containerVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const modalVariants = {
  hidden: {
    x: "-100vw",
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
  visible: {
    x: "0%",
    transition: {
      type: "spring",
    },
  },
};

const ProductDetailsModal = ({ isModalShowing, hideModal, item, addItem }) => {
  // Contexts
  const languageContext = useContext(LanguageContext);
  const currentLanguageId = languageContext.language.id;

  // Hooks
  const [mouseX, setMouseX] = useState(undefined);
  const [mouseY, setMouseY] = useState(undefined);
  const [classes, setClasses] = useState({});
  const [imgZoomed, setImgZoomed] = useState(false);

  // Pan and Zoom Image
  // --------------------------------------------------------------
  // When mouse moves or image zoomed changes, set the proper CSS
  // to make the image adjust accordingly
  useEffect(() => {
    const transform = {
      transformOrigin: `${mouseX}% ${mouseY}%`,
    };

    setClasses(
      Object.assign({}, transform, {
        transform: imgZoomed ? "scale(3.0)" : "scale(1.0)",
        cursor: imgZoomed ? "zoom-out" : "zoom-in",
        transition: "transform .1s ease-out",
      })
    );
  }, [mouseX, mouseY, imgZoomed]);

  // When the mouse moves, set x and y the coordinates
  const moveMouseImg = (e) => {
    const {
      top: offsetTop,
      left: offsetLeft,
    } = e.target.getBoundingClientRect();

    console.log(e.target);

    const x = ((e.pageX - offsetLeft) / e.target.width) * 33;
    const y = ((e.pageY - offsetTop) / e.target.height) * 33;

    setMouseX(x);
    setMouseY(y);
  };

  // Set the item price to the proper format depending on the
  // current language ID
  const localizePrice = (price) => {
    return currentLanguageId === "de"
      ? new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "EUR",
        }).format(price)
      : new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "EUR",
        }).format(price);
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {isModalShowing && (
        <ModalContainer
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <ModalContentContainer variants={modalVariants}>
            <CloseButton onClick={() => hideModal()} />
            <SlideshowContainer
              onMouseMove={moveMouseImg}
              onClick={() => setImgZoomed(!imgZoomed)}
            >
              <SlideshowImage style={classes} src={item.imageUrls[0]} />
            </SlideshowContainer>
            <DetailsContainer>
              <NameContainer>
                {item.name[currentLanguageId].toUpperCase()}
              </NameContainer>
              <PriceContainer>{localizePrice(item.price)}</PriceContainer>
              <DescriptionContainer>
                {item.description[currentLanguageId]}
              </DescriptionContainer>
              <Separator style={{ margin: "70px", width: "100%" }} />
              <MiscPropsContainer>
                <PropertyTextContainer>
                  <WeightIcon />
                  {item.weight} KG
                </PropertyTextContainer>
                <PropertyTextContainer>
                  {item.availability
                    ? [<CheckIcon />, <Text tid="available" />]
                    : [<CloseIcon />, <Text tid="unavailable" />]}
                </PropertyTextContainer>
                <PropertyTextContainer>
                  <ClockIcon />
                  {item.deliveryRangeStart} - {item.deliveryRangeEnd}{" "}
                  {item.deliveryRangeUnit[currentLanguageId]}
                </PropertyTextContainer>
              </MiscPropsContainer>
              <AddToCartButton
                inverted
                disabled={!item.availability}
                onClick={() => item.availability && addItem(item)}
              >
                {item.availability ? (
                  <Text tid="addToCart" />
                ) : (
                  <Text tid="soldOut" />
                )}
              </AddToCartButton>
            </DetailsContainer>
          </ModalContentContainer>
        </ModalContainer>
      )}
    </AnimatePresence>
  );
};

ProductDetailsModal.propTypes = {
  isModalShowing: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  addItem: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isModalShowing: selectIsModalShowing,
  item: selectModalItemToShow,
});

const mapDispatchToProps = (dispatch) => ({
  hideModal: () => dispatch(hideProductDetailsModal()),
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailsModal);
