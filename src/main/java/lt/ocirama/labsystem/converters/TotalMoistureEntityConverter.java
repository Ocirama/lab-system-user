package lt.ocirama.labsystem.converters;

import lt.ocirama.labsystem.model.TotalMoistureEntity;
import lt.ocirama.labsystem.model.dto.TotalMoistureSave;
import lt.ocirama.labsystem.repositories.TotalMoistureRepository;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.Objects;
@Component
public class TotalMoistureEntityConverter {
    private final TotalMoistureRepository totalMoistureRepository;


    LocalDate localDate = LocalDate.now();

    public TotalMoistureEntityConverter(TotalMoistureRepository totalMoistureRepository) {
        this.totalMoistureRepository = totalMoistureRepository;
    }


    public TotalMoistureEntity convert(TotalMoistureSave totalMoistureSave) {
        TotalMoistureEntity result;

        if (Objects.isNull(totalMoistureSave.getId())) {
            result = new TotalMoistureEntity();
            result.setTrayWeight(totalMoistureSave.getTrayWeight());
            result.setTrayAndSampleWeightBefore(totalMoistureSave.getTrayAndSampleWeightBefore());
            result.setTrayAndSampleWeightAfter(totalMoistureSave.getTrayAndSampleWeightAfter());
            result.setTrayAndSampleWeightAfterPlus(totalMoistureSave.getTrayAndSampleWeightAfterPlus());
            //result.setDate(java.sql.Date.valueOf(order.getDate()));
        } else {
            result = totalMoistureRepository.findOneById(totalMoistureSave.getId());
            result.setTrayWeight(totalMoistureSave.getTrayWeight());
            result.setTrayAndSampleWeightBefore(totalMoistureSave.getTrayAndSampleWeightBefore());
            result.setTrayAndSampleWeightAfter(totalMoistureSave.getTrayAndSampleWeightAfter());
            result.setTrayAndSampleWeightAfterPlus(totalMoistureSave.getTrayAndSampleWeightAfterPlus());
            //result.setDate(java.sql.Date.valueOf(order.getDate()));
        }

        return result;
    }
}

