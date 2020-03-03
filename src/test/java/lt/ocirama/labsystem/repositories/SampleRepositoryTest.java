package lt.ocirama.labsystem.repositories;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;
import lt.ocirama.labsystem.model.entities.OrderEntity;
import lt.ocirama.labsystem.model.entities.SampleEntity;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@DataJpaTest
class SampleRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private SampleRepository sampleRepository;
    @Autowired
    private OrderRepository orderRepository;

    @BeforeEach
    void setUp() {

        OrderEntity order1 = new OrderEntity();
        order1.setProtocolId("444");
        order1.setCustomer("ab");
        order1.setOrderAmount(2);
        order1.setSampleType("a");
        order1.setTest("D");

        OrderEntity order2 = new OrderEntity();
        order2.setProtocolId("445");
        order2.setCustomer("a");
        order2.setOrderAmount(2);
        order2.setSampleType("a");
        order2.setTest("D");

        SampleEntity sample1 = new SampleEntity();
        sample1.setSampleId("sample1");
        sample1.setOrder(order1);
        //sample1.setOrder(null);

        SampleEntity sample2 = new SampleEntity();
        sample2.setSampleId("sample2");
        sample2.setOrder(order1);
        //sample2.setOrder(null);

        SampleEntity sample3 = new SampleEntity();
        sample3.setSampleId("sample3");
        sample3.setOrder(order2);
        //sample3.setOrder(null);

        entityManager.persist(order1);
        entityManager.persist(order2);
        entityManager.persist(sample1);
        entityManager.persist(sample2);
        entityManager.persist(sample3);
        entityManager.flush();
    }

    @Test
    void findAll() {
        List<SampleEntity> foundAll = sampleRepository.findAll();

        assertEquals(foundAll.size(), 3);
    }

    @Test
    void findOneById() {
        SampleEntity foundById = sampleRepository.findOneById(2);

        assertEquals(foundById.getSampleId(), "sample2");
    }


    @Test
    void deleteById() {
        sampleRepository.deleteById(1);
        sampleRepository.deleteById(2);
        sampleRepository.deleteById(3);

        assertTrue(sampleRepository.findAll().isEmpty());
    }

    @Test
    void findAllByProtocol() {
        List<SampleEntity> foundByprotocol = sampleRepository.findAllByProtocol("444");
        assertEquals(foundByprotocol.size(), 2);
    }
}

