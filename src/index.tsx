import { Component } from "solid-js";
import { render } from "solid-js/web";

import { Router } from "@solidjs/router";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";

import bootstrapMocks from "./api/_mocks";

import App from "./App";
import { AppStoreProvider } from "./providers/AppStoreProvider";

bootstrapMocks();

const queryClient = new QueryClient();

const AppContainer: Component = () => (
  <Router>
    <AppStoreProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </AppStoreProvider>
  </Router>
);

render(() => <AppContainer />, document.getElementById("root") as HTMLElement);
