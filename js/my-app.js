// Initialize your app
var myApp = new Framework7({
  pushState : true,
  pushStateSeparator: "",
});

// Export selectors engine
var $$ = Dom7;

$$('.open-left-panel').on('click', function (e) {
  myApp.openPanel('left');
});
$$('.open-right-panel').on('click', function (e) {
  myApp.openPanel('right');
});
$$('.panel-close').on('click', function (e) {
  myApp.closePanel();
});


var mySwiperVertical = myApp.swiper('.swiper-vertical', {
  pagination:'.swiper-vertical .swiper-pagination',
  direction: 'vertical'
});


// var infiniteLoading = false;
// // show inline infinite progressbar
// $$('.show-infinite').on('click', function () {
//   app.progressbar.show(app.theme === 'md' ? 'yellow' : 'blue');
//   setTimeout(function () {
//     infiniteLoading = false;
//     app.progressbar.hide();
//   }, 3000);
// });

// // show root infinite progressbar
// $$('.show-infinite-root').on('click', function () {
//   app.progressbar.show('multi');
//   setTimeout(function () {
//     infiniteLoading = false;
//     app.progressbar.hide();
//   }, 3000);
// });

// Add view
var mainView = myApp.addView('.view-main', {
    // 是否使用动态导航栏
    dynamicNavbar: true ,
    animateNavBackIcon: true,
 
});


// myApp.onPageInit('contact', function (page) {
//     $$('.create-page').on('click', function () {
//         createContentPage();
//     });
// });



// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>返回</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
    return;
    
}