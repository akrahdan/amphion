import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import replace from 'rollup-plugin-replace';
import minify from 'rollup-plugin-babel-minify';
import wasm from '@rollup/plugin-wasm';

const isExternal = p => !!/^three/.test(p);

export default {
  input: 'src/index.ts',
  watch: {
    chokidar: false,
  },
  onwarn(message) {
    if (
      // these two messages are false positives
      // need to investigate why these are triggered
      message.code === 'MISSING_GLOBAL_NAME' ||
      message.code === 'UNRESOLVED_IMPORT'
    ) {
      return;
    }
    console.warn(message);
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true,
    }),
    wasm(),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        compilerOptions: {
          target: "ES6"
        },
      },
    }),
    commonjs({ extensions: ['.js', '.ts'] }),
  ],
  treeshake: true,
  external: ['@robostack/roslib', 'three', 'three-freeform-controls'],
  output: [
    {
      format: 'es',
      file: 'build/amphion.js',
    },
  ],
};
