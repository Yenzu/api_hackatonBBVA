use dbHackaton;
#========== ELIMINAR TABLAS SI EXISTEN
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS usuario;
SET FOREIGN_KEY_CHECKS = 1;
#========== CREAR TABLAS

CREATE TABLE usuario (    
    RUC                 VARCHAR(11)         NOT NULL,
    pass                VARCHAR(100)        NULL,    
    email               VARCHAR(80)         NULL, 
    celular             VARCHAR(20)         NULL, 
    CONSTRAINT pk_usuario00 PRIMARY KEY (RUC)
);