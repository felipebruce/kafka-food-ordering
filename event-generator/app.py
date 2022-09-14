import json
import time

from kafka import KafkaProducer

ORDER_KAFKA_TOPIC = "raw-food-ordering-topic"
ORDER_LIMIT = 30_000

producer = KafkaProducer(bootstrap_servers="kafka:29092")

print("Going to be generating order after 10 seconds")
print("Will generate one unique order every 5 seconds")
time.sleep(1)

for i in range(ORDER_LIMIT):
  data = {
    "orders": [
      {"itemName":"Hamburguer","price":15.5,"quantity":i},
      {"itemName":"Beer","price":3.75,"quantity":i},
      {"itemName":"Orange juice","price":2,"quantity":i}
    ]
  }
  producer.send(ORDER_KAFKA_TOPIC, json.dumps(data).encode("utf-8"))
  print(f"Done Sending..{i}")
