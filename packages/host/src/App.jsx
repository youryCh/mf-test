import {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";

const Header = lazy(() => import("my-nav/Header"));

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Suspense fallback={<p>Loading...</p>}>
      <Header />
    </Suspense>
  </div>
);
const rootElement = document.getElementById("app");

if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
