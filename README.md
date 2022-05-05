# You have all the information inside the index.ts

# TypeScript Crash Course
---
## What is TypeScript?
---
**TypeScript**, is an open source language and is a superset of JavaScript.

**Superset**
> A Superset is basically the language + more features. In this case **TypeScript** is a superset because is JavaScript + more features on the language.

- Offers additionals features to JavaScript including static types
- Using types is completly **optional**
- Compiles down to JS
- Can be used for front-end JS as well as backend with Node.js
- Includes most features from ES6, ES7 (classes, arrow functions, etc)
- Types from 3rd party libraries can be added with **type definitions**

## Dynamic vs Static Type
---
###  Dynamically typed languages
The types are associated with run-time values and not named explicitly in your code.

Ex:
```js
	var SomeName = "SomeName"
```
**Dynamic Examples**: JavaScript, Python, Ruby, PHP

### Static Typed Languages
You explicitly assign types to variables, functions parameters, return values, etc...


**Static Examples**: Java, C, C++, Rust, Go

## Pros & Cons
| Pros             | Cons                   |
| ---------------- | ---------------------- |
| More Robust      | More Code to write     |
| Easily Spot Bugs | More To Learn          |
| Predictability   | Required Compilation   |
| Readability      | Not True Static Typing |
| Popular          |                        |
## Compiling TypeScript
- TypeScript uses **.ts** and **.tsx** extensions
- **TSC** (TypeScript Compiler) is used to compile .ts files down to JS
- Can watch files and report errors at compile time
- Many Tools include TS compilation by default
- Most IDEs have great support with TS
- The tsconfig.json file is used to configure how TypeScript works

## Setup TypeScript
1. **First we need to install the TSC (TypeScript Compiler)**

	We can do that with various methods like: NPM or YARN, also you can add it globally or locally to your project.

	In this case we're going to use NPM and install it globally.
	```npm
	npm i -g typescript
	```

2. **Test Compilation**

	Now that we've tsc installed, we're going to do a test compilation.
	In this case we've created an index.ts file inside the folder.
	```terminal
	tsc index.ts
	```
	You can start the **watch mode as well**, instead of going all the time doing tsc index.ts
	```terminal
	tsc --watch index.ts
	```
	With:
	```terminal
	tsc
	```
	Compiles every single ts file in the project.

3. **Generate the configuration**

	Now we can generate the configuration file with:
	```terminal
	tsc --init
	```

Once we've done all of this, we can now modify the configuration of typescript.
In this case, we will change the:
- OutDir
- RootDir

**OutDir**, controls the directory where the JS files (When ts files are compiled), are going to be sended to.

**RootDir**, controls the directory where the TS files are.