---
title: "Alasan Mengapa Saya Tidak Lagi Pakai Bootstrap"
author: "dev.ardha"
date: "2020-6-26"
tags: ['Frontend', 'Bootstrap', 'CSS']
image: "https://www.vzhurudolu.cz/assets/img/content/src/vdbootstraplogofialove-.jpg"
imageAlt: "Bootstrap"
---
Bagi kalian yang berkecimpung di dunia front-end, pasti kenal dengan yang namanya Bootstrap. Bootstrap merupakan salah-satu, atau mungkin framework CSS yang paling populer dan paling sering digunakan. Apalagi Bootstrap sangat memudahkan developer untuk membuat tampilan yang cantik dan responsive. Namun dengan kelebihannya, saya memilih untuk tidak lagi menggunakan Bootstrap di dalam projek saya. Berikut adalah alasan kenapa saya meninggalkan framework ini.

## Kurang Leluasa
Waktu awal saya menggunakan Bootstrap, saya merasa bahwa framework ini adalah framework CSS terbaik yang sangat memudahkan saya dalam membuat tampilan website. Kita tingal pasang-pasang class sesuai deokumentasi, dan secara ajaib, tampilan akan jadi responsive tanpa harus menggunakan media queries. **Bahkan**, saya bisa jamin orang yang bahkan belum sepenuhnya paham CSS pun dapat membuat tampilan cantik dengan bantuan Bootstrap. Saya juga merasa begitu.

Namun, semakin lama setelah saya mempelajari CSS lebih dalam, Bootstrap jadi seperti kurang berguna buat saya. Saya akan tetap menulis beberapa komponen dari nol walaupun saya sudah menyelipkan Bootstrap ke dalam projek saya. Dan saya rasa Bootstrap malah seperti mengekang saya. Kita jadi terlalu berpatokan pada aturan styling Bootstrap, dan akan susah untuk memodifikasi aturan tersebut. Bahkan, beberapa komponen mengharuskan kita untuk menggunakan `!important` di dalam CSS. Yang mana itu juga sangat tidak disarankan dalam penulisan CSS.

Dan jika Anda lihat, rata-rata website yang menggunakan Bootstrap pasti akan terlihat identik. Entah itu layoutnya, tombolnya, pasti ada yang membuat Anda seperti berpikir, "Kayaknya websitenya mirip, nih". Sehingga akan kurang terasa khas websitenya.

## Bootstrap Itu Berat
File CSS Bootstrap itu terdiri dari berbagai macam komponen, sehingga jika kita mau menerapkan styling pada elemen tertentu, kita tinggal menambahkan class ke elemen tersebut. Masalahnya, jika kita membuat website, belum tentu kita akan memanfaatkan semua yang disediakan Bootstrap. Sehingga akan sia-sia bukan?

Loh, file Bootstrap kan kurang dari 120kb? Coba pikir-pikir lagi, apakah dari 120kb file tersebut Anda gunakan semua? Apalagi Bootsrap kini masih menggunakan jQuery, yang mana kita harus menyelipkan file `jQuery` juga di projek kita, ditambah dengan `bootstrap.js`.

## Apakah Saya Tidak Suka Bootstrap?
Tidak sepenuhnya begitu. Saya sebenarnya suka dengan Bootstrap. Seperti yang saya katakan sebelumnya, Bootstrap itu keren. Namun, semenjak saya menggunakan Sass, saya jadi perlahan meninggalkan Bootstrap karena saya merasa lebih leluasa dalam membentuk style komponen saya sendiri dari nol.

## Worth It Kah Bootstrap untuk Dipelajari?
Menurut saya, itu tergantung pemikiran orang masing-masing. Mungkin Bootstrap akan cocok digunakan untuk mengerjakan sebuah projek besar yang memiliki deadline singkat. Namun, tidak ada salahnya jika Anda mau belajar menggunakan Bootstrap. Itu akan jadi poin tambah tersendiri sebagai seorang front-end developer.

Menurut saya, Bootstrap juga akan masih terus bertahan dan masih akan tetap digunakan oleh banyak orang karena kemudahannya. Jadi worth it saja jika Anda mau belajar Bootstrap. Apalagi sekarang Bootstrap sudah rilis versi 5 nya, yang menghapuskan jQuery dan beralih ke vanilla javascript. Jadi, apakah Anda juga pengguna Bootstrap? Bagaimana pendapat Anda?:)
