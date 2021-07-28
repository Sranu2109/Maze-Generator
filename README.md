# Maze-Generator

[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Sranu2109/Maze-Generator.svg?logo=git&style=social)](https://github.com/Sranu2109/Maze-Generator/) [![GitHub license](https://img.shields.io/github/license/Sranu2109/Maze-Generator.svg?style=social&logo=github)](https://github.com/Sranu2109/Maze-Generator/blob/master/LICENSE)

To inspect:- [https://js-maze-generator.netlify.app/](https://js-maze-generator.netlify.app/)

## Abstract

A maze can be defined, for example as a 2D array byte type values (or something similar) where each element of this array represents one field. We will need a total of three field values:
+ Nothing (open field)
+ Wall (impenetrable box)
+ Basis (imaginary, used only to generate a maze)

We will prepare the basis of the maze:
image
There is a wall all around, boxes with a cross mean the value "basis". We will need some function that will calculate how many bases there are left in the maze (we go through the field box by box and count the values of the bases - nothing difficult)
The maze is created as follows, first we randomly select one base field: we calculate the basics, we use the random function on the result
