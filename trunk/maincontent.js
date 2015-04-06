jQuery(document).ready(function ($) {
$('#ar1web-hide').sociallocker({
theme: "flat",
locker: {close: false,timer: 400 },
buttons: {order: ["facebook-like", "twitter-tweet", "google-plus"]},
text: {
header: "المحتوى مغلق",
message: "عزيزي المشاهد لكي ترى المحتوى، إدعمنا بأحد الأزرار التالية"
},
facebook: { like: {title: "سأعجب بها"}},
twitter: {tweet: {title: "سأغرد تغريدة"}},
google: {plus: {title: "+ بكل سرور"}}
});
});
function labelthumbs(json){document.write('<ul class="label_with_thumbs">');for(var i=0;i<numposts;i++){var entry=json.feed.entry[i];var posttitle=entry.title.$t;var posturl;if(i==json.feed.entry.length)break;for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='replies'&&entry.link[k].type=='text/html'){var commenttext=entry.link[k].title;var commenturl=entry.link[k].href;}
if(entry.link[k].rel=='alternate'){posturl=entry.link[k].href;break;}}var thumburl;try{thumburl=entry.media$thumbnail.url;}catch(error)
{s=entry.content.$t;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){thumburl=d;}else thumburl='http://2.bp.blogspot.com/_IKigl6y9hFA/TMdcT1jzo5I/AAAAAAAAAHA/hAKuT9rJpFU/noimage.jpg';}
var postdate=entry.published.$t;var cdyear=postdate.substring(0,4);var cdmonth=postdate.substring(5,7);var cdday=postdate.substring(8,10);var monthnames=new Array();monthnames[1]="Jan";monthnames[2]="Feb";monthnames[3]="Mar";monthnames[4]="Apr";monthnames[5]="May";monthnames[6]="Jun";monthnames[7]="Jul";monthnames[8]="Aug";monthnames[9]="Sep";monthnames[10]="Oct";monthnames[11]="Nov";monthnames[12]="Dec";document.write('<li class="clearfix">');if(showpostthumbnails==true)
document.write('<a href="'+posturl+'" target ="_top"><img class="label_thumb" src="'+thumburl+'"/></a>');document.write('<a href="'+posturl+'" target ="_top">'+posttitle+'</a><br>');if("content"in entry){var postcontent=entry.content.$t;}
else
if("summary"in entry){var postcontent=entry.summary.$t;}
else var postcontent="";var re=/<\S[^>]*>/g;postcontent=postcontent.replace(re,"");if(showpostsummary==true){if(postcontent.length<numchars){document.write('');document.write(postcontent);document.write('');}
else{document.write('');postcontent=postcontent.substring(0,numchars);var quoteEnd=postcontent.lastIndexOf(" ");postcontent=postcontent.substring(0,quoteEnd);document.write(postcontent+'...');document.write('');}}
var towrite='';var flag=0;document.write('<br>');if(showpostdate==true){towrite=towrite+monthnames[parseInt(cdmonth,10)]+'-'+cdday+' - '+cdyear;flag=1;}
if(showcommentnum==true)
{if(flag==1){towrite=towrite+' | ';}
if(commenttext=='1 Comments')commenttext='1 Comment';if(commenttext=='0 Comments')commenttext='No Comments';commenttext='<a href="'+commenturl+'" target ="_top">'+commenttext+'</a>';towrite=towrite+commenttext;flag=1;;}
if(displaymore==true)
{if(flag==1)towrite=towrite+' | ';towrite=towrite+'<a href="'+posturl+'" class="url" target ="_top">More آ»</a>';flag=1;;}
document.write(towrite);document.write('</li>');if(displayseparator==true)
if(i!=(numposts-1))
document.write('');}document.write('</ul>');}
$.fn.infiniteCarousel = function () {
    function repeat(str, num) {
        return new Array( num + 1 ).join( str );
    }
  
    return this.each(function () {
        var $wrapper = $('> div', this).css('overflow', 'hidden'),
            $slider = $wrapper.find('> ul'),
            $items = $slider.find('> li'),
            $single = $items.filter(':first'),
            
            singleWidth = $single.outerWidth(), 
            visible = Math.ceil($wrapper.innerWidth() / singleWidth), // note: doesn't include padding or border
            currentPage = 1,
            pages = Math.ceil($items.length / visible);            

            if (($items.length % visible) != 0) {
            $slider.append(repeat('<li class="empty" />', visible - ($items.length % visible)));
            $items = $slider.find('> li');
        }

        $items.filter(':first').before($items.slice(- visible).clone().addClass('cloned'));
        $items.filter(':last').after($items.slice(0, visible).clone().addClass('cloned'));
        $items = $slider.find('> li'); 
        
        $wrapper.scrollLeft(singleWidth * visible);
        
            function gotoPage(page) {
            var dir = page < currentPage ? -1 : 1,
                n = Math.abs(currentPage - page),
                left = singleWidth * dir * visible * n;
            
            $wrapper.filter(':not(:animated)').animate({
                scrollLeft : '+=' + left
            }, 500, function () {
                if (page == 0) {
                    $wrapper.scrollLeft(singleWidth * visible * pages);
                    page = pages;
                } else if (page > pages) {
                    $wrapper.scrollLeft(singleWidth * visible);
                    // reset back to start position
                    page = 1;
                } 
                currentPage = page;
            });                         
            return false;
        }
        
        $wrapper.after('<a class="icon-angle-left"></a><a class="icon-angle-right"></a>');
        
          $('a.icon-angle-left', this).click(function () {
            return gotoPage(currentPage - 1);                
        });
        
        $('a.icon-angle-right', this).click(function () {
            return gotoPage(currentPage + 1);
        });
        
        $(this).bind('goto', function (event, page) {
            gotoPage(page);
        });
    });  
};
$(document).ready(function () {
  $('.infiniteCarousel').infiniteCarousel();
});
var gfeedfetcher_loading_image="http://www.google.com/images/icons/ui/gprofile_button-16.png";google.load("feeds","1");function gfeedfetcher(c,a,b){this.linktarget=b||"";this.feedlabels=[];this.feedurls=[];this.feeds=[];this.feedsfetched=0;this.feedlimit=5;this.showoptions="";this.sortstring="date";document.write('<div id="'+c+'" class="'+a+'"></div>');this.feedcontainer=document.getElementById(c);this.itemcontainer="<li>"}gfeedfetcher.prototype.addFeed=function(b,a){this.feedlabels[this.feedlabels.length]=b;this.feedurls[this.feedurls.length]=a};gfeedfetcher.prototype.filterfeed=function(b,a){this.feedlimit=b;if(typeof a!="undefined"){this.sortstring=a}};gfeedfetcher.prototype.displayoptions=function(a){this.showoptions=a};gfeedfetcher.prototype.setentrycontainer=function(a){this.itemcontainer="<"+a.toLowerCase()+">"};gfeedfetcher.prototype.init=function(){this.feedsfetched=0;this.feeds=[];this.feedcontainer.innerHTML='<img src="'+gfeedfetcher_loading_image+'" /> Loading news...';var a=this;for(var b=0;b<this.feedurls.length;b++){var c=new google.feeds.Feed(this.feedurls[b]);var d=(this.feedlimit<=this.feedurls.length)?1:Math.floor(this.feedlimit/this.feedurls.length);if(this.feedlimit%this.feedurls.length>0&&this.feedlimit>this.feedurls.length&&b==this.feedurls.length-1){d+=(this.feedlimit%this.feedurls.length)}c.setNumEntries(d);c.load(function(e){return function(f){a._fetch_data_as_array(f,e)}}(this.feedlabels[b]))}};gfeedfetcher._formatdate=function(a,c){var d=new Date(a);var b=(c.indexOf("datetime")!=-1)?d.toLocaleString():(c.indexOf("date")!=-1)?d.toLocaleDateString():(c.indexOf("time")!=-1)?d.toLocaleTimeString():"";return"<span class='datefield'>"+b+"</span>"};gfeedfetcher._sortarray=function(a,b){var b=(b=="label")?"ddlabel":b;if(b=="title"||b=="ddlabel"){a.sort(function(e,d){var g=e[b].toLowerCase();var f=d[b].toLowerCase();return(g<f)?-1:(g>f)?1:0})}else{try{a.sort(function(e,d){return new Date(d.publishedDate)-new Date(e.publishedDate)})}catch(c){}}};gfeedfetcher.prototype._fetch_data_as_array=function(b,a){var d=(!b.error)?b.feed.entries:"";if(d==""){alert("Google Feed API Error: "+b.error.message)}for(var c=0;c<d.length;c++){b.feed.entries[c].ddlabel=a}this.feeds=this.feeds.concat(d);this._signaldownloadcomplete()};gfeedfetcher.prototype._signaldownloadcomplete=function(){this.feedsfetched+=1;if(this.feedsfetched==this.feedurls.length){this._displayresult(this.feeds)}};gfeedfetcher.prototype._displayresult=function(a){var e=(this.itemcontainer=="<li>")?"<ul>\n":"";gfeedfetcher._sortarray(a,this.sortstring);for(var c=0;c<a.length;c++){var d='<a href="'+a[c].link+'" target="'+this.linktarget+'" class="titlefield">'+a[c].title+"</a>";var b=/label/i.test(this.showoptions)?'<span class="labelfield">['+this.feeds[c].ddlabel+"]</span>":" ";var g=gfeedfetcher._formatdate(a[c].publishedDate,this.showoptions);var f=/description/i.test(this.showoptions)?"<br />"+a[c].content:/snippet/i.test(this.showoptions)?"<br />"+a[c].contentSnippet:"";e+=this.itemcontainer+d+" "+b+" "+g+"\n"+f+this.itemcontainer.replace("<","</")+"\n\n"}e+=(this.itemcontainer=="<li>")?"</ul>":"";this.feedcontainer.innerHTML=e};
var gfeedfetcher_loading_image="indicator.gif";function gfeedrssticker(d,b,a,c){this.tickerid=d;this.delay=parseInt(a);this.mouseoverBol=0;this.itemsperpage=1;this.messagepointer=0;gfeedfetcher.call(this,d,b,c);this.itemcontainer="<div>";this.tickerdiv=document.getElementById(d)}gfeedrssticker.prototype=new gfeedfetcher;gfeedrssticker.prototype.constructor=gfeedrssticker;gfeedrssticker.prototype._displayresult=null;gfeedrssticker.prototype.entries_per_page=function(a){this.itemsperpage=a};gfeedrssticker.prototype._signaldownloadcomplete=function(){this.feedsfetched+=1;if(this.feedsfetched==this.feedurls.length){this._initscroller(this.feeds)}};gfeedrssticker.prototype._initscroller=function(a){var c=this;gfeedfetcher._sortarray(a,this.sortstring);this.itemsperpage=(this.itemsperpage>=a.length)?1:this.itemsperpage;var b=a.slice(this.messagepointer,this.itemsperpage);this.tickerdiv.innerHTML=formatrssmessage(b,this.showoptions,this.itemcontainer,this.linktarget);this.tickerdiv.onmouseover=function(){c.mouseoverBol=1};this.tickerdiv.onmouseout=function(){c.mouseoverBol=0};this.messagepointer=this.itemsperpage;if(window.attachEvent){window.attachEvent("onunload",function(){c.tickerdiv.onmouseover=c.tickerdiv.onmouseout=null})}setTimeout(function(){c._rotatemessage()},this.delay)};function formatrssmessage(d,b,f,g){var c=(f=="<li>")?"<ul>\n":"";for(var e=0;e<d.length;e++){var h='<a href="'+d[e].link+'" target="'+g+'" class="titlefield">'+d[e].title+"</a>";var j=/label/i.test(b)?'<span class="labelfield">['+d[e].ddlabel+"]</span>":" ";var k=gfeedfetcher._formatdate(d[e].publishedDate,b);var a=/description/i.test(b)?"<br />"+d[e].content:/snippet/i.test(b)?"<br />"+d[e].contentSnippet:"";c+=f+h+" "+j+" "+k+"\n"+a+f.replace("<","</")+"\n\n"}c+=(f=="<li>")?"</ul>\n":"";return c}gfeedrssticker.prototype._rotatemessage=function(){var b=this;if(this.mouseoverBol==1){setTimeout(function(){b._rotatemessage()},100)}else{var a=this.feeds.slice(this.messagepointer,this.messagepointer+this.itemsperpage);this.tickerdiv.innerHTML=formatrssmessage(a,this.showoptions,this.itemcontainer,this.linktarget);this.messagepointer=(this.messagepointer+this.itemsperpage>this.feeds.length-1)?0:this.messagepointer+this.itemsperpage;setTimeout(function(){b._rotatemessage()},this.delay)}};
