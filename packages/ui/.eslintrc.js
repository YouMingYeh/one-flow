module.exports = {
  extends: ["custom/library"],
  "overrides": [
    {
      "files": ["./**/*"],
      "extends": ["custom/next"],
      "rules": {
        "eslint-comments/require-description": "off"
      }
    }
  ]
};
