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

## Menerapkan Tema
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

Di kode tersebut kita mengimport `'emotion-theming'` yang berfungsi sebagai pengatur tema dasar yang akan kita gunakan nanti. Untuk membuat temanya, kita perlu mendefinisikan terlebih dahulu nama tema dan warnanya. Pertama, buatlah variabel theme yang berupa objek dan berisi aturan warnannya, kemudian letakan sebelum `function App`. Kodenya seperti berikut ini:

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

// menerapkan tema ke komponen App
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

## Styling React Component
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
// import emotion styled
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

// mengganti elemen 'div' dengan komponen yang telah diberi style
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

Pertama kita memanggil komponen `NavbarStyled`, yaitu komponen navbar yang sudah diberikan styling untuk menggantikan komponen `div` yang sebelumnya kita pakai. *Apa itu NavbarStyled?*, itu merupakan komponen yang sudah diberi styling dengan Emotion.

Kemudian ita mendefinisikan komponen `NavbarStyled` yang sebelumnya sudah kita panggil tadi, dengan cara memanggil `Styled` kemduian diikuti `.div`. `div` di situ merupakan elemen yang ingin kita terapkan terhadap si komponen. Jika kita melihat kembali ke kode sebelumnya, kita memakai elemen `div` untuk membuat navbar-nya. (Jika ingin navbar Anda menggunakan tag `header` yang harus kalian tulis adalah `.header`)

Untuk menerapkan style, kita tinggal menuliskan saja CSS seperti yang biasa kita kenal. *Wait*, bisa nesting? Yap, benar sekali. Emotion memungkinkan kita untuk menggunakan teknik nesting seperti yang biasa digunakan Sass dalam styling komponen, seperti yang saya terapkan pada elemen `a` di kode tersebut.

Jika Anda lihat, saya juga menuliskan javascript di dalam css tersebut.

```jsx
const NavbarStyled = Styled.div`
  ...
  
  a{
    padding:1rem 2rem;
    color:${props => props.theme.colors.};
  }
`
```

Di situ saya memanggil tema `defaultTheme` yang sudah kita definisikan di file `_App.js`, melalui props. Sehingga, elemen `a` tersebut akan memiliki warna `#ff1493`.

## Menerapkan Global Style
Tadi kita sudah berhasil untuk menerapkan style di komponen tertentu. Lalu bagaimaan untuk menerapkan global style agar dapat dipakai di semua komponen?

Untuk menerapkan global style, pertama buat sebuah file, bisa Anda beri nama `GlobalStyle` atau `Global`. Lalu isikan file tersebut dengan kode berikut ini:

```jsx
import { Global, css } from '@emotion/core';

const GlobalStyles = ()=> {
  return(
    <>
      <Global styles={css`
      
      body{
        font-size:16px;
        color:#000;
        backgroudn:#fff;
      }
      
      `}/>
    </>
  )
}

export default GlobalStyles;
```

Di kode tersebut, pertama yang kita lakukan adalah mengimport `Global` dan `css` dari `@emotion/core`. Kemudian kita buat functional component dengan nama `GlobalStyles` yang isinya me-return Global css. *Easy*, yang perlu kita lakukan selanjutnya hanyalah menyertakan komponen GlobalStyles tersebut di file `_App.js` seperti berikut.

```jsx
...

import GlobalStyles from '../components/styles/GlobalStyles'

...

export default function App({Component, pageProps}){

  return (
      <>
        <GlobalStyles/>
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    </>
  )
}
```
Sekarang coba save, dan lihat hasilnya. Cantik. Selamat, karang Emotion sudah berhasil diterapkan ke aplikasi React.js Anda!

Sekarang mungkin Anda bertanya-tanya, mengapa banyak orang memakain CSS-In-JS padahal styling di CSS biasa atau Styled JSX lebih mudah?

Saya akan berikan alasan kuatnya. Dengan menggunakan CSS-In-JS, Anda bisa lebih fleksibel mengatur styling komponen React Anda. Di awal, kita mendefinisikan tema `defaultTheme` dan membagikannya melalui props. Itu akan memudakna anda untuk mengatur tema website Anda. Semisal Anda ingin menerapkan dark mode, Anda bisa mendefinisikan tema baru dan membuat pengkondisian tema yang akan digunakan di `ThemeProvider`.

Oke, sekian dulu tutorial kali ini. Sampai jumpa di postingan selanjutnya!
