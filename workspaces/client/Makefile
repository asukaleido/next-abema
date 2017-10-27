NPM_BIN_DIR := $(CURDIR)/node_modules/.bin
SNDBOX_DIR ?= ../../sndbox
PUBLIC_DIR ?= ../../public

.PHONY: clean
clean:
	rm -rf $(SNDBOX_DIR)/client
	rm -rf $(PUBLIC_DIR)/client

.PHONY: build
build: cpx
	$(NPM_BIN_DIR)/webpack --hide-modules

.PHONY: watch
watch: cpx
	$(MAKE) __watch -j -C $(CURDIR)

.PHONY: __watch
__watch: webpack_watch cpx_watch

.PHONY: webpack_watch
webpack_watch:
	$(NPM_BIN_DIR)/webpack --hide-modules --watch

.PHONY: cpx_babelrc
cpx_babelrc:
	$(NPM_BIN_DIR)/cpx "./.babelrc" ${SNDBOX_DIR}/client

.PHONY: cpx
cpx: cpx_babelrc
	$(MAKE) __cpx -j -C $(CURDIR)

.PHONY: __cpx
__cpx: cpx_client cpx_core cpx_apps

.PHONY: cpx_client
cpx_client:
	$(NPM_BIN_DIR)/cpx "src/**/*.*" ${SNDBOX_DIR}/client/client/src

.PHONY: cpx_core
cpx_core:
	$(NPM_BIN_DIR)/cpx "../core/src/**/*.*" ${SNDBOX_DIR}/client/core/src

.PHONY: cpx_apps
cpx_apps:
	$(NPM_BIN_DIR)/cpx "../apps/src/**/*.*" ${SNDBOX_DIR}/client/apps/src

.PHONY: cpx_watch
cpx_watch: cpx_babelrc
	$(MAKE) __cpx_watch -j -C $(CURDIR)

.PHONY: __cpx_watch
__cpx_watch: cpx_watch_client cpx_watch_core cpx_watch_apps

.PHONY: cpx_watch_client
cpx_watch_client:
	$(NPM_BIN_DIR)/cpx "src/**/*.*" ${SNDBOX_DIR}/client/client/src --verbose --watch

.PHONY: cpx_watch_core
cpx_watch_core:
	$(NPM_BIN_DIR)/cpx "../core/src/**/*.*" ${SNDBOX_DIR}/client/core/src --verbose --watch

.PHONY: cpx_watch_apps
cpx_watch_apps:
	$(NPM_BIN_DIR)/cpx "../apps/src/**/*.*" ${SNDBOX_DIR}/client/apps/src --verbose --watch
