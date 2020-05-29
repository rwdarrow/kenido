import React from "react";

import { ImageContainer } from "./slideshow-item.styles";

const SlideshowItem = () => {
  const imageUrl =
    "https://firebasestorage.googleapis.com/v0/b/kenido-db.appspot.com/o/home-scarves.png?alt=media&token=e977b583-5baa-4cfe-9c7f-20e1759cf9bc";
  return <ImageContainer style={{ backgroundImage: `url(${imageUrl})` }} />;
};

export default SlideshowItem;
