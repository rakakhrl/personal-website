import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "atropos/css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        fontFamily: "Space Grotesk, sans-serif",
        headings: { fontFamily: "Space Mono, monospace" },
        colors: {
          platinum: ["#E5E7E6"],
          silver: ["#B7B5B3"],
          smokyBlack: ["#141301"],
        },
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);
