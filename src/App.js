import React, { useState } from "react";
import "./styles.css";
import cabbage from "./assets/image1.jpeg";
import mango from "./assets/image2.jpeg";
import fig from "./assets/image3.jpeg";
import gaze from "./assets/image4.jpeg";
import peach from "./assets/image5.jpeg";
import avocado from "./assets/image6.jpeg";

const images = [cabbage, mango, fig, gaze, peach, avocado];

// Loading component for images, with progress bar
// Value of progress bar is based on how many images have loaded so far
const Loading = ({ calculatedWidth }) => (
  <aside>
    <div className="loading-bar">
      <label htmlFor="images-loaded">Loading all your favorite images...</label>
      <progress id="images-loaded" max="100" value={calculatedWidth}></progress>
    </div>
  </aside>
);

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [numLoaded, setNumLoaded] = useState(0);

  const handleClick = () => {
    const length = images.length - 1;
    // If the current image is less than the total number of images
    // Move on to the next image in the sequence,
    // Otherwise loop round to the start
    setCurrentImage((currentImage) =>
      currentImage < length ? currentImage + 1 : 0
    );
  };

  // I added a custom back click function for
  // The back arrow I added to the navigation
  const handleBackClick = () => {
    const length = images.length - 1;
    setCurrentImage((currentImage) =>
      currentImage > 0 ? currentImage - 1 : length
    );
  };

  // When each image has loaded, this function is called
  // Which keeps count of how many images have been loaded
  const handleImageLoad = () => {
    setNumLoaded((numLoaded) => numLoaded + 1);
  };

  return (
    <section>
      <header>
        <h1>Zesty</h1>
        <h2>
          A photography project <br /> by Ella Fieldling
        </h2>
      </header>

      <figure>
        {numLoaded < images.length && (
          <Loading calculatedWidth={(numLoaded / images.length) * 100} />
        )}
        <figcaption>
          {/* I added forward and back arrows for navigating through the images
            * And I removed the onClick from the images */}
          <a onClick={handleBackClick} >&#8592;</a> {currentImage + 1} / {images.length} <a onClick={handleClick} >&#8594;</a>
        </figcaption>
        {images.map((imageURL, index) => (
          <img
            alt=""
            key={imageURL}
            src={imageURL}
            onLoad={handleImageLoad}
            className={currentImage === index ? "display" : "hide"}
          />
        ))}
      </figure>
    </section>
  );
};

export default App;
