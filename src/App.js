import harvardArt from "./data/harvardArt.js"
import GalleryNavigation from './components/GalleryNavigation/index.js'
import {Switch, Route} from 'react-router-dom'
import GalleryView from "./components/GalleryView/index.js"

function App() {
  console.log(harvardArt)
  return (
    <div>
    <GalleryNavigation galleries={harvardArt.records} ></GalleryNavigation>
     <Switch>
                <Route exact path={"/galleries/:galleryId"}>
                    <GalleryView galleries={harvardArt.records}></GalleryView>       
                 </Route>
                 <Route exact path={'/'}>
                   <h2>Harvard Art Museum</h2>
                   <p>Look but don't touch. Please select a gallery in the navigation bar</p>
                 </Route>
                 <Route>
                  <h2> Page Not Found</h2>
                 </Route>
            </Switch>
    </div>
    );
}

export default App;
