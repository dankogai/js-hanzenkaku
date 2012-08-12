/*
 * $Id: hanzenkaku.js,v 0.1 2012/08/12 15:44:24 dankogai Exp dankogai $
 *
 *  Licensed under the MIT license.
 *  http://www.opensource.org/licenses/mit-license.php
 */

(function(global){
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
    global.HanZenKaku = global.HanZenKaku || {
        h2z:f_h2z,
        z2h:f_z2h
    };
    if (typeof(Object.defineProperty) !== 'function') return;
    (function(o){
        var target = String.prototype;
        for (var p in o) if (!target[p]) Object.defineProperty(target, 
            p, {value:o[p],enumerable:false}
        );
    })({
        toZenkaku:function(){return f_h2z(this)},
        toHankaku:function(){return f_z2h(this)}
    });
})(this);
