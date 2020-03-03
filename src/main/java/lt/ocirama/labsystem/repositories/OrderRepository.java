package lt.ocirama.labsystem.repositories;

import java.util.List;
import lt.ocirama.labsystem.model.entities.OrderEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

public interface OrderRepository extends Repository<OrderEntity, Integer> {

    List<OrderEntity> findAll();

    OrderEntity findOneById(Integer id);

    @Query("select oe from OrderEntity oe where oe.protocolId=:protocol")
    OrderEntity findByProtocolId(String protocol);

    OrderEntity save(OrderEntity order);

    void deleteById(Integer id);
}
