package lt.ocirama.labsystem.repositories;

import lt.ocirama.labsystem.model.entities.CustomerEntity;
import lt.ocirama.labsystem.model.entities.OrderEntity;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface CustomerRepository extends Repository<CustomerEntity, Integer> {

    List<CustomerEntity> findAll();

    CustomerEntity findOneById(Integer id);

    CustomerEntity save(CustomerEntity order);

    //void deleteByTitle(String title);

    @Modifying
    @Transactional
    @Query("delete from CustomerEntity ce where ce.title=:title")
    void deleteByTitle(@Param("title") String title);
}
