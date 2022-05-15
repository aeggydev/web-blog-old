export function getTheme(): ColorScheme {
    return light
}

export const light: ColorScheme = {
    textColor: "black",
    subTextColor: "#3f3f3f",
    accentTextColor: "#632626",

    linkColor: "",
    linkBackground: "",
    linkHoverColor: "",
    // TBD

    selectionColor: "white",
    selectionBackground: "#69517d",

    background: "#fff8dd",
    secondaryBackground: "#fff8dd"
}

export interface ColorScheme {
    textColor: string // Main text color used on website
    subTextColor: string // Text color used for less important things (for example gray)
    accentTextColor: string // Color used as accent

    linkColor: string // Used for link text color
    linkBackground: string // Used for link underlines and backgrounds when however
    linkHoverColor: string // Used for text color when hovered

    selectionColor: string
    selectionBackground: string

    background: string // Main background color
    secondaryBackground: string // Background color used for secondary elements (footer, header)
}


// Template
/*
const theme: ColorScheme = {
    textColor: "",
    subTextColor: "",
    accentTextColor: "",

    linkBackground: "",
    linkColor: "",
    linkHoverColor: "",

    background: "",
    secondaryBackground: ""
}
*/