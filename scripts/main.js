!function(i){"use strict";var d=i(".favorite");d.on("click",function(){i(this).find(".liked").is(":visible")?(i(this).find(".liked").hide(),i(this).find(".unliked").show()):(i(this).find(".unliked").hide(),i(this).find(".liked").show())})}(jQuery);