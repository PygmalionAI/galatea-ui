import { Component, lazy, JSX } from "solid-js";
import { Route, Routes } from "@solidjs/router";

import NavBar from "./shared/NavBar";

const ChatPage = lazy(() => 
  import("./pages/Chat").catch((error: Error) => {
    console.error(error);
    return (
      <div class="text-red-500">
        An error occurred while loading the chat page.
      </div>
    );
  })
);

const CharacterSettings = lazy(() => 
  import("./pages/CharacterSettings").catch((error: Error) => {
    console.error(error);
    return (
      <div class="text-red-500">
        An error occurred while loading the character settings page.
      </div>
    );
  })
);

const Home = lazy(() => 
  import("./pages/Home").catch((error: Error) => {
    console.error(error);
    return (
      <div class="text-red-500">
        An error occurred while loading the home page.
      </div>
    );
  })
);

const Login = lazy(() => 
  import("./pages/Login").catch((error: Error) => {
    console.error(error);
    return (
      <div class="text-red-500">
        An error occurred while loading the login page.
      </div>
    );
  })
);

const App: Component<{}> = (props) => (
  <div class="flex h-[100vh] flex-col justify-between">
    <NavBar />
    <div class="w-full grow overflow-y-scroll px-8 pt-8 max-sm:px-3">
      <div class="mx-auto h-full max-w-4xl">
        <Routes>
          <Route path="/chat" component={ChatPage} />
          <Route path="/character" component={CharacterSettings} />
          <Route path="/" component={Home} />
          <Route path="/account/login" component={Login} />
        </Routes>
      </div>
    </div>
  </div>
);

export default App;
