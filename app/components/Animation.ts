export const translater = (translateLenght : number) => ({
  hidden: { translateX: translateLenght, opacity: 0.5 },
  visible: { translateX: "0px", opacity: 1, transition: { duration: 0.5 } },
});
export const translaterUpDown = (delay : number, translateLenght : number, opacity : number) => ({
  hidden: { translateY: `${translateLenght}px`, opacity: opacity },
  visible: {
    translateY: "0px",
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
export const translaterNav = (delay : number, translateLenght : number, opacity : number) => ({
  hidden: { translateX: `${translateLenght}px`, opacity: opacity },
  visible: {
    translateX: "0px",
    opacity: 1,
    transition: { duration: 1, delay: delay },
  },
});
