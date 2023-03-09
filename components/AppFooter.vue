<template>
  <footer class="footer-wrap">
    <p class="create-box">Crafted with by zenglbg</p>
    <hr />
    <div class="copyright-box">
      <p class="copyright-box-text">
        Copyright © 2023 zenglbg. and its affiliates.
      </p>
      <nav>
        <a href="mailto:zenglbg@gmail.com">Contact Me</a>
      </nav>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer-wrap {
  margin: 76px auto 38px;
  width: 1000px;

  .create-box {
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: center;
    font-size: 1rem;
    font-weight: 600;
  }

  hr {
    box-sizing: content-box;
    margin: 0.47rem 0px 0.94rem;
    padding: 0px;
    width: 100%;
    height: 1px;
    background: linear-gradient(
        to right,
        rgb(102, 102, 102) 50%,
        rgba(255, 255, 255, 0) 40%
      )
      center top / 3px 1px repeat-x;
    border: 0px;
  }

  .copyright-box {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    .copyright-box-text {
      color: rgb(28, 30, 33);
      font-size: 14px;
    }

    nav {
      a {
        color: rgb(150, 150, 150);
        text-decoration: none;
        font-size: 16px;
      }
    }
  }
}
</style>
