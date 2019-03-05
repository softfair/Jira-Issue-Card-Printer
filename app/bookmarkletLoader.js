(function(){
        var head = document.getElementsByTagName('head')[0];
        var scriptElement = document.createElement('script');
        scriptElement.src = 'https://github.com/softfair/Jira-Issue-Card-Printer/bookmarklet.js';
        head.appendChild(scriptElement);
        head.removeChild(scriptElement);
})();
