import type { Configuration } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';
import webpackNodeExternals from 'webpack-node-externals';

rules.push({
    test: /\.css$/,
    use: [MiniCssExtractPlugin.loader, { loader: 'css-loader' }, { loader: 'postcss-loader' }],
});

export const rendererConfig: Configuration = {
    module: {
        rules,
    },
    externals: [
        webpackNodeExternals({
            allowlist: [/webpack(\/.*)?/, /@jitt(\/.*)?/, 'electron-devtools-installer']
        })
    ],
    plugins,
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.ttf', '.png'],
        fallback: {
            crypto: require.resolve('crypto-browserify'),
            util: require.resolve('util'),
            path: require.resolve('path-browserify'),
            child_process: false
        }
    },
};
