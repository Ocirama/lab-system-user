package lt.ocirama.labsystem.converters;

import lt.ocirama.labsystem.model.entities.OrderEntity;
import lt.ocirama.labsystem.model.dto.Order;
import org.springframework.stereotype.Component;

import java.util.List;

import static java.util.stream.Collectors.toList;

@Component
public class OrderConverter {
    public List<Order> convert(List<OrderEntity> orders) {
        return orders.stream()
                .map(this::convert)
                .collect(toList());
    }

    public Order convert(OrderEntity order) {
        return new Order(
                order.getId(),
                order.getProtocolId(),
                order.getCustomer(),
                order.getTest(),
                order.getSampleType(),
                order.getOrderAmount()
                //order.getDate().toInstant().atZone(ZoneId.systemDefault()).toLocalDate()
        );
    }
}
