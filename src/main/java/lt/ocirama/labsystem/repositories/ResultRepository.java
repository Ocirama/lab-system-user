package lt.ocirama.labsystem.repositories;

import java.util.List;
import lt.ocirama.labsystem.model.entities.ResultEntity;
import lt.ocirama.labsystem.model.entities.UserEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

public interface ResultRepository extends Repository<ResultEntity, Integer> {

    List<ResultEntity> findAll();

    ResultEntity findOneById(Integer id);

    ResultEntity findTopByOrderByIdDesc();

    @Query("select oe from ResultEntity oe where oe.protocolId=:protocol")
    ResultEntity findByProtocolId(String protocol);



    ResultEntity save(ResultEntity order);

    void deleteById(Integer id);
}
