#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Ensure we are on the main branch
BRANCH=$(git symbolic-ref --short -q HEAD)
if [ "$BRANCH" != "main" ]; then
  echo "❌ Error: You must be on the 'main' branch to release (current branch: $BRANCH)."
  exit 1
fi

# Ensure git working directory is clean
if ! git diff-index --quiet HEAD --; then
  echo "❌ Error: Your git working directory is not clean. Please commit or stash changes first."
  exit 1
fi

# Check for version argument
VERSION=$1
if [ -z "$VERSION" ]; then
  echo "Usage: pnpm release <newversion | major | minor | patch | premajor | preminor | prepatch | prerelease>"
  echo "Example: pnpm release patch"
  exit 1
fi

echo "🚀 Starting release process for version target: $VERSION..."

# Run npm version to bump version, commit, and tag
npm version "$VERSION" -m "chore: release v%s"

# Extract new version name from package.json
NEW_VERSION=$(node -p "require('./package.json').version")

echo "✅ Bumped version to v$NEW_VERSION, created commit and git tag."

echo "📤 Pushing commit and tags to origin main..."
git push origin main --follow-tags

echo "🎉 Success! Release v$NEW_VERSION pushed. The GitHub Action will now build and publish to npm."
