angular.module('ngInfiniteScroller').directive("infiniteScroller",function(){
    return {
        restrict:"E",
        scope: {
            ngLoadMore:"&",
						minRepeatDelay:"="
        },
        template:``,
        link: function($scope, $element, $attrs, $ngModelCtrl){
            var parent = $element.parent();
            var parentRaw = parent[0]
            parent.on("scroll", handleScroll);
            $scope.$on('$destroy',() => {
                parent.off('scroll',handleScroll);
            });
            if($scope.minRepeatDelay == undefined){
                $scope.minRepeatDelay = 1000;
            }
            var ignore = false
            function handleScroll(event){
                if(parentRaw.scrollHeight - parentRaw.clientHeight - parentRaw.scrollTop < 1){
                    if(ignore)
                        return;
                    ignore = true;
                    setTimeout(() => ignore = false,$scope.minRepeatDelay);
                    $scope.ngLoadMore();
                }
            }
        }
    }
});
