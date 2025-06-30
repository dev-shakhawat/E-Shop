export const isFootBlack = (path) => {
    const allPaths = ["/carts","/register","/account","/blog-details"];
    return allPaths.includes(path);
};