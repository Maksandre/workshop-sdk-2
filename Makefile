# Variables
SUBMODULE_DIR=substrate-proxy
THIN_CLIENT_DIR=$(SUBMODULE_DIR)/packages/thin-client

# Default target
all: install-submodule install-dependencies build-thin-client

# Target to install git submodules
install-submodule:
	git submodule update --init --recursive

# Target to install dependencies in the submodule
install-dependencies: install-submodule
	cd $(SUBMODULE_DIR) && yarn
	cd $(THIN_CLIENT_DIR) && yarn

# Target to build the thin-client package
build-thin-client: install-dependencies
	cd $(THIN_CLIENT_DIR) && yarn build

# Target to install dependencies in the root project
install-root:
	yarn

# Combined target for convenience
setup: all install-root

.PHONY: all install-submodule install-dependencies build-thin-client install-root setup
