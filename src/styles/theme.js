export const theme = {
  colors: {
    primary: "",
    secondary: "",
    tertiary: "#dbdbdb",
    white: "#fff"
  },
  menuWidth: "204px",
  maxContentWidth: "616px",
  skeleton: `
      background: #ebebeb;
      position: relative;
      overflow: hidden;
  
      &::after {
        display: block;
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        transform: translateX(-100%);
        background: linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.4),
          transparent
        );
        animation: loading 1.5s infinite;
      }
  
      @keyframes loading {
        100% {
          transform: translateX(100%);
        }
      }
    `
};
