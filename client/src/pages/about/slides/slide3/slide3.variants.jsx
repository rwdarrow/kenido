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
      delay: 2,
      duration: 1,
    },
  },
};

export const titleContainerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 3,
    },
  },
};

export const titleContainerChildVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const bodyContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 3,
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
      duration: 1,
    },
  },
};
