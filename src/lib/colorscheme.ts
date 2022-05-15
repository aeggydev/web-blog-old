export function getTheme(): ColorScheme {
    return black
}

export const light: ColorScheme = {
    textColor: "black",
    subTextColor: "#3f3f3f",
    accentTextColor: "#632626",

    linkColor: "#581c87",
    linkHoverColor: "white",
    // TODO: Add visited

    selectionColor: "white",
    selectionBackground: "#69517d",

    background: "#fff8dd",
    secondaryBackground: "#fff8dd"
}
export const black: ColorScheme = {
    textColor: "#eee",
    subTextColor: "#a3a3a3",
    accentTextColor: "#2093f8",

    linkColor: "#407bd4",
    linkHoverColor: "#ddd",
    // TODO: Add visited

    selectionColor: "white",
    selectionBackground: "#69517d",

    background: "#1a1a1a",
    secondaryBackground: "#1a1a1a"
}

export interface ColorScheme {
    textColor: string // Main text color used on website
    subTextColor: string // Text color used for less important things (for example gray)
    accentTextColor: string // Color used as accent

    linkColor: string // Used for link text color
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
