app.controller('cadastroProdutosCtrl', cadastroProdutosCtrl);

function cadastroProdutosCtrl($http, $scope, $location, produtoService, produto,
		produtos) {
	$scope.Produto = produto.data;
	$scope.Produtos = produtos.data;

	/* GRAVA */
	$scope.gravaProduto = function() {
		produtoService.adicionarProduto($scope.Produto).success(function(data) {
			$location.path("lista-Produtos");
			if (typeof $scope.Produto.id == 'undefined') {
				alertnotice("Produto Incluido com Sucesso");
			} else {
				alertnotice("Produto Alterado com Sucesso");
			}
		}).error(function(data) {
			alerterro("Erro ao salvar Produto");
		});
	}

	/* EXCLUI */
	$scope.removerProduto = function(Produto) {
		produtoService.excluirProduto(Produto).success(function(data) {
			alertnotice("Produto Excluido com Sucesso");
			var index = $scope.Produtos.indexOf(Produto);
			$scope.Produtos.splice(index, 1);
		}).error(function(data) {
			alerterro("Erro ao excluir Produto: " + data);
		});
	}

	/* GET USER DETAIL */
	var getUser = function() {
		$http.get('/user').success(function(user) {
			$scope.user = user;
		}).error(function(error) {
			console.log("getUser error : ", error);			
		});
	};
	getUser();

	/* LOGOUT */
	$scope.logout = function() {
		$http.post('/logout').success(function(res) {
			$scope.user = null;
			$location.path("/");
		}).error(function(error) {
			console.log("Logout error : ", error);
		});
	};

}
