sudo docker run --name mongodb -p 27017:27017 -dti mongo
sudo docker run --name cache-store -p 6379:6379 -dti redis
cd auth_server && npm start