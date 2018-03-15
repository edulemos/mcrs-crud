package com.edulemos.mcrscrud.service;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edulemos.mcrscrud.model.Produto;
import com.edulemos.mcrscrud.repository.ProdutoRepository;

@Service
public class ProdutoService {

	@Autowired
	private ProdutoRepository ProdutoRepository;

	public Produto save(Produto produto) {
		if(produto.getId() == null || produto.getId() == 0){
			produto.setDataCadastro(new Date());
		}
		return ProdutoRepository.save(produto);
	}

	public Produto findById(Integer id) {
		return ProdutoRepository.findOne(id);
	}

	public Iterable<Produto> findAll() {
		return ProdutoRepository.findAll();
	}

	public void delete(Integer id) {
		ProdutoRepository.delete(id);
	}

}
