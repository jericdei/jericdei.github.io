start:
    docker compose up -d
stop:
    docker compose down
restart: stop && start
rebuild:
    docker compose up -d --build --force-recreate --remove-orphans
