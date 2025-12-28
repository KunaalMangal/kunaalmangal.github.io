import { Suspense } from "react";
import { RouterProvider } from "react-router";

import "./App.css";
import { router } from "./router/Router";

function App() {
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
