export const config = {
    port: 8080,
    rabbitmqUrl: 'amqp://guest:guest@localhost:5672/',
    exchangeName: 'notification',
    exchangeType: 'fanout'
}