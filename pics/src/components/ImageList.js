import React from "react";
import "./ImageList.css";

import ImageCard from "./ImageCard";

const ImageList = props => {
  const imgs = props.images.map( image => (
    <ImageCard key={image.id} image={image} />
  ));

  return <div className="image-list">{imgs}</div>;
};

// class ImageList extends React.Component {
//   render() {
//     const imgs = this.props.images.map(image => (
//       <ImageCard key={image.id} image={image} />
//     ));
//     return <div className="image-list">{imgs}</div>;
//   }
// }


export default ImageList;
