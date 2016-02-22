var Singleton = (function($,window,document){
	var instance = null;
	function getInstance(id, mensaje){
		var container = document.getElementById('container');
		var div = document.createElement('div');
		return {
			display: function(){
				div.innerText = mensaje;
				div.id = id;
				container.appendChild(div);
			}
		};
	}	
	return{
		init:function(id,nombre){
			if(instance === null){
				instance = getInstance(id,nombre);
				return instance;
			}
			return instance;
		}
	};
})($,window,document);
