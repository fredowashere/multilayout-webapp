# MultiLayout

## Table of Contents

* [Description](#description)
* [Technologies](#technologies)
* [Install](#terminal-commands)
* [Guidelines](#guidelines)
* [How to add your own styles](#how-to-add-your-own-styles)
* [Reporting Issues](#reporting-issues)

## Description

This is multi-layout Angular app scaffolding.
You can fork and start developing with it right away.
It's also mobile friendly by design.

## Technologies

There are many different useful libraries already installed in this project.
Please use them whenever possible, try not to re-invent the wheel and be mindful about your decisions.

Take a look at the ```package.json``` file to know more about the libraries available.

## Install

1. Install NodeJs from [NodeJs Official Page](https://nodejs.org/en).
2. Open Terminal
3. Go to your file project
4. Run in terminal: ```npm install -g @angular/cli```
5. Then: ```npm install```
6. And: ```npm start```
7. Navigate to [localhost:4200](localhost:4200)

## Guidelines

This is not a religious set of rules to follow no-matter-what, but rather a set of rules guided by Reason.
I believe in your capabilities no matter who you are, may the force be with you!

1. Send fewest HTTP requests as possible
2. Keep CSS selectors flat (might wanna use [BEM](https://getbem.com/))
3. Minimise blocking content (might wanna use [Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) for expensive operations)
4. Use lazy loading (for modules and images)
5. Make sure you have tested your code on a reasonable number of devices
6. Don't Repeat Yourself (DRY)
7. Keep CSS, JS and HTML in separate files (you can break the rule for inline styles)
8. Where appropriate, use CSS rather than Javascript for animations
9. Write code to be read: 'Keep It Simple, Stupid' (KISS)
10. Be verbose with your comments but ensure your comments add value and focus on why rather than how
11. Don't use whitespaces in file names, use hyphens for word separators
12. Identify technical debt: use code comment annotations to mark parts of your code that require further work (for instance TODO: ...)
13. Use PascalCase for class names and camelCase for everything else
14. Use UPPER_CASE for defining constant names
15. Write comments and commits in English, as a Web Developer you are required to know English (so use it)

## How to add your own styles

This project encourages the use of both SMACSS as fas as files structure, and BEM as selectors convention.

In case you need to create your own stylesheet, add its path to ```angular.json>architect>build>styles``` array, and re-serve/re-compile.

Note: It's necessary to recompile everytime a new stylesheet is added to the styles array.

### SMACSS: Folder structure

SMACSS is a down-to-earth approach on how to structure your CSS files in a way that's easy to understand and scale well.

* Base: Variables and styles to change the look and feel of native elements;
* Layout: Elements that are exclusively used as a layout for other components;
* Modules: Discrete and reusable components;
* Utils: Utility classes, generally available for any element.

Note: Normally a SMACSS folder structure would need a "/states" folder, but since we use BEM we use modifiers instead of states.

Head over [http://smacss.com/](http://smacss.com/) to know more.

### BEM: Selectors

BEM is a very neat approach that allows the selectors to become much more maintainable and to scale without conflicts.

* Block: Encapsulates a standalone entity that is meaningful on its own;
* Element: Parts of a block and have no standalone meaning. Any element is semantically tied to its block;
* Modifier: Flags on blocks or elements. Use them to change appearance, behavior or state.

Head over [http://bem.info/](http://bem.info/) to know more.

### Resources

* [http://smacss.com/](http://smacss.com/)
* [http://bem.info/](http://bem.info/)

## Reporting Issues

Use GitHub issue to report an issue.