/**
 * TODO list:
 * 1. validate card numbers
 * 2. validate private link
 * 3. validate mono link
 * 4. validate revolute link
 * 4. validate fallback link (not mono)
 * 5. update meta description
 * 6. update donate description
 */

 (()=>{let e;const t=e=>{e.classList.remove("copied")};(()=>{const c=document.getElementById("card-number-block");c.onclick=(()=>{(c=>{clearTimeout(e),c.classList.add("copied");const a=document.getElementById("card-number").innerText.replaceAll(/\s/g,"");navigator.clipboard.writeText(a),navigator.vibrate&&navigator.vibrate(50),e=setTimeout(()=>{t(c)},1e4)})(c)})})()})();
