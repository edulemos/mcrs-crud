CREATE TABLE
    tb_produto
    (
        id INT NOT NULL  AUTO_INCREMENT,
        nome VARCHAR(255) NOT NULL,
        descricao VARCHAR(255),
		data_cadastro DATE NOT NULL,
        url_imagem VARCHAR(255),	
        PRIMARY KEY (id)
    )
    ENGINE=InnoDB DEFAULT CHARSET=utf8;
