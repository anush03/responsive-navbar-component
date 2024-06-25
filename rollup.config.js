import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import url from "@rollup/plugin-url";

export default defineConfig([
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "es",
        sourcemap: true,
      },
    ],
    external: ["react", "react-dom"],
    plugins: [
      typescript({ tsconfig: "tsconfig.json" }),
      postcss({
        extract: true, // Creates a separate CSS file
      }),
      url({
        include: [
          "**/*.woff",
          "**/*.woff2",
          "**/*.eot",
          "**/*.ttf",
          "**/*.svg",
        ],
        limit: 0, // Copy all files
      }),
    ],
  },
  {
    input: "dist/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
]);
