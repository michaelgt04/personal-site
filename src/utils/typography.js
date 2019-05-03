import Typography from "typography"

const typography = new Typography({
  overrideStyles: styles => {
    return {
      a: {
        cursor: "pointer",
        color: "#353E60",
        textDecoration: "none",
      },
      "a:hover": {
        textDecoration: "underline",
      },
      "h1,h2,h3": {
        color: "#353E60",
      },
    }
  },
  headerFontFamily: ["Muli"],
  bodyFontFamily: ["Muli"],
  baseFontSize: "18px",
  scaleRatio: 1.6,
  googleFonts: [{ name: "Muli", styles: [200, 400, 700] }],
  baseLineHeight: 2,
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
