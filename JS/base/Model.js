/*
var model = Model({
	resourceName:'表名'
})
*/
window.Model = function(options){
	let resourceName = options.resourceName
	return{
		init:function(){
			var APP_ID = 'gHMOm7VinvnlhdApv0ewwGMr-gzGzoHsz'
		    var APP_KEY = 'PNqg6CmtkIEWlI9A3iKjjuWy'
		    AV.init({ appId: APP_ID, appKey: APP_KEY })
		},
		fetch:function(){
			var query = new AV.Query(resourceName);
			return query.find()
		},
		save:function(object){
			var X = AV.Object.extend(resourceName);
			var x = new X();
			return x.save(object)
		}
	}
}