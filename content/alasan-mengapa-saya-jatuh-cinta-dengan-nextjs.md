---
title: "Alasan Mengapa Saya Jatuh Cinta dengan Next.js"
author: "dev.ardha"
date: "3 June 2020"
tags: ['Nextjs', 'React']
image: "https://resir014.xyz/static/5295478eede2c6c927ea8e111bcad25b/a8101/white-nextjs.png"
imageAlt: "programmer life"
---
Nextjs merupakan sebuah framework keren buatan Zeit yang dapat digunakan untuk membantu kita dalam membuat server-side rendering dan static web dengan menggunakan React. Ngomong-ngomong, blog ini juga dibangun menggunakan Nextjs. Kenapa saya menggunakan Nextjs? dan kenapa saya bilang Nextjs itu framework yang keren? Di sini saya akan memberikan beberapa alasan mengapa Anda juga harus mencoba Nextjs untuk membangun sebuah web application.

## Banyak Fitur-Fitur Keren yang Out of The Box!


### Server-Side Rendering

Salah satu fitur utama Nextjs yang sangat menarik perhatian saya adalah framework ini dapat merender komponen React secara server-side.Apa itu maksudnya?

Berikut ini ilustrasinya.
![server side rendering](https://miro.medium.com/max/8468/1*jJkEQpgZ8waQ5P-W5lhxuQ.png)
![client side rendering](https://miro.medium.com/max/8930/1*CRiH0hUGoS3aoZaIY4H2yg.png)
###### Perbedaan Server-Side Rendering dengan Client-Side Rendering

React sebenarnya merupakan sebuah library front-end dengan client-side rendering, jadi komponen-komponennya di render di sisi client. Cara kerjanya: client me-request halaman web, kemudian browser merender javascript dan menulisnya di DOM. Semua terjadi di dalam browser. Namun, dengan komponen yang dirender di sisi client, membuat website akan kurang ramah mesin pencari karena konten web tidak dapat terindex search engine. Maka perlu adanya server-side rendering.

Dengan menggunakan Nextjs, server-side rendering di React jadi jauh lebih mudah. Framework ini akan secara otomatis merender komponen React sebelum data sampai ke client, jadi yang kita dapatkan di browser adalah file html utuh yang telah di-render di sisi server. Tapi tenang, jika Anda masih memerlukan client-side rendering untuk web Anda, Nextjs juga menyediakan fiturnya, semuanya tersedia di dokumentasinya secara lengkap!

### Automatic Routing

Nextjs memiliki fitur automatic routing, sehingga kita tidak perlu bersusah payah berurusan dengan routing halaman web. Nextjs menggunakan filesystem dimana file-file yang diletakan di dalam direktori `/pages` akan secara otomatis dilayani sebagai route baru. Misal saya membuat file `about.js` di dalam folder `/pages`. Kita bisa mengakses halaman tersebut di url `www.example.com/about`. Very simple!

### Dynamic Routes

Jika Anda membuat website dengan banyak halaman, misalnya e-comerce yang memiliki halaman produk, atau blog yang memiliki halaman blog post, tentunya Anda juga membutuhkaan alamat yang rapi untuk website Anda. Misalnya halaman blog dengan judul "React SSR" akan memiliki url `www.example.com/blog/react-ssr`. Di Nextjs, konten yang dinamis seperti itu bisa didapatkan dengan menggunakan dynamic url. Kita bisa membuat dynamic url dengan membuat file javascript dengan nama yang diapit []. Misalnya `/pages/[id].js`. Sehingga, apapun parameter url yang diberikan akan dikirimkan menjadi query parameter ke halaman.

Sebagai contoh, url `/blog/hello` akan memiliki query objek sebagai berikut:

```json
{ "id": "hello" }

```

Dan masih banyak fitur-fitur lainnya!

## Mudah Sekali Dipelajari

Dengan menggunakan Nextjs sebenarnya sama saja dengan Anda menggunakan React, namun lebih powerfull. Jadi jika Anda sudah paham React, tidak akan sulit bagi Anda untuk belajar Nextjs ini. Apalagi didukung dengan dokumentasi yang jelas dan komunitas yang kuat. Jika Anda punya masalah dengan kode Anda, pasti akan tersedia solusinya di github atau stackoverflow. Mantap sekali.

Nextjs juga sudah datang dengan banyak hal keren seperti built in Sass, typescript support, webpack, hot reloading, code-splitting, environment variable, dan masih banyak lagi. Anda tidak perlu pusing-pusing lagi dengan itu semua. Jika Anda belum tau fitur-fitur di atas, percayalah, perlu waktu yang cukup lama untuk belajar hal-hal tersebut haha. Tapi Nextjs memang datang dengan sejuta kemudahan. Tapi tenang saja, Anda masih bisa dengan leluasa mengatur configurasinya, karna jika Anda menggunakan package-package tertentu, configurasi webpack juga diperlukan karna secara default Nextjs hanya menyediakan konfigurasi dasarnya. Tapi itu sangat cukup untuk mulai membuat website SSR React pertama Anda!

## Cocok untuk Berbagai Jenis Website

Dengan banyak kelebihannya, Nextjs bisa digunakan untuk membuat berbagai jenis website. Mulai dari blog, entertainment, berita, hingga ecommerce bisa Anda buat dengan menggunakan Nextjs.

Sudah banyak juga perusahaan-perusahaan besar yang menggunakan framework ini. Sebut saja Netflix (Netflix job), Twitch, Nike, IGN, TikTok pun juga memakai Nextjs untuk membangun websitenya. Keren nggak tuh. Tidak perlu ragi lagi jika Anda mau menggunakan Nextjs, website-website besar aja pakai #BukanPromosi.

Di luar sana sudah banyak juga tutorial-tutorial mulai dari yang dasar hingga tingkat lanjutan dalam menggunakan framework ini. Sehingga akan mudah bagi anda untuk mulai membuat website keren dengan Nextjs.

Terakhir, saya mau klarifikasi. Postingan ini bukan promosi. Saya hanya berbagi pengalaman, terutama alasan kenapa saya memilih Nextjs sebagai framework favorit yang saya gunakan di blog ini. Mungkin kedepannya saya akan berbagi pengalaman dan tutorial-tutorial lain mengenai Nextjs ini, jadi jangan lupa bookmark blog saya, hehe. Sekian dan sampai jumpa!