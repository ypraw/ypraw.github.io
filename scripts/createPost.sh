#!/bin/bash

# credit: https://gist.github.com/oneohthree/f528c7ae1e701ad990e6
function slugify () {
  echo "$1" | iconv -t ascii//TRANSLIT | sed -r s/[^a-zA-Z0-9]+/-/g | sed -r s/^-+\|-+$//g | tr '[:upper:]' '[:lower:]'
}

title="${1:-'title'}"
slug="$(slugify "$title")"
folder="./content/posts/$(date +%F)--$slug"

# echo "title: $title"
# echo "slug: $slug"
# echo "folder: $folder"

if [ -d "$folder" ]; then
  printf "\\nWARNING: Post already exists: \"%s\"\\n\\n" "$title"
  printf "To delete current post: \\n  rm -rf %s\\n\\n" "$folder"
  exit -1
fi

if [ "" != "$2" ]; then
  category="$2"
else
  read -rp "Enter post category: " category
fi

if [ "" != "$3" ]; then
  author="$3"
else
  read -rp "Enter post author: " author
fi

mkdir "$folder"
cat << EOF > "$folder/index.md"
---
title: "$title"
category: $category
author: $author
---

EOF

printf "\\nDone: Post created at %s/index.md\\n\\n" "$folder"

