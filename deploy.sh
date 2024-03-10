#!/bin/bash
# Prompt the user to enter the branch name
echo "Enter the branch name:"
read BRANCH_NAME

# Push the changes to the remote branch
git push origin $BRANCH_NAME

echo "Code pushed to branch $BRANCH_NAME"