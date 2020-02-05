package lt.ocirama.labsystem.repositories;

import lt.ocirama.labsystem.model.OrderEntity;
import lt.ocirama.labsystem.model.SampleEntity;
import org.springframework.data.repository.Repository;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

public interface SampleRepository extends Repository<SampleEntity, Integer> {

    List<SampleEntity> findAll();

    SampleEntity findOneById(Integer id);

    SampleEntity save(SampleEntity sample);

    void deleteById(Integer id);
}
