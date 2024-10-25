/** @type {import('jest').Config} */
const config = {
  preset: 'ts-jest', // Usar ts-jest para compilar TypeScript
  testEnvironment: 'node', // Definir o ambiente de teste como Node
  modulePathIgnorePatterns: ['<rootDir>/.next/'], // Ignorar a pasta .next
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Usar ts-jest para arquivos TypeScript
  },
};

module.exports = config;
