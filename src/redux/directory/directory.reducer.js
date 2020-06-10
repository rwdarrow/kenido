import homeScarves from "../../assets/images/home-scarves.jpg"
import homePonchos from "../../assets/images/home-ponchos.jpg"
import homeSweaters from "../../assets/images/home-sweaters.jpg"
import homeAccessories from "../../assets/images/home-accessories.jpg"

const INITIAL_STATE = {
  sections: [
    {
      name: {
        en: "Scarves and Stolas",
        de: "Schals und Stolas",
      },
      previewImage: homeScarves,
      id: 1,
      linkUrl: "/scarves%20and%20stolas",
    },
    {
      name: {
        en: "Ponchos and Capes",
        de: "Ponchos und Umhänge",
      },
      previewImage: homePonchos,
      id: 2,
      linkUrl: "/ponchos%20and%20capes",
    },
    {
      name: {
        en: "Sweaters and Knitwear",
        de: "Pullover und Strickware",
      },
      previewImage: homeSweaters,
      id: 3,
      linkUrl: "/sweaters%20and%20knitwear",
    },
    {
      name: {
        en: "Accessories",
        de: "Accessoires",
      },
      previewImage: homeAccessories,
      id: 4,
      linkUrl: "/accessories",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
