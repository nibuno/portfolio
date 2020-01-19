---
title: "12月15日から12月22日までの振り返り"
description: "退職の申し出と社内ポータルサイト移管"
date: "2019-12-22"
tags: "振り返り"
---

## はじめに

こんにちは、Yumihikiです。
今週は退職を申し出たのと、社内ポータルサイトの移管を引き続き行なっていました。

## 退職の申し出

先週、上司の都合がつかず話をできなかったのですが今週の月曜日に時間をもらい、退職を申し出たところ、快く了承頂きました。
それから部長にも伝えてもらい、部長とも話をしました。

これから益々部署として頑張っていこうと思っていたところで退職するとなりとても驚きだが、あの時こうしておけばよかったと後悔しない選択をして欲しい、と言ってもらいました。

今まで仕事をする中で決して良いことばかりではありませんでしたが、このように言ってくださる職場で働くことが出来て良かったなと思いました。
これがもし、部署が嫌、会社が嫌で辞めるのであればお互いにとても悲しいことだったと思うのですが、自分自身がエンジニアとしてこれから働いていきたい、働いていく、というのは現職で叶えられないことなので悔いのないようにしたいなと思っていますし、もし仮に間違った〜〜〜！！と思ってしまうような事があったとしたら正解出来るよう何度でも繰り返して行こうと思います。

ずっと怒られてばかりでしたが、私がエンジニアとして転職すると聞いた時に「しょうがないな」「いや、でもしょうがないのか・・・？」と悩む部長を見て、少しだけ込み上げるものはありました。

これからあと一ヶ月強、出来る限り引き継ぎなどをスムーズに行なって行けるようにしたいと思います。

## 社内ポータルサイトの移管

ここしばらくは、価格改定に伴う資料・データ作成で業務中のプログラミングがほとんど出来ませんでした。そのため二週間近くぶりに社内ポータルサイトの業務に取り組む事が出来ました。

現在運用中のサーバーが古くなり、廃棄するため、新しいサーバーにコードを置いて動くようにしている（ついでに不要なファイルを削除したり、不要なコードも削除しています）のですが、なぜかDBの書き換え処理がうまく行きませんでした。

エラーメッセージを見たところ、アクセス許可に原因があったようでしたが、わからなかったため派遣で来てくださっているエンジニアさん（いつもお世話になっている方）に尋ねたところ、IIS_IUSRSをアクセス許可に追加してやれば良いとのことでした。IISでのアクセス許可に関わっているみたいです。

こちらのWebサイト[IISのアクセス許可](https://creativeweb.jp/tips/iis_acl/)が参考になりそうで、少し読んでいました。来週こそは移管できるように作業を進めたいです。

## 最後に

昨日はアドベントカレンダーの記事を初めて書いてみることにしました。本当は？実務で一番関わりそうなDB関係を学習しようと思っていたのですが、アドベントカレンダーの都合上？Web APIの記事の方が良いかなと思いWeb APIについて学習していました。

初心者丸出しですが、これからも初心者の気持ちを忘れずに学習に取り組んでいきたいと思いました。

最後まで読んでくださりありがとうございました。