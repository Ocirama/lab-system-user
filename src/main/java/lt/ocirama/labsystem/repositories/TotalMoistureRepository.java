package lt.ocirama.labsystem.repositories;

import lt.ocirama.labsystem.model.entities.SampleEntity;
import lt.ocirama.labsystem.model.entities.TotalMoistureEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface TotalMoistureRepository extends Repository<TotalMoistureEntity, Integer> {

    List<TotalMoistureEntity> findAll();

    TotalMoistureEntity findOneById(Integer id);

    TotalMoistureEntity save(TotalMoistureEntity sample);

    void deleteById(Integer id);


}
