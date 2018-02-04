module.exports = (config) => {
    config.set({
        frameworks: ['jasmine','karma-typescript'],


        files: [
            { pattern: "base.spec.ts"},
            { pattern: "src/app/**/*.+(ts|html)"}
        ],
        preprocessors: {
            "**/*.ts": ["karma-typescript"]
        },

        karmaTypescriptConfig: {
            bundlerOptions: {
                entrypoints: /\.spec\.ts$/,
                transforms: [
                    require("karma-typescript-angular2-transform")
                ]
            },
            compilerOptions: {
                lib: ["ES2016", "DOM"]
            }
        },                
        reporters: ["progress","karma-typescript"],
        port: 9876,
        colors: true,
        logLevel: config.LOG_DEBUG,
        autoWatch: true,
        browsers: ["Chrome"],
        singleRun: false
    });
}