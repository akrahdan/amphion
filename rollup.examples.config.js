import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import sourceMaps from "rollup-plugin-sourcemaps";
import replace from "@rollup/plugin-replace";
import typescript from "rollup-plugin-typescript2";
import serve from "rollup-plugin-serve";
import livereload from 'rollup-plugin-livereload';
import multiInput from 'rollup-plugin-multi-input';
import json from "@rollup/plugin-json";
import wasm from "@rollup/plugin-wasm";
import nodePolyfills from 'rollup-plugin-node-polyfills';

export default {
  input: ["examples/*.js"],
  output: {
    dir: 'build',
    format: "esm",
  },
  watch: {
    include: "examples/**"
  },
  plugins: [
    json(),
    wasm(),
    multiInput(),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        compilerOptions: {
          target: "ES6"
        },
      },
    }),
    commonjs(),
    nodePolyfills(),
    resolve({
      preferBuiltins: false
    }),
    sourceMaps(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("development"),
      preventAssignment: true,
    }),
    serve({
      open: true,
      contentBase: ["build"],
      openPage: "/basic",
      historyApiFallback: true,
    }),
    livereload(),
  ]
};
