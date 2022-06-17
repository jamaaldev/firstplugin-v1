import { render, Platform } from "@wordpress/element";
import App from "./App";

// Render the App component into the DOM
render(<App />, document.getElementById("firstplugin"));

// const placeholderLabel = Platform.select({
//   native: __("Add media"),
//   web: __("Drag images, upload new ones or select files from your library."),
// });
