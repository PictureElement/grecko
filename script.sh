#!/bin/bash

rm -r docs
mkdir docs

rm -r dist
mkdir dist

cp -r src/media dist/

grunt purifycss

grunt cssmin

grunt uglify

grunt copy

perl -0pi -e 's/    <!-- Bootstrap -->\n    <link rel="stylesheet" href="..\/css\/bootstrap.css">\n    <!-- Animate.css -->\n    <link rel="stylesheet" href="..\/css\/animate.css">\n    <!-- Default stylesheet -->\n    <link rel="stylesheet" href="..\/css\/main.css">/    <link rel="stylesheet" href="..\/css\/purestyles.css">/' dist/pages/*.html  
perl -0pi -e 's/    <!-- Bootstrap -->\n    <link rel="stylesheet" href="css\/bootstrap.css">\n    <!-- Animate.css -->\n    <link rel="stylesheet" href="css\/animate.css">\n    <!-- Default stylesheet -->\n    <link rel="stylesheet" href="css\/main.css">/    <link rel="stylesheet" href="css\/purestyles.css">/' dist/index.html  
 
grunt critical

grunt htmlmin

cp -a dist/. docs/

