# Цель build: собирает Docker-образ с тегом rental-bot-client-search:volumes
build:
	docker build -t rental-bot-client-search:volumes .

# Цель app: запускает контейнер приложения в фоновом режиме с портом 8080 и удаляет контейнер после его остановки
app:
	docker run -d -p8080:8080 --rm --name rental-bot rental-bot-client-search:volumes

# Цель stop-app: останавливает контейнер приложения rental-bot
stop-app:
	docker stop rental-bot

# Цель start-app: запускает остановленный контейнер приложения rental-bot
start-app:
	docker start rental-bot

# Цель run-dev: запускает контейнер для разработки с пробросом порта 8080 и работы в режиме dev-mode
run-dev:
	docker run -d -p 8080:8080 -v "/Users/nikolajmatuhin/Desktop/build-search/Rental-Bot-Helper":/app -v /app/node_modules --name rental-bot-client-dev rental-bot-client-search:volumes

# Цель stop-dev: останавливает контейнер для разработки rental-bot-client-dev
stop-dev:
	docker stop rental-bot-client-dev

# Цель start-dev: запускает остановленный контейнер для разработки rental-bot-client-dev
start-dev:
	docker start rental-bot-client-dev