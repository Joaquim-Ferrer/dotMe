let moreNavOpen = false;

const toggleMoreNav = () => {
  if (!moreNavOpen) {
    document.getElementById("navbar").style.height = "10rem";
    document.getElementById("navbar__arrow").style.transform = "rotate(180deg)";
    moreNavOpen = true;
  } else {
    document.getElementById("navbar").style.height = "5rem";
    document.getElementById("navbar__arrow").style.transform = "rotate(0deg)";
    moreNavOpen = false;
  }
};
