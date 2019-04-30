---
title: "TailwindCSSって何？"
description: "初心者がTailwindCSSについて調べてみた"
date: "2019-04-30"
tags: "#TailwindCSS"
---

## はじめに
こんにちは、Yumihikiです。
今回はReactについて調べてみたので、まとめていきます。また、対象者を初心者（過去の自分）と想定しているので少しでも？となったことのある単語には解説を入れていきます。

## TailwindCSSって何？まとめられたサイトについて
参考になりそうなサイトを調べてみました。日本語での情報が少ないですが、注目されつつある印象を受けています。
- [Tailwind CSS](https://tailwindcss.com/docs/what-is-tailwind/):公式Webサイトです。ただし全部英語なので、私のような英語が苦手な人はGoogle翻訳で読み進めていく必要がありそうです。
- [Nakamu Blog nuxt-tailwindを試してみる](https://blog.nakamu.life/posts/start-nuxt-tailwind):メンターのなかむさん（[@nakanakamu0828](https://twitter.com/nakanakamu0828)）が書かれたブログ記事です。
- [coliss [CSS]便利なのが登場！レイアウトやUIコンポーネント用のスタイルシートが簡単にまとめて利用できる -Tailwind CSS
](https://coliss.com/articles/build-websites/operation/css/utility-first-css-framework-tailwindcss.html):colissさんの記事です。
- [FABRIC TOKYO TECH blog](https://medium.com/fabric-tokyo-engineering/nuxt-js-tailwind-css-%E3%81%A7%E7%88%86%E9%80%9F%E3%82%B3%E3%83%BC%E3%83%9D%E3%83%AC%E3%83%BC%E3%83%88%E3%82%B5%E3%82%A4%E3%83%88%E4%BD%9C%E6%88%90-da2564d73f90):TailwindCSSを用いた例の記事を書かれています。

## で、結局TailwindCSS ってどんなの？
本当にざっくりとしていて申し訳ないのですが、ボタンなどのUIを構築するためのCSSフレームワーク、という説明で良いかと思います。Classで指定するだけで色使いやフォントサイズがある程度まとまった構成でUIを構築することができるのがメリットだと思います。自分もこのサイトを写経していく中で、classを指定するだけで色々と設定してくれるのは便利だなと思いました。生のCSSでは１から色を自分で決めて行かないといけないので、考えたり手を動かすことが減ってとても良いです。

Google翻訳で翻訳された記事も若干わかりにくい日本語ではあるものの、手を動かしていけばその考えがわかるのかな？という印象を受けています。

何にせよこれだけではわかりにくいと思うので、また実際にこのサイトを作っていく中での記事を通してTailwindCSSの解説を行います。