package lt.ocirama.labsystem.repositories;

import java.util.List;
import lt.ocirama.labsystem.model.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<OrderEntity, Integer> {

    List<OrderEntity> findAll();
}
