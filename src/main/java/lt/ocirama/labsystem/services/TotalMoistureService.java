package lt.ocirama.labsystem.services;

import lt.ocirama.labsystem.converters.TotalMoistureConverter;
import lt.ocirama.labsystem.converters.TotalMoistureEntityConverter;
import lt.ocirama.labsystem.model.entities.TotalMoistureEntity;
import lt.ocirama.labsystem.model.dto.TotalMoisture;
import lt.ocirama.labsystem.model.dto.TotalMoistureSave;
import lt.ocirama.labsystem.repositories.TotalMoistureRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TotalMoistureService {
    private final TotalMoistureConverter totalMoistureConverter;
    private final TotalMoistureEntityConverter totalMoistureEntityConverter;
    private final TotalMoistureRepository totalMoistureRepository;

    public TotalMoistureService(TotalMoistureConverter totalMoistureConverter, TotalMoistureEntityConverter totalMoistureEntityConverter, TotalMoistureRepository totalMoistureRepository) {
        this.totalMoistureConverter = totalMoistureConverter;
        this.totalMoistureEntityConverter = totalMoistureEntityConverter;
        this.totalMoistureRepository = totalMoistureRepository;
    }


    public List<TotalMoisture> getAll() {
        List<TotalMoistureEntity> totalMoistureEntities = totalMoistureRepository.findAll();

        return totalMoistureConverter.convert(totalMoistureEntities);
    }

    public TotalMoisture getTotalMoisture(Integer id) {
        TotalMoistureEntity totalMoistureEntity = totalMoistureRepository.findOneById(id);

        return totalMoistureConverter.convert(totalMoistureEntity);
    }

    public TotalMoisture save(TotalMoistureSave totalMoistureSave) {
        TotalMoistureEntity totalMoistureEntity = totalMoistureEntityConverter.convert(totalMoistureSave);
        TotalMoistureEntity result = totalMoistureRepository.save(totalMoistureEntity);

        return totalMoistureConverter.convert(result);
    }

    public void delete(Integer id) {
        totalMoistureRepository.deleteById(id);
    }
}
