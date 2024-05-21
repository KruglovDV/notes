INVENTORY = hosts.ini

dev-server:
	 npm run start:dev --prefix server

dev-client:
	npm run start --prefix client

deploy:
	ansible-playbook -i $(INVENTORY) playbook.yml

vendor-galaxy:
	ansible-galaxy install -r requirements.yml