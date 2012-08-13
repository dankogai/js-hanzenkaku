# hanzenkaku.js

A Hankaku-Zenkaku translator in JavaScript.

## SYNOPSIS

### FUNCTIONAL INTERFACE

All functions are under the `HanZenKaku` namespace.

    HanZenKaku.h2z('ｺｶﾞｲﾀﾞﾝ');            // コガイダン
    HanZenKaku.z2h('コガイダン');         // ｺｶﾞｲﾀﾞﾝ
    HanZenKaku.hw2fw('dankogai');         // ｄａｎｋｏｇａｉ
    HanZenKaku.fw2hw('ｄａｎｋｏｇａｉ'); // dankogai
    HanZenKaku.fs2hs('dan　kogai');       // dan kogai
    HanZenKaku.hs2fs('dan kogai');        // dan　kogai
    HanZenKaku.h2k('こがいだん');         // コガイダン
    HanZenKaku.k2h('コガイダン');         // こがいだん

### OO INTERFACE

If your environment supports ECMASCript 5, `String.prototype' is
exteneded as follows:

    'ｺｶﾞｲﾀﾞﾝ'.toZenkaku();            // HanZenKaku.h2z('ｺｶﾞｲﾀﾞﾝ')
    'コガイダン'.toHankaku();         // HanZenKaku.z2h('コガイダン')
    'dankogai'.toFullwidth();         // HanZenKaku.hw2fw('dankogai')
    'ｄａｎｋｏｇａｉ'.toHalfwidth(); // HanZenKaku.fw2hw('ｄａｎｋｏｇａｉ')
    'dan　kogai'.toHalfwidthSpace();  // HanZenKaku.fs2hs('dan　kogai')
    'dan kogai'.toFullwidthSpace();   // HanZenKaku.hs2fs('dan kogai')
    'こがいだん'.toKatakana();        // HanZenKaku.h2k('こがいだん')
    'コガイダン'.toHiragana();        // HanZenKaku.k2h('コガイダン')

This is more convenient than the functional version since you can take
advantage of the method chain like:

    'ｄａｎ　ｋｏｇａｉ'.toHalfwidth().toHalfwidthSpace();

ES5 is required to prevent from `String.prototype` from being
enumerated so built-in objects like `String` are safely extended.
