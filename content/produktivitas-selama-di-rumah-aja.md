---
title: "Produktivitas di Rumah Aja"
author: "dev.ardha"
date: "2020-07-31"
tags: ['GraphQL']
image: "https://miro.medium.com/max/5000/1*bmsx9Otr24FXeHI5o0OBRA.jpeg"
imageAlt: "produktivitas saya selama masa pandemi"
---
Nggak nyangka sudah berbulan-bulan saya di rumah aja, keluar rumah bisa cuma seminggu sekali, itu juga nggak pasti, dan dengan keseharian yang tiap hari nggak jauh beda: Bangun - Ngoding - Makan - Tidur *repeat*. Yaah, kelihatan *nolep* sekali hidup saya haha. Tapi ngomong-ngomong, saya cukup betah di rumah aja, walau kadang ada keinginan buat main ke luar. Dengan di rumah aja udah banyak hal yang saya pelajari. Jika saya bandingin sama sebelum pandemi, bener-bener drastis sih.

Di postingan ini saya mau shareing aja apa saja teknologi yang sudah atau sedang saya pelajari selama di rumah aja. Kali aja ada yang mau ikutan belajar juga hehe. Lumayan kan, bisa dapet temen belajar.

## Beralih ke Node.js
Waktu awal lockdown, saya bener-bener bingung mau belajar apa. Sebenarnya sebelum itu saya sudah belajar PHP di awal tahun, namun saya ragu buat ngelanjutin belajarnya. Kayak, belum ada chemistry aja gitu sama bahasanya. Kemudian saya berpikir, "Kayaknya saya harus ganti belajar yang lain." Kemudian pilihan saya jatuh ke Node.js.

Kebetulan saya sudah belajar Javascript sejak satu tahun lalu, jadi nggak begitu bingung waktu pertama kali belajarnya. Menurut saya, Node.js itu enak banget sih. Gampang. Cocok banget buat pemula. Jadi kalau kalian mau ke backend dan bingung mau pilih bahasa apa, saya sarankan javascript. Apalagi dengan banyaknya framework-framework keren di luar sana. Powerfull banget sih ini, apalagi Node.js termasuk runtime yang cepat jika dibandingin bahasa-bahasa lain.

## React.js dan Next.js
Awal saya belajar Node.js, saya belum begitu paham tentang tech stack dan sejenisnya. Tapi setelah belajar dan belajar, kemudian saya tau bahwa teknologi-teknologi itu ternyata ada kombinasinya, yang sering disebut sebagai *Technology Stacks*. Lalu kenal lah saya dengan MERN Stack (akronim dari MongoDB, Express, React, dan Node.js), yaitu tech stack yang mengombinasikan teknologi-teknologi yang saya sebutkan tadi.

Di full-stack javascript, sebenarnya ada 3 tech stack yang paling populer: MERN, MEAN, dan MEVN. Backendnya sama semua, namun yang membedakannya ada di sisi front-end (React.js, Vue.js, atau Angular). Awalnya saya bener-bener bingung banget di sini. Semua sama-sama keren, namun saya harus milih salah satu, kalau saya milih dua nggak akan efisien belajarnya. Namun setelah beberapa prtimbangan, pilihan saya kemudian jatuh ke React.js. Bagaimana saya bisa memilih React? Karna saya juga sudah coba belajar Vue, tapi waktu saya kenal React, saya merasa jauh lebih nyaman di React. So... sisi front end saya sudah pasti: React.js. Terbaik. No debat (Relatif menurut saya ya haha).

