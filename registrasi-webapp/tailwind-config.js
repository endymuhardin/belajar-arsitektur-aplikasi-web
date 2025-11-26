import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  content: [
    path.join(__dirname, "src/views/**/*.{hbs,html}"),
    path.join(__dirname, "src/routes/**/*.js"),
    path.join(__dirname, "src/**/*.js"),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
