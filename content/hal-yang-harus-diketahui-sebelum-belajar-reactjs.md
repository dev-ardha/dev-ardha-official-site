---
title: "Hal yang Harus Diketahui Sebelum Belajar React.js"
author: "dev.ardha"
date: "2020-06-26"
tags: ['Reactjs', 'Javascript']
image: "https://wallpapercave.com/wp/wp2465923.jpg"
imageAlt: "React.js"
---
Semakin lama, kepopuleran React.js semakin meningkat. Banyak orang yang tertarik untuk mempelajari library javascript satu ini. Menurut survei stackoverflow tahun ini, React juga menempati peringkat 2 web framework paling populer di bawah jQuery. Dengan menggunakan React, memang sangat mempermudah dalam pembuatan user interface website, saya pun juga jatuh cinta dengan library satu ini.

Di postingan kali ini, saya mau sharing aja tentang hal-hal yang harus diketahui sebelum belajar React.js, yang siapa tau bisa membantu untuk meningkatkan efektifitas Anda dalam belajar React.js

## Javascript ES6
Sebelum masuk framework, hal yang paling utama adalah menguatkan pondasi. Jadi, karena React.js merupakan library javascript, pemahaman dasar javascript sangat diperlukan untuk mulai terjun ke dalam library ini.

Selain dasar javascript, pemahaman tentang ECMAScript 6 juga sangat membantu. Karena memang ES6 lah yang menjadi pondasi React.js. Jika anda mencoba belajar React tanpa pondasi Javascript yang cukup, sepertinya itu bukan merupakan ide yang bagus, dan proses belajar tidak akan efektif. Jadi ketika dalam proses belajar Anda merasa 'stuck' di situ-situ aja, mungkin anda perlu kembali lagi ke fundamentals of javascript.

Saya kasih bocoran dikit deh, javascript fundamentals yang akan sering dipakai dalam pengembangan aplikasi React.js beberapa diantaranya adalah: ES6 Class, teknik Destructuring, Arrow function, Map & Filter, spread operator, penggunaan let & const, High Order Function, event handling untuk manipulasi DOM, promise, dan yang paling bikin pusing... Asynchronus Javascript wkwk. Tapi jangan takut dulu, asal ada niat, semua gampang dipelajari.

## HTML & CSS
Jika anda sudah berani masuk framework, berarti anda pastinya juga sudah harus paham dengan HTML dan CSS (paling tidak tau cara membuat tampilan yang cantik).

Di React.js sendiri kita nantinya akan menggunakan JSX, yaitu sebuah sintaks javscript mirip HTML yang digunakan untuk membuat struktur tampilannya. Penulisannya hampir tidak ada bedanya, namun untuk beberapa atribut akan ada perubahan penulisan. Dan untuk styling, ada banyak sekali cara yang dapat digunakan, diantaranya ada: styled jsx, styled component, css-in-js, sass, atau dengan menggunakan css seperti biasa.

## NPM
Saat Anda memulai projek dengan menggunakan React.js, Anda pasti akan butuh untuk menginstall banyak node packages. Packages di javascript sendiri berisi banyak file-file yang diperlukan agar modul javascript bisa berjalan dengan lancar. Maka dibutuhkan sebuah package manager yang dapat membantu mengelola dan mengisntall package-package yang diperlukan dengan mudah tanpa pusing-pusing memikirkan dependencies, dan salah satunya yang paling populer adalah NPM (Node Package Manager). Maka dari itu, pengetahuan dasar tentang package manager juga diperlukan, seperti cara menginstall menggunakan npm, cara membuat npm script, hingga command-command pendukung lainnya. Npm sendiri sudah otomatis terinstall bersamaan dengan Node.js, dan jika anda ingin mencoba package manager yang lain, **yarn** juga merupakan pilihan yang baik.

## Webpack & Babel (Optional)
Seperti yang kita tahu, React menggunakan ES6 dalam penulisan kodenya, dan ES6 sendiri sebenarnya belum support ke semua browser (terutama internet explorer & browser-browser lama), maka dari itu diperlukan webpack sebagai bundler dan babel sebagai cimpilernya.

Babel sendiri berfungsi untuk meng-compile javascript ES6, menjadi javascript 2015 (ES5), agar support ke browser-browser lama. Sedangkan Webpack, berfungsi sebagai module bundler, yang akan mem-bundle banyak file javascript menjadi satu file saja. Webpack juga bisa digunakan untuk mem-bundle css, sass, dan less.

Seperti yang sudah saya beri tahu di atas, Webpack dan Babel ini optional bagi pemula. Karena jika anda memulai projek dengan Create-React-App, semua sudah disediakan, dan anda tinggal pakai saja. Namun, jika anda memulai projek dari nol, tentunya Webpack dan Babel akan menjadi hal wajib yang tidak boleh dilupakan.

Yak, itu dia beberapa tips dan trik dari hasil pengalaman saya. Sebenarnya, Reactjs itu merupakan library yang cukup ramah bagi pemula. Bermodal tutorial di youtube saja, saya yakin anda pasti bisa membuat aplikasi keren dengan react. Namun, React menurut saya punya *learing curve* yang cukup sulit. Awalnya memang akan terlihat mudah, namun untuk menguasai fitur-fitur utama hingga cara menerapkannya kepada aplikasi web sungguhan itu butuh waktu dan *effort* yang lumayan besar juga. Namun, asal ada kemauan, semua pasti bisa. Azeeek. Oke, sekian saya kali ini. Sampai jumpa di postingan selanjutnya!
