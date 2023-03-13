<template>
  <nav class="nav-box">
    <a href="/" class="logo">
      <img
        src="/images/blog/icon-logo/extzenglbg.png"
        alt=""
    /></a>

    <div class="nav-list">
      <a href="/"> Home</a>
      <a href="https://img.zlbg.cc"> Blog</a>
      <NuxtLink to="/chat/chat">Chat</NuxtLink>
      <a href="/"> Archive</a>
      <a href="/"> Music</a>
      <a href="/"> About</a>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.nav-box {
  box-sizing: border-box;
  position: fixed;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  padding: 0px 38px;
  height: 72px;
  background: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 40px -8px;
  z-index: 200;
  opacity: 0.9;
  transition: background 250ms linear 0s;

  .logo {
    height: 46px;
    cursor: pointer;
    img {
      height: inherit;
    }
  }

  .nav-list {
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: center;
    margin-left: auto;

    a {
      position: relative;
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      margin-left: 1.6rem;
      padding: 0px 0.2rem;
      height: 4.5rem;
      font-size: 1rem;
      color: rgb(102, 102, 102);
      transition: color 300ms ease 0s;
    }
  }
}
</style>
