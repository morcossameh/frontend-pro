#!/bin/bash

# Check if a commit message was provided
if [ $# -eq 0 ]; then
    echo "Error: Please provide a commit message"
    echo "Usage: ./git-push.sh \"your commit message\""
    exit 1
fi

# Store the commit message
commit_message="$1"

# Add all changes
git add .

# Commit with the provided message
git commit -m "$commit_message"

# Push to the current branch
current_branch=$(git symbolic-ref --short HEAD)
git push origin $current_branch

echo "Changes have been committed and pushed successfully!"