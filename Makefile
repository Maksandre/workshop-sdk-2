# Variables
SUBMODULE_DIR=substrate-proxy
THIN_CLIENT_DIR=$(SUBMODULE_DIR)/packages/thin-client
HTTP_PROXY_DIR=$(SUBMODULE_DIR)/packages/http-proxy

# Default target
all: clone-submodules install-dependencies build-thin-client

# Target to clone git submodules if not already cloned
clone-submodules:
	if [ ! -d "$(SUBMODULE_DIR)" ]; then \
		git submodule update --init --recursive; \
	fi

# Target to install dependencies in the submodule
install-dependencies: clone-submodules
	cd $(SUBMODULE_DIR) && yarn
	cd $(THIN_CLIENT_DIR) && yarn
	cd $(HTTP_PROXY_DIR) && yarn

# Target to build the thin-client package
build-thin-client: install-dependencies
	cd $(THIN_CLIENT_DIR) && yarn build

# Target to install dependencies in the root project
install-root:
	yarn

# Target to run the http-proxy in dev mode
run-proxy: install-dependencies
	cd $(HTTP_PROXY_DIR) && yarn dev

setup: all install-root

.PHONY: all clone-submodules install-dependencies build-thin-client install-root setup run-proxy
