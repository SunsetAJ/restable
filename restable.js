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

    if (settings.caption == true){
      caption();
    }

    if (th.length < 1){
      noStruct(t);
    }
    else{
      createStructure(th);
      createStructure(tb);
    }

    function createStructure(obj){
      obj.find('tr').each(function(){
        var r = $('<ul class="tr" />');
        var this_td = $(this).find('td');
        var elem = obj.prop('nodeName');
        elem = elem.toLowerCase();

        nt_obj.find('.' + elem).append(r);
        constructRow(this_td, '.' + elem);
      });
    }

    function noStruct(obj){
      obj.find('tr').each(function(){
        var r = $('<ul class="tr" />');
        if ($(this).children().is("th")){
          var this_th = $(this).find('th');
          nt_obj.find('.thead').append(r);
          constructRow(this_th, '.thead');
        }
        else if ($(this).children().is('td')){
          var this_td = $(this).find('td');
          nt_obj.find('.tbody').append(r);
          constructRow(this_td, '.tbody');
        }
      });
    }

    function caption(){
      if (settings.caption_text == ''){
        t_caption = t.find('caption').text();
      }
      else if (settings.caption_text != ''){
        t_caption = settings.caption_text;
      }
      var tc = $('<h2 class="caption">' + t_caption + '</h2>');
      tc.insertBefore('#restable-table-' + t_c + ' .thead');
    }

    function constructRow(td, section){
      var count = nt_obj.find('' + section + ' .tr').length;
      td.each(function(){
        var content = $(this).text();
        var ntd = $('<li class="td">' + content + '</li>');
        nt_obj.find('' + section + ' .tr:nth-of-type(' + count + ')').append(ntd);
      });
      count++;
    }


  };

}(jQuery));
