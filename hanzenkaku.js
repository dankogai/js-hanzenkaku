/*
 * $Id: hanzenkaku.js,v 0.3 2012/08/12 18:47:53 dankogai Exp dankogai $
 *
 *  Licensed under the MIT license.
 *  http://www.opensource.org/licenses/mit-license.php
 */

(function(global){
    // hankaku <-> zenkaku
    var re_h2z = new RegExp(
        '(?:' + [
            '[｡｢｣･ｦｧｨｩｪｫｬｭｮｯｰｱｲｴｵﾅﾆﾇﾈﾉﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ]',
            '[ｳｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄ][\uFF9E]?',
            '[ﾊﾋﾌﾍﾎ][\uFF9E\uFF9F]?',
            ].join('|') + ')', 'g'
        );
    var re_z2h = new RegExp(
        '(?:[' + [
            '。「」ァアィイゥウェエォオカガキギクグケゲコゴ',
            'サザシジスズセゼソゾタダチヂッツヅテデトド',
            'ナニヌネノハバパヒビピフブプヘベペホボポ',
            'マミムメモャヤュユョヨラリルレロワヲンヴ・ー'
            ].join('') + '])', 'g'
        );
    var o_z2h = {
        '。':'｡', '「':'｢', '」':'｣', '」':'｣', '・':'･', 'ー':'ｰ', 
        'ァ':'ｧ', 'ア':'ｱ', 'ィ':'ｨ', 'イ':'ｲ', 'ゥ':'ｩ', 
        'ウ':'ｳ', 'ェ':'ｪ', 'エ':'ｴ', 'ォ':'ｫ', 'オ':'ｵ', 
        'カ':'ｶ', 'ガ':'ｶﾞ', 'キ':'ｷ', 'ギ':'ｷﾞ', 'ク':'ｸ', 
        'グ':'ｸﾞ', 'ケ':'ｹ', 'ゲ':'ｹﾞ', 'コ':'ｺ', 'ゴ':'ｺﾞ', 
        'サ':'ｻ', 'ザ':'ｻﾞ', 'シ':'ｼ', 'ジ':'ｼﾞ', 'ス':'ｽ', 
        'ズ':'ｽﾞ', 'セ':'ｾ', 'ゼ':'ｾﾞ', 'ソ':'ｿ', 'ゾ':'ｿﾞ', 
        'タ':'ﾀ', 'ダ':'ﾀﾞ', 'チ':'ﾁ', 'ヂ':'ﾁﾞ', 'ッ':'ｯ', 
        'ツ':'ﾂ', 'ヅ':'ﾂﾞ', 'テ':'ﾃ', 'デ':'ﾃﾞ', 'ト':'ﾄ', 'ド':'ﾄﾞ', 
        'ナ':'ﾅ', 'ニ':'ﾆ', 'ヌ':'ﾇ', 'ネ':'ﾈ', 'ノ':'ﾉ', 
        'ハ':'ﾊ', 'バ':'ﾊﾞ', 'パ':'ﾊﾟ', 'ヒ':'ﾋ', 'ビ':'ﾋﾞ', 
        'ピ':'ﾋﾟ', 'フ':'ﾌ', 'ブ':'ﾌﾞ', 'プ':'ﾌﾟ', 'ヘ':'ﾍ', 
        'ベ':'ﾍﾞ', 'ペ':'ﾍﾟ', 'ホ':'ﾎ', 'ボ':'ﾎﾞ', 'ポ':'ﾎﾟ', 
        'マ':'ﾏ', 'ミ':'ﾐ', 'ム':'ﾑ', 'メ':'ﾒ', 'モ':'ﾓ', 
        'ャ':'ｬ', 'ヤ':'ﾔ', 'ュ':'ｭ', 'ユ':'ﾕ', 'ョ':'ｮ', 'ヨ':'ﾖ', 
        'ラ':'ﾗ', 'リ':'ﾘ', 'ル':'ﾙ', 'レ':'ﾚ', 'ロ':'ﾛ', 
        'ワ':'ﾜ', 'ヲ':'ｦ', 'ン':'ﾝ', 'ヴ':'ｳﾞ'
    };
    var objectReverse = function(o){
        var r = {};
        for (var p in o) r[o[p]] = p;
        return r;
    };
    var o_h2z = objectReverse(o_z2h);
    var f_h2z = function(str){
        return str.replace(re_h2z, function(m){return o_h2z[m]});
    };
    var f_z2h = function(str){
        return str.replace(re_z2h, function(m){return o_z2h[m]});
    };
    // halfwidth <-> fullwidth
    var o_hw2fw = {
        '\u2985':'\uFF5F', // LEFT WHITE PARENTHESIS
        '\u2986':'\uFF60', // RIGHT WHITE PARENTHESIS
        '\u00A2':'\uFFE0', // CENT SIGN
        '\u00A3':'\uFFE1', // POUND SIGN
        '\u00AC':'\uFFE2', // NOT SIGN
        '\u00AF':'\uFFE3', // MACRON
        '\u00A6':'\uFFE4', // BROKEN BAR
        '\u00A5':'\uFFE5', // YEN SIGN
        '\u20A9':'\uFFE6'  // WON SIGN
    };
    (function(o){
        for (var i = 0x21; i <= 0x7E; i++) {
            o[String.fromCharCode(i)] = String.fromCharCode(i + 0xFF00-0x20);
        }
    })(o_hw2fw);
    var re_hw2fw = /[\x21-\x7E\u2985\u2986\xA2\xA3\xAC\xAF\xA6\xA5\u20A9]/g;
    var o_fw2hw = objectReverse(o_hw2fw);
    var re_fw2hw = /[\uFF01-\uFFE6]/g;
    var f_hw2fw = function(str){
        return str.replace(re_hw2fw, function(m){return o_hw2fw[m]});
    }
    var f_fw2hw = function(str){
        return str.replace(re_fw2hw, function(m){return o_fw2hw[m]});
    }
    var f_fs2hs = function(str){ return str.replace(/\u3000/g, ' '); }
    var f_hs2fs = function(str){ return str.replace(/ /g, '\u3000'); }
    // katakana <-> hiragana
    var o_h2k = (function(){
            var o = {};
            for (var i = 0x3041; i <= 0x3094; i++){
                o[String.fromCharCode(i)] 
                    = String.fromCharCode(i - 0x3040 + 0x30A0);
            }
            return o
        })();
    var o_k2h = objectReverse(o_h2k);
    var f_h2k = function(str){
        return str.replace(/[ぁ-ゔ]/g, function(m){ return o_h2k[m]});
    };
    var f_k2h = function(str){
        return str.replace(/[ァ-ヴ]/g, function(m){return o_k2h[m]});
    };
    // export
    global.HanZenKaku = global.HanZenKaku || {
        h2z:f_h2z,
        z2h:f_z2h,
        fw2hw:f_fw2hw,
        hw2fw:f_hw2fw,
        fs2hs:f_fs2hs,
        hs2fs:f_hs2fs,
        h2k:f_h2k,
        k2h:f_k2h
    };
    /*
     * Extend String.prototype iff ES5 is available
     */ 
    if (typeof(Object.defineProperty) !== 'function') return;
    (function(o){
        var target = String.prototype;
        for (var p in o) if (!target[p]) Object.defineProperty(target, 
            p, {value:o[p],enumerable:false}
        );
    })({
        toZenkaku:function(){return f_h2z(this)},
        toHankaku:function(){return f_z2h(this)},
        toFullwidth:function(){return f_hw2fw(this)},
        toHalfwidth:function(){return f_fw2hw(this)},
        toFullwidthSpace:function(){return f_hs2fs(this)},
        toHalfwidthSpace:function(){return f_fs2hs(this)},
        toKatakana:function(){return f_h2k(this)},
        toHiragana:function(){return f_k2h(this)}
    });
})(this);
