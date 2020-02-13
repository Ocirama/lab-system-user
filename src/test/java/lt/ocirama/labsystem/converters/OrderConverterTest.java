package lt.ocirama.labsystem.converters;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

class OrderConverterTest {
    private OrderConverter orderConverter;

    @BeforeEach
    public void init() {
        orderConverter = new OrderConverter();
    }

    @Test
    void tmp() {
        System.out.println(new BCryptPasswordEncoder().encode("a"));
    }
    @Test
    void convert() {
    }

    @Test
    void testConvert() {
    }
}
