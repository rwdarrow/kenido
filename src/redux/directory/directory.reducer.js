import homeScarves from "../../assets/images/home-scarves.jpg"
import homePonchos from "../../assets/images/home-ponchos.jpg"

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
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
