## ์คํ ๋ฐฉ๋ฒ

[๐๐ป ๊ฒฐ๊ณผ๋ฌผ ๋ณด๋ฌ ๊ฐ๊ธฐ](https://peaceful-wright-fb293c.netlify.app/)

---

<br/>

## ๊ตฌํํ ๋ฐฉ๋ฒ๊ณผ ์ด์ 

### Toggle

- ํ ๊ธ์ on/off ๋ ๊ฐ์ง ์ํ์ ์ ํ์ ๊ตฌํํ๊ธฐ ์ํด useState๋ฅผ ์ฌ์ฉํ์์ต๋๋ค.

### Modal

- ํ ๊ธ๊ณผ ๋น์ทํ๊ฒ ๋ชจ๋ฌ open/close ๋ ๊ฐ์ง ์ํ์ ์ ํ์ ๊ตฌํํ๊ธฐ ์ํด useState๋ฅผ ์ฌ์ฉํ์๊ณ , UX๋ฅผ ์ํด X๋ฒํผ๊ณผ ๋ชจ๋ฌ์ฐฝ ๋ฐ๊นฅ์ ํด๋ฆญํ  ๋๋ ๋ชจ๋ฌ์ฐฝ์ด ๋ซํ๋๋ก ํ์์ต๋๋ค.

### Tab

- ๊ฐ๊ฐ์ ํญ์ index๋ฅผ ์ด์ฉํ์ฌ ๊ตฌ๋ถํ์๊ณ  ํ์ฌํญ์ด๋ฉด className์ ์ถ๊ฐํด ์คํ์ผ์ ๋ณํ๋ฅผ ์ฃผ์์ต๋๋ค.

### Tag

- input์ฐฝ์ ํ์คํธ๋ฅผ ์๋ ฅ ํ Enterํค๋ฅผ ๋๋ฅด๋ฉด ํ๊ทธ๊ฐ ์ถ๊ฐ๋๋๋ก ํ๊ธฐ ์ํด onKeyUp ์ด๋ฒคํธ๋ฅผ ์ด์ฉํ์ต๋๋ค. ํ๊ทธ๋ฅผ ์ถ๊ฐํ  ๋๋ ์ด๋ฏธ ์๋ ฅ๋์ด ์๋ ํ๊ทธ๋ฉด ์ถ๊ฐ๋์ง ์๋๋ก ํ์๊ณ , ์๋ฌด๊ฒ๋ ์๋ ฅํ์ง ์์์ ๋๋ ์ถ๊ฐ๋์ง ์๋๋ก ๊ตฌํํ์์ต๋๋ค. ๊ทธ๋ฆฌ๊ณ  filter๋ฅผ ์ด์ฉํด X ๋ฒํผ์ ๋๋ฅด๋ฉด ํด๋น ํ๊ทธ๊ฐ ์ญ์ ๋๋๋ก ํ์์ต๋๋ค.

### AutoComplete

- input๊ฐ์ ๋ง๋ ์ต์๋ง dropdown์ผ๋ก ๋ณด์ผ ์ ์๋๋ก filter๋ฅผ ์ด์ฉํ์๊ณ , ํด๋น ํญ๋ชฉ์ ํด๋ฆญํ์์ ๋ ์ ํ์ด ๋๊ณ , X ๋ฒํผ์ ๋๋ฅด๋ฉด ์๋ ฅ ๋จ์ด๊ฐ ์ง์์ง๋๋ก ํ์์ต๋๋ค. UX๋ฅผ ์ํด ํค๋ณด๋ ๋ฐฉํฅํค๋ก dropdown ๋ชฉ๋ก์ ์ด๋ํ  ์ ์๊ณ , ์ํฐํค๋ฅผ ๋๋ฅด๋ฉด ์ ํ์ด ๋๋๋ก ๊ตฌํํ์์ต๋๋ค.

### ClickToEdit

- ์กฐ๊ฑด๋ถ ๋ ๋๋ง์ ์ด์ฉํ์ฌ ์์ ์ด ๊ฐ๋ฅํ ์ํ์ผ ๋๋ onChange์ onBlur์ด๋ฒคํธ๋ฅผ ์คํ์ํต๋๋ค. inputํ๊ทธ์์ focus๊ฐ ๋ฒ์ด๋ฌ์ ๊ฒฝ์ฐ ์์ ๋ ํ์คํธ๊ฐ ๊ฒฐ๊ณผ๊ฐ์ผ๋ก ๋์ค๊ฒ ํ์์ต๋๋ค.

---

<br/>

## ๊ตฌํํ๋ฉด์ ์ด๋ ค์ ๋ ์ ๊ณผ ํด๊ฒฐ ๋ฐฉ๋ฒ

- AutoComplete์์ ์๋์์ฑ ์ถ์ฒ ๋ชฉ๋ก์ ๋ณด์ฌ์ฃผ๋ ๋ฐฉ๋ฒ์ ์๊ฐํ๋ ๊ฒ ์ด๋ ค์ ์ผ๋ ์ ๊ทํํ์์ ์ด์ฉํด ํด๊ฒฐํ์์ต๋๋ค.
- AutoComplete์์ ํค๋ณด๋๋ฅผ ์ด์ฉํด dropdown ๋ชฉ๋ก์ ์ ์ดํ๋ ๋ฐฉ๋ฒ์ ์๊ฐํ๋ ๊ฒ ์ด๋ ค์ ์ผ๋ ๊ฒ์์ ํตํด ํด๊ฒฐํ์์ต๋๋ค.
