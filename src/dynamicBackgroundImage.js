function getDynamicBackground() {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      return (images[item.replace("./", "")] = r(item));
    });
    return images;
  }

  const images = importAll(
    require.context("../src/images", false, /\.(png|jpe?g|svg)$/)
  );

  return images[Object.keys(images)[(Object.keys(images).length * Math.random()) << 0]];
}

export default getDynamicBackground;
