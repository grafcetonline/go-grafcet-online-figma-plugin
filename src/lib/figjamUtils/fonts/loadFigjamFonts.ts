async function loadFigjamFonts() {
    await figma.loadFontAsync({ family: "Inter", style: "Medium" });
    await figma.loadFontAsync({ family: "Source Code Pro", style: "Medium" });
}