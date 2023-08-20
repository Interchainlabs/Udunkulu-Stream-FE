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
import { ArtistNavBar, NavBar, Sidebar, ProgressBar } from "./Widgets";
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

            {/* <ProgressBar/> */}
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
            path="/player"
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
            path="/results"
            component={SearchResult}
            layout={App_layout}
          />
          {/* 
          <RouteWrapper path="/search-results-artist" component={Search_page} layout={App_layout} />
          <RouteWrapper path="/search-results-albums" component={Search_page} layout={App_layout} />
          <RouteWrapper path="/search-results-songs" component={Search_page} layout={App_layout} /> */}
          {/* // artist route */}
          <RouteWrapper
            path="/dashboard"
            component={ArtistHomePage}
            layout={ArtistLayout}
          />
          <RouteWrapper
            path="/finish"
            component={Finish}
            layout={ArtistLayout}
          />
          <RouteWrapper
            path="/preview-song-upload"
            component={Preview}
            layout={ArtistLayout}
          />
          <RouteWrapper
            path="/upload-your-music"
            component={Upload}
            layout={ArtistLayout}
          />
          <RouteWrapper
            path="/upload"
            component={UploadingPage}
            layout={ArtistLayout}
          />
          <RouteWrapper
            path="/now-playing"
            component={FinePlayer}
            layout={App_layout}
          />
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
