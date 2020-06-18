export const headlineContainerVariants = {
  hidden: { 
    opacity: 0
   },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 1,
    },
  },
};

export const headlineContainerChildVariants = {
  hidden: { opacity: 0 },
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
    y: -100
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    }
   },
};
