module.exports = {
    root: true,
    ignorePatterns: ["node_modules", "dist", "tmp"],
    plugins: ["@nx"],
    extends: ["plugin:@nx/typescript", "prettier"],
    overrides: [
      {
        files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
        rules: {
          "@nx/enforce-module-boundaries": [
            "error",
            {
              enforceBuildableLibDependency: true,
              allow: [],
              depConstraints: [
                {
                  sourceTag: "*",
                  onlyDependOnLibsWithTags: ["*"]
                }
              ]
            }
          ],
          "no-unused-vars": "error",
          "semi": ["error", "always"]
        }
      },
      {
        files: ["*.ts", "*.tsx"],
        extends: ["plugin:@nx/typescript", "prettier"],
        rules: {
          "@typescript-eslint/no-unused-vars": "error"
        }
      },
      {
        files: ["*.js", "*.jsx"],
        extends: ["plugin:@nx/javascript", "prettier"],
        rules: {
          "no-unused-vars": "error",
          "semi": ["error", "always"]
        }
      }
    ]
  };  