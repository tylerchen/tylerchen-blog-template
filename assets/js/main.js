function load(url, callback) {  
        var xhr;  
          
        if(typeof XMLHttpRequest !== 'undefined') xhr = new XMLHttpRequest();  
        else {  
            var versions = ["MSXML2.XmlHttp.5.0",   
                            "MSXML2.XmlHttp.4.0",  
                            "MSXML2.XmlHttp.3.0",   
                            "MSXML2.XmlHttp.2.0",  
                            "Microsoft.XmlHttp"]  
  
             for(var i = 0, len = versions.length; i < len; i++) {  
                try {  
                    xhr = new ActiveXObject(versions[i]);  
                    break;  
                }  
                catch(e){}  
             } // end for  
        }  
          
        xhr.onreadystatechange = ensureReadiness;  
          
        function ensureReadiness() {  
            if(xhr.readyState < 4) {  
                return;  
            }  
              
            if(xhr.status !== 200) {  
                return;  
            }  
  
            // all is well    
            if(xhr.readyState === 4) {  
                callback(xhr);  
            }             
        }  
          
        xhr.open('GET', url, true);  
        xhr.send('');  
    }
function getURLParameter(name) {
	return decodeURI((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [
			, null ])[1]);
}
function markdownLoad(){
	var url = getURLParameter("md");
	{
		if (url) {
			if (url == "null") {
				url = "readme.md";
			}
		} else {
			url = "readme.md";
		}
	}
	
	try {
		load(url, function(xhr) {
			if (xhr && xhr.responseText) {
				try {
					document.getElementById("bodyColumn").innerHTML=markdown.toHTML(xhr.responseText);
				} catch (err) {
				}
			}
		});
	} catch (err) {
	}
	
	try {
		var aArr=document.getElementsByTagName("a");
		for(var i=0;i<aArr.length;i++){
			var el=aArr[i];
			if (el.href && el.href.indexOf("md=" + url) > -1) {
				el.parentNode.className += ' active';
			}
		}
	} catch (err) {
	}
}
window.onload = markdownLoad;
