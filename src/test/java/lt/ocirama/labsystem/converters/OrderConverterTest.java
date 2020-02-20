package lt.ocirama.labsystem.converters;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.ArrayList;
import java.util.List;
import lt.ocirama.labsystem.model.dto.Order;
import lt.ocirama.labsystem.model.entities.OrderEntity;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

class OrderConverterTest {

    private OrderConverter orderConverter;

    @BeforeEach
    void setUp() {
        orderConverter = new OrderConverter();
    }

    @Test
    void tmp() {
        System.out.println(new BCryptPasswordEncoder().encode("a"));
    }

    /*@Test
    void convert_passingNull() {
        List<Order> result = orderConverter.convert(null);
    }*/

    @Test
    void convert_passingOrderAsNull() {
        List<OrderEntity> orders = new ArrayList<>();
        orders.add(null);

        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class,
            () -> orderConverter.convert(orders));

        assertEquals("Order is required", exception.getMessage());


    }

    @Test
    void convert_emptyList() {
        List<OrderEntity> orders = new ArrayList<>();

        List<Order> result = null;

        assertTrue(result.isEmpty());
    }

}
