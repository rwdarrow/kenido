import * as background from "../../assets/images/alpaca.jpg"

/**
 * NOTE:
 *
 * Inline styles are for Slide components. For some reason they do not
 * behave properly when styled with styled components using the styled HOC.
 * In the meantime we will just export inline style objects for them since it
 * is as neat as we can make it.
 */
export const slide1Styles = {
  backgroundColor: "black",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  
  backgroundImage: `url(${background})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

export const slide2Styles = {
  backgroundColor: "var(--kn-red)",
  display: "flex",
};

export const slide3Styles = {
  backgroundColor: "black",
  display: "flex",
};