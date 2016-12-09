var Swipe = (function () {
    var $activePage,
        TRANSITION_DURATION = 400,
        sliding = false;

    function swipteTo(slideType, e) {
        var $targetPage = $activePage[slideType]('.page');
        $targetPage.length && (location.hash = '#' + $targetPage.attr('id'));
    }

    function getSlideType($targetPage) {
        var activePageId = $activePage.attr('id'),
            targetPageId = $targetPage.attr('id');
        return activePageId < targetPageId ? 'next' : activePageId == targetPageId ? '' : 'prev';
    }

    function slide(targetPageId) {
        var $targetPage = $('#' + targetPageId);
        if (!$targetPage.length || sliding) return;

        var slideType = getSlideType($targetPage),
            direction = slideType == 'next' ? 'left' : 'right';
        if (slideType == '') return;

        sliding = true;
        $targetPage.addClass('page--' + slideType);
        $targetPage[0].offsetWidth;
        $activePage.addClass('page--active-' + direction);
        $targetPage.addClass('page--' + slideType + '-' + direction);

        $activePage
            .one($.transitionEnd.end, function () {
                $targetPage.removeClass(['page--' + slideType, 'page--' + slideType + '-' + direction].join(' ')).addClass('page--active');
                $activePage.removeClass(['page--active', 'page--active-' + direction].join(' '));
                $activePage = $targetPage;
                sliding = false;
            })
            .emulateTransitionEnd(TRANSITION_DURATION);
    }

    function swipteTo(slideType, e) {
        var $targetPage = $activePage[slideType]('.page');
        $targetPage.length && (location.hash = '#' + $targetPage.attr('id'));
    }

    return {
        init: function () {

            //初始化显示第一页
            $activePage = $('#page-1');
            $activePage.addClass('page--active');

            $(window).on('hashchange', function (e) {
                var hash = location.hash;
                if (!hash) hash = '#page-1';
                slide(hash.substring(1));
            });

            //初始化手势滑动
            var container = document.getElementById('container'),
                mc = new Hammer.Manager(container),
                Swipe = new Hammer.Swipe();

            mc.add(Swipe);
            mc.on('swipeleft', function (e) {
                swipteTo('next', e);
            });
            mc.on('swiperight', function (e) {
                swipteTo('prev', e);
            });

            location.hash = '#page-1';
        }
    }
})();