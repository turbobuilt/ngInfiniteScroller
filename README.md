# ngInfiniteScroller
A simple infinite scroll for angular that works how it should!

###This has a couple improvements over other similar modules
- It's simple
- It works (for me at least)
- It should be fast
- It waits 1 second between calling for loads (configurable)
- It automatically checks scroll distance based on it's parent.  If you need it to be relative to something else, first try moving the div.  But if you can't, then you'll have to make some manual modifications.

It is simple to use.  In your main angular file, include `ngInfiniteScroller`

```javascript
angular.module("myApp",[`ngInfiniteScroller`,...]
```

Then in your html:

```
<infinite-scroller ng-load-more="listCtrl.loadMore()"></infinite-scroller>
```

Or 

```
<infinite-scroller ng-load-more="listCtrl.loadMore()" min-repeat-delay="500"></infinite-scroller>
```
