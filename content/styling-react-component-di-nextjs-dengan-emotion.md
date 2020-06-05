---
title: "Styling React Component di Next.js dengan Emotion"
author: "dev.ardha"
date: "2020-06-05"
tags: ['CSS', 'Javascript', 'Reactjs']
image: "https://1.bp.blogspot.com/-WCS9HJhKJJM/Xto3Fj_WVWI/AAAAAAAABJg/TVD3dHg2HqUs6bMJFYne1Lhqic-57LRpwCNcBGAsYHQ/s1600/EmotionJs.png"
imageAlt: "emotion css-in-js library"
---
Di postingan kali ini saya akan memberikan sedikit tutorial mengenai sebuah library keren yang sangat membantu dalam pengembangan blog ini. Library itu adalah Emotion. Emotion merupakan sebuah library CSS-In-JS yang flexible dan memungkinkan kita untuk menuliskan syntax css di dalam komponen React kita.

Menurut saya Emotion ini cukup keren. Mirip seperti Styled JSX, style yang diterapkan menggunakan CSS-In-JS ini hanya akan berpengaruh ke komponen tersebut, dan tidak akan bercampur dengan komponen lain, sehingga anda tidak akan dibuat pusing dalam pemilihan nama class-nya.

Untuk menggunakan Emotion, pertama-tama kita harus menginstall beberapa dependencies yang kita butuhkan.
```bash
npm i @emotion/core @emotion/styled
npm i -S emotion-theming
```

Oke, akan saya jelaskan secara singkat apa saja yang sudah kita install tadi. `@emotion/core` merupakan perantara antara Emotion dan React, karna sebenarnya, Emotion tidak hanya ditujukan untuk React saja. `@emotion/styled` merupakan dependencies yang memungkinkan kita untuk memberikan style terhadap komponen tertentu di React. Sedangkan `emotion-theming` merupakan dependencies yang membantu kita untuk menerapkan tema tertentu kepada keseluruhan halaman. Untuk lebih jelasnya, akan saya jelaskan nanti.

Kemudian buka file `_app.js`. Apabila anda belum memilikinya, buat file dengan nama `_app.js` di dalam direktore `/pages` dan isikan dengan kode berikut.
```jsx
import { ThemeProvider } from 'emotion-theming'

function App({Component, pageProps}){
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default App;
```

Di kode tersebut kita meng-import `'emotion-theming'` yang berfungsi sebagai pengatur tema dasar yang akan kita gunakan nanti. Untuk membuat temanya, kita perlu mendefinisikan terlebih dahulu nama tema dan warnanya. Pertama, buatlah variabel theme yang berupa objek dan berisi aturan warnannya, kemudian letakan sebelum `function App`. Kodenya seperti berikut ini:

```jsx
const defaultTheme = {
  colors: {
    body: '#fff',
    text: '#000',
    primary: '#ff1493'
  }
}

function App({Component, pageProps}){
  ...
}

export default App;
```

Untuk menerapkan tema pada aplikasi kita, kita hanya perlu membungkus komponen `Component` dengan `ThemeProvider`, sehingga kode di file `_App.js` keseluruhan akan menjadi seperti berikut ini.

```jsx
import { ThemeProvider } from 'emotion-theming'

// mendefinisikan tema dengan nama defaultTheme
const defaultTheme = {
  colors: {
    body: '#fff',
    text: '#000',
    primary: '#ff1493'
  }
}

function App({Component, pageProps}){
  return (
    <>
      <ThemeProvider theme={defaultTheme} >
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App;
```

Dan tema pun sekarang sudah berhasil diterapkan ke aplikasi React Anda. Jika Anda cek, tentu saja tidak akan terjadi apa-apa karena kita belum memberikan styling kepada komponen kita. Mari kita beri sedikit styling yang cantik pada komponennya.

Sebagai contoh, kita akan memberikan styling kepada komponen `Navbar` sederhana. Pertama, buat dulu komponen `Navbar` nya.

