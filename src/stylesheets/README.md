# How to add your own stylesheet to the app

This project encourages the use of both SMACSS as fas as files structure, and BEM as selectors convention.

In case you need to create your own stylesheet, add its path to ```angular.json>architect>build>styles``` array, and re-serve/re-compile.

Note: It's necessary to recompile everytime a new stylesheet is added to the styles array.

## SMACSS: Folder structure

SMACSS is a down-to-earth approach on how to structure your CSS files in a way that's easy to understand and scale well.

* Base: Variables and styles to change the look and feel of native elements;
* Layout: Elements that are exclusively used as a layout for other components;
* Modules: Discrete and reusable components;
* Utils: Utility classes, generally available for any element.

Note: Normally a SMACSS folder structure would need a "/states" folder, but since we use BEM we use modifiers instead of states.

Head over [http://smacss.com/](http://smacss.com/) to know more.

## BEM: Selectors

BEM is a very neat approach that allows the selectors to become much more maintainable and to scale without conflicts.

* Block: Encapsulates a standalone entity that is meaningful on its own;
* Element: Parts of a block and have no standalone meaning. Any element is semantically tied to its block;
* Modifier: Flags on blocks or elements. Use them to change appearance, behavior or state.

Head over [http://bem.info/](http://bem.info/) to know more.

## Resources

* [http://smacss.com/](http://smacss.com/)
* [http://bem.info/](http://bem.info/)