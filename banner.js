(function(){
	$.ajax({
		type:"get",
		url:"http://mmb.ittun.com/api/getindexmenu",
		success:function(data){
			console.log(data)
			var data = data.result;
			var a = $("<a></a>");
			for(var i =0 ;i< 8;i++){
				var imghtml = data[i].img;
				console.log(data)
				var src = imghtml.match(/\"([^\"]*?)\"/g)[0].slice(1,-1);
				src = "http://m.manmanbuy.com/"+src;
				var li = document.createElement("li");
				var a = document.createElement("a");
				a.innerHTML = '<img src="'+ src +'" alt=""><p>'+ data[i].name +'</p>'
				li.appendChild(a);
				$("#bannerC").append(li);
			}

		}
	})
  
})()
hahahahahahahaha;
woshi dev shangmiang de 

我是cyx 哇哈哈