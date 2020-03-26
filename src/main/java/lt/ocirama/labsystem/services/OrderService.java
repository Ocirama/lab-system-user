package lt.ocirama.labsystem.services;

import java.util.List;
import lt.ocirama.labsystem.converters.OrderConverter;
import lt.ocirama.labsystem.converters.OrderEntityConverter;
import lt.ocirama.labsystem.model.entities.OrderEntity;
import lt.ocirama.labsystem.model.dto.Order;
import lt.ocirama.labsystem.model.dto.OrderSave;
import lt.ocirama.labsystem.repositories.OrderRepository;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    private final OrderConverter orderConverter;
    private final OrderEntityConverter orderEntityConverter;
    private final OrderRepository orderRepository;

    public OrderService(OrderConverter orderConverter, OrderEntityConverter orderEntityConverter, OrderRepository orderRepository) {
        this.orderConverter = orderConverter;
        this.orderEntityConverter = orderEntityConverter;
        this.orderRepository = orderRepository;
    }


    public List<Order> getAll() {
        List<OrderEntity> orders = orderRepository.findAll();

        return orderConverter.convert(orders);
    }

    public Order getOrder(Integer id) {
        OrderEntity order = orderRepository.findOneById(id);

        return orderConverter.convert(order);
    }

    public Order save(OrderSave order) {
        OrderEntity orderEntity = orderEntityConverter.convert(order);
        OrderEntity result = orderRepository.save(orderEntity);

        return orderConverter.convert(result);
    }

    public void delete(Integer id) {
        orderRepository.deleteById(id);
    }
}
