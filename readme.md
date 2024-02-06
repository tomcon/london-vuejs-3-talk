# Real-time live results board & other tips

- London VueJS Meetup, Thursday 7th July 2016

## Abstract

Part 1; Vue.js, Node, Socket.io, MongoDB working together to create a live results board for sporting events.  
Part 2; Looking behind a larger app and tips learned from both.  

Along the way see how to move from the simpler examples shown on vuejs.org to more complex apps and remain productive. Suited for people fairly new to Vue.js and/or those who have come to it from other languages.

## Folders

###/simple-extended (taken from vue-cli simple template)
Very small project demonstrating the following:
- Dynamically loaded components from vue files
- Simple method using app-loader.js   
  Credit: app-loader.js is a early, slightly modified version from [here](https://github.com/your-budget-today/personal)
- Example of a component with an 'inline-template'
- useful tip: to debug these dynamically loaded .vue files just put 
  //# sourceURL=home.vue            
  just before the closing script tag (paths not reqd)
See also  (http://stackoverflow.com/questions/17367560/chrome-development-tool-vm-file-from-javascript)

```
npm install -g live-server 
live-server 
``` 

###/slides
Slides from the meeting

###/useful
Useful utils to aid development

- mk_node_module_links.js  
npm install can be very time-consuming, plus windows users suffer from folder depth  
Useful to speed up dev if you're short of time, or want to use this for convenience  
Creates symlinks within your project node_modules folder from your global install  

- also see last slide "Useful Tools & Information"  
Especially ngrok & Vue-socket.io

## Real-time results board
Currently held in a private repo.   
Code snippets may follow if permission is given by ReportLab
