export function imgPath(path) {
    if (!path) return
    return path.replace("/Game", "/Content").split(".")[0] + ".png"
}