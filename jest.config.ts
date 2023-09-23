import type {Config} from 'jest';

const config: Config = {
    verbose: true,
    preset: 'ts-jest',
    "transform": {
        "\\.[jt]sx?$": "ts-jest",
    }
};

export default config;