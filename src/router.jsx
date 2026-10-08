import { createBrowserRouter, Navigate } from "react-router-dom";
import Layouts from "@/Layouts";

// Main views
import Home from "@views/Home";
import Palette from "@views/Palette";
import About from "@views/About";
import Bookmarks from "@views/Bookmarks";

// Lab views
import Mix from "@views/Lab/Mix";
import Analyze from "@views/Lab/Analyze";
import Shading from "@views/Lab/Shading";
import Harmony from "@views/Lab/Harmony";

// Book views
import Docs from "@/views/Book/Docs";
import Api from "@/views/Book/Api";
import List from "@/views/Book/List";

// 404
import NotFound from "@views/NotFound";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layouts />,
      children: [
        { index: true, element: <Home /> },
        { path: "palette", element: <Palette /> },
        { path: "about", element: <About /> },
        { path: "bookmarks", element: <Bookmarks /> },

        {
          path: "lab",
          children: [
            { index: true, element: <Navigate to="/lab/analyze" replace /> },
            { path: "mix", element: <Mix /> },
            { path: "analyze", element: <Analyze /> },
            { path: "shading", element: <Shading /> },
            { path: "harmony", element: <Harmony /> },
          ],
        },

        {
          path: "book",
          children: [
            { index: true, element: <Navigate to="/book/docs" replace /> },
            {
              path: "docs",
              element: <Docs />,
              children: [
                { index: true, element: <Docs /> },
                { path: ":slug", element: <Docs /> },
              ],
            },
            { path: "api", element: <Api /> },
            { path: "list", element: <List /> },
          ],
        },

        { path: "*", element: <NotFound /> },
      ],
    },
  ],
  {
    basename: "/color-app/",
  }
);