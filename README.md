React Window Titlebar
======
**React Window Titlebar** for your electron applications. 

#### In Action
![React Window Titlebar](http://manojsinghnegi.com/img/react-window-titlebar.gif)

## How to install
```
$ npm install react-window-titlebar
```

## Usage
```javascript
import TitleBar from 'react-window-titlebar'; // import TitleBar
import {remote} from 'electron'; // get remote object from electron whichhelps Titlebar to control window actions
// your component
render () {
    return (
        <TitleBar title="The main window title" remote={remote} theme="dark" />
    )
}
// isn't it is so easy ?
```
## Props
##### title ( String )
Use this to pass a title to toolbar.

##### remote ( elrctron remote object )
This is a required prop. TitleBar uses it to control window actions like closing the window.

##### theme ( dark || light )
You can pass two argument to theme `dark` or `light`. Default is `light`.

## Contribte to this component

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

When developing your feature you can take advantage of `npm run dev` script provided in package.json. If you want to test this component run `npm run dev` inside your development folder & then inside your electron project directory run `npm link react-window-titlebar`. Now you will be able to import `react-window-titlebar` like a normal npm module.

Whenever you make a change just run `npm run dev` again.

### About Me

 * [My website](http://manojsinghnegi.com) (manojsinghnegi.com)
 * [Github](http://github.com/manojsinghnegiwd) (@manojsinghnegiwd)
 * [Twitter](http://twitter.com/manojnegiwd) (@manojnegiwd)
