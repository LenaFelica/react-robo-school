const lockScroll = () => {
  document.body.classList.add('lock');
};

const unlockScroll = () => {
  document.body.classList.remove('lock');
};

export { lockScroll, unlockScroll };
