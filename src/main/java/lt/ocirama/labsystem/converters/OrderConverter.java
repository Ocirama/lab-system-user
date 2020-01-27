package lt.ocirama.labsystem.converters;

import lt.ocirama.labsystem.model.OrderEntity;
import lt.ocirama.labsystem.model.dto.Order;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;
import java.util.Scanner;
import java.util.TimeZone;

import static java.util.stream.Collectors.toList;

@Component
public class OrderConverter {
    public List<Order> convert(List<OrderEntity> universities) {
        return universities.stream()
                .map(this::convert)
                .collect(toList());
    }

    public Order convert(OrderEntity order) {
        return new Order(
                order.getId(),
                order.getProtocolId()
               /* order.getCustomer(),
                order.getTest(),
                order.getSampleType(),
                order.getOrderAmount()*/
               // order.getDate().toInstant().atZone(ZoneId.systemDefault()).toLocalDate()
        );
    }
}
