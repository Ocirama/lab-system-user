package lt.ocirama.labsystem.repositories;

import java.util.List;
import lt.ocirama.labsystem.model.entities.TrayEntity;
import lt.ocirama.labsystem.model.entities.TrayWeightEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

public interface TrayRepository extends Repository<TrayWeightEntity, Integer> {

    List<TrayWeightEntity> findAll();

    @Query(value = "select twe from TrayWeightEntity twe where twe.trayId=:id")
    TrayWeightEntity findOneById(String id);

    TrayWeightEntity save(TrayWeightEntity tray);

    void deleteById(Integer id);

}
