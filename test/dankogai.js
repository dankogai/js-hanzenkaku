
/*
 * $Id: dankogai.js,v 0.1 2012/08/13 05:30:12 dankogai Exp dankogai $
 *
 * use mocha to test me
 * http://visionmedia.github.com/mocha/
 */
var assert, HanZenKaku;
if (this['window'] !== this) {
    assert = require("assert");
    HanZenKaku = require('../hanzenkaku.js').HanZenKaku;
}
var is = function (a, e, m) {
    return function () {
        assert.equal(a, e, m)
    }
};

describe('HanZenKaku', function () {
    it('.z2h', is(HanZenKaku.z2h('コガイダン'), 'ｺｶﾞｲﾀﾞﾝ'));
    it('.h2z', is(HanZenKaku.h2z('ｺｶﾞｲﾀﾞﾝ'), 'コガイダン'));
    it('.fw2hw', is(HanZenKaku.fw2hw('ｄａｎｋｏｇａｉ'), 'dankogai'));
    it('.hw2fw', is(HanZenKaku.hw2fw('dankogai'), 'ｄａｎｋｏｇａｉ'));
    it('.fs2hs', is(HanZenKaku.fs2hs('dan　kogai'), 'dan kogai'));
    it('.hs2fs', is(HanZenKaku.hs2fs('dan kogai'), 'dan　kogai'));
    it('.h2k', is(HanZenKaku.h2k('こがいだん'), 'コガイダン'));
    it('.k2h', is(HanZenKaku.k2h('コガイダン'), 'こがいだん'));
});

describe('String.prototype', function () {
    it('.toZenkaku', is('ｺｶﾞｲﾀﾞﾝ'.toZenkaku(), 'コガイダン'));
    it('.toHankaku', is('コガイダン'.toHankaku(), 'ｺｶﾞｲﾀﾞﾝ'));
    it('.toFullwidth', is('dankogai'.toFullwidth(), 'ｄａｎｋｏｇａｉ'));
    it('.toHalfwidth', is('ｄａｎｋｏｇａｉ'.toHalfwidth(), 'dankogai'));
    it('.toHalfwidthSpace', is('dan　kogai'.toHalfwidthSpace(), 'dan kogai'));
    it('.toFullwidthSpace', is('dan kogai'.toFullwidthSpace(), 'dan　kogai'));
    it('.toKatakana', is('こがいだん'.toKatakana(), 'コガイダン'));
    it('.toHiragana', is('コガイダン'.toHiragana(), 'こがいだん'));
});
