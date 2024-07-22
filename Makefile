all: install-root

# Target to install dependencies in the root project
install-root:
	yarn

# Target to run the http-proxy in dev mode
proxy:
	cd $(HTTP_PROXY_DIR) && yarn dev

.PHONY: all install-root proxy