```jsx
const Navbar = () => {
  return(
    <div>
      <a>Home</a>
      <a>About</a>
      <a>Contact</a>
    </div>
  )
}

export default Navbar;
```

Untuk menerapkan styling pada komponen tersebut, kita harus mengimport terlebih dahulu `@emotion/styled` yang sudah kita install tadi.

```jsx
import Styled from '@emotion/styled'

const Navbar = () => {
  return(
    <div>
      <a>Home</a>
      <a>About</a>
      <a>Contact</a>
    </div>
  )
}

export default Navbar;
```

Agar lebih mudah dipahami, langsung saja ke kode komponen yang sudah saya berikan styling.

```jsx
import Styled from '@emotion/styled'

const Navbar = () => {
  return(
    <NavbarStyled>
      <a>Home</a>
      <a>About</a>
      <a>Contact</a>
    </NavbarStyled>
  )
}

// menerapkan styling pada komponen
const NavbarStyled = Styled.div`
  width: 100%;
  background-color:#fff;
  border-bottom:1px solid #eee;
  display: flex;
  
  a{
    padding:1rem 2rem;
    color:${props => props.theme.colors.};
  }
`

export default Navbar;
```

Mari kita breakdown kode tadi.

*Di baris 13* kita mendefinisikan komponen `NavbarStyled` dengan memanggil `Styled` kemduian diikuti `.div`. `div` di situ merupakan elemen yang ingin kita terapkan terhadap si komponen. Jika kita melihat kembali ke kode sebelumnya, kita memakai elemen `div` untuk membuat navbar-nya. (Jika ingin navbar Anda menggunakan tag `header` yang harus kalian tulis adalah `.header`)

*Di baris selanjutnya* kita menuliskan CSS seperti biasa untuk memberikan styling kepada komponen. **Wait**, bisa nesting? Yap, benar sekali. Emotion memungkinkan kita untuk menggunakan teknik nesting seperti yang biasa digunakan Sass dalam styling komponen, seperti yang saya terapkan pada elemen `a` di kode tersebut.

Jika Anda lihat, saya juga menuliskan javascript di dalam css tersebut.

```jsx
a{
  padding:1rem 2rem;
  color:${props => props.defaultTheme.colors.primary};
}
```

Di situ saya memanggil tema `defaultTheme` yang sudah kita definisikan di file `_App.js`, melalui props. Sehingga, elemen `a` tersebut akan memiliki warna `#ff1493`.

*Di baris 5 dan 9* kita memanggil komponen `NavbarStyled`, yaitu komponen navbar yang sudah diberikan styling untuk menggantikan komponen `div` yang sebelumnya kita pakai.

Sekarang coba save, dan lihat hasilnya. Cantik. Selamat, karang Emotion sudah berhasil diterapkan ke aplikasi React.js Anda!

Sekarang mungkin Anda bertanya-tanya, mengapa banyak orang memakain CSS-In-JS padahal styling di CSS biasa atau Styled JSX lebih mudah?

Saya akan berikan alasan kuatnya. Dengan menggunakan CSS-In-JS, Anda bisa lebih fleksibel mengatur styling komponen React Anda. Di awal, kita mendefinisikan tema `defaultTheme` dan membagikannya melalui props. Itu akan memudakna anda untu mengatur tema website Anda.

Apabila Anda ingin membuat tema dark mode untuk website, Anda bisa mendefinisikan tema baru dan memberikan pengkodisian terhadap penggunaan temanya. Contoh sederhananya bisa Anda lihat di kode berikut.

```jsx
<ThemeProvider theme={isDark ? darkTheme : defaultTheme} >
  ...
</ThemeProvider>
```

Sederhananya, kode di atas maksudnya, jika `isDark` bernilai `true` maka akan menggunakan tema `darkTheme`. Dan jika tidak, maka akan menggunakan tema `defaultTheme`. Sederhana, kan? Itulah mengapa CSS-In-JS sangat fleksibel untuk digunakan dalam styling komponen React.js.

Oke, sekian dulu tutorial kali ini. Sampai jumpa di postingan selanjutnya!
