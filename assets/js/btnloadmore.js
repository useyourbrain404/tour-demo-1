(function ($) {
  'use strict';

  $.fn.btnLoadmore = function (options) {
    var defaults = {
      showItem: 6,
      whenClickBtn: 3,
      textBtn: 'Load More',
      classBtn: 'tp-btn-load-more',
      setGrid: ''
    };

    var settings = $.extend(defaults, options);

    return this.each(function () {
      var $this = $(this);
      var items = $this.children();
      var totalItems = items.length;

      if (totalItems <= settings.showItem) {
        return;
      }

      items.slice(settings.showItem).hide();

      var btnWrapper = $('<div class="tp-loadmore-btn-wrapper text-center mt-30"><button type="button" class="' + settings.classBtn + '">' + settings.textBtn + '</button></div>');
      $this.after(btnWrapper);

      btnWrapper.find('button').on('click', function (e) {
        e.preventDefault();
        var hiddenItems = items.filter(':hidden');
        hiddenItems.slice(0, settings.whenClickBtn).fadeIn(300);

        if (items.filter(':hidden').length === 0) {
          btnWrapper.fadeOut(200);
        }
      });
    });
  };
})(jQuery);
