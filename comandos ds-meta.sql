github.com/devsuperior/sds-dsmeta
http://localhost:8080/h2-console

instalar yarn
-------------
npm install --location=global yarn ou npm install --global yarn

criando projeto react frontend
==============================
yarn create vite frontend --template react-ts

depos de criado o projeto é necessario baixar as dependecias para isso vai na pasta frinend (terminal git bash) e executa o comando yarn

para iniciar o servidor - yarn dev
 http://localhost:3000


Criar projeto spring
====================
https://start.spring.io/

dependencias - web - jpa - hs - security

Salvar no git hub
-----------------
git init
git add .
git commit -m "Project created"
git branch -M main
git remote add origin git@github.com:1antonio2aguiar/dsmeta.git
git push -u origin main

trabalhar com datas
-------------------
yarn add react-datepicker@4.8.0 @types/react-datepicker@4.4.2


Configurando CORS backend, tem que ser feito porque o back vai ficar em um local diferente do front.

foi criada a classe SecurityConfig em com.devsuperior.dsmeta.dsmeta.config
