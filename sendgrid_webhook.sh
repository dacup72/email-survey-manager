function localtunnel {
  lt -s jnuxncusneyoitmmsefmmm --port 8080
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done

# add this url to SendGrid mail settings to test it in development environment
# http://jnuxncusneyoitmmsefmmm.localtunnel.me/api/surveys/webhooks