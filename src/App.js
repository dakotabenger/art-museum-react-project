import harvardArt from "./data/harvardArt.js"
import GalleryNavigation from './components/GalleryNavigation/index.js'

function App() {
  console.log(harvardArt)
  return (
    <GalleryNavigation galleries={harvardArt.records} ></GalleryNavigation>
  );
}

export default App;
