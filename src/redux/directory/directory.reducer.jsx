const INITIAL_STATE = {
  sections: [
    {
      name: {
        english: "Scarves and Stolas",
        deutsch: "Schals und Stolas",
      },
      previewImageName: "homeScarves",
      id: 1,
      linkUrl: "/scarves%20and%20stolas",
    },
    {
      name: {
        english: "Ponchos and Capes",
        deutsch: "Ponchos und Umhänge",
      },
      previewImageName: "homePonchos",
      id: 1,
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
