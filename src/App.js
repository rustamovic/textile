import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import "./App.css";
import Contact from "./Components/Contacts/andi";
// import Loading from "./Loading/Loading";
import Header from "./Containers/Header/header";
import Footer from "./Containers/Footer/footer";
import About from "./Components/About/about";
import Komp from "./Components/About/Company/Company";
import Envi from "./Components/About/Environment/environ";
import Home from "./Components/Home/home";
import Clothes from "./Components/Products/Clothes";
import Knitteds from "./Components/Products/Knitteds";
import men from "./Components/Products/men";
import women from "./Components/Products/women";
import kids from "./Components/Products/Kids/Combined";
import News from "./Components/Blogs/typo2";
import NotFound from "./Components/NotFound";
import Leadership from "./Components/Leadership/Leadership";
import Partners from "./Components/Partners/Partners";
import Dilers from "./Components/Dilers/Dilers";
import Policy from "./Components/About/Environment/Policy/Policy";

import Production from "./Components/3Lines/1Line/Home/Home";
import Lead1 from "./Components/3Lines/1Line/Leaders/Combine";
import ProAbout from "./Components/3Lines/1Line/About/Combine";
import Gallery from "./Components/3Lines/1Line/Gallery/combine";

import Knitting from "./Components/3Lines/2Line/Home/Home";
import Lead2 from "./Components/3Lines/2Line/Leaders/Combine";
import KnitAbout from "./Components/3Lines/2Line/About/Combine";
import KGallery from "./Components/3Lines/2Line/Gallery/combine";

import Painting from "./Components/3Lines/3Line/Home/Home";
import Lead3 from "./Components/3Lines/3Line/Leaders/Combine";
import PaintAbout from "./Components/3Lines/3Line/About/Combine";
import PGallery from "./Components/3Lines/3Line/Gallery/combine";

import Alert from "./Alert/Alert";
import Certifications from "./Components/About/Environment/Certifications/certifications";

const App = () => {
  // const [isLoaded, setIsLoaded] = React.useState(false);
  // setTimeout(() => {
  //   setIsLoaded(false);
  // }, 8000);
  return (
    <div className="App">
      {/* {isLoaded ? (
        <Loading />
      ) : ( */}
      <BrowserRouter>
        <Alert />
        <Header />
        <Switch>
          <Route exact path="/staff" component={Leadership} />
          <Route exact path="/about" component={About} />
          <Route exact path="/about/comp" component={Komp} />
          <Route exact path="/about/envi" component={Envi} />
          <Route
            exact
            path="/about/certifications"
            component={Certifications}
          />
          <Route exact path="/about/policy" component={Policy} />
          <Route exact path="/" component={Home} />
          <Route exact path="/clients" component={Partners} />
          <Route exact path="/dilers" component={Dilers} />

          <Route exact path="/production/about" component={ProAbout} />
          <Route exact path="/production/personnel" component={Lead1} />
          <Route exact path="/production" component={Production} />
          <Route exact path="/production/gallery" component={Gallery} />

          <Route exact path="/knitting/about" component={KnitAbout} />
          <Route exact path="/knitting/personnel" component={Lead2} />
          <Route exact path="/knitting" component={Knitting} />
          <Route exact path="/knitting/gallery" component={KGallery} />

          <Route exact path="/painting/about" component={PaintAbout} />
          <Route exact path="/painting/personnel" component={Lead3} />
          <Route exact path="/painting" component={Painting} />
          <Route exact path="/painting/gallery" component={PGallery} />

          <Route exact path="/news" component={News} />
          <Route exact path="/clothes" component={Clothes} />
          <Route exact path="/clothes/men" component={men} />
          <Route exact path="/clothes/women" component={women} />
          <Route exact path="/clothes/kids" component={kids} />
          <Route exact path="/knitteds" component={Knitteds} />
          <Route exact path="/contacts" component={Contact} />
          <Route path="" component={NotFound} />
        </Switch>
        {/* <div className="elfsight-app-5615cc14-31ee-44f3-b4be-325ab2e461fc"></div>
          <script src="https://apps.elfsight.com/p/platform.js" defer></script> */}
        <div class="elfsight-app-e56a5010-1118-44ae-9e27-e12b6238b282"></div>
        <Footer />
      </BrowserRouter>
      {/* )} */}
    </div>
  );
};
export default App;
