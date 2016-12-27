# ngInfiniteScroller
A simple infinite scroll for angular that works how it should!

###This has a couple improvements over other similar modules
- It's simple
- It works (for me at least)
- It should be fast
- It is smart enough not to reload until the current batch has loaded
- It automatically checks scroll distance based on it's parent.  If you need it to be relative to something else, first try moving the div.  But if you can't, then you'll have to make some manual modifications.

It is simple to use.  In your main angular file, include `ngInfiniteScroller`

```javascript
angular.module("myApp",[`ngInfiniteScroller`,...]
```

Then in your html:

``` html
<infinite-scroller ng-load-more="listCtrl.loadMore()" ng-current-count="listCtrl.items.length" ng-current-limit="listCtrl.limit" ng-total-items="listCtrl.itemsCount"></infinite-scroller>
```
-`ng-load-more` is the function to load more
-`ng-current-count` is the number of items that are in the list at the present moment.  Usually just the length of the list you are ng-repeating
-`limit` is how many items should be in the list once loading is complete.  The directive compares this number to `ng-current-count`, and won't load more until they are the same
`ng-total-items` is how many items are in the entire set. Honestly you could probably put a million in here and I think it would still work ok.
