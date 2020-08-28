const path = require('path');
const babel = require('rollup-plugin-babel');
const {nodeResolve} = require('@rollup/plugin-node-resolve');
const uglify = require('rollup-plugin-uglify').uglify;
const merge = require('lodash.merge');
const pkg = require('./package.json');
const scss = require('rollup-plugin-scss');

const extensions = ['.js', '.ts','.tsx','.jsx','.json'];

const resolve = function(...args) {
    return path.resolve(__dirname, ...args);
};

// 打包任务的个性化配置
const jobs = {
    esm: {
        output: {
            format: 'esm',
            file: resolve(pkg.module),
        },
    },
    umd: {
        output: {
            format: 'umd',
            file: resolve(pkg.main),
            name: 'rem',
        },
    },
    min: {
        output: {
            format: 'umd',
            file: resolve(pkg.main.replace(/(.\w+)$/, '.min$1')),
            name: 'rem',
        },
        plugins: [uglify()],
    },
};

// 从环境变量获取打包特征
const mergeConfig = jobs[process.env.FORMAT || 'esm'];

module.exports = merge(
    {
        input: resolve('./src/index.ts'),
        output: {
            global:{
                'react':'React',
            }
        },
        plugins: [
            nodeResolve({
                extensions,
                modulesOnly: true,
            }),
            babel({
                exclude: 'node_modules/**',
                extensions,
            }),
            scss()
        ],
        watch: {
            include: 'src/**',
            exclude: 'node_modules/**'
        },
        server: {
            port: 7001
        },
    },
    mergeConfig,
);
