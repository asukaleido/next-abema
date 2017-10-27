NPM_BIN_DIR := $(CURDIR)/node_modules/.bin
SRC_CLIENT_WORKSPACE_DIR := $(CURDIR)/workspaces/client
SRC_SERVER_WORKSPACE_DIR := $(CURDIR)/workspaces/server

.PHONY: clean_client
clean_client:
	$(MAKE) clean -C $(SRC_CLIENT_WORKSPACE_DIR)

.PHONY: clean_server
clean_server:
	$(MAKE) clean -C $(SRC_SERVER_WORKSPACE_DIR)

.PHONY: build_client
build_client: clean_client
	$(MAKE) build -C $(SRC_CLIENT_WORKSPACE_DIR)

.PHONY: build_server
build_server: clean_server
	$(MAKE) build -C $(SRC_SERVER_WORKSPACE_DIR)

.PHONY: build
build: build_client build_server

.PHONY: watch_client
watch_client: clean_client
	$(MAKE) watch -C $(SRC_CLIENT_WORKSPACE_DIR)

.PHONY: watch_server
watch_server: clean_server
	$(MAKE) watch -C $(SRC_SERVER_WORKSPACE_DIR)

.PHONY: watch
watch:
	$(MAKE) __watch -j -C $(CURDIR)

.PHONY: __watch
__watch: watch_client watch_server

.PHONY: docker-compose-build
docker-compose-build:
	docker-compose build

.PHONY: docker-compose-up
docker-compose-up:
	docker-compose up $(SERVICE_NAME)
