A New Zealand theme for Pintask
=========================

The most well-known inhabitants of this country will exchange a few glances with you while exploring board backgrounds on http://pintask.me/.

This beautiful theme is only a few lines of code:

```css
html
  body > .content
    background-image url("https://upload.wikimedia.org/wikipedia/commons/b/bb/Ewe_and_lamb_in_Kent.jpg")
    background-size cover

  .top-content
    box-shadow 0 5px 15px 0 #97989c
    z-index 2000

  .board-list, .board-edit form, .board-calendar .board-calendar-message, .list-switcher-wrapper
    background-color rgba(236, 239, 244, 0.95)

  .board-lists > .board-list
    margin-left 15px
    margin-top 15px
    .board-list-header
      margin-top 10px
```

_This theme is written in [Stylus](http://learnboost.github.io/stylus/). Plain old [CSS version](https://github.com/DenisGorbachev/pintask-new-zealand-theme/blob/master/theme.css) is available, too._

So easy to make your own theme ;)
