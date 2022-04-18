/* HIVEconsole UI : Sangho Kim / GCP WD_WP Team. */

/* HTML5 Placeholder jQuery Plugin - v2.3.1  == Copyright (c)2015 Mathias Bynens */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof module&&module.exports?require("jquery"):jQuery)}(function(a){function b(b){var c={},d=/^jQuery\d+$/;return a.each(b.attributes,function(a,b){b.specified&&!d.test(b.name)&&(c[b.name]=b.value)}),c}function c(b,c){var d=this,f=a(this);if(d.value===f.attr(h?"placeholder-x":"placeholder")&&f.hasClass(n.customClass))if(d.value="",f.removeClass(n.customClass),f.data("placeholder-password")){if(f=f.hide().nextAll('input[type="password"]:first').show().attr("id",f.removeAttr("id").data("placeholder-id")),b===!0)return f[0].value=c,c;f.focus()}else d==e()&&d.select()}function d(d){var e,f=this,g=a(this),i=f.id;if(!d||"blur"!==d.type||!g.hasClass(n.customClass))if(""===f.value){if("password"===f.type){if(!g.data("placeholder-textinput")){try{e=g.clone().prop({type:"text"})}catch(j){e=a("<input>").attr(a.extend(b(this),{type:"text"}))}e.removeAttr("name").data({"placeholder-enabled":!0,"placeholder-password":g,"placeholder-id":i}).bind("focus.placeholder",c),g.data({"placeholder-textinput":e,"placeholder-id":i}).before(e)}f.value="",g=g.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id",g.data("placeholder-id")).show()}else{var k=g.data("placeholder-password");k&&(k[0].value="",g.attr("id",g.data("placeholder-id")).show().nextAll('input[type="password"]:last').hide().removeAttr("id"))}g.addClass(n.customClass),g[0].value=g.attr(h?"placeholder-x":"placeholder")}else g.removeClass(n.customClass)}function e(){try{return document.activeElement}catch(a){}}var f,g,h=!1,i="[object OperaMini]"===Object.prototype.toString.call(window.operamini),j="placeholder"in document.createElement("input")&&!i&&!h,k="placeholder"in document.createElement("textarea")&&!i&&!h,l=a.valHooks,m=a.propHooks,n={};j&&k?(g=a.fn.placeholder=function(){return this},g.input=!0,g.textarea=!0):(g=a.fn.placeholder=function(b){var e={customClass:"placeholder"};return n=a.extend({},e,b),this.filter((j?"textarea":":input")+"["+(h?"placeholder-x":"placeholder")+"]").not("."+n.customClass).not(":radio, :checkbox, [type=hidden]").bind({"focus.placeholder":c,"blur.placeholder":d}).data("placeholder-enabled",!0).trigger("blur.placeholder")},g.input=j,g.textarea=k,f={get:function(b){var c=a(b),d=c.data("placeholder-password");return d?d[0].value:c.data("placeholder-enabled")&&c.hasClass(n.customClass)?"":b.value},set:function(b,f){var g,h,i=a(b);return""!==f&&(g=i.data("placeholder-textinput"),h=i.data("placeholder-password"),g?(c.call(g[0],!0,f)||(b.value=f),g[0].value=f):h&&(c.call(b,!0,f)||(h[0].value=f),b.value=f)),i.data("placeholder-enabled")?(""===f?(b.value=f,b!=e()&&d.call(b)):(i.hasClass(n.customClass)&&c.call(b),b.value=f),i):(b.value=f,i)}},j||(l.input=f,m.value=f),k||(l.textarea=f,m.value=f),a(function(){a(document).delegate("form","submit.placeholder",function(){var b=a("."+n.customClass,this).each(function(){c.call(this,!0,"")});setTimeout(function(){b.each(d)},10)})}),a(window).bind("beforeunload.placeholder",function(){var b=!0;try{"javascript:void(0)"===document.activeElement.toString()&&(b=!1)}catch(c){}b&&a("."+n.customClass).each(function(){this.value=""})}))});

$(function(){ HiveUI.init(); });

HiveUI={
    init:function(){for(var n in this){for(var f in this[n]){ if(f!=='close'){ this[n][f](); }}}
    },
    inits:{
        nav:function(){
            var $D = $(document), $EC = $("body"),$E = $("#HIVEnav");
            if (!$E.length) return !1;
            var $E1="#HIVEnav .dep1", $E1s="#HIVEnav .dep1 li", $E2="#HIVEnav .dep2", $A1="#HIVEnav .dep1 a",$A2="#HIVEnav .dep2 a",$T="#HIVEhead .nav_toggle",$B="#HIVEnav .nav_back",$TIP="#HIVEnav .nav_tooltip",gid,focusRemove;
            var show = setTimeout(function(){
                $E.addClass('dep1on');
            },800);
            clearTimeout(show);
            var remove = setTimeout(function(){
                if(!$(this).hasClass("more")) $E.removeClass('dep2on');
            },300);
            $D.on({
                "mouseenter":function(){
                    clearTimeout(show);
                    clearTimeout(remove);
                    show = setTimeout(function(){
                        $E.addClass('dep1on');
                    },800);
                },
                "keydown":function(e){
                    e.keyCode==39 && $E.addClass("dep1on");
                    e.keyCode==37 && $E.removeClass("dep2on");
                }
            },$E1).on({
                "click":function(){
                    var i=$(this).index(),$this=$(this);
                    clearTimeout(show);
                    clearTimeout(remove);
                    show = setTimeout(function(){
                        $E.addClass('dep1on');
                        if($(this).hasClass("more")) {
                            $E.addClass("dep2on");
                        }
                    },1);
                    remove = setTimeout(function(){
                        if(!$this.hasClass("more")) $E.removeClass('dep2on');
                    },1);
                    clearTimeout(focusRemove);
                    $($E1s).removeClass('_f');
                    focusRemove = setTimeout(function () {
                        if($this.hasClass("more")){
                            $this.addClass('_f');
                            $E.addClass("dep2on");
                            if($($E1s).hasClass('_f')&&$(">a",$this)[0].hash.length) {
                                gid = $(">a", $this)[0].hash;
                                $(".dep2 dl").hide();
                                $(gid, ".dep2").show();
                            }
                        }
                    },1);
                },
                "mouseenter":function(){
                    if($EC.hasClass("navFixOn")&&!$(this).hasClass("more")) return;
                    var i=$(this).index(),$this=$(this),s=300,t=$this.offset().top-($E.hasClass("gnb_fixed")?$(window).scrollTop()+3:$(window).scrollTop()+4);
                    clearTimeout(show);
                    clearTimeout(remove);
                    if($("body").hasClass("navFixOn")){s=100}
                    show = setTimeout(function(){
                        $E.addClass('dep1on');
                        if($(this).hasClass("more")) {
                            $E.addClass("dep2on");
                        }
                    },800);
                    remove = setTimeout(function(){
                        if(!$this.hasClass("more")) $E.removeClass('dep2on');
                    },300);
                    clearTimeout(focusRemove);
                    $($E1s).removeClass('_f');
                    if($EC.hasClass("navFixOn")) $($TIP).addClass("on").css({'top':t}).text($(this).text());
                    if($E.hasClass('dep1on')){
                        focusRemove = setTimeout(function () {
                            if($this.hasClass("more")){
                                $this.addClass('_f');
                                $E.addClass("dep2on");
                                if($($E1s).hasClass('_f')&&$(">a",$this)[0].hash.length) {
                                    gid = $(">a", $this)[0].hash;
                                    $(".dep2 dl").hide();
                                    $(gid, ".dep2").show();
                                }
                            }
                        },s);
                    }else{
                        focusRemove = setTimeout(function () {
                            if($this.hasClass("more")){
                                $this.addClass('_f');
                                $E.addClass("dep2on");
                                if($($E1s).hasClass('_f')&&$(">a",$this)[0].hash.length) {
                                    gid = $(">a", $this)[0].hash;
                                    $(".dep2 dl").hide();
                                    $(gid, ".dep2").show();
                                }
                            }
                        },900);
                    }
                },
                "mouseleave":function(){
                    var $this=$(this);
                    clearTimeout(show);
                    clearTimeout(remove);
                    clearTimeout(focusRemove);
                    if($EC.hasClass("navFixOn")) $($TIP).removeClass("on");
                    remove = setTimeout(function(){
                        if(!$this.hasClass("more")) $E.removeClass('dep2on');
                    },300);
                },
                "keydown":function(e) {
                    if(e.keyCode == 39){
                        clearTimeout(show);
                        clearTimeout(remove);
                        $E.removeClass("dep2on");
                        $E.addClass("dep1on");
                        $(this).hasClass("more") && $E.addClass("dep2on");
                    }
                }
            },$E1s).on({
                "mouseenter":function(){
                    if($EC.hasClass("navFixOn")) return;
                    clearTimeout(show);
                    clearTimeout(remove);
                    clearTimeout(focusRemove);
                    $E.addClass("dep1on dep2on");
                    $($E1s).removeClass('_f');
                }
            }, $E2).on({
                "click":function(e) {
                    $("html,body").scrollTop(0);
                    if (this.hash) e.preventDefault();
                    $($A1).removeClass("on");
                    $(this).addClass("on");
                }
            },$A1).on({
                "click":function(e) {
                    gid="#"+$(this).closest("dl").attr("id");
                    $("html,body").scrollTop(0);
                    if (this.hash) e.preventDefault();
                    if(!$(this).is("[target='_blank']")){
                        $($A1).removeClass("on");
                        $($A2).removeClass("on");
                        $(".dep1 [href='"+gid+"']").addClass("on");
                        $(this).addClass("on");
                    }
                    var url=this.hash;
                    if(!url){
                        $("#HIVEframe").attr("src",this.href);
                    }
                }
            },$A2).on({
                "click":function(e) {
                    $EC.toggleClass("navFixOn");
                    $E.toggleClass("dep1on dep2on");
                },
                "mouseenter":function(){
                    if($EC.hasClass("navFixOn")) return;
                    clearTimeout(show);
                    clearTimeout(remove);
                    clearTimeout(focusRemove);
                    $E.removeClass("dep1on dep2on");
                    $($E1s).removeClass('_f');
                }
            },$T).on({
                "click":function(e) {
                    if($EC.hasClass("navFixOn")) return;
                    $E.removeClass("dep1on dep2on");
                },
                "mouseenter":function(){
                    if($EC.hasClass("navFixOn")) return;
                    clearTimeout(show);
                    clearTimeout(remove);
                    clearTimeout(focusRemove);
                    $E.removeClass("dep1on dep2on");
                    $($E1s).removeClass('_f');
                }
            },$B).on({
                "mouseenter":function(){
                    $($TIP).addClass('on');
                },
                "mouseleave":function(){
                    $($TIP).removeClass('on');
                }
            },$TIP);
        },
        placeholder:function(){
            $('input, textarea').placeholder();
        },
        suggest:function(){
            var $E = $(".js_suggest");
            if (!$E.length) return !1;
            var remove = setTimeout(function(){ $E.removeClass("focusin suggest_on"); },300);
            clearTimeout(remove);
            $E.each(function (i) {
                var $this = $(this), $E1 = $("input",this),$E2 = $("a",this);
                $E1.on({
                    'focusin':function(){
                        $this.addClass("focusin");
                        $(this).val().length && $this.addClass("suggest_on");
                    },
                    'focusout':function(){
                        remove = setTimeout(function(){
                            $this.removeClass("focusin suggest_on");
                        },300);
                    },
                    'keyup':function(){
                        $(this).val().length ? $this.addClass("suggest_on") : $this.removeClass("suggest_on");
                    }
                });
                $E2.on({
                    'click':function(){
                        $this.removeClass("focusin suggest_on");
                    },
                    'focusin':function(){
                        clearTimeout(remove);
                        $this.addClass("suggest_on");
                    },
                    'focusout':function(){
                        var i= $E2.index(this);
                        i==$E2.length-1 && $this.removeClass("focusin suggest_on");
                    }
                });
            });
        },
        tab:function(){
            var $E = $(".js_tab");
            if (!$E.length) return !1;
            $E.each(function(){
                var $E1 = $("a",this);
                $E1.click(function (e) {
                    e.preventDefault();
                    var $T = $(this.hash),$Ps=$(this).parent().siblings(),$P=$(this).parent();
                    $Ps.removeClass("on");
                    $E1.removeClass("on");
                    $P.addClass("on");
                    $(this).addClass("on");
                    $T.addClass("on").siblings(".tab_body").removeClass("on");
                    HiveUI.autoHeight.on();
                });
            });
        },
        myzone:function(){
            var $E = $(".my_zone [class^='ibtn_']"),$E1 = $(".my_zone .dep1 a,.my_zone .list_app a"),$G=$(".my_zone .select"),$A = $(".my_zone ul a"),a=[];
            if (!$E.length) return !1;
            $E.on({
                'click ':function(e){
                    var $P=$(this).parent(), $S=$P.siblings(), $C=$(this).siblings("ul");
                    var remove = setTimeout(function(){
                        $S.removeClass('on');
                    },100);
                    $(".gmenus .dep2").css({'left':$(".gmenus .dep1").width()});
                    if($P.hasClass("on")){
                        $P.removeClass("on");
                    }else{
                        $(".my_zone div, .my_zone li").removeClass('on');
                        $P.addClass("on");
                    }
                    a=[];

                    $.each($(".dep1",$P).find(":last-child"),function (i,e) {
                        a.push(e);
                    });
                },
            });
            $E1.on({
                'focusin mouseenter':function(e){
                    var $P=$(this).parent(), $S=$P.siblings(), $C=$(this).siblings("ul");
                    $S.removeClass('on');
                    $P.addClass("on");
                    $C.css({'left':$P.outerWidth()});
                },
                'focusout mouseleave':function(e){
                    $(this)[0] == a[a.length-1] && $(".my_zone div, .my_zone li").removeClass('on');
                }
            });
            $(".my_zone").on({
                'mouseleave':function(e) {
                    $(".my_zone div, .my_zone dl, .my_zone li, .my_zone button").removeClass('on');
                }
            });
            $G.on({
                'click':function(e){
                    $(".my_zone div, .my_zone li").removeClass('on');
                }
            });
            $A.on({
                'click':function(e){
                    var $P=$(this).parent(), $S=$P.siblings(), $C=$(this).siblings("ul");
                    $(".my_zone li").removeClass('on');
                    $S.removeClass('on');
                    $P.addClass("on");
                }
            });
        },
        toggle:function(){
            var $E = $(".js_toggle"),a=[];
            if (!$E.length) return !1;
            $.each($E,function (i,e) {
                var id=this.hash||$(this).data("toggleTarget")||$(".toggle_body").eq(i),p=$(this).data("parent"),$P=$(this).closest(p);
                $.each($(id).find(":last-child"),function (i,e) {
                    a.push(e);
                });
                $(this).click(function(e){
                    e.preventDefault();
                    $(this).addClass("on");
                    $P.hasClass("on")? $P.removeClass("on") : $P.addClass("on");
                    if($(this).data("toggleTarget")){
                        if(id.indexOf("+")==0){
                            $(id,this).hasClass('on') ? ($(this).removeClass("on"), $(id,this).removeClass("on")) : ($(this).addClass("on"), $(id,this).addClass("on"));
                        }else{
                            $(id).hasClass('on') ? ($(this).removeClass("on"), $(id).removeClass("on")) : ($(this).addClass("on"), $(id).addClass("on"));
                        }
                    }else{
                        $(id).hasClass('on') ? ($(this).removeClass("on"), $(id).removeClass("on")) : ($(this).addClass("on"), $(id).addClass("on"));
                    }
                    HiveUI.autoHeight.on();
                });
            });
        },
        toggles:function(){
            var $E = $(".js_toggles");
            if (!$E.length) return !1;
            $.each($($E.data("togglesBtn"),$E),function (i,e) {
                var $C = $($E.data("togglesTarget"),$E);
                $(this).click(function(e){
                    e.preventDefault();
                    $(this).hasClass('on') ? $(this).removeClass("on") : $(this).addClass("on");
                    $C.eq(i).hasClass('on') ? $C.eq(i).removeClass("on") : $C.eq(i).addClass("on");
                    HiveUI.autoHeight.on();
                });
            });

        },
        tooltip:function(){
            var $D=$(document),$E=".js_tooltip",tooltipBox=".tooltip_box";
            if (!$($E).length) return !1;
            if(!$('.tooltip_box').length){
                $("body").append("<div data-tooltip-dir='bottom' class='tooltip_box'/>");
            }
            $D.on({
                'click':function(e){
                    (this.hash||$(this).attr("href")=="#")&&e.preventDefault();
                },
                'focusin mouseenter':function(){
                    var $this=$(this),
                        x=$(this).offset().left, x2=(this.offsetWidth+x)+10, x3=$(window).outerWidth()-(this.offsetWidth+x), x4=$(window).outerWidth()-x+10, x5=x+($(this).outerWidth()/2), y=$(this).offset().top+$(this).outerHeight(), y2=$(this).offset().top-$(tooltipBox).outerHeight(), $E1=$(this).next(".tooltip_text"),txt=$E1.html(),dir=$(this).data("tooltipDir")||"bottom",styles=$(this).data("tooltipStyle");
                    styles==undefined&&(styles={});
                    $(tooltipBox).removeAttr("style").html(txt);
                    if(dir=='bottom'||dir==undefined) $(tooltipBox).attr("data-tooltip-dir",dir).css(styles).css({"left":x,"top":y+5}).fadeIn();
                    if(dir=='right') $(tooltipBox).attr("data-tooltip-dir",dir).css(styles).css({"left":x2}).fadeIn(), setTimeout(function(){ var y2=$this.offset().top+($this.outerHeight()/2)-($(tooltipBox).outerHeight()/2);$(tooltipBox).css({"top":y2})},10);
                    if(dir=='right_top') $(tooltipBox).attr("data-tooltip-dir",dir).css(styles).css({"left":x2}).fadeIn(), setTimeout(function(){ var y2=$this.offset().top;$(tooltipBox).css({"top":y2})},10);
                    if(dir=='bottom_center') $(tooltipBox).attr("data-tooltip-dir",dir).css(styles).css({"left":x5,"top":y+5}).fadeIn(),setTimeout(function(){var y2=$this.offset().top-$(tooltipBox).outerHeight(),l=x5-($(tooltipBox).width()/2)-10;$(tooltipBox).css({"left":l});},10);
                    if(dir=='bottom_right') $(tooltipBox).attr("data-tooltip-dir",dir).css(styles).css({"left":"auto","right":x3,"top":y+5}).fadeIn();
                    if(dir=='left') $(tooltipBox).attr("data-tooltip-dir",dir).css(styles).css({"left":"auto","right":x4}).fadeIn(), setTimeout(function(){ var y2=$this.offset().top+($this.outerHeight()/2)-($(tooltipBox).outerHeight()/2);$(tooltipBox).css({"top":y2})},10);
                    if(dir=='left_top') $(tooltipBox).attr("data-tooltip-dir",dir).css(styles).css({"left":"auto","right":x4}).fadeIn(), setTimeout(function(){ var y2=$this.offset().top;$(tooltipBox).css({"top":y2})},10);
                    if(dir=='top') $(tooltipBox).attr("data-tooltip-dir",dir).css(styles).css({"left":x}).fadeIn(), setTimeout(function(){ var y2=$this.offset().top-$(tooltipBox).outerHeight();$(tooltipBox).css({"top":y2-5})},10);
                    if(dir=='top_center') $(tooltipBox).attr("data-tooltip-dir",dir).css(styles).css({"left":x5}).fadeIn(), setTimeout(function(){var y2=$this.offset().top-$(tooltipBox).outerHeight(),l=x5-($(tooltipBox).width()/2)-10;$(tooltipBox).css({"top":y2-5,"left":l});console.log('x')},100);
                    if(dir=='top_right') $(tooltipBox).attr("data-tooltip-dir",dir).css(styles).css({"left":"auto","right":x3}).fadeIn(), setTimeout(function(){ var y2=$this.offset().top-$(tooltipBox).outerHeight();$(tooltipBox).css({"top":y2-5})},10);
                },
                'focusout mouseleave':function(){
                    $(tooltipBox).hide();
                }
            },$E);
        },
        widget:function(){
            var $D=$(document),$E=".js_widget",widgetBox=".widget_box";
            if (!$($E).length) return !1;
            var widgetHide=setTimeout(function(){
                    $(widgetBox).hide();
                },200);
            $D.on({
                "mouseenter":function(){
                    var $E1=$(this).siblings(".widget_box"),w=$(window).width(),x=$(this).offset().left+$E1.outerWidth(),y=$(this).outerHeight()+5,styles={};
                    (w<x)&&($E1.addClass("right"),styles={"left":"auto","right":0});
                    clearTimeout(widgetHide);
                    $(widgetBox).hide();
                    $E1.css(styles).css({"top":y}).show();
                },
                "mouseleave":function(){
                    clearTimeout(widgetHide);
                    widgetHide=setTimeout(function(){
                        $(widgetBox).hide();
                    },200);
                }
            },$E).on({
                "mouseenter":function(){
                    clearTimeout(widgetHide);
                },
                "mouseleave":function(){
                    clearTimeout(widgetHide);
                    widgetHide=setTimeout(function(){
                        $(widgetBox).hide();
                    },200);
                }
            },widgetBox);
        },
        tree:function(){
            var $E = $(".js_tree");
            if (!$E.length) return !1;
            var $D=$(document),$E1 = ".js_tree .btn",$E1v=".js_tree .ibtn_toggle",$E2=$(".bt_wrap",$E), $item=$("li",$E);
            var tree = function(e) {
                var $P1=e.closest("li"),$P2=e.closest(".bt_wrap"),$C=$("ul",$P1);
                $E2.removeClass("on");
                $P2.addClass("on");
                $C.length && $P1.hasClass("on") ? $P1.removeClass("on") : $P1.addClass("on");
                HiveUI.autoHeight.on();
            };
            $D.on({
                'click':function(){ tree($(this)); }
            },$E1).on({
                'click':function(){ tree($(this)); }
            },$E1v);
        },
        accTree:function(){
            var $E = $(".js_acctree");
            if (!$E.length) return !1;
            var $E1 = $(".btn",$E),$E1v=$(".ibtn_toggle",$E),$E2=$(".bt_wrap",$E), $item=$("li",$E);
            var tree = function(e) {
                var $P1=e.closest("li"),$P2=e.closest(".bt_wrap"),$C=$("ul",$P1);
                $E2.removeClass("on");
                $("li",$E).removeClass("on");
                $P2.addClass("on");
                $C.length && $P1.hasClass("on") ? $P1.removeClass("on") : $P1.addClass("on");
                HiveUI.autoHeight.on();
            };
            $E1.on({
                'click':function(){ tree($(this)); }
            });
        },
        flyTree:function() {
            var $D=$(document),$B=".js_flyTree",$BG="#flyTreeBg";
            $D.on({
                'click': function (e) {
                    $("#flyTreeBg").remove();
                    $(this).closest(".fly_tree").append("<div id='flyTreeBg' />");
                    e.preventDefault();
                    var id = this.hash;
                    $(this).hasClass('on') ? ($(this).removeClass("on"), $($BG).removeClass("on")) : ($(this).addClass("on"),$($BG).addClass("on"));
                    $(id).hasClass('on') ? $(id).removeClass("on") : $(id).addClass("on");
                }
            },$B).on({
                'click': function (e) {
                    var id=$($B)[0].hash;
                    $($B).hasClass('on') ? ($($B).removeClass("on"), $($BG).removeClass("on")) : ($($B).addClass("on"),$($BG).addClass("on"));
                    $(id).hasClass('on') ? $(id).removeClass("on") : $(id).addClass("on");
                }
            },$BG);
        },
        pmstree:function(){
            var $E = $(".js_pmstree");
            if (!$E.length) return !1;
            var $D=$(document),$E0=".js_pmstree .ibtn_itoggle",$E1 = ".js_pmstree .btn",$E1v=".js_pmstree .ibtn_toggle",$E2=$(".row_wrap",$E), $item=$("li",$E);
            var tit = function(e) {
                var $P1=e.closest("li"),$P1_C=$(".ibtn_itoggle",$P1),$C=$(".dep2",$P1);
                $P1_C.toggleClass("on");
                $C.toggleClass("on");
            };
            var dep = function(e) {
                var $P1=e.closest("li"),$P1_i=e.closest("li").index(),$P2=e.closest(".row_wrap"),$C=$("ul",$P1);
                $C.length && $P1.hasClass("on") ? $P1.removeClass("on") : $P1.addClass("on");
                $(window).trigger("scroll");
            };
            var smr = function(e) {
                e.toggleClass("on");
                $(window).trigger("scroll");
            };
            $D.on({
                'click':function(){ tit($(this)); }
            },$E0).on({
                'click':function(){ dep($(this)); }
            },$E1).on({
                'click':function(){ smr($(this)); }
            },$E1v);
        },
        emoji:function(){
            var $D=$(document),$E=".js_emoji",$C=".emoji_close",emojiBox=".emoji_box";
            if (!$($E).length) return !1;
            $D.on({
                'click':function(e){
                    e.preventDefault();
                    var $this=$(this),x=$(this).offset().left-((274/2)-($(this).outerWidth()/2)), y=($(this).offset().top+$(this).outerHeight());
                    $($E).removeClass("on");
                    $this.addClass("on");
                    $(emojiBox).css({"left":x,"top":y+5}).show();
                }
            },$E).on({
                'click':function(){$($E).removeClass("on");$(emojiBox).hide(); }
            },$C);
        }
    },
    autoHeight:{ // 마크업용
        on:function(){
            var mobileArr = ['iPhone', 'iPad','iPod'];
            for (var word in mobileArr ) {
                if (navigator.userAgent.match(mobileArr [word]) != null) {
                    $("#HIVEframe").attr({'scrolling':'auto'});
                    break;
                }
            }
        }
    },
    searchSelect:{
        on:function (){
            var $E = $(".search_select");
            if (!$E.length) return !1;
            $E.each(function(){
                var $I=$(".inp",this), $B=$(".btn_dropdown",this),$L=$B.siblings(".dropdown_list"),$B1=$(".option",this),i,r;
                var hide=setTimeout(function(){
                    $L.removeClass("on at");
                },100);
                $I.on({
                    'focusin':function(){
                        $(this).addClass("focusin");
                        $(".dropdown_list").removeClass("on");
                        $L.addClass("on");
                    },
                    'focusout':function(){
                        hide = setTimeout(function(){
                            $(this).removeClass("focusin on");
                            $L.removeClass("on");
                        },100);
                    }
                });
                $B.on({
                    'click':function (){
                        i=$B.index(this);
                        $L.hasClass("on") ? $L.removeClass("on") :  $L.addClass("on");
                        h=$L.outerHeight(), wh=$L.offset().top;
                        if (document.body.clientHeight < wh+h) $(this).addClass("at");
                    },
                    'focusin':function (){
                        clearTimeout(hide);
                    }
                });
                $B1.on({
                    'click':function (){
                        r=this.innerText;
                        $I.val(r);
                        $L.removeClass("on");
                    },
                    'focusin':function (){
                        clearTimeout(hide);
                    },
                    'focusout':function(){
                        hide=setTimeout(function(){
                            $L.removeClass("on at");
                        },100);
                    }
                });
            });
        }
    },
    select:{
        on:function (){
            var $E = $(".select");
            if (!$E.length) return !1;
            $E.each(function(){
                var $E1=$(".btn_select",this),$E2=$E1.siblings(".select_list"),$B=$E2.find(".option"),i,r;
                var hide=setTimeout(function(){
                    $E1.removeClass("on at");
                },100);
                $E1.off('click').off('focusin').off('focusout').on({
                    'click':function (){
                        i=$E1.index(this);
                        clearTimeout(hide);
                        $(".btn_select").removeClass("on at");
                        $(this).hasClass("on") || $(this).addClass("on");
                        h1=$E1.outerHeight(),h2=$E2.outerHeight(), posT=Math.floor($E2.offset().top);
                        if (document.body.clientHeight < Math.abs(posT-$(window).scrollTop())+(h1+h2)) $(this).addClass("at");
                    },
                    'focusin':function (){
                        clearTimeout(hide);
                    },
                    'focusout':function (){
                        hide=setTimeout(function(){
                            $E1.removeClass("on at");
                        },100);
                    }
                });
                $B.off('click').off('focusin').off('focusout').on({
                    'click':function (){
                        r=this.innerText;
                        $E1.eq(i).text(r);
                        $E1.removeClass("on");
                    },
                    'focusin':function (){
                        clearTimeout(hide);
                    },
                    'focusout':function (){
                        hide = setTimeout(function(){
                            $E1.removeClass("on at");
                        },100);
                    }
                });
            });
        }
    },
    pop:{
        on:function(){
            $(document).on({
                'click':function(e) {
                    e.preventDefault();
                    var w = $(this).data("width") || 710,
                        h = $(this).data("height") || 670,
                        l = (screen.width / 2) - (w / 2),
                        t = (screen.height / 2) - (h / 2),
                        url = $(this).data("url")||this.href;
                    (url!=undefined)&&window.open(url, '', 'width=' + w + ',height=' + h + ',left=' + l + ',top=' + t + ',resizable=no,scrollbars=yes');
                }
            },'.js_popup');
        },
        off:function(){
            $(document).on({
                'click':function(e) {
                    e.preventDefault();
                    window.close();
                }
            },'.popup_close');
        },
        close:function(){
            $(".popup_close").trigger("click");
        }
    },
    modal:{
        init:function(){
            $(".modalzone").append("<div class='mz_bg'/>");
        },
        on:function(){
            $(document).on({
                'click':function(e) {
                    e.preventDefault();
                    var type=$(this).data("modalType")||"basic",$modal=this.hash||$(this).data("modalTarget")||$(".modalzone").eq(0);
                    if(this.hash||$(this).data("modalTarget") != undefined) $modal = $($modal);
                    $modal.filter(".modalzone").attr('data-modal-type',type);
                    $modal.addClass("on");
                }
            },'.js_modal');
        },
        off:function(){
            $(document).on({
                'click':function(e) {
                    e.preventDefault();
                    $(this).closest(".modalzone, .modalayer").removeClass("on");
                }
            },'.modal_close');
        },
        close:function(e){
            if(e==undefined){
                $(".modal_close").trigger("click");
            }else{
                var $P=e.closest(".modalzone, .modalayer");
                $(".modal_close",$P).trigger("click");
            }
        }
    }
};