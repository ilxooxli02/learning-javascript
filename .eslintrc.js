module.exports = {
  "extends": "airbnb-base",
  "globals": {
    "stage": true,
    "dsn": true,
    "dsnLog": true,
    "dsnBn": true,
    "lagger": true,
    "lammon": true,
    "API": true
  },
  "env": {
    "jest": true
  },
  "rules": {
    "no-underscore-dangle": [
      2,
      {
        "allow": []
      }
    ],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: "multiline-block-like", next: "*" },
      { blankLine: "always", prev: ["const", "let", "var"], next: "*"},
      { blankLine: "any",    prev: ["const", "let", "var"], next: ["const", "let", "var"]},
      { blankLine: "always", prev: "directive", next: "*" },
      { blankLine: "any",    prev: "directive", next: "directive" }
    ],
    "prefer-destructuring": [
      "error", {
        "VariableDeclarator": {
          "array": false,
          "object": false
        },
        "AssignmentExpression": {
          "array": false,
          "object": false
        }
      },
      {
        "enforceForRenamedProperties": false
      }
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1
      }
    ],
    "no-underscore-dangle": [
      "error",
      {
        "allowAfterThis": true,
        "allow": [
          "_",
          "__"
        ]
      }
    ],
    "max-len": [
      "error",
      {
        "code": 140,
        "ignoreComments": true,
        "ignoreTrailingComments": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignoreRegExpLiterals": true
      }
    ]
  }
};
