NPM_BIN_DIR := $(CURDIR)/node_modules/.bin
SNDBOX_DIR ?= ../../sndbox
PUBLIC_DIR ?= ../../public

.PHONY: clean
clean:
	rm -rf $(SNDBOX_DIR)/nodejs
	rm -rf $(PUBLIC_DIR)/nodejs

.PHONY: build
build: cpx
	$(NPM_BIN_DIR)/babel -x .js,.ts,.tsx ${SNDBOX_DIR}/nodejs -d ${PUBLIC_DIR}/nodejs --copy-files

.PHONY: watch
watch: cpx
	$(MAKE) __watch -j -C $(CURDIR)

.PHONY: __watch
__watch: babel_watch cpx_watch

.PHONY: babel_watch
babel_watch:
	$(NPM_BIN_DIR)/babel -x .js,.ts,.tsx ${SNDBOX_DIR}/nodejs -d ${PUBLIC_DIR}/nodejs --copy-files --watch

.PHONY: cpx_babelrc
cpx_babelrc:
	$(NPM_BIN_DIR)/cpx "./.babelrc" ${SNDBOX_DIR}/nodejs

.PHONY: cpx
cpx: cpx_babelrc
	$(MAKE) __cpx -j -C $(CURDIR)

.PHONY: __cpx
__cpx: cpx_server cpx_core cpx_apps

.PHONY: cpx_server
cpx_server:
	$(NPM_BIN_DIR)/cpx "./**/*.*" ${SNDBOX_DIR}/nodejs/server

.PHONY: cpx_core
cpx_core:
	$(NPM_BIN_DIR)/cpx "../core/**/*.*" ${SNDBOX_DIR}/nodejs/core

.PHONY: cpx_apps
cpx_apps:
	$(NPM_BIN_DIR)/cpx "../apps/**/*.*" ${SNDBOX_DIR}/nodejs/apps

.PHONY: cpx_watch
cpx_watch: cpx_babelrc
	$(MAKE) __cpx_watch -j -C $(CURDIR)

.PHONY: __cpx_watch
__cpx_watch: cpx_watch_server cpx_watch_core cpx_watch_apps

.PHONY: cpx_watch_server
cpx_watch_server:
	$(NPM_BIN_DIR)/cpx "./**/*.*" ${SNDBOX_DIR}/nodejs/server --verbose --watch

.PHONY: cpx_watch_core
cpx_watch_core:
	$(NPM_BIN_DIR)/cpx "../core/**/*.*" ${SNDBOX_DIR}/nodejs/core --verbose --watch

.PHONY: cpx_watch_apps
cpx_watch_apps:
	$(NPM_BIN_DIR)/cpx "../apps/**/*.*" ${SNDBOX_DIR}/nodejs/apps --verbose --watch
