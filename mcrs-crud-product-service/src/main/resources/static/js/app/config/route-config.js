app.config(function($routeProvider) {

	$routeProvider

	.when("/", {
		templateUrl : "view/login.html",
		controller : "cadastroProdutosCtrl",
		resolve : {
			produtos : function(produtoService) {
				return [];
			},
			produto : function(produtoService) {
				return produtoService.novoProduto();
			}
		}
	})

	.when("/lista-produtos", {
		templateUrl : "view/produto-list.html",
		controller : "cadastroProdutosCtrl",
		resolve : {
			produtos : function(produtoService) {
				return produtoService.listarProdutos();
			},
			produto : function(produtoService) {
				return produtoService.novoProduto();
			}
		}
	})

	.when("/form-produto", {
		templateUrl : "view/produto-form.html",
		controller : "cadastroProdutosCtrl",
		resolve : {
			produtos : function(produtoService) {
				return [];
			},
			produto : function(produtoService) {
				return produtoService.novoProduto();
			}
		}
	})

	.when("/form-produto/:id", {
		templateUrl : "view/produto-form.html",
		controller : "cadastroProdutosCtrl",
		resolve : {
			produtos : function(produtoService) {
				return [];
			},
			produto : function(produtoService, $route) {
				return produtoService.getProduto($route.current.params.id);
			},
			message : function() {
				return "Produto salvo";
			}
		}
	})

	.otherwise({
		redirectTo : '/lista-produtos'
	});

	;

});