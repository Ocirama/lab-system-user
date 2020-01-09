package lt.ocirama.labsystem.converters;

import static java.util.stream.Collectors.toList;

import java.util.List;
import java.util.Objects;
import lt.ocirama.labsystem.model.OrderEntity;
import lt.ocirama.labsystem.model.dto.Order;
import org.springframework.stereotype.Component;

@Component
public class OrderConverter {

    public List<String> convert(List<OrderEntity> orderEntities) {
        return orderEntities.stream()
            .map(o -> new Order(
                o.getProtocolId()
                /*o.getCustomer(),
                o.getTest(),
                o.getSampleType(),
                o.getOrderAmount()*/
            ))
            .map(object-> Objects.toString(object,null))
            .collect(toList());
    }
}
