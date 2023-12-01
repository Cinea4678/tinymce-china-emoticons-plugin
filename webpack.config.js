const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
    const isProd = argv.mode === 'production';

    return {
        entry: './src/index.ts',
        output: {
            filename: isProd ? 'index.min.js' : 'index.js',
            path: path.resolve(__dirname, 'dist'),
            libraryTarget: 'umd',
            globalObject: 'this'
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        optimization: {
            minimize: isProd,
            minimizer: [new TerserPlugin()]
        },
        target: 'web',
        externals: {
            tinymce: 'tinymce'
        }
    };
};
