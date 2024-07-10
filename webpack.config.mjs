import path from "path";
import Dotenv from "dotenv-webpack";
import { fileURLToPath } from "url";

// Define __dirname for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./api.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    library: "MyLibrary",
    libraryTarget: "umd",
  },
  mode: "production",
  plugins: [
    new Dotenv({
      path: "./.env.local", // Load .env.local file
    }),
  ],
};
