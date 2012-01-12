/*
		12306 Auto Login => A javascript snippet to help you auto login 12306.com.
		Copyright (C) 2011 w000.cn
		
		Includes jQuery
		Copyright 2011, John Resig
		Dual licensed under the MIT or GPL Version 2 licenses.
		http://jquery.org/license

		This program is free software: you can redistribute it and/or modify
		it under the terms of the GNU General Public License as published by
		the Free Software Foundation, either version 3 of the License, or
		(at your option) any later version.

		This program is distributed in the hope that it will be useful,
		but WITHOUT ANY WARRANTY; without even the implied warranty of
		MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
		GNU General Public License for more details.

		You should have received a copy of the GNU General Public License
		along with this program.  If not, see <http://www.gnu.org/licenses/>.

*/

// ==UserScript==  
// @name         12306 Auto refresh  
// @author       w000.cn@gmail.com
// @namespace    https://github.com/w000cn/12306Autorefresh
// @description  A javascript snippet to help you auto login 12306.com
// @include      *://dynamic.12306.cn/otsweb/*
// @require	 https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js
// ==/UserScript== 
function withjQuery(callback, safe){
	if(typeof(jQuery) == "undefined") {
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js";

		if(safe) {
			var cb = document.createElement("script");
			cb.type = "text/javascript";
			cb.textContent = "jQuery.noConflict();(" + callback.toString() + ")(jQuery);";
			script.addEventListener('load', function() {
				document.head.appendChild(cb);
			});
		}
		else {
			var dollar = undefined;
			if(typeof($) != "undefined") dollar = $;
			script.addEventListener('load', function() {
				jQuery.noConflict();
				$ = dollar;
				callback(jQuery);
			});
		}
		document.head.appendChild(script);
	} else {
		callback(jQuery);
	}
}

withjQuery(function($){
	//alert(document.body.innerHTML);
    if (document.body.innerHTML.indexOf("Access Denied") > -1)
    {
        setTimeout(location.reload(),2000);
    }
    //notify('网页刷新成功！');
}, true);
