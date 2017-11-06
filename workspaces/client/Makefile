NPM_BIN_DIR := $(CURDIR)/node_modules/.bin
SNDBOX_DIR ?= ../../sndbox
PUBLIC_DIR ?= ../../public

.PHONY: clean
clean:
	rm -rf $(SNDBOX_DIR)/assets
	rm -rf $(PUBLIC_DIR)/assets

.PHONY: build
build: cpx
	$(NPM_BIN_DIR)/webpack --hide-modules -p

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
	$(NPM_BIN_DIR)/cpx "./.babelrc" ${SNDBOX_DIR}/assets

.PHONY: cpx
cpx: cpx_babelrc
	$(MAKE) __cpx -j -C $(CURDIR)

.PHONY: __cpx
__cpx: cpx_client cpx_core cpx_apps

.PHONY: cpx_client
cpx_client:
	$(NPM_BIN_DIR)/cpx "./**/*.*" ${SNDBOX_DIR}/assets/client

.PHONY: cpx_core
cpx_core:
	$(NPM_BIN_DIR)/cpx "../core/**/*.*" ${SNDBOX_DIR}/assets/core

.PHONY: cpx_apps
cpx_apps:
	$(NPM_BIN_DIR)/cpx "../apps/**/*.*" ${SNDBOX_DIR}/assets/apps

.PHONY: cpx_watch
cpx_watch: cpx_babelrc
	$(MAKE) __cpx_watch -j -C $(CURDIR)

.PHONY: __cpx_watch
__cpx_watch: cpx_watch_client cpx_watch_core cpx_watch_apps

.PHONY: cpx_watch_client
cpx_watch_client:
	$(NPM_BIN_DIR)/cpx "./**/*.*" ${SNDBOX_DIR}/assets/client --verbose --watch

.PHONY: cpx_watch_core
cpx_watch_core:
	$(NPM_BIN_DIR)/cpx "../core/**/*.*" ${SNDBOX_DIR}/assets/core --verbose --watch

.PHONY: cpx_watch_apps
cpx_watch_apps:
	$(NPM_BIN_DIR)/cpx "../apps/**/*.*" ${SNDBOX_DIR}/assets/apps --verbose --watch
