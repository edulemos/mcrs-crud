# mcrs-crud
crud com spring cloud microservices
 
### Para Executar:

 * Import maven projects
   * mcrs-crud-config-service
   * mcrs-crud-discovery-service                                      
   * mcrs-crud-product-service  

 * set spring datasource
   * /mcrs-crud-product-service/src/main/resources/application.yml

 * run ddl create table script
   * /mcrs-crud-product-service/src/main/resources/script.sql

 * run mcrs-crud-config-service
 
 * run mcrs-crud-discovery-service 
 
 * run mcrs-crud-product-service 

 * acessar url
   * http://localhost:9093/google/login
