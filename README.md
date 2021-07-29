# Maze-Generator

[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Sranu2109/Maze-Generator.svg?logo=git&style=social)](https://github.com/Sranu2109/Maze-Generator/) [![Linkedin](https://img.shields.io/linedin.svg?style=social&logo=linkedin)](https://www.linkedin.com/in/ranu-singh-792ba91b4/)  [![GitHub license](https://img.shields.io/github/license/Sranu2109/Maze-Generator.svg?style=social&logo=github)](https://github.com/Sranu2109/Maze-Generator/blob/master/LICENSE)

To inspect:- [https://js-maze-generator.netlify.app/](https://js-maze-generator.netlify.app/)

## Approach :-

[![Breadth-First (Wave)](https://img.shields.io/badge/Breadth--First-wave-teal.svg?style=for-the-badge&logo=github)](https://www.andymikulski.com/waves) 

## Algorithm :-

A maze can be defined, for example as a 2D array byte type values (or something similar) where each element of this array represents one field. We will need a total of three field values:
+ Nothing (open field)
+ Wall (impenetrable box)
+ Basis (imaginary, used only to generate a maze)

### We will prepare the basis of the maze:

1. There is a wall all around, boxes with a cross mean the value "basis". We will need some function that will calculate how many bases there are left in the maze (we go through the field, box by box and count the values of the bases).

<p align="center">
<img src="https://github.com/Sranu2109/Maze-Generator/blob/main/images/maze1.PNG?raw=true"> </p>

2. The formation of the maze proceeds as follows. First, we randomly select one base box: we count the bases, we use the random function on the result, the number will come out, let's say n. Then we go through the maze along the lines until we come across the nth base box:

<p align="center">
<img src="https://github.com/Sranu2109/Maze-Generator/blob/main/images/maze2.PNG?raw=true"></p>

<p align="center"><b>The arrows represent four possible directions that we can follow from the wall box.</b></p>

3. Now we choose one of those directions at random and start building a wall. All the free and basis boxes that we come across turn into walls. We finish when we hit another wall (therefore, the maze must be bounded at the beginning, so that the walls do not run away around us):

<p align="center">
<img src="https://github.com/Sranu2109/Maze-Generator/blob/main/images/maze3.PNG?raw=true"></p>

4. From there, we go back to the random selection of the base and build another wall and so on and on until all the base boxes in the maze are walled up:

<p align="center">
<img src="https://github.com/Sranu2109/Maze-Generator/blob/main/images/maze4.PNG?raw=true"> <img src="https://github.com/Sranu2109/Maze-Generator/blob/main/images/maze5.PNG?raw=true"> <img src="https://github.com/Sranu2109/Maze-Generator/blob/main/images/maze6.PNG?raw=true"></p>

### And that's it. The resulting maze has several pleasant features:
+ There is always exactly one possible path between any two free fields, neither more nor less. This is due to the fact that in the maze there can be no isolated "islands" of walls that would not be connected to the edge.
+ All the boxes marked here in the picture with a dot will always be free, so we can place start, finish and other things on them at will:

<p align="center">
<img src="https://github.com/Sranu2109/Maze-Generator/blob/main/images/maze7.PNG?raw=true"> </p>

<em>If we find the maze too difficult to pass, just at the beginning a few randomly selected base boxes to change to a wall - the more, the easier the maze will be, because this will allow the emergence of isolated sections of walls that do not touch the edge and therefore go around in more ways.</em>

## Special thanks to :-

Generated maze based on this [algorithm](https://www.itnetwork.cz/algoritmy/bludiste/algoritmus-tvorba-nahodneho-bludiste/)
