package lt.ocirama.labsystem.services;

import java.util.List;
import lt.ocirama.labsystem.converters.OrderConverter;
import lt.ocirama.labsystem.model.OrderEntity;
import lt.ocirama.labsystem.model.dto.Order;
import lt.ocirama.labsystem.repositories.OrderRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final OrderConverter orderConverter;


    public OrderService(OrderRepository orderRepository, OrderConverter orderConverter) {
        this.orderRepository = orderRepository;
        this.orderConverter = orderConverter;
    }

    @GetMapping
    public List<String> getOrders(){
        List<OrderEntity> orderEntities = orderRepository.findAll();
        List<String> result = orderConverter.convert(orderEntities);
        return result;
    }
}
