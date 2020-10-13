//jest.config.js
module.exports = {
    roots: ['<rootDir>/src','<rootDir>/test',],
    setupFiles: ['<rootDir>/testMocks/test.setup.js', '<rootDir>/testMocks/test.shim.js'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },

    moduleNameMapper: {
        '\\.(css|scss)': 'identity-obj-proxy', // mock 在react组件里import的CSS
        '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/testMocks/assetsMocks.js', //mock 在react组件里import的图片
    },
    resolver: null,
    testRegex: '^.+\\.test\\.(ts|tsx)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};