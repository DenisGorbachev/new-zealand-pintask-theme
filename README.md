A New Zealand theme for Pintask
=========================

The most well-known inhabitants of this country will exchange a few glances with you while exploring boards' background on http://pintask.me/.

This beautiful theme is only a few lines of code:

```css
html {
  body > .content {
    background-image: url("http://upload.wikimedia.org/wikipedia/commons/b/bb/Ewe_and_lamb_in_Kent.jpg");
    background-size: cover;
  }
  .top-content .items.current, .top-content .items.current .shadow-blocks {
    height: 52px;
  }
  .top-content {
    box-shadow: 0 5px 15px 0 #97989c;
    z-index: 10000;
  }
  .board-list, .board-edit form, .board-calendar .board-calendar-message {
    background-color: rgba(236, 239, 244, 0.95);
  }
  .board-list {
    margin-left: 15px;
    .board-list-header {
      margin-top: 10px;
    }
  }
}
```

So easy to make your own theme ;)
