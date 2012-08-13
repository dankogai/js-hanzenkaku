/*
 * $id$
 *
 * use mocha to test me
 * http://visionmedia.github.com/mocha/
 */

var assert = require("assert"),
    is = function (a, e, m) {
        return function () {
            assert.equal(a, e, m)
        }
    },
    hzk = require('../hanzenkaku.js').HanZenKaku;

describe('HanZenKaku', function () {
    it('.z2h', is(hzk.z2h('コガイダン'), 'ｺｶﾞｲﾀﾞﾝ'));
    it('.h2z', is(hzk.h2z('ｺｶﾞｲﾀﾞﾝ'), 'コガイダン'));
    it('.fw2hw', is(hzk.fw2hw('ｄａｎｋｏｇａｉ'), 'dankogai'));
    it('.hw2fw', is(hzk.hw2fw('dankogai'), 'ｄａｎｋｏｇａｉ'));
    it('.fs2hs', is(hzk.fs2hs('dan　kogai'), 'dan kogai'));
    it('.hs2fs', is(hzk.hs2fs('dan kogai'), 'dan　kogai'));
    it('.h2k', is(hzk.h2k('こがいだん'), 'コガイダン'));
    it('.k2h', is(hzk.k2h('コガイダン'), 'こがいだん'));
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
