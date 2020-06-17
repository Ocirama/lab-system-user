package lt.ocirama.labsystem.controllers;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@Transactional
class UserControllerTest {



    @Autowired
    private UserController userController;

    @Test
    void getAll() {
    }

    @Test
    void getSample() {
        assertNotNull(userController);
    }

    @Test
    void save() {
    }

    @Test
    void delete() {
    }
}
