package lt.ocirama.labsystem.repositories;

import java.util.List;
import lt.ocirama.labsystem.model.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.Repository;

public interface OrderRepository extends Repository<OrderEntity, Integer> {

    List<OrderEntity> findAll();

    OrderEntity findOneById(Integer id);

    OrderEntity save(OrderEntity order);

    void deleteById(Integer id);
}
