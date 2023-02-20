function checkFacebookReels(){
var reels = findByText("Reels and");
var stories = findByText("Stories");
if(reels.length > 0){
	//console.log("reels detected, hiding...");
	reels[0].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = 'none';	  
}
if(stories.length > 0){
	//console.log("story detected, hiding...");
stories[0].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = 'none';	
}	
}
window.onscroll = function() {
checkFacebookReels()
};
window.onload = function() {
checkFacebookReels()
};
function findByText(needle, haystack = document) {	
  return [...haystack.querySelectorAll('*')].reduce(
    (acc, val) => {
      for (const {
          nodeType,
          textContent,
          parentElement
        } of val.childNodes) {
        if (nodeType === 3 && textContent.includes(needle) && !(parentElement.tagName === 'SCRIPT')) acc.push(parentElement);
      }
      return acc;
    }, []
  );
}
chrome.action.setBadgeText({text: 'ON'});
chrome.action.setBadgeBackgroundColor({color: '#4688F1'});