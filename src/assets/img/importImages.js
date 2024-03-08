// importImages.js
const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  };
  
  const images = importAll(
    require.context('./sliner', false, /\.(png|jpe?g|svg)$/)
  );
  const offers = importAll(
    require.context('./offers', false, /\.(png|jpe?g|svg)$/)
  );
  
  export {images,offers} ;
  