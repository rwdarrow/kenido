export const imageContainerVariants = {
  hidden: {
    opacity: 0,
    x: "-110%",
    transition: {
      duration: 0,
    },
  },
  visible: {
    opacity: 1,
    x: "0%",
    transition: {
      duration: 0.6,
    },
  },
};

export const bodyContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

export const bodyContainerChildVariants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};
