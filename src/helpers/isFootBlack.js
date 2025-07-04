export const isFootBlack = (path) => {
    const allPaths = ["/carts","/register","/account","/blog/details"];
    return allPaths.some(basePath => path.startsWith(basePath));
};