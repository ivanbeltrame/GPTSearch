const inputText = document.getElementById("inputText");
const reasonCheck = document.getElementById("btn-check-reason");
const webCheck = document.getElementById("btn-check-web");
const temporaryCheck = document.getElementById("btn-check-temporary");


document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && event.ctrlKey) {    
        let baseURL = "https://chatgpt.com/?ref=ext&";
        let hints = [];

        let encodedInputText = encodeURIComponent(inputText.value);
        baseURL += "q=" + encodedInputText;

        if (reasonCheck.checked) {
            hints.push("reason")
        }
        if (webCheck.checked) {
            hints.push("search")
        }

        if (hints.length > 0) {
            baseURL += "&hints=" + hints.join(",")
        }

        if (temporaryCheck.checked) {
            baseURL += "&temporary-chat=true"
        }

        window.location.href = baseURL;
    }
});  