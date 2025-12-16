# Online Food Delivery App ie "Foodie.app"
I’ve been enhancing my skills and solidifying my foundation in the React.js
Tech stack by diving deep into it’s concepts and techniques while embracing
project "online Food Delivery App" based learning.
Throughout the project, I’ve learned various React.js concepts from scratch
such as: Parcel for packaging Apps, Babel for transpiling JSX to JavaScript,
React Components - class based and functional component, Props and imports/
exports, Fetching live data via API calls, Concept of React Fiber and Diff 
Algorithm for optimizing DOM, React Hooks - useState and useEffect, Routing 
for creating seamless navigation between components, Custom Hooks, Advanced
styling with Tailwind CSS, Redux Toolkit for efficient state management.
Testing: Manual, unit and integration using Jest and jsdom environment.

# Parcel 
-Dev Build
-Local Server
-HMR = Hot Module Replacement
-File Watching Algorithms - written in C++
-Caching - Faster Builds
-Image Optimization
-Minification
-Bundling
-Compress
-consistent Hashing
-code spliting
-Differential Bundling - support older browsers
-Diagnostic = show beautiful error
-Error Handling
-HTTPS 
-Tree Shaking - remove unused code
-Different dev and prod bundles

# Planning | App LayOut
/**
 * Header
 *    -Logo
 *    -Nav Items
 * Body
 *   -Search
 *   -RestaurantContainer 
 *       -Img
 *       -Name of Res, star Rating, cuisine, delivery time
 * Footer
 *   -Copyright
 *   -Links
 *   -Address
 *   -Contact
 */
 
 # Two type of Export/Import
1-Default Export/Import
   export default components;
   import Component from "path";
2-Named Export/Import
   export const Component;
  import {Componenr} from "path";

# React hooks
 (Normal JS utility Functions)
 -useState()
 -useEffect() 
 Note-
1.if no dependency array => useEffect is called on every render
2.if dependency array is empty=[] => useEffect is called on intial render(just once)
3.if dependency array is [btnNameReact] => called everytime btnNameReact is updated

# 2-types of routing in web Apps
-Client Side Routing
-Server Side Routing 

# Components
1. Class Based Component
2. Functional Based Component

# when component is mounted , it mounted in two phases : 
1. render phase
2. commit phase
if there are multiple children, how life cycle order work in class based component:
-Parent Constructor
-Parent render
    -FirstChild render
    -FirstChild constructor
    -SecondChild constructor
    -SecondChild render
  <DOM UPDATED -IN SINGLE BATCH>
    -FirstChild ComponentDidMount
    -SecondChild ComponentDidMount
-Parent componentDidMount 

# Redux Toolkit
- Install @reduxjs/toolkit and react-redux  (two library)
- Build our store
- Connect our store to our app
- Slice (cartSlice) 
- dispatch (action)
- Selector

# Types of Testing (developer)
- Unit Testing
- Integration Testing
- End to End Testing - e2e testing

# Setting up Testing in our App ()
- Install React Testing Library
- Installed jest
- Installed Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- Jest configuration  ( npx jest --init )
- Install jsdom library
- Install @babel/preset-react  - to make jsx work in test cases
- Include @babel/preset-react inside my babel config  
- npm i -D @testing-library/jest-dom