// let fontselect = document.getElementById("fontSelect");
// 
export default function fontChange(fontName) {
  let body_org = document.getElementsByTagName("body")[0];
  let fontselect = document.getElementById("fontSelect");
  fontselect.addEventListener("click", () => {
    if (fontselect.value == fontName) {
      //   body_org.style.fontFamily = fontName +""+ "!important";
      body_org.setAttribute('style', 'font-family:' + fontName + ' ' + '!important');
      // console.log(fontName);
    } else if (fontselect.value == "Defualt") {
      //   body_org.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif '!important'";
      body_org.setAttribute('style', 'font-family:' + 'sans-serif, Tahoma, Geneva, Verdana' + ' ' + '!important');
      // console.log('Defualt');
    }
  })
}
// fontChange('iransans')
// fontChange('estedad')
export { fontChange };