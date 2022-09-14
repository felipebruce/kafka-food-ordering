const {Kafka} = require('kafkajs');


(async () => {
    let receivedOrdersQuantity = 0;
    let receivedRevenue = 0;

    const kafka = new Kafka({
        clientId: 'analytics-client-id',
        brokers: ['kafka:29092'],
    });
    const consumer = kafka.consumer({groupId: 'registred-order'});

    await consumer.subscribe({
        topic: 'registred-order'
    });

    await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
        receivedOrdersQuantity++;
        const order = JSON.parse(message.value);

        order.items.forEach(item => receivedRevenue+= item.price * item.quantity);
        console.table({'Orders quantity': receivedOrdersQuantity, 'Received revenue': receivedRevenue});
    },
    });
    console.log('Running analytics backend');
})();