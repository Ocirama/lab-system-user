package lt.ocirama.labsystem.converters;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.ArrayList;
import java.util.List;
import lt.ocirama.labsystem.model.dto.Result;
import lt.ocirama.labsystem.model.entities.ResultEntity;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

class ResultConverterTest {

    private ResultConverter resultConverter;

    @BeforeEach
    void setUp() {
        resultConverter = new ResultConverter();
    }

    @Test
    void tmp() {
        System.out.println(new BCryptPasswordEncoder().encode("VP-102"));
    }

    @Test
    void convert_passingOrderAsNull() {
        List<ResultEntity> orders = new ArrayList<>();
        orders.add(null);

        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class,
            () -> resultConverter.convert(orders));

        assertEquals("Order is required", exception.getMessage());


    }

    @Test
    void convert_emptyList() {
        List<ResultEntity> orders = new ArrayList<>();

        List<Result> result = null;

        assertTrue(result.isEmpty());
    }

}
