package com.edulemos.mcrscrud.repository;

import org.springframework.data.repository.CrudRepository;

import com.edulemos.mcrscrud.model.Produto;

public interface ProdutoRepository extends CrudRepository<Produto, Integer> {
	
	
}