**The Next is Next.js**
Jujur, react.js itu gampang banget dipelajari di awal. Apalagi dengan adanya create-react-app (selanjutnya saya sebut CRA), membuat projek React bisa langsung dipakai dalam sekejap. Bener-bener *out-of-the-box*. Tapi ada satu dan kemudian banyak masalah yang datang. CRA nggak ramah mesin pencari. Alasannya sudah pernah saya jelaskan di postingan yang [ini](https://devardha.now.sh/blog/alasan-mengapa-saya-jatuh-cinta-dengan-nextjs). Dan untuk menangani masalah SEO, kita harus bisa membuat React.js dirender di sisi server, yaitu dengan teknik yang dinamakan Server-Side Rendering. Simplenya, ketika user merequest halaman, React akan terlebih dahulu dirender, sebelum nantinya dikirim ke client.

Dahulu, untuk menggunakan teknik ini perlu digunakan banyak sekali teknologi. Seperti Webpack, Babel, dan tentu saja backend. Kalau ada yang mau lihat bagaimana tekniknya, bisa kunjungi repository GitHub saya, kebetulan saya sudah buat boilerplate yang sudah siap pakai. Namun menurut saya, untuk projek yang dikejar waktu teknik SSR ini terlalu berat (maksud saya berat dalam hal teknologinya: perlu waktu untuk men-setup-nya, dsb).

Namun, setelah berselancar jauh di internet, saya menemukan sebuah framework keren untuk React.js. Mantap nggak tuh, "Framework untuk library". Jadi si Next.js ini memungkinkan kita untuk membuat Apliaksi Reacr yang dirender di sisi server *OUT OF THE BOX!*. Bahkan kalian bisa membuat hybrid react app dengan mengombinasikan Client-Side Rendering, Server-Side Rendering, dan Static Site Generation sekaligus! Kurang mantap apa coba. 

## TypeScript
Selain belajar teknologi-teknologi web baru, saya juga meluangkan waktu untuk mempelajari bahasa baru, yaitu typescript. Typescript dasarnya nggak jauh beda juga sama javascript. Bedanya, typescript ini *strongly-typed*, alias sebuah variabel setelah didefinisakn tipe datanya, nggak bisa diganti dengan tipe data lain. Selain itu typescript juga murni Object Oriented, sedangkan javascript bukan object oriented, walaupun sebenernya juga bisa dibuat object-oriented melalui prototyping.

Bakal kerasa sih kalo kalian datang dari javascript lalu mau belajar typescript. Di typescript kita harus terbiasa mendefinisikan variabel dengan tipe datanya, begitu juga dengan props, function, dan lain-lainnya. Tapi dasarnya, kalian akan jauh lebih mudah belajar jika udah paham javascript. Karena ujung-ujungnya, typescript nantinya juga bakalan di-compile ke javascript sebelum dieksekusi.

Saya juga sudah berhasil menyelesaikan projek typescript pertama saya. Yaitu berupa website yang keseluruhan saya tulis pakai typescript, bernama "Codewizard". Websitenya belum rilis haha, karena saya masih sibuk mengerjakan projek lain yang lumayan gede. Tapi saya kasih bocoran dikit, CodeWizard memungkinkan kalian untuk men-generate JSX component dengan hanya menuliskan perintah dalam bahasa inggris seperti, *"please help me to make one card component with color like a grape"*. Sebenarnya ide ini milik orang lain, tapi dia buatnya pakai GPT-3-nya OpenAI, tapi saya malah membuatnya secara manual hanya pakai regex hahaha. Tapi, overall, typescirpt enak juga. Munkin kedepannya saya bakalan beralih ke typescript juga haha.

## GraphQL
Teknologi selanjutnya yang sedang saya pelajari sekarang adalah GraphQL. GraphQL merupakan sebuah query language buatan Facebook yang diciptakan untuk mempermudah dalam pembuatan API. Ya, sebenernya nggak mudah juga sih, setupnya juga nggak semudah REST, lebih ke mudah dalam query datanya jika dibandingin sama REST API biasa.

GraphQL bisa lebih fleksibel dalam query data, yang berarti kita bisa meminta data ke GraphQL API, hanya data yang kita butuhkan saja. Misal di REST API, ketika kita butuh nama user, kita tentunya akan melakukan fetch data ke endpoint, misalnya `/api/user/[id]`. Dan yang kita dapatkan adalah semua data usernya, termasuk tanggal lahir, alamat, dan lain-sebagainya. Boros kan? Itu yang dinamakan *over-fetching*. Tapi di GraphQL, ketika kita hanya perlu nama user, kita bisa men-query nama usernya aja, tanpa data tidak penting lainnya. Itu kerennya GraphQL.

GraphQL juga udah saya pakai di projek baru saya untuk API-nya. Tapi masih rahasia hehe:)

## Ruby
Kalau ini bener-bener baru banget, saya akhir-akhir ini jadi tertarik sama Ruby. Tentunya tujuan saya belajar buat lanjut ke Ruby on Rails. Iseng-iseng aja sih haha. Ini juga merupakan pelajaran sampingan, sementara saja mengerjakan projek-projek. Jadi paling nggak, saya bisa belajar hal baru, di luar teknologi web yang saya pakai di dalam projek.

Ya, walau orang-orang banyak yang bilang, "Ruby almost dead". Saya juga banyak berpikir sebelum belajar bahasa ini, apalagi di stackoverflow survey, bahasa ini masum di peringkat 7 "Most Dreaded Language" dan itu satu peringkat dibawah PHP woe. Tapi saya masih yakin kalau Ruby bisa naik lagi. Saya juga cukup nyaman sejauh ini dalam belajar Ruby. Nggak tahu nantinya haha. Sebenarnya Ruby ini bahasa yang bener-bener muncul dikepala seketika, belum pernah masuk list target bahasa pemrograman saya, dan sebelumnya saya malah mau belajarnya Golang. Tapi karena saya percaya feeling, so kenapa nggak dicoba? hehe.

Ya, itu dia teknologi-teknologi yang sudah atau sedang saya pelajari sekarang. Gimana? ada yang tertarik ikutan belajar teknologi-teknologi itu? Ayok Gas haha. Ramaikan dunia web development! Sekian dulu postingan kali ini. Sampai jumpa di postingan selanjutnya.
