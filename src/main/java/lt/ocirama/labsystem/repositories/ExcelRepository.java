package lt.ocirama.labsystem.repositories;

import lt.ocirama.labsystem.model.entities.ResultEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

public interface ExcelRepository extends JpaRepository<ResultEntity, Integer> {

}
