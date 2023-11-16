const path = "/users/dawnload/index.html"

const isHtml = path => {
    const requiredExt = ".html";
    const pathExt = path.slise(-5);

    return pathExt ==requiredExt
}

console.log(isHtml(path));