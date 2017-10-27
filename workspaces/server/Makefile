NPM_BIN_DIR := $(CURDIR)/node_modules/.bin
SNDBOX_DIR ?= ../../sndbox
PUBLIC_DIR ?= ../../public

.PHONY: clean
clean:
	rm -rf $(SNDBOX_DIR)/server
	rm -rf $(PUBLIC_DIR)/server

.PHONY: build
build: cpx
	$(NPM_BIN_DIR)/babel -x .js,.ts,.tsx ${SNDBOX_DIR}/server -d ${PUBLIC_DIR}/server --copy-files

.PHONY: watch
watch: cpx
	$(MAKE) __watch -j -C $(CURDIR)

.PHONY: __watch
__watch: babel_watch cpx_watch

.PHONY: babel_watch
babel_watch:
	$(NPM_BIN_DIR)/babel -x .js,.ts,.tsx ${SNDBOX_DIR}/server -d ${PUBLIC_DIR}/server --copy-files --watch

.PHONY: cpx_babelrc
cpx_babelrc:
	$(NPM_BIN_DIR)/cpx "./.babelrc" ${SNDBOX_DIR}/server

.PHONY: cpx
cpx: cpx_babelrc
	$(MAKE) __cpx -j -C $(CURDIR)

.PHONY: __cpx
__cpx: cpx_server cpx_core cpx_apps

.PHONY: cpx_server
cpx_server:
	$(NPM_BIN_DIR)/cpx "src/**/*.*" ${SNDBOX_DIR}/server/server/src

.PHONY: cpx_core
cpx_core:
	$(NPM_BIN_DIR)/cpx "../core/src/**/*.*" ${SNDBOX_DIR}/server/core/src

.PHONY: cpx_apps
cpx_apps:
	$(NPM_BIN_DIR)/cpx "../apps/src/**/*.*" ${SNDBOX_DIR}/server/apps/src

.PHONY: cpx_watch
cpx_watch: cpx_babelrc
	$(MAKE) __cpx_watch -j -C $(CURDIR)

.PHONY: __cpx_watch
__cpx_watch: cpx_watch_server cpx_watch_core cpx_watch_apps

.PHONY: cpx_watch_server
cpx_watch_server:
	$(NPM_BIN_DIR)/cpx "src/**/*.*" ${SNDBOX_DIR}/server/server/src --verbose --watch

.PHONY: cpx_watch_core
cpx_watch_core:
	$(NPM_BIN_DIR)/cpx "../core/src/**/*.*" ${SNDBOX_DIR}/server/core/src --verbose --watch

.PHONY: cpx_watch_apps
cpx_watch_apps:
	$(NPM_BIN_DIR)/cpx "../apps/src/**/*.*" ${SNDBOX_DIR}/server/apps/src --verbose --watch
