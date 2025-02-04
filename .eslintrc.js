module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "**/tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 15,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  // 필요없는 규칙은 off해서 꺼주세요
  rules: {
    "react/react-in-jsx-scope": "off",
    // "@typescript-eslint/no-misused-promises": "off", // HOF를 배우고 나서 wrapAsync 함수로 해결 가능(그 전까지는 off 할 것)
    // 'react/prop-types': 'off'
  },
};
