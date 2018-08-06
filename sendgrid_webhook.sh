function localtunnel {
  lt -s jnuxncusneyoitmmsefmmm --port 8080
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done

# http://jnuxncusneyoitmmsefmmm.localtunnel.me/api/surveys/webhooks