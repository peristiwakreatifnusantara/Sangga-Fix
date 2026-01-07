export const menu = {
  open: {
    width: '250px',
    height: '300px',
    top: '-25px',
    right: '-25px',
    transition: { duration: 0.75, type: 'tween', ease: [0.76, 0, 0.24, 1] },
  },

  closed: {
    width: '55px',
    height: '40px',
    top: '0px',
    right: '-4px',
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: 'tween',
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
export const links = [
  {
    url: '/profile',
    linkTo: 'Profile',
  },
  {
    url: '/business',
    linkTo: 'Bidang Usaha',
  },
  {
    url: '/services',
    linkTo: 'Layanan & Solusi',
  },
];
