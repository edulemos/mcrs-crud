app.factory("produtoService",function($http, config){
	
	var _listarProdutos = function(){		
		return $http.get(config.baseUrl + "/produtos");
	};
	
	var _getProduto = function (id) {
		console.log(config.baseUrl + "/produtos/" + id)
		return $http.get(config.baseUrl + "/produtos/" + id);
	};
	
	var _adicionarProduto = function (Produto) {
		return $http.post(config.baseUrl + "/produtos", Produto);
	};
	
	var _excluirProduto = function (Produto) {
		return $http.delete(config.baseUrl + "/produtos/" + Produto.id)
	};
	
	var _novoProduto = function () {
		return {			
		}
	};
	
	return{
		listarProdutos: _listarProdutos,
		getProduto: _getProduto,
		novoProduto: _novoProduto,
		adicionarProduto: _adicionarProduto,
		excluirProduto: _excluirProduto
	}
	
});

