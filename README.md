# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install` 

For installing all node dependecy and node module .

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

for building the react project for production purpose

### `npm run webpack:build-server`

### `npm run rollup:build-server`

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## project setup 

After cloning the repo you go inside the root directory firstly install all dependency by this command 

### `npm install`

and then you have to setup wasmedge you can go to [https://wasmedge.org/docs/start/getting-started/quick_start] link and also [https://wasmedge.org/docs/develop/javascript/hello_world] for installing wasmedge

and then run this command for building the project as

### `npm run buid`

now after building the project build it via webpack

### `npm run webpack:build-server`

and then build the server/index.js via rollup with command 

### `npm run rollup:build-server`

now you can see the server-build directory go inside it via command

### `cd server-build`

then start the server via wasmedge with comamnd 

### `wasmedge --dir .:. ../wasmedge_quickjs.wasm index.js`


## Impertant
 I am new to writing readme file and also to coding and dont know some things i'll update all these things as i understand more.
