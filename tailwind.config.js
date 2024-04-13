/** @type {import('tailwindcss').Config} */
import flowbitePlugin from "flowbite/plugin";
import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "Deep-Purple-50": "#ede7f6",
        "Deep-Purple-100": "#d1c4e9",
        "Deep-Purple-200": "#b39ddb",
        "Deep-Purple-300": "#9575cd",
        "Deep-Purple-400": "#7e57c2",
        "Deep-Purple-500": "#673ab7",
        "Deep-Purple-600": "#5e35b1",
        "Deep-Purple-700": "#512da8",
        "Deep-Purple-800": "#4527a0",
        "Deep-Purple-900": "#311b92",
      },
    },
  },
  plugins: [flowbitePlugin],
});
