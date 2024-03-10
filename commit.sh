#!/bin/bash
echo "Enter message:"
read MESSAGE

git add .
git commit -m "$MESSAGE"