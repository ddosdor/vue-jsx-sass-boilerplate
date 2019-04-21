module.exports = {
  moduleFileExtensions: [
    'ts',
    'js',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: [
    '**/**/*.spec.(js|ts)',
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
