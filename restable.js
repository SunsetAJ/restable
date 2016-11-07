(function($){

  $.fn.restable = function( options ){

    var settings = $.extend({
      caption : false,
      caption_text : ''
    }, options);

    var t = this;
    var th = t.find('thead');
    var tb = t.find('tbody');
    var t_caption;

    var t_c = $('body').find('[id*="restable-table-"]').length;
    t_c = t_c + 1;

    var nt = $('<div id="restable-table-' + t_c + '" class="table"><div class="thead" /><div class="tbody" /></div>');
    nt.insertAfter(t);
    var nt_obj = $('#restable-table-' + t_c);

    caption();

    createStructure(th);
    createStructure(tb);

    function createStructure(obj){
      obj.find('tr').each(function(){
        var r = $('<ul class="tr" />');
        var this_td = $(this).find('td');
        var elem = obj.prop('nodeName');
        elem = elem.toLowerCase();

        nt_obj.find('.' + elem).append(r);
        var count = nt_obj.find('.' + elem + ' .tr').length;

        this_td.each(function(){
          var content = $(this).text();
          var ntd = $('<li class="td">' + content + '</li>');
          nt_obj.find('.' + elem + ' .tr:nth-of-type(' + count + ')').append(ntd);
        });

        count++;

      });
    }

    function checktable(){

    }

    function caption(){
      if (settings.caption == true && settings.caption_text == ''){
        t_caption = t.find('caption').text();
      }
      else if (settings.caption == true && settings.caption_text != ''){
        t_caption = settings.caption_text;
      }
      var tc = $('<h2 class="caption">' + t_caption + '</h2>');
      tc.insertBefore('#restable-table-' + t_c + ' .thead');
    }


  };

}(jQuery));
