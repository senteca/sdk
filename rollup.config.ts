import peerDepsExternal from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

export default {
  input: "./src/index.ts",
  output: [
    {
      file: "./dist/index.cjs.js",
      format: "cjs",
    },
    {
      file: "./dist/index.esm.js",
      format: "es",
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
    }),
  ],
  onwarn(warning, rollupWarn) {
    if (warning.code !== "CIRCULAR_DEPENDENCY") {
      rollupWarn(warning);
    }
  },
};
