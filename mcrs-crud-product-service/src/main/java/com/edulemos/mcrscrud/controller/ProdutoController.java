package com.edulemos.mcrscrud.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.edulemos.mcrscrud.model.Produto;
import com.edulemos.mcrscrud.service.ProdutoService;

@RestController
@RequestMapping(value = "/api/produtos", produces = MediaType.APPLICATION_JSON_VALUE)
public class ProdutoController {

	@Autowired
	private ProdutoService ProdutoService;

	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Produto> save(@RequestBody Produto Produto) {
		return ResponseEntity.ok(ProdutoService.save(Produto));
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Produto> findById(@PathVariable("id") Integer id) {
		return ResponseEntity.ok(ProdutoService.findById(id));
	}

	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<Iterable<Produto>> findAll() {
		return ResponseEntity.ok().body(ProdutoService.findAll());
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> delete(@PathVariable("id") Integer id) {
		ProdutoService.delete(id);
		return ResponseEntity.ok().build();
	}
	

}
