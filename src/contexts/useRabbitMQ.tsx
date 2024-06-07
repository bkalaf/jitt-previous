import { useContxt } from '../hooks/useContxt';
import { RabbitMQContext } from './RabbitMQContext';


export function useRabbitMQ() {
    return useContxt('RabbitMQContext', RabbitMQContext);
}
