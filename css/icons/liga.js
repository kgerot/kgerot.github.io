/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'home3': '&#xe902;',
            'house3': '&#xe902;',
            'newspaper': '&#xe904;',
            'news': '&#xe904;',
            'pencil': '&#xe905;',
            'write': '&#xe905;',
            'pencil2': '&#xe906;',
            'write2': '&#xe906;',
            'quill': '&#xe907;',
            'feather': '&#xe907;',
            'pen': '&#xe908;',
            'write3': '&#xe908;',
            'images': '&#xe90e;',
            'pictures': '&#xe90e;',
            'music': '&#xe911;',
            'song': '&#xe911;',
            'play': '&#xe912;',
            'video': '&#xe912;',
            'film': '&#xe913;',
            'video2': '&#xe913;',
            'book': '&#xe91f;',
            'read': '&#xe91f;',
            'books': '&#xe920;',
            'library': '&#xe920;',
            'profile': '&#xe923;',
            'file2': '&#xe923;',
            'file-empty': '&#xe924;',
            'file3': '&#xe924;',
            'files-empty': '&#xe925;',
            'files': '&#xe925;',
            'file-text2': '&#xe926;',
            'file4': '&#xe926;',
            'file-picture': '&#xe927;',
            'file5': '&#xe927;',
            'file-music': '&#xe928;',
            'file6': '&#xe928;',
            'file-play': '&#xe929;',
            'file7': '&#xe929;',
            'file-zip': '&#xe92b;',
            'file9': '&#xe92b;',
            'copy': '&#xe92c;',
            'duplicate': '&#xe92c;',
            'paste': '&#xe92d;',
            'clipboard-file': '&#xe92d;',
            'stack': '&#xe92e;',
            'layers': '&#xe92e;',
            'folder': '&#xe92f;',
            'directory': '&#xe92f;',
            'folder-open': '&#xe930;',
            'directory2': '&#xe930;',
            'price-tag': '&#xe935;',
            'price-tags': '&#xe936;',
            'address-book': '&#xe944;',
            'contact': '&#xe944;',
            'envelop': '&#xe945;',
            'mail': '&#xe945;',
            'pushpin': '&#xe946;',
            'pin': '&#xe946;',
            'location': '&#xe947;',
            'map-marker': '&#xe947;',
            'location2': '&#xe948;',
            'map-marker2': '&#xe948;',
            'calendar': '&#xe953;',
            'date': '&#xe953;',
            'drive': '&#xe963;',
            'save3': '&#xe963;',
            'database': '&#xe964;',
            'db': '&#xe964;',
            'undo2': '&#xe967;',
            'left': '&#xe967;',
            'redo2': '&#x2bab;',
            'right': '&#x2bab;',
            'forward': '&#x2ba9;',
            'right2': '&#x2ba9;',
            'reply': '&#x2ba8;',
            'left2': '&#x2ba8;',
            'bubble': '&#x1f5e9;',
            'comment': '&#x1f5e9;',
            'user': '&#x1f464;',
            'profile2': '&#x1f464;',
            'user-tie': '&#xe976;',
            'user5': '&#xe976;',
            'quotes-left': '&#xe977;',
            'ldquo': '&#xe977;',
            'quotes-right': '&#xe978;',
            'rdquo': '&#xe978;',
            'spinner2': '&#xe97b;',
            'loading3': '&#xe97b;',
            'spinner9': '&#xe982;',
            'loading10': '&#xe982;',
            'pie-chart': '&#xe99a;',
            'stats': '&#xe99a;',
            'menu': '&#xe9bd;',
            'list3': '&#xe9bd;',
            'link': '&#xe9cb;',
            'chain': '&#xe9cb;',
            'bookmark': '&#xe9d2;',
            'ribbon': '&#xe9d2;',
            'bookmarks': '&#xe9d3;',
            'ribbons': '&#xe9d3;',
            'star-empty': '&#xe9d7;',
            'rate': '&#xe9d7;',
            'star-half': '&#xe9d8;',
            'rate2': '&#xe9d8;',
            'star-full': '&#xe9d9;',
            'rate3': '&#xe9d9;',
            'heart': '&#xe9da;',
            'like': '&#xe9da;',
            'warning': '&#xea07;',
            'sign': '&#xea07;',
            'plus': '&#xea0a;',
            'add': '&#xea0a;',
            'minus': '&#xea0b;',
            'subtract': '&#xea0b;',
            'info': '&#xea0c;',
            'information': '&#xea0c;',
            'cancel-circle': '&#xea0d;',
            'close': '&#xea0d;',
            'arrow-right': '&#xea34;',
            'right3': '&#xea34;',
            'arrow-left': '&#xea38;',
            'left3': '&#xea38;',
            'arrow-right2': '&#xea3c;',
            'right4': '&#xea3c;',
            'arrow-left2': '&#xea40;',
            'left4': '&#xea40;',
            'circle-right': '&#xea42;',
            'right5': '&#xea42;',
            'circle-left': '&#xea44;',
            'left5': '&#xea44;',
            'checkbox-checked': '&#xea52;',
            'checkbox': '&#xea52;',
            'checkbox-unchecked': '&#xea53;',
            'checkbox2': '&#xea53;',
            'radio-checked': '&#xea54;',
            'radio-button': '&#xea54;',
            'radio-checked2': '&#xea55;',
            'radio-button2': '&#xea55;',
            'radio-unchecked': '&#xea56;',
            'radio-button3': '&#xea56;',
            'new-tab': '&#xea7e;',
            'out2': '&#xea7e;',
            'embed2': '&#xea80;',
            'code2': '&#xea80;',
            'terminal': '&#xea81;',
            'console': '&#xea81;',
            'share2': '&#xea82;',
            'social': '&#xea82;',
            'feed2': '&#xea9b;',
            'rss': '&#xea9b;',
            'feed3': '&#xea9c;',
            'rss2': '&#xea9c;',
            'github': '&#xeab0;',
            'brand40': '&#xeab0;',
            'linkedin': '&#xeac9;',
            'brand64': '&#xeac9;',
            'libreoffice': '&#xeae3;',
            'file14': '&#xeae3;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icomoon-liga/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
