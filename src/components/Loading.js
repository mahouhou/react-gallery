// Loading component for images, with progress bar
// Value of progress bar is based on how many images have loaded so far

export default function Loading({ calculatedWidth }) {
    return (
        <aside>
        <div className="loading-bar">
          <label htmlFor="images-loaded">Loading all your favorite images...</label>
          <progress id="images-loaded" max="100" value={calculatedWidth}></progress>
        </div>
      </aside>
    )
}