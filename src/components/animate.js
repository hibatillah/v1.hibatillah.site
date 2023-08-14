export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

export const text = {
  hidden: { opacity: 0, y: "100%" },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const card = {
  hidden: {
    opacity: 0,
    y: "150%",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
  out: {
    opacity: 0,
  },
};

export const bookmark = {
  hidden: {
    opacity: 0,
    x: "-40%",
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const list = {
  hidden: {
    opacity: 0,
    x: "-50%",
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};
