import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import { App_layout, ArtistLayout } from "./Layout";
import {
  ArtistHomePage,
  Finish,
  LandingPage,
  NowPlaying,
  Preview,
  Upload,
  UploadingPage,
} from "./Pages";
import {
  Mood_Genre,
  TopArtist
} from "./Pages/App/Recommendation";
import Search_page from "./Pages/App/Search/Search_page";
import { Provider } from "react-redux";
import store from "./store/app/store";
import FinePlayer from "./Pages/App/FinePlayer/FinePlayer";
import SearchResult from "./Pages/App/Search/SearchResult";
import Trending from "./Pages/App/Recommendation/Trending";
import RecentlyAdded from "./Pages/App/Recommendation/RecentlyAdded";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <RouteWrapper
            path="/trending"
            component={Trending}
            layout={App_layout}
          />
          <RouteWrapper
            path="/select-mood"
            component={Mood_Genre}
            layout={App_layout}
          />
          <RouteWrapper
            path="/recently-added"
            component={RecentlyAdded}
            layout={App_layout}
          />
          <RouteWrapper
            path="/trending"
            component={Trending}
            layout={App_layout}
          />
          <RouteWrapper
            path="/top-artist"
            component={TopArtist}
            layout={App_layout}
          />
          <RouteWrapper
            path="/search"
            component={Search_page}
            layout={App_layout}
          />
           <RouteWrapper
            path="/dashboard"
            component={ArtistHomePage}
            layout={ArtistLayout}
          />
        {/* Profile */}
          {/* MINT NFT */}
        {/* PURCHASE OWNERSHOPT */}
        </Switch>
      </Router>
    </Provider>
  );
};

function RouteWrapper({ component: Component, layout: Layout, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

export default App;
